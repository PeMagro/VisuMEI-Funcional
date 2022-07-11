import './Footer.css';

function Footer() {
    return (
        <div className='cnpj-footer'>

            <div className='cnpj-footer-conteudo'>
                <div className='cnpj-footer-conteudo-redes'>
                    <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/22971ab1c5d9673733164ae618b5d174814cd96c/CNPJ/facebook.svg" alt='facebook' />
                    <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/5097a7183d7b92a043001e7efc2d61bc593a05b5/CNPJ/instagram.svg" alt='instagram' />
                    <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/22971ab1c5d9673733164ae618b5d174814cd96c/CNPJ/linkedin.svg" alt='linkedin' />
                </div>

                <div className='cnpj-footer-conteudo-infos'>
                    <p>VisuMEI © 2022 &nbsp; | &nbsp; Política de Privacidade &nbsp; | &nbsp; Quem Somos</p>
                </div>
            </div>

        </div>
    );
}

export default Footer;