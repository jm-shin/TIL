# 브라우저 렌더링 과정 이해하기

[브라우저는 어떻게 동작하는가?](https://d2.naver.com/helloworld/59361)

## 브라우저

MDN 용어사전에는 [브라우저](https://developer.mozilla.org/ko/docs/Glossary/Browser)란'웹 브라우저 또는 브라우저는 웹에서 페이지를 찾아서 보여주고, 사용자가
하이퍼링크 (en-US)를 통해 다른 페이지로 이동할 수 있도록 하는 프로그램입니다. 브라우저는 가장 익숙한 타입의 사용자
에이전트입니다.'라고 소개되어있다.   
브라우저는 유저가 선택한 자원을 서버로 부터 받아와서 유저한테 보여준다. 이 자원은 페이지, 이미지, 비디오등을 포함한다. 이렇게 받아온 자원들을 렌더링 과정을 통해 유저들에게 보여주게된다.

렌더링의 기본적인 동작 과정은 다음과 같다.

1. HTML 파일과 CSS 파일을 파싱해서 각각 Tree를 만든다. (Parsing)
2. 두 Tree를 결합하여 Rendering Tree를 만든다. (Style)
3. Rendering Tree에서 각 노드의 위치와 크기를 계산한다. (Layout)
4. 계산된 값을 이용해 각 노드를 화면상의 실제 픽셀로 변환하고, 레이어를 만든다. (Paint)
5. 레이어를 합성하여 실제 화면에 나타낸다. (Composite)

### Parsing

HTML 파일을 해석하여 DOM(Document Object Model) Tree를 구성하는 단계. CSS도 포함되어 있다면 CSSOM(CSS Object Model) Tree 구성 작업도 함께 진행.

### Style

Parsing 단계에서 생성된 DOM Tree와 CSSOM Tree를 매칭시켜서 Render Tree를 구성.Render Tree는 실제로 화면에 그려질 Tree.
Render Tree 구성시 visibility: hidden은 요소가 공간을 차지하고, 보이지만 않기 때문에 Render Tree에 포함이 되지만, display: none 의 경우 Render Tree에서 제외.

### Layout

Render Tree를 화면에 어떻게 배치할 것인지. 노드의 정확한 위치와 크기를 계산.
루트부터 노드를 순회하면서 노드의 정확한 크기와 위치를 계산하고 Render Tree에 반영. 만약 크기의 값이 %로 지정했다면, %값을 계산하여 픽셀 단위로 변환한다.

### Paint

Layout 단계에서 계산된 값을 이용해 Render Tree의 각 노드를 화면상의 실제 픽셀로 변환. 이때 픽셀로 변환된 결과는 하나의 레이어가 아니라 여러개의 레이어로 관리된다.
스타일이 복잡할 수록 Paint 시간도 늘어남.

### Composite

Paint 단계에서 생성된 레이어를 합성하여 실제 화면에 나타냄. 화면에서 웹페이지를 볼 수 있다.

## CSR

클라이언트 사이드 렌더링(Client Side Rendering)은 클라이언트인 브라우저가 렌더링을 처리하는 방식.
즉, 서버에서 받은 데이터를 클라이언트인 브라우저가 화면을 그리는 주체가 되는 것.

- 장점
    - 네이티브 앱과 비슷한 빠른 인터렉션 구현
        - view 랜더링을 브라우저에게 담당시켜 서버 트래픽을 감소시키고, 사용자에게 더 빠른 인터렉션 제공
        - 새로고침이 발생하지 않아 사용자가 네이티브앱과 비슷한 경험을 할 수 있음
- 단점
    - 첫 페이지 로딩 속도가 서버 사이드 렌더링에 비해 느리다.
        - 서버에 첫 요청 시 전체 페이지에 대한 모든 무선 파일을 받아서 처리하다보니 로딩 속도가 상대적으로 느리다.
    - SEO(검색엔진최적화)에 대한 추가 보완 작업이 필요합니다.
        - 포털사이트 검색엔진 크롤러가 웹사이트에 대한 데이터를 제대로 수집하지 못하는 경우가 발생할 수 있다.

## SSR

서버 사이드 렌더링(Server Side Rendering)은 클라이언트(브라우저)가 서버에 매번 데이터를 요청하여 서버가 처리하는 방식. 클라이언트에 요청이 들어올 때마다 매번 서버에서 새로운 화면(view)을 만들어 제공.

- 장점
    - 첫 페이지 로딩 속도가 클라이언트 사이드 렌더링에 비해 빠름
        - 해당 첫 페이지는 해당하는 문서만 브라우저에 전달하기 때문에 초기 로딩 속도가 상대적으로 더 빠르다
- 단점
    - 초기 로딩 이후 페이지 이동 시 속도가 다소 느림
        - 페이지 이동 시마다 클라이언트가 서버에게 요청하고 응답하는 방식이다보니 다소 느리다.

<Comment/>
