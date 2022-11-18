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
  const whaleImg = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const clickLeft = () => {
    setDis((cur) => (cur + interval === interval ? cur : cur + interval));
  };
  const clickRight = () => {
    setDis((cur) =>
      cur - interval === -(interval * 8) ? cur : cur - interval
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
      <img
        alt="검은색 화분이 올려져 있는 검은색 책상 이미지"
        className={style.plant_img}
        src={require("../img/black_plant.png")}
      ></img>
      <div className={style.flex_div}>
        <h1 className={style.title}>
          훌륭한 안목이네요! <br />
          브라우저에 들어섰을 때의 조망도 골라보세요!
        </h1>
        <div className={style.tab_image}>
          <img
            alt="검은색 시계 이미지"
            className={style.black_clock_img}
            src={require("../img/black_clock.png")}
          ></img>
          <img
            className={style.tab_fix_image}
            src={require("../img/tab_fix.png")}
            alt="웨일 브라우저의 기본 새 탭 이미지"
          ></img>
          <img
            alt="선택한 배경화면 이미지"
            className={
              select === "" ? `${style.clock_img}` : `${style.tab_change_image}`
            }
            src={require(`../img/default_img/img${select}.png`)}
          ></img>
          <img
            alt="웨일 새 탭의 시계 위젯 이미지"
            className={
              select in whaleImg ? `${style.clock_img}` : `${style.not_clock}`
            }
            src={require("../img/default_img/img.png")}
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
                alt="포스터가 많은 방의 침대 위에서 노트북을 하는 여자와 자고 있는 강아지가 그려진 배경화면 이미지"
                src={require("../img/default_img/img0.png")}
                className={
                  check[0].value ? `${style.checked_bg_img}` : `${style.bg_img}`
                }
              ></img>
              <img
                alt="하얀색 체크표시 이미지"
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
                alt="창문가에 누워있는 검은 점박이 고양이가 그려진 배경화면 이미지"
                src={require("../img/default_img/img1.png")}
                className={
                  check[1].value ? `${style.checked_bg_img}` : `${style.bg_img}`
                }
              ></img>
              <img
                alt="하얀색 체크표시 이미지"
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
                alt="여행 준비를 하는 여자와 고양이들, 고양이와 노는 남자, 강아지가 있는 시골집 풍경이 그려진 배경화면 이미지"
                src={require("../img/default_img/img2.png")}
                className={
                  check[2].value ? `${style.checked_bg_img}` : `${style.bg_img}`
                }
              ></img>
              <img
                alt="하얀색 체크표시 이미지"
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
                alt="우주를 배경으로 웨일 캐릭터들의 3D 이미지가 그려진 배경화면 이미지"
                src={require("../img/default_img/img3.png")}
                className={
                  check[3].value ? `${style.checked_bg_img}` : `${style.bg_img}`
                }
              ></img>
              <img
                alt="하얀색 체크표시 이미지"
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
                alt="바다를 배경으로 큰 고래를 보는 남자아이와 고양이가 그려진 배경화면 이미지"
                src={require("../img/default_img/img4.png")}
                className={
                  check[4].value ? `${style.checked_bg_img}` : `${style.bg_img}`
                }
              ></img>
              <img
                alt="하얀색 체크표시 이미지"
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
                alt="하늘을 바다처럼 수영하는 하얀 여우와 고래가 그려진 배경화면 이미지"
                src={require("../img/default_img/img5.png")}
                className={
                  check[5].value ? `${style.checked_bg_img}` : `${style.bg_img}`
                }
              ></img>
              <img
                alt="하얀색 체크표시 이미지"
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
                alt="서퍼들이 있는 바다를 배경으로 여자아이가 그려진 배경화면 이미지"
                src={require("../img/default_img/img6.png")}
                className={
                  check[6].value ? `${style.checked_bg_img}` : `${style.bg_img}`
                }
              ></img>
              <img
                alt="하얀색 체크표시 이미지"
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
                alt="바다 위 다리를 건너는 강아지와 여자아이가 그려진 배경화면 이미지"
                src={require("../img/default_img/img7.png")}
                className={
                  check[7].value ? `${style.checked_bg_img}` : `${style.bg_img}`
                }
              ></img>
              <img
                alt="하얀색 체크표시 이미지"
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
                alt="밤하늘 배경의 보라색 너구리 캐릭터가 그려진 배경화면 이미지"
                src={require("../img/default_img/img8.png")}
                className={
                  check[8].value ? `${style.checked_bg_img}` : `${style.bg_img}`
                }
              ></img>
              <img
                alt="하얀색 체크표시 이미지"
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
                alt="백조가 그려진 수채화 느낌의 배경화면 이미지"
                src={require("../img/default_img/img9.png")}
                className={
                  check[9].value ? `${style.checked_bg_img}` : `${style.bg_img}`
                }
              ></img>
              <img
                alt="하얀색 체크표시 이미지"
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
                alt="피크닉하는 여우가 그려진 배경화면 이미지"
                src={require("../img/default_img/img10.png")}
                className={
                  check[10].value
                    ? `${style.checked_bg_img}`
                    : `${style.bg_img}`
                }
              ></img>
              <img
                alt="하얀색 체크표시 이미지"
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
              src={require("../img/arrow_left2.png")}
              className={common.btn_arrow}
            ></img>
            이전
          </Link>
          <Link to="/end" className={style.btn_link}>
            다음
            <img
              alt="오른쪽 화살표 이미지"
              src={require("../img/arrow_right2.png")}
              className={common.btn_arrow}
            ></img>
          </Link>
        </div>
        <button className={style.skip_btn}>건너뛰기</button>
      </div>
    </div>
  );
}

export default SelectDefault;
