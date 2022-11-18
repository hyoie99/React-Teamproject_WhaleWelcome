# Naver Whale _ Welcome

### 배포 페이지
[Whale://new_welcome](https://hyoie99.github.io/React-Teamproject_WhaleWelcome/)

### 기능
* 웰컴 페이지 진입
* 타 브라우저의 즐겨찾기, 북마크 가져오기
  * 실제 작동X
* 색상 원을 누르면 탭 이미지의 색상 변화
  * 원은 하나만 선택 가능
* 사이드바를 원하는 기능으로 커스텀
  * 선택 개수 제한X
  * 선택한 기능 작은 이미지로 미리보기
  * 선택한 기능 삭제
  * 추천 옵션 기능
* 새 창 이미지 커스텀
  * 주어진 10개의 배경이미지 중 하나 or 네이버 홈페이지 이미지로 설정
  
### 적용 기술
* React.js 사용
  * useState
  * useEffect
* React-router-dom 이용
  * BrowserRouter
  * Link
  * useNavigate
* module.css 사용
* 탭 색상 & 사이드바 기능 & 배경 이미지 선택 등 구현을 위해 삼항연산자, dictionary, hover 등 이용
* carousel 구현을 위해 transform, transition, overflow 등 이용
