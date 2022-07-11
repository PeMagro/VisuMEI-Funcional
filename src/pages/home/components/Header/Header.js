import './Header.css';

function Header() {
    return(
        <div className='home-header'>

            <div className='home-header-topo'>

                <div className='home-header-topo-logo'>
                    <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/dcd8cd37a6b00667c0118e6c14ca477b0693843f/home/logo.svg" alt='logo visumei' />
                </div>

                <div className='home-header-topo-links'>
                    <nav className='home-header-topo-links-nav'>
                        <a className='header-links-normal' href="/servicos">Serviços</a>
                        <a className='header-links-normal' href="/produtos">Produtos</a>
                        <a className='header-links-normal' href="/como-funciona">Como Funciona</a>
                        <a className='header-links-normal' href="/mei">Para MEI</a>
                        <a className='header-links-login'  href="/">Log-in</a>
                    </nav>
                </div>

            </div>

            <div className='home-header-conteudo'>

                <div className='home-header-conteudo-textos'>
                    <div className='home-header-conteudo-textos-cima'>
                        <p className='home-header-conteudo-textos-cima-titulo'>Aqui você encontra trabalhos de diversos microempreendedores e ainda consegue saber os que estão mais próximos.</p>
                    </div>
                    
                    <div className='home-header-conteudo-textos-baixo'>
                        <p className='home-header-conteudo-textos-baixo-txt1'><a href='/'>Preciso de um produto ou serviço</a></p>
                        <p className='home-header-conteudo-textos-baixo-txt2'><a href='mei'>Quero anunciar meu produto ou serviço</a></p>
                    </div>
                </div>

                <div className='home-header-conteudo-img'>
                    <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/dcd8cd37a6b00667c0118e6c14ca477b0693843f/home/img-header.svg" alt='imagem header' />
                </div>

            </div>

        </div>
    );
}

export default Header;