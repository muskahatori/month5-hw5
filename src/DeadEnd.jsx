
import { useNavigate } from "react-router-dom";

const DeadEnd = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Здесь ничего нет, вы зашли в тупик...</h1>
      <button onClick={() => navigate(-1)}>Вернуться назад</button>
    </div>
  );
};

export default DeadEnd;
