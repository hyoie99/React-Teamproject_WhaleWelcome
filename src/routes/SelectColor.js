import { useState } from "react";
import { Link } from "react-router-dom";
import common from "../css/common.module.css";
import style from "../css/color.module.css";

function SelectColor() {
  const [select, setSelect] = useState([
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
    { id: 11, value: false },
    { id: 12, value: false },
    { id: 13, value: false },
    { id: 14, value: false },
    { id: 15, value: false },
  ]);
  const [tab, setTab] = useState("");
  const clickChip = (index) => {
    setSelect((cur) =>
      cur.map((c) =>
        c.id === index ? { ...c, value: true } : { ...c, value: false }
      )
    );
    setTab(index);
  };
  return (
    <div className={style.background}>
      <div className={style.flex_div}>
        <h1 className={common.title}>
          새로 입주하실 브라우저의 <br /> 테마 컬러를 골라볼까요?
        </h1>
        <p className={common.description}>
          웨일 브라우저 창의 색깔을 취향대로 골라보세요
        </p>
        <img
          alt="천장에 달린 갓 모양의 전등 이미지"
          src={require("../img/light.png")}
          className={style.light_img}
        ></img>
        <div className={style.change_theme}>
          <div className={style.color_chips}>
            <div
              id={style.color1}
              className={style.color_chip}
              onClick={() => clickChip(0)}
            >
              <div
                className={select[0].value ? `${style.checked}` : null}
              ></div>
            </div>
            <div
              id={style.color2}
              className={style.color_chip}
              onClick={() => clickChip(1)}
            >
              <div
                className={select[1].value ? `${style.checked}` : null}
              ></div>
            </div>
            <div
              id={style.color3}
              className={style.color_chip}
              onClick={() => clickChip(2)}
            >
              <div
                className={select[2].value ? `${style.checked}` : null}
              ></div>
            </div>
            <div
              id={style.color4}
              className={style.color_chip}
              onClick={() => clickChip(3)}
            >
              <div
                className={select[3].value ? `${style.checked}` : null}
              ></div>
            </div>
            <div
              id={style.color5}
              className={style.color_chip}
              onClick={() => clickChip(4)}
            >
              <div
                className={select[4].value ? `${style.checked}` : null}
              ></div>
            </div>
            <div
              id={style.color6}
              className={style.color_chip}
              onClick={() => clickChip(5)}
            >
              <div
                className={select[5].value ? `${style.checked}` : null}
              ></div>
            </div>
            <div
              id={style.color7}
              className={style.color_chip}
              onClick={() => clickChip(6)}
            >
              <div
                className={select[6].value ? `${style.checked}` : null}
              ></div>
            </div>
            <div
              id={style.color8}
              className={style.color_chip}
              onClick={() => clickChip(7)}
            >
              <div
                className={select[7].value ? `${style.checked}` : null}
              ></div>
            </div>
            <div
              id={style.color9}
              className={style.color_chip}
              onClick={() => clickChip(8)}
            >
              <div
                className={select[8].value ? `${style.checked}` : null}
              ></div>
            </div>
            <div
              id={style.color10}
              className={style.color_chip}
              onClick={() => clickChip(9)}
            >
              <div
                className={select[9].value ? `${style.checked}` : null}
              ></div>
            </div>
            <div
              id={style.color11}
              className={style.color_chip}
              onClick={() => clickChip(10)}
            >
              <div id={style.color11_2}>
                <div
                  className={select[10].value ? `${style.checked}` : null}
                ></div>
              </div>
            </div>
            <div
              id={style.color12}
              className={style.color_chip}
              onClick={() => clickChip(11)}
            >
              <div id={style.color12_2}>
                <div
                  className={select[11].value ? `${style.checked}` : null}
                ></div>
              </div>
            </div>
            <div
              id={style.color13}
              className={style.color_chip}
              onClick={() => clickChip(12)}
            >
              <div id={style.color13_2}>
                <div
                  className={select[12].value ? `${style.checked}` : null}
                ></div>
              </div>
            </div>
            <div
              id={style.color14}
              className={style.color_chip}
              onClick={() => clickChip(13)}
            >
              <div id={style.color14_2}>
                <div
                  className={select[13].value ? `${style.checked}` : null}
                ></div>
              </div>
            </div>
            <div
              id={style.color15}
              className={style.color_chip}
              onClick={() => clickChip(14)}
            >
              <div id={style.color15_2}>
                <div
                  className={select[14].value ? `${style.checked}` : null}
                ></div>
              </div>
            </div>
            <div
              id={style.color16}
              className={style.color_chip}
              onClick={() => clickChip(15)}
            >
              <div id={style.color16_2}>
                <div
                  className={select[15].value ? `${style.checked}` : null}
                ></div>
              </div>
            </div>
          </div>
          <div className={style.theme_img}>
            <img
              alt="브라우저 상단 탭 이미지"
              src={require(`../img/theme_img/theme_color${tab}.png`)}
              className={style.change_img}
            ></img>
            <img
              alt="네이버 메인화면 이미지"
              src={require("../img/theme_img/theme_fix.png")}
              className={style.fix_img}
            ></img>
          </div>
        </div>
        <img
          alt="사다리 위의 페인트통이 올려져있는 이미지"
          src={require("../img/paint.png")}
          className={style.paint_img}
        ></img>
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
      <button className={style.skip_btn}>건너뛰기</button>
    </div>
  );
}

export default SelectColor;
