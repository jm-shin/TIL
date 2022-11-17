# Docker

## 도커란 무엇인가?

- 도커는 데이터 또는 프로그램을 격리시키는 기능을 제공한다.

### 도커는 기본적으로 '리눅스용'

- 리눅스 운영체제가 동작하는 것을 전제로 하는 구조로 돼 있기 때문에 리눅스 운영체제에서만 동작

### 이미지와 컨테이너

이미지 컨테이너는 컨테이너를 찍어내는 '빵틀'과 같은 것으로 컨테이너의 설계도 역할을 한다.
이미지는 이미지 자체로는 큰 쓸모가 없고, 컨테이너를 만드는 데 사용. 하나만 있어도 여러 개 만들 수 있다. 따라서 동일한 컨테이너를 여러 개 배치하기 편하다.

- 컨테이너로도 이미지를 만들 수 있다.
- 도커 엔진 간에 이동이 가능하다.

### 도커 허브

- 공개된 컨테이너 이미지가 모여있는 곳.
- 도커 허브에서 원하는 이미지를 내려받을 수 있다.
- 안전한 컨테이너 이미지를 고르려면 공식 이미지를 사용한다. 커스텀 이미지를 만들어 사용한다.

### 도커 컨테이너의 생애주기

- 컨테이너의 생애주기: 컨테이너를 만들고 -> 실행하고 -> 종료하고 -> 폐기하는 과정
- 컨테이너를 폐지하면 그 안에 들어있는 데이터는? 도커가 설치된 물리적 서버(호스트)의 디스크를 마운트해 이 디스크에 데이터를 저장.

## 도커의 장점과 단점

우선 가장 핵심되는 성질은 '환경을 격리할 수 있다'는 점. 독립된 환경과 이미지를 만들 수 있고 컨테이너에 커널을 포함시키지 않아도 되는 구조를 가짐.

### 장점

1. 한 대의 물리 서버에 여러대의 서버를 띄울 수 있다.
2. 서버 관리가 용이.
3. 다루기 쉽다.

### 단점

1. 리눅스용 소프트웨어만 지원.
2. 물리 서버 한 대에 여러대 서버를 띄우는 형태로 호스트 서버에 문제가 생기면 모든 컨테이너에 영향.
3. 컨테이너 여러개를 사용하는 형태를 가정하므로, 컨테이너 하나를 장기간에 걸쳐 사용할 때는 그리 큰 장점을 느끼기 어려움.
4. 컨테이너 하나밖에 사용하지 않는 다면 도커 엔진이 단순한 오버헤드에 지나지 않기 때문.

### 도커의 주 용도

- 팀원 모두에게 동일한 개발환경 제공. 즉, 동일한 환경 여러 개 만들기.
- 새로운 버전의 테스트. 즉, 격리된 환경을 이용.
- 동일한 서버가 여러 대 필요할 경우. 컨테이너 밖과 독립된 성질을 사용.

### 컨테이너의 통신

웹 브라우저를 통해 컨테이너에 접근하려면 외부와 접속하기 위한 설정 필요. 이를 위해 포트를 설정.

## 도커 컴포즈

### 도커 컴포즈란?

시스템 구축과 관련된 명령어를 하나의 텍스트 파일(정의 파일)에 기재해 명령어 한번에 시스템 전체를 실행하고 종료와 폐기까지 한번에 도와주는 도구가 도커 컴포즈다.

- up 커멘드: 정의 파일에 기재된 내용대로 이미지를 내려받고 컨테이너를 생성 및 실행.
- down 커멘드: 컨테이너와 네트워크를 정지 및 삭제한다.

### 도커 컴포즈와 Dockerfile 스크립트의 차이점

도커 컴포즈는 docker run 명령어를 여러개 모아놓은 것과 같다.
컨테이너와 주변 환경을 생성한다. 네트워크와 볼륨까지 함께 만들 수 있다.
반면 dockerfile 스크립트는 이미지를 만들기 위한 것으로 네트워크나 볼륨을 만들 수 없다.

### 도커 컴포즈 파일을 작성하는 법
- 정의 파일의 형식: YAML 형식
- 파일 이름: docker-compose.yml

- YAML 형식에서는 공백에 따라 의미가 달라지므로 탭은 의미가 없으며 '공백 두 개'로 맨 처음 들여쓰기를 했다면 그 뒤로도 '공백 두 개'가 한 단이 되어야 함.
- 이름 뒤에는 반드시 콜론(:)을 붙인다.**해당 줄에 이어 설정을 하려면 클론 뒤에 공백이 하나 있어야 한다.**

### 컴포즈 파일의 작성 요렁
- 첫 줄에 도커 컴포즈 버전을 기재.
- 주 항목 services, networks, volumes 아래에 설정 내용을 기재.
- 항목 간의 상하 관계는 공백을 사용한 들여쓰기로 나타낸다.
- 들여쓰기는 같은 수의 배수만큼 공백을 사용
- 이름은 주 항목 아래에 들여쓰기한 다음 기재한다.
- 컨테이너 설정 내용은 이름 아래에 들여쓰기한 다음 기재한다.
- 여러 항목을 기재하려면 줄 앞에 '-'를 붙인다.
- 이름 뒤에는 콜론(:)을 붙인다.
- 콜론 뒤에는 반드시 공백이 와야 한다(바로 줄바꿈하는 경우는 예외)
- \# 뒤에 내용은 주석으로 간주한다.
- 문자열은 작은따옴표(') 또는 큰따옴표(")로 감싸 작성한다.

<Comment/>