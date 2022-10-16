import "./index.scss";
import Menu from "../../../components/home";
import HeaderAdmin from "../../../components/adm/header";
import CardsAdmin from "../../../components/adm/cards";

export default function CadastrosPendentes() {
  return (
    <main className="adm-cadastros-principal">
        
        <Menu selecionado="a ser aprovado" />
        
      
      <section className='adm-cad-section'>
        <HeaderAdmin />
        <div className="section-cadastros">
            <CardsAdmin tipo='A ser aprovado' />
            
        </div>
      </section>
    </main>
  );
}
