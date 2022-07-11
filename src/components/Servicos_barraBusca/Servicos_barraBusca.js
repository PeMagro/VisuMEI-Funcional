import './Servicos_barraBusca.css'

function ServicosBarra() {
    return (
        <div className="Servicos_Barra">
            <div className="Servicos_Barra_align">
                <input className="Servicos_barra_pesquisar" type="text" placeholder="Pesquisar por um produto" />
                <img
                    alt='Imagem de lupa de pesquisa'
                    className="Servicos_lupa_img"
                    src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/1c3ac93588c6d538245f68df6b8307cf7335b824/Barra%20de%20pesquisa/Servicos_lupa_pesquisa.svg" />
            </div>
        </div>
    )
}

export default ServicosBarra