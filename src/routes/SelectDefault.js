import { Link } from "react-router-dom";
import common from "../css/common.module.css";
import style from "../css/default.module.css";

function SelectDefault() {
  return (
    <div className={common.background}>
      <div className={style.flex_div}>
        <h1 className={common.title}>
          훌륭한 안목이네요! <br />
          브라우저에 들어섰을 때의 조망도 골라보세요!
        </h1>
        <p className={common.description}>
          새 탭을 열었을 때 보이는 기본 페이지를 골라보세요
        </p>
        <img
          className={style.image}
          src={require("../img/tab_new.png")}
          alt="웨일 브라우저의 기본 새 탭 이미지"
        ></img>
        <div className={style.btns}>
          <button className={style.btn}>네이버</button>
          <button className={style.btn}>웨일 새 탭</button>
        </div>
        <div className={common.double_btn}>
          <Link to="/select_option" className={common.btn_link}>
            <img
              alt="왼쪽 화살표 이미지"
              src={require("../img/arrow_left.png")}
              className={common.btn_arrow}
            ></img>
            이전
          </Link>
          <Link to="/end" className={common.btn_link}>
            다음
            <img
              alt="오른쪽 화살표 이미지"
              src={require("../img/arrow_right.png")}
              className={common.btn_arrow}
            ></img>
          </Link>
        </div>
      </div>
      <button className={style.skip_btn}>건너뛰기</button>
    </div>
  );
}

export default SelectDefault;
