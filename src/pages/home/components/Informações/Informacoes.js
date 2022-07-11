import './Informacoes.css';

function Informacoes() {
    return(
        <div className='home-informacoes'>

            <div className='home-informacoes-variedades'>
                <div className='home-informacoes-variedades-container'>
                    <p className='home-informacoes-variedades-titulo'>Variedades</p>
                    <p className='home-informacoes-variedades-descri'>Aqui na VisuMEI você encontra uma grande variedade de produtos e serviços, de diversos MEIS.</p>
                </div>
            </div>

            <div className='home-informacoes-classificacoes'>
                <div className='home-informacoes-classificacoes-container'>
                <p className='home-informacoes-classificacoes-titulo'>Classificações</p>
                <p className='home-informacoes-classificacoes-descri'>Veja as classificações dos outros usuários para cada MEI e sinta mais confiança nas suas experiências aqui.</p>
                </div>
            </div>

            <div className='home-informacoes-gif'>
                <img src="https://github.com/EduardoOliveiraDev/ImagesVisuMEI/blob/main/home/celular.gif?raw=true" alt='celular' />
            </div>

        </div>
    );
}

export default Informacoes;