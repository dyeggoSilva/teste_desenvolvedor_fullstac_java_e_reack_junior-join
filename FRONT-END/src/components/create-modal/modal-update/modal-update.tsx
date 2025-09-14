import { useEffect, useState } from "react";
import type { FoodData } from "../../../interfaces/FoodData";
import "./modal.css";
import { useFoodDataById } from "../../../hooks/userFoodData";
import {DeleteFood, UpdateFood} from "../../../hooks/useFoodDataMutate"

interface InputProps {
  label: string;
  value: string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateValue: (value: any) => void;
}

interface ModalProps {
  id: number;
  closeModal(): void;
}

const Input = ({ label, value, updateValue }: InputProps) => (
  <>
    <label>{label}</label>
    <input value={value} onChange={(e) => updateValue(e.target.value)} />
  </>
);

export function ModalUpdate({ id, closeModal }: ModalProps) {
  const { data, isLoading, error } = useFoodDataById(id);

  const [titulo, setTitulo] = useState("");
  const [preco, setPreco] = useState(0);
  const [img, setImg] = useState("");

  useEffect(() => {
  if (data) {
    setTitulo(data.titulo);
    setPreco(data.preco);
    setImg(data.img);
  }
}, [data]);

  
  const { mutate: updateMutate, isSuccess: isUpdateSuccess } = UpdateFood();
  const { mutate: deleteMutate, isSuccess: isDeleteSuccess } = DeleteFood();


const deleteFood = () => {
    deleteMutate(id);
  
};

 const updateFood = () => {
    const foodData: FoodData = { id, titulo, preco, img };
    updateMutate(foodData);
  };

  useEffect(() => {
    if (isUpdateSuccess  || isDeleteSuccess) {
      closeModal();
    }
  }, [isUpdateSuccess, isDeleteSuccess, closeModal]);

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar</p>;

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Editar item</h2>
        <form className="input-container">
          <Input label="Título" value={titulo} updateValue={setTitulo} />
          <Input label="Preço" value={preco} updateValue={setPreco} />
          <Input label="Imagem" value={img} updateValue={setImg} />
        </form>
        <button onClick={updateFood} className="btn-primary">
          Update
        </button>
      
        <button onClick={deleteFood} className="btn-delete">
          Delete
        </button>

         <button onClick={closeModal} className="btn-default">
          Voltar
        </button>
      </div>
    </div>
  );
}
