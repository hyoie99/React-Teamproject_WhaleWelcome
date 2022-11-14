import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <h1>
          더 편리하고 빠른 웨일 브라우저로의 입주를 결정하셨군요! 그럼 이사를
          시작해볼까요?
        </h1>
        {/* 이미지 */}
        <div></div>
        <Link to="/choose_another">시작하기</Link>
      </div>
      <button>건너뛰기</button>
    </div>
  );
}

export default Home;
