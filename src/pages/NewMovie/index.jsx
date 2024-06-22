import { FiArrowLeft, FiPlus } from "react-icons/fi";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Tag } from "../../components/Tag";
import Header from "../../components/Header";

import "./styles.css"

export default function NewMovie() {
  return (
    <>
      <Header />
      <div className="container" id="newMoviePage">
        <ButtonText icon={ FiArrowLeft } title="Voltar" to="/"/>

        <h1>Novo filme</h1>

        <section className="contentContainer">
          <Input placeholder="Título" />
          <Input placeholder="Sua nota (de 0 a 5)" />

          <textarea placeholder="Observações" />
        </section>

        <section>
          <h2>Marcadores</h2>

          <div className="tagsContainer">
            <Tag title="aaaa"/>
            <Tag title="aaaa"/>
            
            <Button title="Novo marcador" icon={ FiPlus } btnStyle="btnDashed"/>
          </div>
        </section>

        <section className="actionsContainer">
          <Button title="Excluir filme" btnStyle="btnReverse"/>
          <Button title="Salvar alterações" />
        </section>
      </div>
    </>
  )
}