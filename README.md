# specFarm

서영일, 김예지, 성문식, 조유미, 박민성, 박지은이 함께한 자격증 안내 웹사이트 “스펙팜(SpecFarm)”

### 📁 스펙팜 서비스 기획서

[스펙팜.pdf](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd4aa04a-31c1-4035-bd03-3bd2da2e6576/%E1%84%89%E1%85%B3%E1%84%91%E1%85%A6%E1%86%A8%E1%84%91%E1%85%A1%E1%86%B7.pdf)

## 서비스 소개💡

![Screenshot 2022-11-15 at 11.07.14 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2478d7cb-efe1-462d-b646-7c96b60e89b0/Screenshot_2022-11-15_at_11.07.14_PM.png)

> ***“스펙팜”***은 **자격증 취득을 목표로 하는 이들에게 시험 관련 정보를 간편하고 정확하게 제공하는 플랫폼**으로 자격증 취득 뿐만 아니라 취득 과정 전반에 걸쳐 더 나은 접근성, 정보습득 및 동기부여를 제공합니다.
> 

> 또한 취득 이후에도 자격증을 관리하고 지속적인 관심을 갖게 하며, 커뮤니티를 통해 사용자들이 얻어야 하는 정보를 다양한 API를 이용하여 제공하고, 커뮤니티를 통해 사용자들이 더 능동적으로 스펙 향상을 위한 지식 및 시험 관련 정보를 얻는 것을 목적으로 합니다.
> 

## 사용 기술💻

- 화면기술: CSS, JS, React
- 서버기술: JAVA, SpringBoot, MySQL, Apache Tomcat, Node.js, Axios
- 개발도구: STS4, VSCode, Git, GitHub
- API:  kakao map API, kakao login API, google login API, naver login API, 공공데이터API

### 🔗 스펙팜 gitHub 링크

