import './Servicos_filtro.css';

function ServicosFiltro() {
    return (
        <div className="Servicos_filtro">
            <img className="Servicos_filtro_img" src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/23e0548e0090ebb860c5dfdbca4cbd8325fa1a54/Images/Servicos_filtro.svg" />
            <div className="Servicos_filtro_div">
                <select className="Servicos_filtro_select">
                    <option value='Valor'>Valor</option>
                    <option value='Menor valor'>Menor valor</option>
                    <option value='Maior valor'>Maior valor</option>
                </select>
            </div>
            <div className="Servicos_filtro_div">
                <select className="Servicos_filtro_select">
                    <option value='Avaliacoes'>Avaliações</option>
                    <option value='Menor avaliado'>Menor avaliado</option>
                    <option value='Maior avaliado'>Maior avaliado</option>
                </select>
            </div>
            <div className="Servicos_filtro_div">
                <select className="Servicos_filtro_select">
                    <option value='Categoria'>Categoria</option>
                    <option value='Animais'>Animais</option>
                    <option value='Arte'>Arte</option>
                    <option value='Artesanato'>Artesanato</option>
                    <option value='Automoveis'>Automóveis</option>
                    <option value='Cargas'>Cargas</option>
                    <option value='Casa'>Casa</option>
                    <option value='Coleta'>Coleta</option>
                    <option value='Comida'>Comida</option>
                    <option value='Construcao'>Construção</option>
                    <option value='Estetica'>Estética</option>
                    <option value='Entregas'>Entregas</option>
                    <option value='Informatica'>Informática</option>
                    <option value='Maquina'>Máquinas</option>
                    <option value='Midia'>Mídia</option>
                    <option value='Musica'>Música</option>
                    <option value='Papelaria'>Papelaria</option>
                    <option value='Pessoas'>Pessoas</option>
                    <option value='Roupas'>Roupas</option>
                    <option value='Diversos'>Diversos</option>
                </select>
            </div>
            <input className="Servicos_filtro_bairro" type="text" placeholder="Digite um bairro" />
            <button className="Servicos_filtro_aplicar">Aplicar</button>
        </div>
    )
}

export default ServicosFiltro