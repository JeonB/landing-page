# Convention

## Framework And Library

```
React v19
Typescript
Nextjs 15
TailWindCSS
```

## Branch

```
✔ master
  - 배포
✔ develop
  - 개발 브랜치
✔ feature
  - 개인 개발 브랜치
```

## Git Commit Message Convention

| Tag        | Description                                                                        |
| :--------- | ---------------------------------------------------------------------------------- |
| `Feat`     | 새로운 기능 추가                                                                   |
| `Fix`      | 에러 수정                                                                          |
| `Design`   | CSS or UI 디자인                                                                   |
| `HOTFIX`   | 치명적 에러                                                                        |
| `Refactor` | 코드 리팩토링                                                                      |
| `Docs`     | 문서 수정                                                                          |
| `Test`     | 테스트 코드                                                                        |
| `Chore`    | 빌드 및 패키지 매니저 수정, 코드 포맷 변경,주석을 추가하거나 변경 or 간단한 메시지 |
| `Rename`   | 파일 or 폴더명 수정, 위치 변경                                                     |
| `Remove`   | 파일 삭제                                                                          |

```
✔ Issue Tracker
Fixes : 이슈 수정중 (아직 해결되지 않은 경우)
Resolves : 이슈를 해결했을 때 사용
Ref : 참고할 이슈가 있을 때 사용
Related to : 해당 커밋에 관련된 이슈번호 (아직 해결되지 않은 경우)
```

```
✔ Commit Message Example
Feat: "회원 가입 기능 구현" // 타입: 제목

회원가입, 이메일 SMS, 화면 UI 개발 // 본문

Fixes: #1 // 이슈 수정중
Resolves: #2 // 이슈 해결
Ref: #3 // 참고할 이슈
```

## Design Pattern

```
✔ Atoms

- 디자인만 담당
- 고정 텍스트가 들어가면 안됨
- 모든 텍스트는 props로 받아야 함
- 색상, 크기 등도 동적으로 사용 가능하게
- ex) Button, Input
  ✔ Molecules
- 디자인 묶음
- 여러 Atom 들과 각 요소들의 간격을 결정
- 고정 텍스트가 들어갈 수 있음
- ex) InputForm, CheckForm
  ✔ Organisms
- 하나의 큰 블록, 레이아웃
- Molecules와 Atoms 컴포넌트 배치, 간격은 이곳에서 함
- Pages나 Template에서 props로 내려 받은 기능 함수들을 각 버튼에 연결
- ex) Navbar, Sidebar
  ✔ Template
- 기능 및 로직 포함
  ✔ `Pages`
- 기능 및 로직 포함
- 분리된 Template 조합
```

## Coding Convention

```
✔ 폴더명

- 소문자로 작성
- ex) page
  ✔ 파일명
- jsx 코드가 있는경우 PascalCase
  → Header.tsx, Main.tsx
- jsx 코드가 없는 경우 camelCase
  → instance.ts, api.ts
  ✔ hook, custom hook
- 파일명, 함수명 모두 use로 시작
  → useAuth, useData
  ✔ 변수
- camelCase 작성
  → const companyName = “”;
  ✔ 함수
- camelCase 작성
  → const companyName = () ⇒ {};
- 함수는 표현식, 화살표 함수 사용
  ✔ boolean인 경우에는 is를 접두사로 붙인다
- const isLoading = false;
  ✔ 배열 배열인 경우 복수형 이름으로 사용
- const datas = [];
  ✔ 상수는 대문자
  ✔ 이벤트 핸들러
- Props인 경우
  → onClick ~
  → export default function Component(props) { return <div><button onClick={props.onClick}/></div> }
- 함수인 경우
  → const handleClick = () ⇒ {};
- 복잡할 경우 (handle + 명사 + 동사)
  → handleAlertClick, handleModalClick
```
