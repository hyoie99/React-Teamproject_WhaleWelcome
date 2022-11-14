import { Link } from "react-router-dom";

function SelectDefault() {
  return (
    <div>
      {/* 이미지  */}
      <div></div>
      <h1>훌륭한 안목이네요! 브라우저에 들어섰을 때의 조망도 골라보세요!</h1>
      <p>새 탭을 열었을 때 보이는 기본 페이지를 골라보세요</p>
      <div>
        <p>선택한 옵션</p>
        {/* 이미지 2개  */}
        <div></div>
      </div>
      <p>웨일이 추천하는 옵션으로 선택할래요</p>
      <div>
        <Link to="/select_color">이전</Link>
        <Link to="/select_option">다음</Link>
      </div>
      <button>건너뛰기</button>
    </div>
  );
}

export default SelectDefault;
