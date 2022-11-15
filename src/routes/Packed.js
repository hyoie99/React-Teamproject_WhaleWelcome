import { Link } from "react-router-dom";

function Packed() {
  return (
    <div className="packed-background">
      <div className="flex-div">
        <img
          alt="포장이 완료된 택배상자 이미지"
          src={require("../img/box_after.png")}
          className="box-img"
        ></img>
        <h1 className="title">
          여러분의 소중한 기록이 <br />
          안전하게 포장되어 배송됐어요!
        </h1>
        <div className="select-btns">
          <div className="btn">
            <img
              alt="왼쪽 화살표 이미지"
              src={require("../img/arrow_left.png")}
              className="arrow-img"
            ></img>
            <Link to="/choose_another" className="btn-link">
              이전
            </Link>
          </div>
          <div className="btn">
            <Link to="/select_color" className="btn-link">
              다음
            </Link>
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

export default Packed;
