import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="packaging-background">
      <div className="flex-div">
        <div className="packaging-animation"></div>
        <h1 className="title">
          즐겨찾기, 북마크 내역을 <br />
          포장하는 중...
        </h1>
      </div>
    </div>
  );
}

export default Packaging;
