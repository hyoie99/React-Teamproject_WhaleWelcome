import { Link } from "react-router-dom";
import common from "../css/common.module.css";
import style from "../css/option.module.css";

function SelectOption() {
  return (
    <div className={common.background}>
      <div className={common.flex_div}>
        <h1 className={common.title}>
          웨일 브라우저에는 다양한 기능이 <br />
          풀옵션으로 갖춰져 있답니다! <br /> 입주 시 필요한 옵션을 선택하세요.
        </h1>
        <p className={common.description}>
          사이드바에 들어갈 기능을 골라보세요
        </p>
        <div className={style.select_options}></div>
        <div className={common.double_btn}>
          <Link to="/select_color" className={common.btn_link}>
            <img
              alt="왼쪽 화살표 이미지"
              src={require("../img/arrow_left.png")}
              className={common.btn_arrow}
            ></img>
            이전
          </Link>
          <Link to="/select_default" className={common.btn_link}>
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

export default SelectOption;
