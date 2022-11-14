import { Link } from "react-router-dom";

function SelectOption() {
  return (
    <div>
      <h1>
        웨일 브라우저에는 다양한 기능이 풀옵션으로 갖춰져 있답니다! 입주 시
        필요한 옵션을 선택하세요.
      </h1>
      <p>사이드바에 들어갈 기능을 선택하세요</p>
      <div></div>
      <p>웨일이 추천하는 옵션으로 선택할래요</p>
      <div>
        <Link to="/select_default">이전</Link>
        <Link to="/end">다음</Link>
      </div>
      <button>건너뛰기</button>
    </div>
  );
}

export default SelectOption;
