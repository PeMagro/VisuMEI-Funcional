import './Header.css';

function Header() {
    return(
        <div className='homeMEI-header'>

            <div className='homeMEI-header-menu'>

                <div className='homeMEI-header-menu-logo'>
                    <a href='/'><img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/dcd8cd37a6b00667c0118e6c14ca477b0693843f/homeMEI/logo.svg" alt='logo visumei' /></a>
                </div>

                <div className='homeMEI-header-menu-links'>
                    <nav className='homeMEI-header-menu-links-nav'>
                        <a className='header-links-normal' href="/servicos">Serviços</a>
                        <a className='header-links-normal' href="/produtos">Produtos</a>
                        <a className='header-links-normal' href="/como-funciona">Como Funciona</a>
                        <a className='header-links-atual' href="/mei">Para MEI</a>
                        <a className='header-links-login' href="/mei">Log-in</a>
                    </nav>
                </div>

            </div>

            <div className='homeMEI-header-conteudo'>

                <div className='homeMEI-header-conteudo-img'>
                    <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/dcd8cd37a6b00667c0118e6c14ca477b0693843f/homeMEI/img-header.svg" alt='imagem header' />
                </div>

                <div className='homeMEI-header-conteudo-textos'>
                    <div className='homeMEI-header-conteudo-textos-cima'>
                        <p className='homeMEI-header-conteudo-textos-cima-titulo'>Baixa visibilidade?</p>
                        <p className='homeMEI-header-conteudo-textos-cima-descri'>Tenha aqui o reconhecimento que o seu negócio merece para alavancar suas vendas.</p>
                    </div>

                    <div className='homeMEI-header-conteudo-textos-baixo'>
                        <p className='homeMEI-header-conteudo-textos-baixo-txt1'><a href='/'>Estou em busca de um produto ou serviço</a></p>
                        <p className='homeMEI-header-conteudo-textos-baixo-txt2'><a href='/mei'>Quero divulgar meu produto ou serviço</a></p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Header;