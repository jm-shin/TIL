# Redis

## Redis?

- 단순한 key-value 구조
- In-memory 데이터 저장소(RAM)
- 빠른 성능
    - 평균 작업 속도 < 1ms
    - 초당 수백만 건의 작업 가능

## 캐싱 전략

- 읽기 전략
    - Look-Aside(Lazy Loading)
- 쓰기 전략
    - Write-Around
    - Write-Through

## Redis 데이터 타입

- String
- Bitmaps
- Lists
- Hashes
- Sets
- Sorted Sets
- HyperLogLogs
- Streams

## 구현

## 카운팅(Counting)

**String**

- 단순 증감 연산
- INCR/ INCRBY / INCRBYFLOAT / HINCRBY / HICRBYFLOAT / ZINCRBY

**Bits**

- 데이터 저장공간 절약
- 정수로 된 데이터만 카운팅 가능

```shell
redis > SETBIT visitors:20220122 3 1
(integer) 0

redis > SETBIT visitors:20220122 6 1
(integer) 0

redis > BITCOUNT visitors:20220122
(integer) 2
```

**HyperLogLogs**

- 대용량 데이터를 카운팅 할 때 적절
- set과 비슷하지만 저장되는 용량은 매우 작음
- 저장된 데이터는 다시 확인할 수 없음
- 크롤링한 데이터 갯수 카운팅 등

## 메시징(Messaging)

**Lists**

- Blocking 기능을 이용해 Event Queue로 사용
- 키가 있을 때만 데이터 저장 가능 - LPUSHX / RPUSHX
    - **이미 캐싱되어 있는 피드**에만 신규 트윗을 저장
    - 비효율적인 데이터의 이동을 막을 수 있다.

**Streams**

- 로그를 저장하기 가장 적절한 자료구조
- append-only
- 시간 범위로 검색/ 신규추가 데이터 수신/ 소비자별 다른 데이터 수신(소비자 그룹)

# 운영

## Redis에서 데이터를 영구저장하는 방법?

### Redis는 In-memory 데이터 스토어

- 서버 재시작 시 모든 데이터 유실
- 복제 기능을 사용해도 사람의 실수 발생 시 데이터 복원 불가
- Redis를 캐시 이외의 용도로 사용한다면 적절한 데이터 백업이 필요

### Redis Persistence Option

- RDB(snapshot)
    - 자동: redis.conf 파일에서 SAVE 옵션
    - 수동: BGSAVE 커멘드를 이용해 cli 창에서 수동으로 RDB 파일 저장
        - SAVE 커멘드는 사용 X
- AOF(Append Only File)
    - 자동: redis.conf 파일에서 auto-aof-rewrite-percentage 옵션
    - 수동: BGREWRITEAOF 커멘드를 이용해 CLI 창에서 수동으로 AOF 파일 재작성

## RDB vs AOF 선택 기준

- 백업은 필요하지만 어느 정도 데이터 손실이 발생해도 괜찮은 경우
    - RDB 단독 사용
    - redis.conf 파일에서 SAVE 옵션 적절히 사용
- 장애 상황 직전까지의 모든 데이터가 보장되어야 할 경우
    - AOF 사용
        - APPENDFSYNC 옵션이 everysec인 경우 최대 1초 사이의 데이터 유실 가능
- 제일 강력한 내구성 필요시
- RDB, AOF 동시 사용

## Redis 아키텍처의 종류

- Replication
    - 단순 복제 연결
    - 비동기식 복제
    - HA 기능이 없으므로 장애시 수동 복구

- Sentinel
    - 자동 페일오버 가능한 HA 구성(High Availability)
    - Sentinel 노드가 다른 노드를 감시
    - 마스터가 비정상 상태일 때 자동으로 페일오버
    - 연결 정보 변경 필요 없음
    - Sentinel 노드는 항상 3대 이상의 홀수로 존재해야 함

- Cluster
    - 스케일 아웃과 HA 구성
    - 키를 여러 노드로 자동 분할 저장(샤딩)
    - 모든 노드가 서로를 감시하며, 마스터가 비정상 상태일 때 자동 페일오버
    - 최소 3대의 마스터 노드 필요

## 사용하지 말아야할 커멘트

### 주의: Redis는 Single Thread로 동작

- keys * -> scan으로 대체
- Hash나 Sorted Set 등 자료구조
    - 키 나누기(최대 100만개)
    - hgetall -> hscan
    - del -> unlink

## 변경하면 장애를 막을 수 있는 기본 설정값

**STOP-WRITES-ON-BGSAVE-ERROR = NO**

- yes(default)
- RDB 파일 저장 실패 시 redis로의 모든 write 불가능

**MAXMEMORY-POLICY = ALLKEYS-LRU**

- redis를 캐시로 사용할 때 Expire Time 설정 권장
- 메모리가 가득 찼을 때 MAXMEMORY-POLICY 정책에 의해 키 관리
    - noeviction(default): 삭제 안함
    - volatile-lru
    - allkeys-lru

## Cache Stamped 현상

- TTL 값을 너무 작게 설정한 경우

## MaxMemory 값 설정

**Persistence / 복제 사용시 MaxMemory 설정 주의**

- RDB 저장 & AOF rewrite 시 fork()
- Copy-on-Write로 인해 메모리를 두배로 사용하는 경우 발생 가능
- Persistence / 복제 사용시 MaxMemory는 실제 메모리의 절반으로 설정

## Memory 관리

**물리적으로 사용되고 있는 메모리를 모니터링**

- used_memory: 논리적으로 redis가 사용하는 메모리
- used_memory_rss: OS가 redis에 할당하기 위해 사용하는 물리적 메모리 양
- 삭제되는 키가 많으면 fragmentation 증가
    - 특정 시점에 피크를 찍고 다시 삭제되는 경우
    - TTL로 인한 eviction이 많이 발생하는 경우
