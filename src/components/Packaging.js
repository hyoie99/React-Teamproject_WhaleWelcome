import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import common from "../css/common.module.css";
import style from "../css/packaging.module.css";

function Packaging() {
  const navigate = useNavigate();
  const timeout = () => {
    setTimeout(() => {
      navigate("/packed");
    }, 1500);
  };

  useEffect(() => {
    timeout();
    clearTimeout(timeout);
  });

  return (
    <div className={common.background}>
      <div className={style.flex_div}>
        <div className={style.animation}></div>
        <h1 className={common.title}>북마크 내역을 포장하는 중...</h1>
      </div>
    </div>
  );
}

export default Packaging;
