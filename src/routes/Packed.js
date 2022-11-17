import { Link } from "react-router-dom";
import common from "../css/common.module.css";

function Packed() {
  return (
    <div className={common.background}>
      <div className={common.flex_div}>
        <h1 className={common.title}>
          나의 소중한 기록이 <br />
          안전하게 포장되어 배송 됐어요!
        </h1>
        <img
          alt="포장이 완료된 택배상자 이미지"
          src={require("../img/box.png")}
          className={common.image}
        ></img>
        <div className={common.double_btn}>
          <Link to="/choose_another" className={common.btn_link}>
            <img
              alt="왼쪽 화살표 이미지"
              src={require("../img/arrow_left.png")}
              className={common.btn_arrow}
            ></img>
            이전
          </Link>
          <Link to="/select_color" className={common.btn_link}>
            다음
            <img
              alt="오른쪽 화살표 이미지"
              src={require("../img/arrow_right.png")}
              className={common.btn_arrow}
            ></img>
          </Link>
        </div>
      </div>
      <button className={common.skip_btn}>건너뛰기</button>
    </div>
  );
}

export default Packed;
