import './SaberMais.css';

function SaberMais() {
    return(
        <div className='cnpj-container'>

            <div className='cnpj-saber'>
                <p className='cnpj-saber-titulo'>Quer saber mais sobre microempreendedorismo?</p>

                <div className='cnpj-saber-textos'>
                    <p>Conheça o <a href='https://sebrae.com.br/sites/PortalSebrae'>SEBRAE</a> - um agente na capacitação e promoção do desenvolvimento aos pequenos negócios de todo o país.</p>
                    <p>Nesse site você encontrará informações completas sobre MEI e diversos cursos sobre empreendimento.</p>
                </div>

                <div className='cnpj-saber-botoes'>
                    <button><a href='https://www.sebrae.com.br/sites/PortalSebrae/cursosonline' target='blank'>Cursos</a></button>
                </div>
            </div>
            
            <div className='cnpj-saber-img'>
                <img alt='' />
            </div>

        </div>
    );
}

export default SaberMais;