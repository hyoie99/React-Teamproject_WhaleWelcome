import { Link } from "react-router-dom";

function SelectOption() {
  return (
    <div className="selectOption-background">
      <div className="flex-div">
        <h1 className="title">
          웨일 브라우저에는 다양한 기능이 <br />
          풀옵션으로 갖춰져 있답니다! <br /> 입주 시 필요한 옵션을 선택하세요.
        </h1>
        <p className="description">사이드바에 들어갈 기능을 골라보세요</p>
        <div className="select-options">사이드바 기능들</div>
        <div className="recommend">
          <p className="text">웨일이 추천하는 옵션으로 선택할래요</p>
          <div className="checkbox"></div>
        </div>
        <div className="select-btns">
          <div className="btn">
            <img
              alt="왼쪽 화살표 이미지"
              src={require("../img/arrow_left.png")}
              className="arrow-img"
            ></img>
            <Link to="/select_color" className="btn-link">
              이전
            </Link>
          </div>
          <div className="btn">
            <Link to="/select_default" className="btn-link">
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

export default SelectOption;
