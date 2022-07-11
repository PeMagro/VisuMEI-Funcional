import './Infos.css';

function Infos() {
    return (
        <div className='cnpj-infos'>

            <div className='cnpj-infos-textos'>
                <p className='cnpj-infos-textos-titulo'>Tirar o CNPJ é rápido e gratuito!</p>
                <p className='cnpj-infos-textos-descri'>Dentro da legalidade, um MEI tem que ter um CNPJ, e por questões de segurança, aqui na VisuMEI é necessário CNPJ para se cadastrar.</p>
            </div>

            <div className='cnpj-infos-img'>
                <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/22971ab1c5d9673733164ae618b5d174814cd96c/CNPJ/infos-img.svg" alt='homem com documentos em dia e fazendo sinal de positividade' />
            </div>

        </div>
    );
}

export default Infos;