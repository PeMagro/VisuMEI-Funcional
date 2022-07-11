import './Header.css';

function Header() {
    return (
        <div className='cnpj-header'>

            <div className='cnpj-header-logo'>
                <a href='/'><img
                    src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/efcb8bfdefc03d0fb5005edd5b15e47c196faecd/Header_ProdutosServi%C3%A7os/LogoVisu.svg"
                    alt='logo visumei' /></a>
            </div>

            <div className='cnpj-header-links'>
                <nav className='cnpj-header-links-nav'>
                    <a className='cnpj-header-links-normal' href='servicos'>Serviços</a>
                    <a className='cnpj-header-links-normal' href='produtos'>Produtos</a>
                    <a className='cnpj-header-links-normal' href='como-funciona'>Como Funciona</a>
                    <a className='cnpj-header-links-normal' href='para-mei'>Para MEI</a>
                    <a className='cnpj-header-links-login'  href='login'>Log-in</a>
                </nav>
            </div>

        </div>
    );
}

export default Header;