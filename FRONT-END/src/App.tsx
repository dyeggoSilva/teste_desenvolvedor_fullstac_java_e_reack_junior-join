import { useState } from "react";
import Card from "./components/card/Card";
import { ModalCreate } from "./components/create-modal/create-modal";
import { useFoodData } from "./hooks/userFoodData";
import "./App.css";
import type { FoodData } from "./interfaces/FoodData";
import Navbar from "./components/navbar/navbar";

function App() {
  const { data, currentPage, totalPages, nextPage, prevPage, refresh } = useFoodData(3);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <>
    <Navbar/>
      <div className="container">
      
      <h1>Cardápio</h1>

      <div className="card-grid">
        {data.map((food: FoodData) => (
          <Card
            key={food.id}
            titulo={food.titulo}
            img={food.img}
            preco={food.preco}
            id={food.id}
            refresh={refresh}
          />
        ))}
      </div>
      

      <div className="pagination">
        <button className="pag" onClick={prevPage} disabled={currentPage === 0}>
          Anterior
        </button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <button
          className="pag"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Próximo
        </button>
      </div>

      {isModalOpen && <ModalCreate closeModal={toggleModal} refreshData={refresh}/>}

      <button className="btn-novo" onClick={toggleModal}>
        Create
      </button>
    </div>
    </>
    
  
  );
}

export default App;
