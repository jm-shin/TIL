# Vuepress 블로그 만들기

## 전제 조건

- Node.js 10+
- yarn

## 빠른 시작

### 1. create-vuepress-site 생성기 사용

VuePress 프로젝트를 설정하는 가장 빠른 방법은 [create-vuepress-site 생성기](https://github.com/vuepress/create-vuepress-site) 를 사용하는 방법이
있다.

원하는 디렉토리에서 터미널을 열고 다음 명령을 실행.

```shell
yarn create vuepress-site [optionalDirectoryName]
```

작동하는 모습을 보려면 새로 스캐폴드된 디렉토리로 이동하여 종속성을 설치하고 로컬 서버를 시작.

```shell
cd docs
yarn install
yarn dev
```

### 2. 수동으로 설치

- 새로운 디렉토리 생성 및 변경

```shell
mkdir vuepress-starter && cd vuepress-starter
```

- 패키지 초기화

```shell
yarn init
```

- 로컬에 VuePress 설치

```shell
yarn add -D vuepress
```

- 첫 번째 문서 만들기

```shell
mkdir docs && echo '# Hello VuePress' > docs/lsof.md
```

- package.json에 스크립트 추가

```shell
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

- 로컬 서버 실행

```shell
  yarn docs:dev
```

- http://localhost:8080 에서 핫 리로딩 개발 서버를 시작

## vuepress config 설정

<Comment/>
