(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{301:function(n,t,p){"use strict";p.r(t);var i=p(14),e=Object(i.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"linux-서버-문제를-해결하기-위한-유용한-명령어들"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-서버-문제를-해결하기-위한-유용한-명령어들"}},[n._v("#")]),n._v(" Linux 서버 문제를 해결하기 위한 유용한 명령어들")]),n._v(" "),t("p",[n._v("📌 디스크"),t("br"),n._v("\n✔️ df\n마운트된 파일 시스템의 디스크 사용량을 확인할 수 있는 명령어 입니다.\nApplication 에서 가용량이 적은 파일 시스템을 사용하도록 설정된 경우 Disk 공간 부족으로 서버 장애가 발생할 수 있는데 이런 케이스를 확인할 수 있는 명령어입니다.")]),n._v(" "),t("p",[n._v("✔️ du\n특정 경로에 대해 얼마나 많은 디스크를 사용하고 있는지 확인할 수 있는 명령어 입니다.\n어느 경로에 데이터가 많이 쌓여있는지, 불필요한 데이터가 쌓여있거나 해당 경로에 데이터를 쌓는 Application 에 문제가 없는지 등을 확인할 수 있는 명령어 입니다.")]),n._v(" "),t("p",[n._v("📌 네트워크"),t("br"),n._v("\n✔️ tcpdump\n통신이 정상적으로 되지 않을 경우 이게 client 문제인지 server 문제인지 혹은 방화벽 이슈인지를 판단하기가 쉽지 않습니다.\n이때 전송 및 수신되는 네트워크 패킷을 분석하여 판단할 수 있도록 도와주는 명령어가 tcpdump 입니다.")]),n._v(" "),t("p",[n._v("✔️ dig / host / nslookup\nApplication 에서 target server 와 통신하기 위해 사용하는 DNS 주소가 정상적인지를 확인할 수 있는 명령어 입니다. 서버에서 해당 DNS 로 주소를 조회할 수 있는지, 혹은 DNS 가 정상적으로 구성되어있는지 등을 확인할 수 있습니다.")]),n._v(" "),t("p",[n._v("✔️ telnet / nc\nApplication 이 지정된 port 주소를 정상적으로 사용하고 있는지를 확인할 수 있는 명령어입니다.")]),n._v(" "),t("p",[n._v("📌 Application"),t("br"),n._v("\n✔️ strace\nApplication Process 가 시스템에 호출 혹은 수신한 내용이 캡쳐되어 기록되는데 이러한 내용을 확인할 수 있는 명령어입니다. 간혹 Application 이 OS 의 개입으로 비정상 종료가 되었거나 Application 이 OS 에 이슈가 될만한 행동을 했는지를 확인할 수 있습니다.")]),n._v(" "),t("p",[n._v("✔️ ps aux / ls -l /proc/PID/fd\nApplication Process 에서 현재 점유하고 있는 Open File Count(혹은 File Descriptor)를 확인할 수 있는 명령어입니다.\nOS 에서 제한하고 있는 Open File Count 수를 넘어갈 경우 네트워크 통신이나 파일 생성등과 같은 동작이 안될 수 있는데 이런 이슈를 확인할 수 있는 명령어입니다.")]),n._v(" "),t("p",[n._v("✔️ curl\nHttp 통신 및 응답 내용에 문제가 없는지 -v 옵션을 통해 상세히 파악할 수 있는 명령어 입니다.")])])}),[],!1,null,null,null);t.default=e.exports}}]);