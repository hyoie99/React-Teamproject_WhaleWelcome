import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import common from "../css/common.module.css";
import style from "../css/default.module.css";

function SelectDefault() {
  const interval = 204;
  const [distance, setDis] = useState(0);
  const [move, setMove] = useState();
  const [select, setSelect] = useState("");
  const [check, setCheck] = useState([
    { id: 0, value: false },
    { id: 1, value: false },
    { id: 2, value: false },
    { id: 3, value: false },
    { id: 4, value: false },
    { id: 5, value: false },
    { id: 6, value: false },
    { id: 7, value: false },
    { id: 8, value: false },
    { id: 9, value: false },
    { id: 10, value: false },
  ]);
  const [checkBox, setCheckBox] = useState(false);

  const clickLeft = () => {
    setDis((cur) => (cur + interval === interval ? cur : cur + interval));
  };
  const clickRight = () => {
    setDis((cur) =>
      cur - interval === -(interval * 7) ? cur : cur - interval
    );
  };
  useEffect(() => {
    setMove({ transform: `translateX(${distance}px)` });
  }, [distance]);

  const clickImg = (index) => {
    setSelect(index);
    setCheckBox(null);
    setCheck((cur) => cur.map((c) => ({ id: c.id, value: false })));
    setCheck((cur) =>
      cur.map((c) => (c.id === index ? { ...c, value: true } : { ...c }))
    );
  };

  const clickCheckBox = () => {
    setSelect(checkBox ? "" : 11);
    setCheck((cur) => cur.map((c) => ({ id: c.id, value: false })));
    setCheckBox((cur) => (!cur ? `${style.check_img}` : null));
  };

  return (
    <div className={style.background}>
      <div className={style.flex_div}>
        <h1 className={style.title}>
          훌륭한 안목이네요! <br />
          브라우저에 들어섰을 때의 조망도 골라보세요!
        </h1>
        <div className={style.tab_image}>
          <img
            className={style.tab_fix_image}
            src={require("../img/tab_fix.png")}
            alt="웨일 브라우저의 기본 새 탭 이미지"
          ></img>
          <img
            className={style.tab_change_image}
            src={require(`../img/default_img/img${select}.png`)}
          ></img>
        </div>
        <div className={style.select_image}>
          <img
            alt="왼쪽 화살표 이미지"
            src={require("../img/arrow_left.png")}
            className={style.arrow_img}
            onClick={clickLeft}
          ></img>
          <div className={style.images}>
            <div
              onClick={() => clickImg(0)}
              style={move}
              className={style.image}
            >
              <img
                src={require("../img/default_img/img0.png")}
                className={
                  check[0].value ? `${style.checked_bg_img}` : `${style.bg_img}`
                }
              ></img>
              <img
                src={require("../img/checked.png")}
                className={
                  check[0].value
                    ? `${style.checked_img}`
                    : `${style.not_checked_img}`
                }
              ></img>
            </div>
            <div
              onClick={() => clickImg(1)}
              style={move}
              className={style.image}
            >
              <img
                src={require("../img/default_img/img1.png")}
                className={
                  check[1].value ? `${style.checked_bg_img}` : `${style.bg_img}`
                }
              ></img>
              <img
                src={require("../img/checked.png")}
                className={
                  check[1].value
                    ? `${style.checked_img}`
                    : `${style.not_checked_img}`
                }
              ></img>
            </div>
            <div
              onClick={() => clickImg(2)}
              style={move}
              className={style.image}
            >
              <img
                src={require("../img/default_img/img2.png")}
                className={
                  check[2].value ? `${style.checked_bg_img}` : `${style.bg_img}`
                }
              ></img>
              <img
                src={require("../img/checked.png")}
                className={
                  check[2].value
                    ? `${style.checked_img}`
                    : `${style.not_checked_img}`
                }
              ></img>
            </div>
            <div
              onClick={() => clickImg(3)}
              style={move}
              className={style.image}
            >
              <img
                src={require("../img/default_img/img3.png")}
                className={
                  check[3].value ? `${style.checked_bg_img}` : `${style.bg_img}`
                }
              ></img>
              <img
                src={require("../img/checked.png")}
                className={
                  check[3].value
                    ? `${style.checked_img}`
                    : `${style.not_checked_img}`
                }
              ></img>
            </div>
            <div
              onClick={() => clickImg(4)}
              style={move}
              className={style.image}
            >
              <img
                src={require("../img/default_img/img4.png")}
                className={
                  check[4].value ? `${style.checked_bg_img}` : `${style.bg_img}`
                }
              ></img>
              <img
                src={require("../img/checked.png")}
                className={
                  check[4].value
                    ? `${style.checked_img}`
                    : `${style.not_checked_img}`
                }
              ></img>
            </div>
            <div
              onClick={() => clickImg(5)}
              style={move}
              className={style.image}
            >
              <img
                src={require("../img/default_img/img5.png")}
                className={
                  check[5].value ? `${style.checked_bg_img}` : `${style.bg_img}`
                }
              ></img>
              <img
                src={require("../img/checked.png")}
                className={
                  check[5].value
                    ? `${style.checked_img}`
                    : `${style.not_checked_img}`
                }
              ></img>
            </div>
            <div
              onClick={() => clickImg(6)}
              style={move}
              className={style.image}
            >
              <img
                src={require("../img/default_img/img6.png")}
                className={
                  check[6].value ? `${style.checked_bg_img}` : `${style.bg_img}`
                }
              ></img>
              <img
                src={require("../img/checked.png")}
                className={
                  check[6].value
                    ? `${style.checked_img}`
                    : `${style.not_checked_img}`
                }
              ></img>
            </div>
            <div
              onClick={() => clickImg(7)}
              style={move}
              className={style.image}
            >
              <img
                src={require("../img/default_img/img7.png")}
                className={
                  check[7].value ? `${style.checked_bg_img}` : `${style.bg_img}`
                }
              ></img>
              <img
                src={require("../img/checked.png")}
                className={
                  check[7].value
                    ? `${style.checked_img}`
                    : `${style.not_checked_img}`
                }
              ></img>
            </div>
            <div
              onClick={() => clickImg(8)}
              style={move}
              className={style.image}
            >
              <img
                src={require("../img/default_img/img8.png")}
                className={
                  check[8].value ? `${style.checked_bg_img}` : `${style.bg_img}`
                }
              ></img>
              <img
                src={require("../img/checked.png")}
                className={
                  check[8].value
                    ? `${style.checked_img}`
                    : `${style.not_checked_img}`
                }
              ></img>
            </div>
            <div
              onClick={() => clickImg(9)}
              style={move}
              className={style.image}
            >
              <img
                src={require("../img/default_img/img9.png")}
                className={
                  check[9].value ? `${style.checked_bg_img}` : `${style.bg_img}`
                }
              ></img>
              <img
                src={require("../img/checked.png")}
                className={
                  check[9].value
                    ? `${style.checked_img}`
                    : `${style.not_checked_img}`
                }
              ></img>
            </div>
            <div
              onClick={() => clickImg(10)}
              style={move}
              className={style.image}
            >
              <img
                src={require("../img/default_img/img10.png")}
                className={
                  check[10].value
                    ? `${style.checked_bg_img}`
                    : `${style.bg_img}`
                }
              ></img>
              <img
                src={require("../img/checked.png")}
                className={
                  check[10].value
                    ? `${style.checked_img}`
                    : `${style.not_checked_img}`
                }
              ></img>
            </div>
          </div>
          <img
            alt="오른쪽 화살표 이미지"
            src={require("../img/arrow_right.png")}
            className={style.arrow_img}
            onClick={clickRight}
          ></img>
        </div>
        <div className={style.description}>
          <p>네이버를 기본 페이지로 설정할래요</p>
          <div onClick={clickCheckBox} className={style.checkbox}>
            <div className={`${checkBox}`}></div>
          </div>
        </div>
        <div className={common.double_btn}>
          <Link to="/select_option" className={style.btn_link}>
            <img
              alt="왼쪽 화살표 이미지"
              src={require("../img/arrow_left.png")}
              className={common.btn_arrow}
            ></img>
            이전
          </Link>
          <Link to="/end" className={style.btn_link}>
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
