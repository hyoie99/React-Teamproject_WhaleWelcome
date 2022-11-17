import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import packagingVideo from "../video/packaging.mp4";
import common from "../css/common.module.css";
import style from "../css/packaging.module.css";

function Packaging() {
  const navigate = useNavigate();
  const timeout = () => {
    setTimeout(() => {
      navigate("/packed");
    }, 8000);
  };

  useEffect(() => {
    timeout();
    clearTimeout(timeout);
  });

  return (
    <div className={common.background}>
      <div className={style.div}>
        <ReactPlayer
          url={packagingVideo}
          playing
          muted
          width="97%"
          height="97%"
          className={style.video}
        />
        <h1 className={style.title}>북마크 내역을 포장하는 중...</h1>
      </div>
    </div>
  );
}

export default Packaging;
