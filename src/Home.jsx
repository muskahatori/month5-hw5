import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Вы стоите перед двумя дверями. Какую выберете?</h1>
      <button onClick={() => navigate("/dead-end")}>Открыть левую дверь</button>
      <button onClick={() => navigate("/treasure")}>Открыть правую дверь</button>
    </div>
  );
};

export default Home;
