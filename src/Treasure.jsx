import { useNavigate } from "react-router-dom";

const Treasure = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Поздравляем! Вы нашли золото!</h1>
      <button onClick={() => navigate("/")}>Начать заново</button>
    </div>
  );
};

export default Treasure;
