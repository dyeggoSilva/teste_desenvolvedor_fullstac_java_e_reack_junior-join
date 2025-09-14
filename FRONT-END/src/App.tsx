import { useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import { useFoodData } from "./hooks/userFoodData";
import { ModalCreate } from "./components/create-modal/create-modal";

function App() {
  const { data } = useFoodData();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="container">
      <h1>Cardápio</h1>

      <div className="card-grid">
        {data?.map((foodData) => (
          <Card
           key={foodData.id}
            titulo={foodData.titulo}
            img={foodData.img}
            preco={foodData.preco}
            id={foodData.id}
          />
        ))}
      </div>

      {isModalOpen && <ModalCreate closeModal={handleOpenModal} />}

      <button className="btn-novo" onClick={handleOpenModal}>
        Create
      </button>
    </div>
  );
}

export default App;
