import { Link } from "react-router-dom";
import common from "../css/common.module.css";

function Home() {
  return (
    <div className={common.background}>
      <div className={common.flex_div}>
        <h1 className={common.title}>
          더 편리하고 빠른 <br />
          웨일 브라우저로의 입주를 결정하셨군요!
        </h1>
        <p className={common.description}>그럼 이사를 시작해볼까요?</p>
        <img
          alt="웨일 브라우저로의 이사를 위한 트럭입니다."
          src={require("../img/truck.png")}
          className={common.image}
        ></img>
        <Link className={common.single_btn} to="/choose_another">
          시작하기
        </Link>
      </div>
    </div>
  );
}

export default Home;