[https://github.com/awesomekimn/specFarm](https://github.com/awesomekimn/specFarm)

### 🔗 스펙팜 서비스 링크

### 🔗 스펙팜 발표 및 시연 영상 링크

[https://youtu.be/nXZ7wjmeYFs](https://youtu.be/nXZ7wjmeYFs)

---

### 담당페이지📝

아래 나열된 페이지의 화면 구성 전반, 화면 구현, 서버 및 데이터베이스 연결을 수행하였습니다.

모든 데이터는 mySQL을 연결하여 DB에서 ajax를 이용하여 데이터를 불러오고, 

모든 페이지는 반응형 웹으로 구현하였습니다.

- 마이페이지
    - 마이페이지 메인
        - 좌측에는 유저의 프로필사진 및 간단한 프로필과 유저가 직접 등록한 취득 자격증의 아이콘을 “수확물”로 나타냈습니다.
        - 우측 첫번째 상자에는 유저의 기본정보, 취득 자격증의 상세내역을 띄워줍니다.
        - 두번째 상자에는 유저가 가장 최근에 작성한 글 1개를 게시판별로 탭을 이용하여 확인할 수 있습니다.
        - 세번째 상자에는 유저가 직접 등록한 관심 자격증을 확인할 수 있습니다.
    - 프로필 수정
        - 메인에 있는 프로필 사진 클릭시 프로필 수정 컴포넌트를 호출합니다.
        - 프로필 사진을 등록, 변경 및 삭제 가능하고, 삭제 시 기본이미지인 “농부” 사진으로 변경되어 저장됩니다.
        - 닉네임은 최대 14byte까지 입력가능하고 초과 시 경고창이 표출됩니다.
        - 입력한 닉네임을 타유저가 사용중일 때는 마찬가지로 중복된 닉네임임을 알려주는 경고창이 팝업됩니다.
        - 변경하고자 하는 사항을 입력하고 유효성 검사를 거친 후에 정상적으로 종료시 마이페이지 메인화면으로 리렌더링됩니다.
    - 유저 개인정보 수정
        - 유저의 이름, 아이디는 변경 불가하고 유저가 변경불가능한 것을 한눈에 확인할 수 있도록 하였습니다.
        - 핸드폰 번호를 변경하게 되면 입력한 핸드폰 번호로 전송된 인증번호를 올바르게 입력해야 변경 가능합니다.
        - 이메일 및 관심분야 또한 수정/삭제 가능합니다.
        - 변경사항 없이 확인 버튼을 누르게 되면 변경사항이 없다는 알림창이 뜨게 됩니다.
    - 비밀번호 변경
        - 현재 입력한 비밀번호가 DB에 등록되어 있는 비밀번호와 일치하는지 확인
        - 새로 입력한 비밀번호가 정규식에 부합하는지 확인
        - 한번 더 입력한 비밀번호가 새로 입력한 비밀번호과 일치하는지 확인
        
        한 후에 정상적으로 변경 가능합니다.
        
    - 수확한 자격증 수정
        - 추가/삭제 가능하고 동시에 좌측 프로필의 아이콘이 변경됩니다.
        - 자격증 명은 AutoComplete 태그를 이용하여 자동완성 가능하도록 하였고, 등록되어있지 않은 자격증도 직접 입력가능합니다.
        - 자격증 취득일자는 8자리 숫자로 입력하도록 하였고 8자리 숫자가 입력되면 자동으로 yyyy.MM.dd형식으로 변환되도록 하였습니다.
        - 변경 버튼을 누르면 자격증명은 중복확인을 거치고, 취득일자는 숫자 형식이 일치하는지 확인하고, 모든 칸이 공백이 아닐 때 정상 변경됩니다.
    - 내가 쓴 글
        - 물어방 및 나눔장터에서 작성한 게시글을 탭별로 확인할 수 있습니다.
        - 각 탭에서는 유저가 작성한 글을 시간 역순 리스트로 조회할 수 있고, 게시글을 클릭하면 해당 게시글의 상세페이지로 렌더링 됩니다.
    - 관심 자격증
        - 등록되어 있는 자격증을 누르면 해당 자격증의 상세페이지로 렌더링됩니다.
        - 자격증 상세페이지에서 관심 자격증을 해제하고 이전 페이지로 이동하여도 정상적으로 삭제되어 있는 것을 확인할 수 있습니다.
        - 마이페이지에서도 “x”버튼을 클릭하게 되면 정상적으로 삭제됩니다.
    - 회원탈퇴
        - 유의사항을 유저가 확인하고 확인/동의하였음을 체크박스로 선택할 수 있도록 하였습니다.
        - 미동의시 경고창이 뜨도록 하였고, 체크박스에 체크되어있을 때 다음 화면으로 이동하도록 하였습니다.
        - 탈퇴 전 한번 더 현재 비밀번호를 입력하도록 하였고, 현재 등록되어 있는 비밀번호와 동일하게 입력하였을 때만 정상적으로 탈퇴 가능하도록 하였습니다.
        - 정상적으로 탈퇴가 되었을 경우 세션스토리지에 저장된 정보를 삭제하여 로그아웃되면서 홈화면으로 이동하도록 하였습니다.

![mypage.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9c8eeeea-9f18-4c6e-bd45-77595fbdf77c/mypage.png)

- 1:1 문의 작성
    - 카테고리를 선택하고 제목 및 내용, 첨부파일 1개를 등록할 수 있습니다.
    - 첨부파일 선택 시 “파일 올리기” 버튼의 텍스트가 첨부파일의 파일명으로 변경됩니다.

![qna_write.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a07c9453-e771-4d6e-ba59-d56968734240/qna_write.png)

- 1:1 문의 리스트 조회
    - 좌측 탭을 이용하여 문의 내역으로 접근 가능합니다.
    - 로그인한 유저가 작성한 1:1문의 글을 시간 역순 리스트를 아코디언 형식으로 확인할 수 있습니다.
    - 답변 유무에 따라 타이틀에 답변대기 또는 답변완료 뱃지를 이용하여 확인 가능합니다.
    - 답변이 등록되지 않은 글만 삭제 가능합니다.
    - 답변이 등록된 글은 별도 화면을 이동할 필요없이 관리자의 답변을 확인할 수 있습니다.

![qna_list.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ef23a51c-45b0-440b-963d-30754d601511/qna_list.png)

- 성장창고(일자리 카페, 직업훈련탐색) 메인
    - 성장창고에 있는 두 탭인 일자리 카페, 직업훈련탐색을 카드형으로 배치하여 유저가 한눈에 메뉴를 확인 할 수 있도록 하였습니다.

![service_main.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8a5bdede-e69e-4319-873a-ffa7926eeb4f/service_main.png)

- 직업훈련탐색 상세 페이지
    - API를 이용해 불러온 직업훈련과정 및 훈련기관의 정보를 한화면에 확인할 수 있도록 배치하였습니다.
    - “수강신청 하러가기” 버튼을 이용하여 해당 직업훈련과정의 HRD페이지로 이동되도록 하였습니다.
    - “목록 보기” 버튼을 이용하여 해당유저가 직전에 보고 있던 화면을 리렌더링하도록 하였습니다.

![service_detail.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f167952c-89b4-4b95-b469-0608cca405d9/service_detail.png)

---

### 📁 요구사항 설계서(기획단계 시)

[specfarm 요구사항 설계서.docx](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e5a0a2ef-57a3-46b4-8ef4-c2b3fb3bede0/specfarm_%E1%84%8B%E1%85%AD%E1%84%80%E1%85%AE%E1%84%89%E1%85%A1%E1%84%92%E1%85%A1%E1%86%BC_%E1%84%89%E1%85%A5%E1%86%AF%E1%84%80%E1%85%A8%E1%84%89%E1%85%A5.docx)

![Screenshot 2022-11-15 at 11.02.18 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0492ff0a-9d51-4a9b-81c3-f10bad54913d/Screenshot_2022-11-15_at_11.02.18_PM.png)

![Screenshot 2022-11-15 at 11.04.51 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6f85d7dc-27a3-4374-b952-d7ac8f120bd9/Screenshot_2022-11-15_at_11.04.51_PM.png)

### 📁 UseCase 다이어그램(기획단계 시)

[specfarm UseCaseDiagram.mdj](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/eecdcdc7-f275-41fd-b201-c4ceaf2c1ed4/specfarm_UseCaseDiagram.mdj)

![Screenshot 2022-11-15 at 11.02.10 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b1551bd6-3ad2-4b99-8bcc-4da0590c42fb/Screenshot_2022-11-15_at_11.02.10_PM.png)

### 📁 ERD

[specfarm ERD.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dbdc0d1f-0ee7-44ae-9b5c-f2c35ec7d075/specfarm_ERD.png)

![Screenshot 2022-11-15 at 11.05.21 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a4133fff-ad6f-474c-94ba-08ed3e075e60/Screenshot_2022-11-15_at_11.05.21_PM.png)

### 📁 Class 다이어그램

[specfarm ClassDiagram.mdj](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ca304b54-c0f9-41b7-9fa3-2057ba1105bf/specfarm_ClassDiagram.mdj)

![Screenshot 2022-11-15 at 11.02.26 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6c0de60f-76b3-4700-a8a6-1efa2dcee828/Screenshot_2022-11-15_at_11.02.26_PM.png)

### 🗓️ 개발 일정
