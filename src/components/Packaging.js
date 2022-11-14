import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Packaging() {
  const navigate = useNavigate();
  const timeout = () => {
    setTimeout(() => {
      navigate("/packed");
    }, 3000);
  };

  useEffect(() => {
    timeout();
    clearTimeout(timeout);
  });

  return (
    <div>
      <h1>즐겨찾기 / 북마크 내역을 포장하는 중...</h1>
    </div>
  );
}

export default Packaging;
