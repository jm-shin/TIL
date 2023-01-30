## Homebrew로 elasticsearch 설치

```shell
# elastic/tap 저장소에 탭
brew tap elastic/tap

# eleasticsearch install
brew install elastic/tap/elasticsearch-full
```

## elasticsearch 서버 실행

```shell
# 실행
elasticsearch
```

### mac에서 elasticsearch 실행 시 unsupported OS ERROR 발생시 해결 방법

elasticsearch.yml 에서 아래 설정을 추가.

```shell
# elasticsearch.yml의 위치 확인
find / -name elasticsearch.yml

# elasticsearch.yml 편집
vi /opt/homebrew/etc/elasticsearch/elasticsearch.yml

# elasticsearch.yml에 아래 설정 추가
xpack.ml.enabled: false

# GET 메서드로 elasticsearch 클러스터 조회
curl -XGET "http://localhost:9200"
```

## Homebrew로 kibana 설치

```shell
# elastic/tap 저장소 이미 생성했다면 생략 가능
brew tap elastic/tap

# kibana 설치
brew install elastic/tap/kibana-full

# kibana 실행
kibana
```

Kibana를 실행한 뒤 웹 브라우저를 열고 http://localhost:5601 로 접속
