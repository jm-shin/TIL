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
```
