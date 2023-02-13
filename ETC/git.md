# Git

사용법 및 명령어 설명

## Merge

### 충돌시 해결 방법

git status 입력 시 both modified 적혀있는 파일이 충돌 난 것(빨간색) 해당 파일에 들어가면 아래와 같은 상태.

```shell
>>>>>>HEAD

"내 소스코드"

==============

"merge하려는 소스코드"

<<<<<<<<<< <merge할 브랜치 명>
```

위에 코드를 수정한 뒤 (>>> === <<< 이런것도 전부 지우기)

```shell
git add .
# 혹은
git add [파일명]

# continue옵션을 주어서 commit 메시지 따로 남기지 않아도 됨
git merge --continue
```

```shell
# 머지 충돌 이전의 상태로 돌아가고 싶을때 abort 옵션 사용
git merge --abort
```

## Rebase

- rebase는 잘 모르고 사용할 경우 위험하지만, 커밋스토리를 깔끔하게 관리할 수 있다는 장점이 있다.
- 작업하다보면 여러 커밋이 발생하고 커밋메시지도 각 커밋의 내용을 대표하지 못하는 경우가 발생하는데, 이때 커밋을 합쳐서 깔끔하게 커밋을 관리하기 위한 용도로 사용하려 한다.
  예시를 들자면 버그를 고치거나 수정사항을 반영하기 위해 간단한 커밋을 여러번하게 되는 경우 발생 => 최종 브런치에 머지를 진행할 때 여태까지의 수정을 위한 커밋들이 모두 반영이 되기때문에
  이쁘게 보이지 않을 수 있음. 즉, 나는 커밋로그를 다듬는 용도로 사용하려 함.

### 커밋 합치기

1. 현재 커밋 상태 확인하기

```shell
git log --oneline
```

2. 현재(HEAD)를 기준으로 n(숫자)개의 커밋 합치기

```shell
$ git rebase -i HEAD~n
```

3. 합쳐질 커밋 해시값 앞에 squash(약어 s)를 붙여주기. 즉, pick 대상에 squash로 지정된 커밋이 합쳐짐.

```shell
pick 해시값 three
s 해시값 remove one, two
```

4. 수정이 마무리되면 :wq로 편집화면 저장
5. 커밋 메시지 하나로 통합해서 적어주기

## Error Case

```shell
warning: Pulling without specifying how to reconcile divergent branches is
discouraged. You can squelch this message by running one of the following
commands sometime before your next pull:

  git config pull.rebase false  # merge (the default strategy)
  git config pull.rebase true   # rebase
  git config pull.ff only       # fast-forward only

You can replace "git config" with "git config --global" to set a default
preference for all repositories. You can also pass --rebase, --no-rebase,
or --ff-only on the command line to override the configured default per
invocation.
```

1.새로운 브랜치 만들기

```shell
git checkout -b 새로운브랜치 합치려는브랜치
```

새로운 브랜치를 만들고 해당 브랜치로 변경

2.업스트림의 원하는 브랜치를 pull받아오기(rebase)

    ```shell
    git pull --rebase upstream 합치려는브랜치
    ```
    
    rebase 처리해줌으로써 깃 브랜치 상태를 최신화 시켜줄 수 있다.

3.rebase 과정 중 발생할 수 있는 에러   
변경된 코드를 보고 살릴 부분을 확인하고 저장 반복

```shell
git add .
git rebase --continue
```

4.rebase 완료 후 합치고자 하던 브랜치와 merge

 ```
git checkout 합치려던브랜치
git merge --no-ff 새로만들었던브랜치
git push origin dev
```
