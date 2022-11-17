import ReactPlayer from "react-player";
import welcomeVideo from "../video/welcome.mp4";
import common from "../css/common.module.css";
import style from "../css/end.module.css";

function End() {
  return (
    <div className={common.background}>
      <h1 className={style.title}>
        성공적으로 이사를 마쳤어요! <br />
        사용자님에게 딱 맞는 브라우저에서의 <br /> 산뜻한 새 시작을 기원할게요
      </h1>
      <button className={style.single_btn}>완료</button>
      <ReactPlayer
        url={welcomeVideo}
        playing
        muted
        loop
        width="100vw"
        height="100vh"
        className={style.video}
      />
    </div>
  );
}

export default End;
