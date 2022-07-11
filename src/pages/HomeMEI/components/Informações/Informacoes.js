import './Informacoes.css';

function Informacoes() {
    return(
        <div className='homeMEI-informacoes'>

            <div className='homeMEI-informacoes-textos'>
                <p className='homeMEI-informacoes-textos-txt1'>O número de MEIs mais que dobrou em apenas 5 anos no Brasil</p>
                <p className='homeMEI-informacoes-textos-txt2'>A evolução foi de 4,96 milhões para 10,03 milhões, entre abril de 2015 e abril de 2020</p>
                <p className='homeMEI-informacoes-textos-txt3'>Em uma pesquisa realizada pela VisuMEI, 74% dos MEIS entrevistados realataram ter dificuldades com suas vendas pela falta de divulgação</p>
            </div>

            <div className='homeMEI-informacoes-img'>
                <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/dcd8cd37a6b00667c0118e6c14ca477b0693843f/homeMEI/informacoes-img.svg" alt='img infos' />
            </div>

        </div>
    );
}

export default Informacoes;