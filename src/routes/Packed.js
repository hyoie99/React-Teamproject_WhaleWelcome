import { Link } from "react-router-dom";

function Packed() {
  return (
    <div>
      <div>
        <h1>여러분의 소중한 기록이 안전하게 포장되어 배송됐어요!</h1>
        <div>
          <Link to="/choose_another">이전</Link>
          <Link to="/select_color">다음</Link>
        </div>
      </div>
      <button>건너뛰기</button>
    </div>
  );
}

export default Packed;
