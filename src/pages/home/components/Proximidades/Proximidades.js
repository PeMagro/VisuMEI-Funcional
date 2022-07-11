import './Proximidades.css';

function Proximidades() {
    return(
        <div className='home-proximidades'>

            <div className='home-proximidades-img'>
                <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/dcd8cd37a6b00667c0118e6c14ca477b0693843f/home/proximidades-img.svg" alt='imagem proximidades' />
            </div>

            <div className='home-proximidades-conteudo'>
                <p className='home-proximidades-conteudo-titulo'>Proximidades</p>
                <p className='home-proximidades-conteudo-descri'>Utilizando a sua localização atual, mostraremos os microempreendedores mais próximos de você, em um raio de até 5 Km.</p>
            </div>

        </div>
    );
}

export default Proximidades;