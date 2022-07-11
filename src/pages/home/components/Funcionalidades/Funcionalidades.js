import './Funcionalidades.css';

function Funcionalidades() {
    return(
        <div className='home-funcionalidades'>

            <div className='home-funcionalidades-container'>

                <div className='home-funcionalidades-container-geo'>
                    <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/dcd8cd37a6b00667c0118e6c14ca477b0693843f/home/geolocal-img.svg" alt="" />
                    <p className='funcionalidades-titulo'>Geolocalização</p>
                    <p className='funcionalidades-descri'>Os MEIS mais próximos de você</p>
                    <button className='funcionalidades-vermais'><a href='/como-funciona'>Ver mais</a></button>
                </div>

                <div className='home-funcionalidades-container-servicos'>
                    <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/dcd8cd37a6b00667c0118e6c14ca477b0693843f/home/servicos-img.svg" alt="" />
                    <p className='funcionalidades-titulo'>Serviços</p>
                    <p className='funcionalidades-descri'>Diversos serviços disponíveis</p>
                    <button className='funcionalidades-vermais'><a href='/servicos'>Ver mais</a></button>
                </div>

                <div className='home-funcionalidades-container-produtos'>
                    <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/dcd8cd37a6b00667c0118e6c14ca477b0693843f/home/produtos-img.svg" alt="" />
                    <p className='funcionalidades-titulo'>Produtos</p>
                    <p className='funcionalidades-descri'>Diversos produtos disponíveis</p>
                    <button className='funcionalidades-vermais'><a href='/produtos'>Ver mais</a></button>
                </div>

                <div className='home-funcionalidades-container-paramei'>
                    <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/dcd8cd37a6b00667c0118e6c14ca477b0693843f/home/paramei-img.svg" alt="" />
                    <p className='funcionalidades-titulo'>Para quem é MEI</p>
                    <p className='funcionalidades-descri'>Venha divulgar o seu trabalho aqui</p>
                    <button className='funcionalidades-vermais'><a href='/mei'>Ver mais</a></button>
                </div>

            </div>

        </div>
    );
}

export default Funcionalidades;