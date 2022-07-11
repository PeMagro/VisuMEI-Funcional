import './Favoritos.css';

function Favoritos() {
    return(
        <div className='home-favoritos'>

            <div className='home-favoritos-conteudo'>
                <p className='home-favoritos-conteudo-titulo'>Os seus favoritos!</p>
                <p className='home-favoritos-conteudo-descri'>Adicione a sua lista de favoritos, localizada no seu perfil, o produto ou serviço que gostar.</p>
                <button className='home-favoritos-conteudo-cadastre'>Cadastre-se</button>
            </div>

            <div className='home-favoritos-img'>
                <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/dcd8cd37a6b00667c0118e6c14ca477b0693843f/home/favoritos-img.svg" alt='imagem favoritos' />
            </div>

        </div>
    );
}

export default Favoritos;