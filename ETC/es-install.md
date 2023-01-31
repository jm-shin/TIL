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

## Homebrew 명령어

https://docs.brew.sh/Manpage

```shell
brew upgrade [프로그램명]: homebrew에 설치된 프로그램 최선버전으로 업데이트
brew tap: 패키지 저장소 확인
brew tap [저장소태그]: 패키지 저장소 추가
brew untap [저장소태그]: 패키지 저장소 삭제
brew search [프로그램명] : homebrew를 통해 설치 가능한 프로그램 찾기
brew list [cask] : horebrew 에 설치된 프로그램 목록
brew info [cask] [프로그램명]: 프로그램 정보 보기
brew install [cask] [프로그램명] : 프로그램 설치
brew remove [cask] [프로그램명] : homebrew에 설치된 프로그램 삭제
brew cleanup : 업데이트 후 필요없는 이전 버전의 패키지 삭제
brew doctor: homebrew 의 현재상태 진단
```
