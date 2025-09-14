import { useState } from "react";
import "./card.css";
import { ModalUpdate } from "../create-modal/modal-update/modal-update";

interface Cardprops {
  preco: number;
  titulo: string;
  img: string;
  id: number;
}

export default function Card({ id, titulo, img, preco }: Cardprops) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="card">
      {isModalOpen && <ModalUpdate id={id} closeModal={handleOpenModal} />}

      <div className="card-int" onClick={handleOpenModal}>
        <img src={img || undefined} alt="foto" />
        <h2>{titulo}</h2>
        <p>
          <b>Valor: </b>R$ {preco}
        </p>
      </div>
    </div>
  );
}
