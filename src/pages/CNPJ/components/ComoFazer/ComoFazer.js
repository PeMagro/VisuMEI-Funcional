import './ComoFazer.css';

function ComoFazer() {
    return(
        <div className='cnpj-comofazer'>

            <p className='cnpj-comofazer-titulo'>E como fazer para tirar o CNPJ?</p>
            <div className='cnpj-comofazer-topicos'>
                <p><span>1.</span> Para virar MEI, basta fazer um cadastro bem fácil no Portal do Emprendedor;</p>
                <p><span>2.</span> Em poucos minutos, você consegue o seu Cadastro Nacional de Pessoas Jurídicas (CNPJ);</p>
                <p><span>3.</span> E terá mais facilidades e benefícios ao seu empreendimento e poederá divulgar seu trabalho conosco.</p>
            </div>
            <button className='cnpj-comofazer-btn'><a href='https://mei.receita.economia.gov.br/inscricao/login' target='blank'>Acessar</a></button>

        </div>
    );
}

export default ComoFazer;