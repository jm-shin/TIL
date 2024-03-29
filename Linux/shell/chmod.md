# chmod

chmod 명령은 파일의 권한을 변경할 수 있게 만들어주는 명령어. change와 mode의 앞 글자들을 조합한 이름(chmod = ch + mod)  
여기서 모드는 읽기, 쓰기, 실행과 각각의 권한을 지정할 대상(파일의 소유자, 그룹, 그외 사용자)을 포함한 파일의 속성을 말함. 이러한 모든 설정을
통틀어 모드(mode)라 지칭함. **chmod 명령을 사용하여 파일의 모드를 변경한다는 것은 파일의 권한을 변경한다는 것과 동일.**

## chmod 명령 사용 예제
```shell
$ chmod u+x FILE                    # 파일 소유 사용자에게 실행권한 추가.

$ chmod u+w FILE                    # 파일 소유 사용자에게 쓰기 권한 추가.

$ chmod u=rwx FILE                  # 파일 소유 사용자에게 읽기, 쓰기, 실행 권한 지정.

$ chmod u-x FILE                    # 파일 소유 사용자의 실행 권한 제거.

$ chmod g+w FILE                    # 파일 소유 그룹에 쓰기 권한 추가.

$ chmod g-x FILE                    # 파일 소유 그룹의 실행 권한 제거.

$ chmod o=r FILE                    # 파일 소유 사용자 및 그룹을 제외한 사용자는 읽기만 가능.

$ chmod a-x *                       # 현재 디렉토리의 모든 파일에서 모든 사용자의 읽기 권한 제거.

$ chmod a-w FILE                    # 모든 사용자에 대해 쓰기 권한 제거.

$ chmod u=rwx,g=r FILE              # 파일 소유 사용자는 모든 권한, 그룹은 읽기만 가능.

$ chmod ug=rw FILE                  # 파일 소유 사용자와 그룹이 읽기, 쓰기 가능.

$ chmod g=rw,o=r FILE               # 파일 소유 그룹은 읽기, 쓰기 가능, 그 외 사용자는 읽기만 가능.

$ chmod ug=rw,o=r FILE              # 파일 소유 사용자 및 그룹은 일기, 쓰기 가능, 그외 사용자는 읽기만 가능.

$ chmod 000 FILE                    # 모든 사용자의 모든 권한 제거. = ---------

$ chmod 664 FILE                    # 사용자(읽기+쓰기), 그룹(읽기+쓰기), 그외 사용자(읽기) = rw-rw-r--

$ chmod 755 FILE                    # 사용자(읽기+쓰기+실행), 그룹(읽기+실행), 그외 사용자(읽기+실행) = rwxr-xr-x

$ chmod 777 FILE                    # 모든 사용자에 모든 권한 추가.

$ chmod -R g+x DIR                  # DIR 디렉토리 하위 모든 파일 및 디렉토리에 그룹 실행(x) 권한 추가.

$ chmod -R o-wx *                   # 현재 디렉토리의 모든 파일에서 그외 사용자의 쓰기, 실행 권한 제거

$ chmod -R a-x,a+X *                # 현재 디렉토리 기준 모든 파일 읽기 권한 제거, 디렉토리 실행 권한 추가.

$ chmod -R a-x+X *                  # 위(chmod -R a-x,a+X *)와 동일.

$ chmod u=g FILE                    # FILE의 그룹 권한 값을 사용자 권한으로 적용.
    $ ls -l
    -rwxr--r-- 1 ppotta manager   23 Mar 26 04:13 FILE
    $ chmod u=g FILE
    -r--r--r-- 1 ppotta manager   23 Mar 26 04:13 FILE

$ chmod u+g FILE                    # FILE의 사용자 권한에 그룹 권한 값을 추가.
    $ ls -l
    -r-x-w--w- 1 ppotta manager   23 Mar 26 04:13 FILE
    $ chmod u+g FILE
    -rwx-w--w- 1 ppotta manager   23 Mar 26 04:13 FILE
```
