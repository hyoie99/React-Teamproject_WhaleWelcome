import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import common from "../css/common.module.css";
import style from "../css/option.module.css";

function SmallIcon({ index, onClick }) {
  return (
    <div onClick={onClick} className={`${style.icon}`}>
      <img
        src={require(`../img/icon_img/icon${index}.png`)}
        className={`${style.preview_icon}`}
      ></img>
      <img
        src={require(`../img/delete.png`)}
        className={`${style.delete_icon}`}
      ></img>
    </div>
  );
}

function SelectOption() {
  const interval = 170;
  const [distance, setDis] = useState(0);
  const [move, setMove] = useState();
  const [checkBox, setCheckBox] = useState(false);
  const [checkCir, setCheckCir] = useState([
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
  ]);
  const [list, setList] = useState([]);

  const clickLeft = () => {
    setDis((cur) => (cur + interval === interval ? cur : cur + interval));
  };
  const clickRight = () => {
    setDis((cur) =>
      cur - interval === -(interval * 9) ? cur : cur - interval
    );
  };
  useEffect(() => {
    setMove({ transform: `translateX(${distance}px)` });
  }, [distance]);

  const clickCheckBox = () => {
    const recommend = [0, 1, 2, 3, 4, 5, 6, 7];
    setCheckCir((cur) =>
      checkBox
        ? cur.map((c) => ({ id: c.id, value: false }))
        : cur.map((c) => (c.id in recommend ? { ...c, value: true } : { ...c }))
    );
    setCheckBox((cur) => (!cur ? `${style.check_img}` : null));
  };
  const clickCheckCir = (index) => {
    setCheckCir((cur) =>
      cur.map((c) => (c.id === index ? { ...c, value: !c.value } : { ...c }))
    );
    setCheckBox(null);
  };

  useEffect(() => {
    setList([]);
    checkCir.map((cir) => {
      if (cir.value === true) {
        setList((cur) => [...cur, cir.id]);
      }
    });
  }, [checkCir]);

  return (
    <div className={common.background}>
      <div className={style.flex_div}>
        <h1 className={common.title}>
          웨일엔 다양한 기능이 풀옵션으로 갖춰져 있답니다! <br /> 입주 시 필요한
          옵션을 선택하세요.
        </h1>
        <p className={common.description}>
          사이드바에서 필요할 때 바로 꺼내 쓸 기능을 골라보세요
        </p>
        <div className={style.select_option}>
          <img
            alt="왼쪽 화살표 이미지"
            src={require("../img/arrow_left.png")}
            className={style.arrow_img}
            onClick={clickLeft}
          ></img>
          <div className={style.options}>
            <div
              onClick={() => clickCheckCir(0)}
              style={move}
              className={style.option}
            >
              <img
                src={require("../img/icon_img/icon0.png")}
                alt="그린닷 아이콘 이미지"
                className={style.icon_img}
              ></img>
              <div className={style.option_check}>
                <div
                  className={
                    checkCir[0].value ? `${style.option_checked}` : null
                  }
                ></div>
              </div>
              <h3 className={style.option_title}>그린닷</h3>
              <p className={style.option_des}>모바일 환경 미리보기</p>
            </div>
            <div
              onClick={() => clickCheckCir(1)}
              style={move}
              className={style.option}
            >
              <img
                src={require("../img/icon_img/icon1.png")}
                alt="도구모음 아이콘 이미지"
                className={style.icon_img}
              ></img>
              <div className={style.option_check}>
                <div
                  className={
                    checkCir[1].value ? `${style.option_checked}` : null
                  }
                ></div>
              </div>
              <h3 className={style.option_title}>도구 모음</h3>
              <p className={style.option_des}>유용한 도구가 잔뜩</p>
            </div>
            <div
              onClick={() => clickCheckCir(2)}
              style={move}
              className={style.option}
            >
              <img
                src={require("../img/icon_img/icon2.png")}
                alt="스크랩북 아이콘 이미지"
                className={style.icon_img}
              ></img>
              <div className={style.option_check}>
                <div
                  className={
                    checkCir[2].value ? `${style.option_checked}` : null
                  }
                ></div>
              </div>
              <h3 className={style.option_title}>스크랩북</h3>
              <p className={style.option_des}>생산성 높이는 모아보기</p>
            </div>
            <div
              onClick={() => clickCheckCir(3)}
              style={move}
              className={style.option}
            >
              <img
                src={require("../img/icon_img/icon3.png")}
                alt="북마크 아이콘 이미지"
                className={style.icon_img}
              ></img>
              <div className={style.option_check}>
                <div
                  className={
                    checkCir[3].value ? `${style.option_checked}` : null
                  }
                ></div>
              </div>
              <h3 className={style.option_title}>북마크</h3>
              <p className={style.option_des}>즐겨찾는 페이지</p>
            </div>
            <div
              onClick={() => clickCheckCir(4)}
              style={move}
              className={style.option}
            >
              <img
                src={require("../img/icon_img/icon4.png")}
                alt="번역 아이콘 이미지"
                className={style.icon_img}
              ></img>
              <div className={style.option_check}>
                <div
                  className={
                    checkCir[4].value ? `${style.option_checked}` : null
                  }
                ></div>
              </div>
              <h3 className={style.option_title}>번역</h3>
              <p className={style.option_des}>똑똑한 AI 번역기</p>
            </div>
            <div
              onClick={() => clickCheckCir(5)}
              style={move}
              className={style.option}
            >
              <img
                src={require("../img/icon_img/icon5.png")}
                alt="뮤직 플레이어 아이콘 이미지"
                className={style.icon_img}
              ></img>
              <div className={style.option_check}>
                <div
                  className={
                    checkCir[5].value ? `${style.option_checked}` : null
                  }
                ></div>
              </div>
              <h3 className={style.option_title}>뮤직 플레이어</h3>
              <p className={style.option_des}>언제나 음악을 함께</p>
            </div>
            <div
              onClick={() => clickCheckCir(6)}
              style={move}
              className={style.option}
            >
              <img
                src={require("../img/icon_img/icon6.png")}
                alt="네이버 웹툰 아이콘 이미지"
                className={style.icon_img}
              ></img>
              <div className={style.option_check}>
                <div
                  className={
                    checkCir[6].value ? `${style.option_checked}` : null
                  }
                ></div>
              </div>
              <h3 className={style.option_title}>네이버 웹툰</h3>
              <p className={style.option_des}>재밌는 웹툰이 한가득</p>
            </div>
            <div
              onClick={() => clickCheckCir(7)}
              style={move}
              className={style.option}
            >
              <img
                src={require("../img/icon_img/icon7.png")}
                alt="네이버 메모 아이콘 이미지"
                className={style.icon_img}
              ></img>
              <div className={style.option_check}>
                <div
                  className={
                    checkCir[7].value ? `${style.option_checked}` : null
                  }
                ></div>
              </div>
              <h3 className={style.option_title}>네이버 메모</h3>
              <p className={style.option_des}>간단한 기록은 여기에</p>
            </div>
            <div
              onClick={() => clickCheckCir(8)}
              style={move}
              className={style.option}
            >
              <img
                src={require("../img/icon_img/icon8.png")}
                alt="나우 아이콘 이미지"
                className={style.icon_img}
              ></img>
              <div className={style.option_check}>
                <div
                  className={
                    checkCir[8].value ? `${style.option_checked}` : null
                  }
                ></div>
              </div>
              <h3 className={style.option_title}>NOW</h3>
              <p className={style.option_des}>귀가 즐거운 경험</p>
            </div>
            <div
              onClick={() => clickCheckCir(9)}
              style={move}
              className={style.option}
            >
              <img
                src={require("../img/icon_img/icon9.png")}
                alt="네이버 캘린더 아이콘 이미지"
                className={style.icon_img}
              ></img>
              <div className={style.option_check}>
                <div
                  className={
                    checkCir[9].value ? `${style.option_checked}` : null
                  }
                ></div>
              </div>
              <h3 className={style.option_title}>네이버 캘린더</h3>
              <p className={style.option_des}>나만의 스케쥴 매니저</p>
            </div>
            <div
              onClick={() => clickCheckCir(10)}
              style={move}
              className={style.option}
            >
              <img
                src={require("../img/icon_img/icon10.png")}
                alt="오디오 클립 아이콘 이미지"
                className={style.icon_img}
              ></img>
              <div className={style.option_check}>
                <div
                  className={
                    checkCir[10].value ? `${style.option_checked}` : null
                  }
                ></div>
              </div>
              <h3 className={style.option_title}>오디오 클립</h3>
              <p className={style.option_des}>즐거움이 들린다</p>
            </div>
            <div
              onClick={() => clickCheckCir(11)}
              style={move}
              className={style.option}
            >
              <img
                src={require("../img/icon_img/icon11.png")}
                alt="네이버 메일 아이콘 이미지"
                className={style.icon_img}
              ></img>
              <div className={style.option_check}>
                <div
                  className={
                    checkCir[11].value ? `${style.option_checked}` : null
                  }
                ></div>
              </div>
              <h3 className={style.option_title}>네이버 메일</h3>
              <p className={style.option_des}>더욱 편리한 메일함</p>
            </div>
            <div
              onClick={() => clickCheckCir(12)}
              style={move}
              className={style.option}
            >
              <img
                src={require("../img/icon_img/icon12.png")}
                alt="네이버 증권 아이콘 이미지"
                className={style.icon_img}
              ></img>
              <div className={style.option_check}>
                <div
                  className={
                    checkCir[12].value ? `${style.option_checked}` : null
                  }
                ></div>
              </div>
              <h3 className={style.option_title}>네이버 증권</h3>
              <p className={style.option_des}>손쉬운 주가 확인</p>
            </div>
          </div>
          <img
            alt="오른쪽 화살표 이미지"
            src={require("../img/arrow_right.png")}
            className={style.arrow_img}
            onClick={clickRight}
          ></img>
        </div>
        <img
          alt="초록색 전등과 시계가 올려져있는 책상 이미지"
          src={require("../img/option_table.png")}
          className={style.table_img}
        ></img>
        <div className={style.preview}>
          {list.map((l) => (
            <SmallIcon index={l} onClick={() => clickCheckCir(l)} />
          ))}
        </div>
        <div className={style.description}>
          <p>웨일이 추천하는 옵션으로 선택할래요</p>
          <div onClick={clickCheckBox} className={style.checkbox}>
            <div className={`${checkBox}`}></div>
          </div>
        </div>
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
      <button className={style.skip_btn}>건너뛰기</button>
    </div>
  );
}

export default SelectOption;
