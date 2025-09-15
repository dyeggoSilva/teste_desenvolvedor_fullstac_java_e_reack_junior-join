import { useEffect, useState } from "react";
import { createFood } from "../../hooks/useFoodDataMutate";
import type { FoodData } from "../../interfaces/FoodData";
import "./modal.css";

interface InputProps {
  label: string;
  value: string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateValue: (value: any) => void;
}

interface ModalProps {
  closeModal(): void;
  refreshData(): void;
}
const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input
        value={value}
        onChange={(e) => updateValue(e.target.value)}
        required
      ></input>
    </>
  );
};

export function ModalCreate({ closeModal, refreshData }: ModalProps) {
  const [titulo, setTitulo] = useState("");
  const [preco, setPreco] = useState(0);
  const [img, setImg] = useState("");
  const { mutate, isSuccess } = createFood();

  const submit = () => {
    const foodData: FoodData = {
      titulo,
      preco,
      img,
      id: 0,
    };
    mutate(foodData);
  };

  useEffect(() => {
    if (!isSuccess) return;
    refreshData();
    closeModal();
  }, [closeModal, isSuccess]);

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Cadastre um novo produto no cardápio</h2>
        <form
          className="input-container"
          onSubmit={(e) => {
            e.preventDefault(); // evita reload da página
            submit(); // chama tua função de salvar
          }}
        >
          <Input label="Titulo" value={titulo} updateValue={setTitulo} />
          <Input label="Preço" value={preco} updateValue={setPreco} />
          <Input label="URL Imagem" value={img} updateValue={setImg} />
          <button type="submit" className="btn-primary">
            Postar
          </button>
        </form>

        <button onClick={closeModal} className="btn-default">
          Voltar
        </button>
      </div>
    </div>
  );
}
