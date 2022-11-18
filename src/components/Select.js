import { Link } from "react-router-dom";
import common from "../css/common.module.css";
import style from "../css/select.module.css";

function Select({ setLoading }) {
  const clickNext = () => {
    setLoading(true);
  };

  return (
    <div className={common.background}>
      <div className={common.flex_div}>
        <h1 className={common.title}>가져오실 짐을 선택해주세요</h1>
        <p className={common.description}>
          사용하던 브라우저의 즐겨찾기/북마크를 <br />
          그대로 웨일에서 사용할 수 있습니다.
        </p>
        <img
          alt="택배상자 이미지"
          src={require("../img/box.png")}
          className={style.image}
        ></img>
        <select className={style.select_box}>
          <option>Chrome</option>
          <option>Edge</option>
          <option>Safari</option>
        </select>
        <div className={common.double_btn}>
          <Link to="/" className={common.btn_link}>
            <img
              alt="왼쪽 화살표 이미지"
              src={require("../img/arrow_left.png")}
              className={common.btn_arrow}
            ></img>
            이전
          </Link>
          <a onClick={clickNext} className={common.btn_link}>
            다음
            <img
              alt="오른쪽 화살표 이미지"
              src={require("../img/arrow_right.png")}
              className={common.btn_arrow}
            ></img>
          </a>
        </div>
        <button className={common.skip_btn}>건너뛰기</button>
      </div>
    </div>
  );
}

export default Select;
