import { Link } from "react-router-dom";

function Select({ setLoading }) {
  const clickNext = () => {
    setLoading(true);
  };

  return (
    <div>
      <div>
        <h1>이전 브라우저에서 가져오실 짐을 선택할게요</h1>
        <p>
          사용하던 브라우저의 즐겨찾기 / 북마크 기록을 그대로 가져올 수 있어요.
        </p>
        {/* 이미지 */}
        <div></div>
        <select>
          <option>Chrome</option>
        </select>
        <div>
          <Link to="/">이전</Link>
          <button onClick={clickNext}>다음</button>
        </div>
      </div>
      <button>건너뛰기</button>
    </div>
  );
}

export default Select;
