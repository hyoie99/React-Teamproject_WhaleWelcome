import { Link } from "react-router-dom";
import "../sass/select.scss";
import "../sass/background.scss";

function Select({ setLoading }) {
  const clickNext = () => {
    setLoading(true);
  };

  return (
    <div className="select-background">
      <div className="flex-div">
        <h1 className="title">가져오실 짐을 선택해주세요</h1>
        <p className="description">
          사용하던 브라우저의 즐겨찾기/북마크를 <br />
          그대로 웨일에서 사용할 수있습니다.
        </p>
        <img
          alt="택배상자 이미지"
          src={require("../img/box_before.png")}
          className="box-img"
        ></img>
        <select className="select-box">
          <option>Chrome</option>
        </select>
        <div className="select-btns">
          <div className="btn">
            <img
              alt="왼쪽 화살표 이미지"
              src={require("../img/arrow_left.png")}
              className="arrow-img"
            ></img>
            <Link to="/" className="btn-link">
              이전
            </Link>
          </div>
          <div className="btn">
            <a onClick={clickNext} className="btn-link">
              다음
            </a>
            <img
              alt="오른쪽 화살표 이미지"
              src={require("../img/arrow_right.png")}
              className="arrow-img"
            ></img>
          </div>
        </div>
      </div>
      <button className="btn-skip">건너뛰기</button>
    </div>
  );
}

export default Select;
