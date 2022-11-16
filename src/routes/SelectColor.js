import { Link } from "react-router-dom";
import common from "../css/common.module.css";
import style from "../css/color.module.css";

function SelectColor() {
  return (
    <div className={common.background}>
      <div className={common.flex_div}>
        <h1 className={common.title}>
          새로 입주하실 브라우저의 <br /> 테마 컬러를 골라볼까요?
        </h1>
        <p className={common.description}>
          웨일 브라우저 창의 색깔을 취향대로 골라보세요
        </p>
        <div className={style.change_theme}>
          <div className={style.color_chips}>
            <div id={style.color1} className={style.color_chip}></div>
            <div id={style.color2} className={style.color_chip}></div>
            <div id={style.color3} className={style.color_chip}></div>
            <div id={style.color4} className={style.color_chip}></div>
            <div id={style.color5} className={style.color_chip}></div>
            <div id={style.color6} className={style.color_chip}></div>
            <div id={style.color7} className={style.color_chip}></div>
            <div id={style.color8} className={style.color_chip}></div>
            <div id={style.color9} className={style.color_chip}></div>
            <div id={style.color10} className={style.color_chip}></div>
            <div id={style.color11} className={style.color_chip}></div>
            <div id={style.color12} className={style.color_chip}></div>
            <div id={style.color13} className={style.color_chip}></div>
            <div id={style.color14} className={style.color_chip}></div>
            <div id={style.color15} className={style.color_chip}></div>
            <div id={style.color16} className={style.color_chip}></div>
          </div>
          <div className={style.theme_img}>
            <img
              alt="색상이 적용되지 않은 브라우저 탭 이미지"
              src={require("../img/theme_color0.png")}
            ></img>
            <img
              alt="네이버 메인화면 이미지"
              src={require("../img/theme_fix.png")}
            ></img>
          </div>
        </div>

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
