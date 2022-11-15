import common from "../css/common.module.css";
import style from "../css/end.module.css";

function End() {
  return (
    <div className={common.background}>
      <h1 className={style.title}>
        성공적으로 이사를 마쳤어요! <br />
        사용자님에게 딱 맞는 브라우저에서의 <br /> 산뜻한 새 시작을 기원할게요
      </h1>
      <img className={style.image} src={require("../img/welcome.png")}></img>
    </div>
  );
}

export default End;
