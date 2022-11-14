import { Link } from "react-router-dom";
import "../sass/background.scss";
import "../sass/select_color.scss";

function SelectColor() {
  return (
    <div className="selectColor-background">
      <div className="flex-div">
        <img
          alt="팔레트 이미지"
          src={require("../img/pallet.png")}
          className="pallet-img"
        ></img>
        <h1 className="title">
          새로 입주하실 브라우저의 테마 컬러를 골라볼까요?
        </h1>
        <p className="description">
          웨일 브라우저 창의 색깔을 취향대로 골라보세요
        </p>
        <div className="colorChips">
          <div className="colorChip"></div>
          <div className="colorChip"></div>
          <div className="colorChip"></div>
          <div className="colorChip"></div>
          <div className="colorChip"></div>
          <div className="colorChip"></div>
          <div className="colorChip"></div>
          <div className="colorChip"></div>
          <div className="colorChip"></div>
        </div>
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
            <Link to="/select_option" className="btn-link">
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

export default SelectColor;
