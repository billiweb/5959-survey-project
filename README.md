# 내 개발자 MBTI 찾기
- 설문을 통해 개발자로 나는 어떤 사람인지 알아보고 결과를 공유할 수 있는 서비스

# 👩‍👩‍👧‍👧 5959(9조) 팀원 소개
역할|이름|GitHub|
---|---|---|
팀장/FE|송희진|https://github.com/billiweb|
팀원/FE|김혜민|https://github.com/hyemin610|
팀원/FE|홍서영|https://github.com/ddoyongida|
팀원/FE|최다연|https://github.com/cheddaryeon|
팀원/FE|한희|http://github.com/han0111|

<br />

# 🗒️ 목차
1. 프로젝트 소개
2. 프로젝트 기능
3. 프로젝트 사이트 구현 화면

---

## 📒 프로젝트 소개
> 📌 **Vercel 배포 주소**  https://5959-survey-project.vercel.app/
> 

> **📌 GitHub repo 주소** https://github.com/billiweb/5959-survey-project
>

- 프로젝트 명칭 : 내 개발자 MBTI 찾기
- 서비스의 핵심적인 목적 또는 기능
    
    : 설문을 통해 개발자로 나는 어떤 사람인지 알아보고 결과를 공유할 수 있는 서비스
    
    ex) https://programmers.co.kr/pages/2020-mbti-survey

<br />

## ⚙️ 프로젝트 기능

### 1) Layout (Header/Footer)

- 반복적으로 사용되는 컴포넌트를 공용 컴포넌트로 적용
- Footer와 Header사이에 Outlet이란 컴포넌트를 `import` 해,
 css를 한번만 써도 전 페이지에 다 적용되도록 함
- Header : 오구오구 로고를 누르면 메인화면으로 감

### 2) Main

- 시작버튼 : 로그인 페이지로 이동

### 3) Login/Signup

- `firebase` 사용
- `E-mail/password` 방식으로 회원가입 및 로그인 기능 구현
- 회원가입 및 로그인 시 UX 측면 고려하여 에러 메시지 헨들링
    - (`존재하지 않는 이메일입니다`, `로그인에 실패하였습니다`, `이미 가입된 이메일 주소입니다`, `비밀번호 6자리 이상 입력 해주세요!` 등)

### 3-1) Signup

- `useState` 훅을 사용하여 Email, PW, PWConfirm 세 변수의 상태를 정의하고 관리합니다. 사용자의 이메일, 비밀번호, 그리고 비밀번호 확인을 회원가입 과정에서 저장하는 데 사용
- `Redux Store`에서 현재 사용자 정보를 업데이트하는 액션을 dispatch

### 3-2) Login

- `useState` 훅을 사용하여 Email과 PW (비밀번호) 필드를 위한 상태 변수를 만듭니다.
- `useSelector`을 사용하여 `Redux Store`에서 user 상태에 접근
- `useEffect`로 특정 dependency(의존성)가 변경될 때 코드를 실행
`Redux Store`에서 사용자 ID가 있는지 확인하고, 이미 사용자가 로그인한 상태라면  루트 경로('/')로 이동

### 4) Survey

- 설문 페이지 : `react query` 를 활용하여 `json server` 데이터를 불러와 map으로 출력
- 설문페이지 전환 : `usestate`로 클릭시 페이지 이동 구현
- 프로그레스 바 : 설문 페이지 id 값을 활용하여 구현
- 설문 점수 : `Redux toolkit` 으로 설문 클릭시 점수 계산
    - E/I, N/S, F/T, P/J 항목별 질문 `count`를 저장

### 5) Result

- 저장된 `count`값에 따라 MBTI 성향을 구분하여 출

### 5-1) 결과화면

- 설문 페이지에서 출력한 점수 값과 `db.json`에 저장되어있는 mbti 데이터를 비교하여 일치하는 값을 map으로 출력함
- 저장하기 : `html2canvas`를 이용하여  결과 화면을 png형식으로 결과를 저장
- 다시하기 : 값을 비워주는 Reset함수를 추가하고 그 함수 안에 navigate 함수도 추가하 onClick할 때 값을 비우면서 다시 설문조사를 시작하게 한

### 5-2) 전체 결과 확인

- `json server` 데이터를 불러와 map으로 출력
- 하단에 다시하기 버튼을 추가
    - `hover`기능에 `rotate/duration`을 적용하여 천천히 회전

<br />

## 🖼️ 프로젝트 사이트 구현 화면

### 1) 메인페이지

![Main](https://github.com/billiweb/5959-survey-project/assets/132885243/7c288bfc-fbd0-4caf-9d97-215c77870e90)

### 2) 로그인/회원가입

![Login](https://github.com/billiweb/5959-survey-project/assets/132885243/909819b9-a59e-4b4e-ba83-3c0ae1047536)

![Signup](https://github.com/billiweb/5959-survey-project/assets/132885243/9b4d9ce5-e57a-4824-8509-eb1eed8b0428)


### 3) 설문조사 페이지

![Survey](https://github.com/billiweb/5959-survey-project/assets/132885243/1604f165-d256-4dc5-90b7-78da83c2d9b8)


### 4) 결과화면

![result](https://github.com/billiweb/5959-survey-project/assets/132885243/a33e785b-ccf7-4217-9dd4-8dc6c5749b60)

### 4-1) 저장하기

![Save](https://github.com/billiweb/5959-survey-project/assets/132885243/a9ecb36a-b6d2-4bd7-9a74-211826f1977f)

### 5) 모든 결과 보러가기

![Allresult](https://github.com/billiweb/5959-survey-project/assets/132885243/23f570de-d1da-46bf-82d7-f76f3895f605)
