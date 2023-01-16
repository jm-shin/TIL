# [Mac] listen 포트 & pid 확인 방법, TCP/UDP 세션 확인 방법

lsof는 list open files의 약자로 시스템에서 열린 파일 목록을 알려주고 사용하는 프로세스, 디바이스 정보, 파일의 종류등 상세한 정보를 출력해준다.   
리눅스, 유닉스는 추상화된 파일 시스템(VFS - Virtual File System)을 사용하므로 일반 파일, 디렉터리, 네트워크 소켓, 라이브러리, 심볼릭 링크 등도 모두 파일 처리되며
lsof에서 상세한 정보 확인 가능.
lsof 는 리눅스, AIX, Solaris, FreeBSD, Mac OS X 등 종류에 상관없이 일관된 옵션과 출력 형식을 갖는 장점이 있다.

- 쉘에서 다음과 같이 치면 현재 열린 포트 목록을 확인할 수 있다.  
  ``sudo lsof -PiTCP -sTCP:LISTEN``

- 특정 포트를 찾아 포트를 닫고 싶으면 다음과 같이 쳐서 PID를 알아낸다.  
  `sudo lsof -i :3000`  
  여기서 3000이 포트번호이다.

- 위에서 나온 PID를 다음 명령어에 넣으면 포트가 닫힌다.  
  `sudo kill -9 PID`

<Comment/>
