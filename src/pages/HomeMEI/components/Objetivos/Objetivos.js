import './Objetivos.css';

function Objetivos() {
    return(
        <div className='homeMEI-objetivos'>

            <div className='homeMEI-objetivos-img'>
                <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/dcd8cd37a6b00667c0118e6c14ca477b0693843f/homeMEI/objetivo-img.svg" alt='homem segurando um troféu e uma maleta no topo' />
            </div>

            <div className='homeMEI-objetivos-textos'>
                <p className='homeMEI-objetivos-textos-titulo'>Alcance os seus objetivos</p>
                <p className='homeMEI-objetivos-textos-descri'>Agora você conseguirá alavancar seu negócio, tendo mais visibilidade ao seus produtos ou serviços e sem custos algum.</p>
            </div>

        </div>
    );
}

export default Objetivos;