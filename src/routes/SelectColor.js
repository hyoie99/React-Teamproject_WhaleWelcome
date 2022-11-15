import { Link } from "react-router-dom";
import common from "../css/common.module.css";
import style from "../css/color.module.css";

function SelectColor() {
  return (
    <div className={common.background}>
      <div className={common.flex_div}>
        <img
          alt="팔레트 이미지"
          src={require("../img/pallet.png")}
          className={style.image}
        ></img>
        <h1 className={common.title}>
          새로 입주하실 브라우저의 테마 컬러를 골라볼까요?
        </h1>
        <p className={common.description}>
          웨일 브라우저 창의 색깔을 취향대로 골라보세요
        </p>
        <div className={style.color_chips}></div>
        <div className={common.double_btn}>
          <Link to="/choose_another" className={common.btn_link}>
            <img
              alt="왼쪽 화살표 이미지"
              src={require("../img/arrow_left.png")}
              className={common.btn_arrow}
            ></img>
            이전
          </Link>
          <Link to="/select_option" className={common.btn_link}>
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

export default SelectColor;
