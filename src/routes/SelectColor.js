import { Link } from "react-router-dom";

function SelectColor() {
  return (
    <div>
      {/* 이미지  */}
      <div></div>
      <h1>새로 입주하실 브라우저의 테마 컬러를 골라볼까요?</h1>
      <p>웨일 브라우저 창의 색깔을 취향대로 골라보세요</p>
      <div>
        <div></div>
        <div></div>
      </div>
      <div>
        <Link to="/choose_another">이전</Link>
        <Link to="/select_default">다음</Link>
      </div>
      <button>건너뛰기</button>
    </div>
  );
}

export default SelectColor;
