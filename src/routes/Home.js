import { Link } from "react-router-dom";
import "../sass/home.scss";
import "../sass/background.scss";

function Home() {
  return (
    <div className="home-background">
      <div className="flex-div">
        <h1 className="title">
          더 편리하고 빠른 웨일 브라우저로의 <br /> 입주를 결정하셨군요! <br />
          그럼 이사를 시작해볼까요?
        </h1>
        <img
          alt="웨일 브라우저로의 이사를 위한 트럭입니다."
          src={require("../img/truck.png")}
          className="home-img"
        ></img>
        <Link className="home-btn" to="/choose_another">
          시작하기
        </Link>
      </div>
      {/* <button>건너뛰기</button> */}
    </div>
  );
}

export default Home;
