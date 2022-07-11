import './Beneficios.css';

function Beneficios() {
    return (
        <div className='cnpj-beneficios'>

            <div className='cnpj-beneficios-textos'>
                <p className='cnpj-beneficios-textos-titulo'>Veja os benefícios</p>
                <div className='cnpj-beneficios-textos-topicos'>
                    <p><span>•</span> &nbsp; É rápido e gratuito;</p>
                    <p><span>•</span> &nbsp; Baixo Custo mensal de tributos (INSS, ISS e ICMS) em valores fixos;</p>
                    <p><span>•</span> &nbsp; CNPJ, dispensa de alvará e licença para suas atividades;</p>
                    <p><span>•</span> &nbsp; Terá acesso a produtos e serviços bancários como crédito;</p>
                    <p><span>•</span> &nbsp; Poderá vender para o governo;</p>
                    <p><span>•</span> &nbsp; Vai poder emitir nota fiscal.</p>
                </div>
            </div>

            <div className='cnpj-beneficios-img'>
                <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/22971ab1c5d9673733164ae618b5d174814cd96c/CNPJ/beneficios-img.svg" alt='' />
            </div>

        </div>
    );
}

export default Beneficios;