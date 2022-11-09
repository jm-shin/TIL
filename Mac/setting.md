# 맥북프로 m1 초기 개발자 설정
### Homebrew 설치
다운로드: https://brew.sh/index_ko
- 주의: 설치 후 입력하라는 화면상 명령어도 입력해야함.

### D2Coding 폰트 설치
다운로드: https://github.com/naver/d2codingfont

### iTerm2 설치
다운로드: https://iterm2.com
- Profiles > Text > Font를 기본 Monaco에서 D2 Coding으로 변경
- Profiles > Colors > Color Presets를 Pastel (Dark Backgrond) 또는 Tango Dark로 변경
- Window > Columns를 80에서 120로 Rows를 30으로 변경(14인치 맥북 기준입니다.)

### 한/영 전환키 매핑(선택)
[M1 오른쪽 Command 키를 한/영 전환키로 맵핑하는 방법](http://snowdeer.github.io/mac-os/2021/12/22/macos-m1-remapping-command-key-for-change-korean-english-key/)

### Oh-My-Zsh 설치
```shell
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```
- 플러그인 설치
```shell
git clone https://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```
- ~/.zshrc 파일을 열어서 다음 부분을 찾아서 변경
```shell
ZSH_THEME="agnoster"
plugins=(
  git
  zsh-autosuggestions
  zsh-syntax-highlighting
)
```
- .zshrc 파일 아래 부분에도 추가
```shell
# for (i-search)
stty stop undef

# 프롬프트에서 컴퓨터 이름 삭제
prompt_context() { 
  if [[ "$USER" != "$DEFAULT_USER" || -n "$SSH_CLIENT" ]]; then 
    prompt_segment black default "%(!.%{%F{yellow}%}.)$USER" 
  fi 
}
```

## Git 설정
```shell
git config --global user.name "유저네임"
git config --global user.email "이메일@gmail.com"
git config --global core.precomposeunicode true
git config --global core.quotepath false
```

## java 17 설치
```shell
brew install openjdk@17
sudo ln -sfn /opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-17.jdk
```

- .zshrc 파일 내용 수정
```shell
# java 17
export PATH="/opt/homebrew/opt/openjdk@17/bin:$PATH"
```
- source .zshrc

## nvm 설치
## mysql 설치
## mongodb 설치
- homebrew로 진행

<Comment/>