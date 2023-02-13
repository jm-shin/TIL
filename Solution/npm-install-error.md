# nestjs cli 사용하여 프로젝트 생성중 npm install 정지 현상

### 문제 재현 및 정의

```shell
# 글로벌로 nestjs cli 설치
npm i -g @nestjs/cli

# nestjs 새 프로젝트 생성
nest new [project name]
```

```shell
⚡  We will scaffold your app in a few seconds..

? Which package manager would you ❤️  to use? npm
CREATE nestjs-template/.eslintrc.js (663 bytes)
CREATE nestjs-template/.prettierrc (51 bytes)
CREATE nestjs-template/README.md (3340 bytes)
CREATE nestjs-template/nest-cli.json (171 bytes)
CREATE nestjs-template/package.json (1946 bytes)
CREATE nestjs-template/tsconfig.build.json (97 bytes)
CREATE nestjs-template/tsconfig.json (546 bytes)
CREATE nestjs-template/src/app.controller.spec.ts (617 bytes)
CREATE nestjs-template/src/app.controller.ts (274 bytes)
CREATE nestjs-template/src/app.module.ts (249 bytes)
CREATE nestjs-template/src/app.service.ts (142 bytes)
CREATE nestjs-template/src/main.ts (208 bytes)
CREATE nestjs-template/test/app.e2e-spec.ts (630 bytes)
CREATE nestjs-template/test/jest-e2e.json (183 bytes)

# 계속 펜딩되다가 타임아웃나는 현상
▹▹▹▹▹ Installation in progress... ☕^C
```

그런데 프로젝트는 정상적으로 생성되어 있었고, npm 패키지 모듈을 설치해야하는 상황.

```shell
# 프로젝트 루트 경로로 이동
cd [project name]

# npm 패키지 설치
npm install

# 결과창: 아래처럼 정지되어 계속 펜딩
(⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂) ⠧ idealTree:test: sill idealTree buildDeps
```

그러나 npm 설치가 진행되지 않는 현상이 발생한다.

네트워크나 node, npm 버전에 관련한 오류인가 생각해보았지만 확실치는 않았다.  
먼저, npm install에 -dd 옵션을 주어서 로그를 찍어보았다.   
추가적으로 npm options: -dd, --verbose: --loglevel verbose

```shell
❯ npm i -dd
npm verb cli /Users/jongminshin/.nvm/versions/node/v16.13.2/bin/node /Users/jongminshin/.nvm/versions/node/v16.13.2/bin/npm
npm info using npm@9.4.2
npm info using node@v16.13.2
npm verb title npm i
npm verb argv "i" "--loglevel" "verbose"
npm verb logfile logs-max:10 dir:/Users/jongminshin/.npm/_logs/2023-02-10T05_29_13_922Z-
npm verb logfile /Users/jongminshin/.npm/_logs/2023-02-10T05_29_13_922Z-debug-0.log
npm http fetch GET 200 https://registry.npmjs.org/@nestjs%2fcommon 179ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/cache-manager 121ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/class-transformer 122ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/class-validator 39ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/reflect-metadata 45ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/rxjs 49ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@nestjs%2fcore 48ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@nestjs%2fmicroservices 1148ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@grpc%2fgrpc-js 199ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@nestjs%2fwebsockets 1148ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@nestjs%2fplatform-socket.io 1471ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/amqp-connection-manager 714ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/amqplib 48ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/ioredis 27ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/kafkajs 130ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/mqtt 105ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/nats 207ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@nestjs%2fplatform-express 52ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@nestjs%2fcli 52ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@nestjs%2fschematics 204ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/typescript 35ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@nestjs%2ftesting 66ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@types%2fexpress 64ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@types%2fjest 28ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@types%2fnode 38ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@types%2fsupertest 121ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/@typescript-eslint%2feslint-plugin 469ms (cache updated)
npm http fetch GET 200 https://registry.npmjs.org/@typescript-eslint%2fparser 458ms (cache updated)
npm http fetch GET 200 https://registry.npmjs.org/eslint 92ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/eslint-config-prettier 101ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/eslint-plugin-prettier 304ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/prettier 53ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/jest 414ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/node-notifier 33ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/source-map-support 452ms (cache revalidated)
npm http fetch GET 200 https://registry.npmjs.org/supertest 24ms (cache revalidated)
(⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂) ⠏ idealTree:nestjs-template: http fetch GET 200 https://registry.npmjs.org/supertest 24ms (
```

supertest까지는 200 응답이 오는걸 확인했으나 바로 다음 설치 패키지인 "ts-jest"가 설치가 안됨.   
package.json에서 ts-jest를 삭제하고 다시 설치해보았다.

```shell
# 패키지 설치
npm install

# 실행 결과
npm WARN deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead

added 688 packages, and audited 689 packages in 23s

92 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

아무 문제 없이 설치가 가능했다.

# 해결법

**ts-jest 패키지가 설치가 안되는 문제. package.json 목록에서 ts-jest를 제거하고 재설치.**
