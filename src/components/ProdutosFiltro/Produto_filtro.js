import './Servicos_filtro.css';

function ServicosFiltro() {
    return (
        <div className="Servicos_filtro">
            <img className="Servicos_filtro_img"
                alt='Imagem que simboliza um filtro'
                src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/1c3ac93588c6d538245f68df6b8307cf7335b824/Barra%20de%20pesquisa/Servicos_filtro.svg" />
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
                    <option>Sub Categoria</option>
                    <option>Mercado</option>
                    <option>Lanches</option>
                    <option>Doces e bolo</option>
                    <option>Pizza</option>
                    <option>Pastel</option>
                    <option>Sorvetes</option>
                    <option>Salgados</option>
                    <option>Carnes</option>
                    <option>Bebidas</option>
                    <option>Diversos</option>
                </select>
            </div>
            <input className="Servicos_filtro_bairro" type="text" placeholder="Digite um bairro" />
            <button className="Servicos_filtro_aplicar">Aplicar</button>
        </div>
    )
}

export default ServicosFiltro