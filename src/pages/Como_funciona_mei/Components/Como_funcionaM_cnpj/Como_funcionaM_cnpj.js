import './Como_funcionaM_cnpj.css';

function ComoFMCnpj (){
    return(
        <div className="Como_funcionaM_cnpj">
            <img className="Como_funcionaM_cnpj_img" src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/fdaa05bb196d6807171a84ba26000833b83c0662/Como%20Funciona(MEI)/Como_funciona_mei_cnpj.svg" />
            <div className="Como_funcionaM_cnpj_align">
                <p className="Como_funcionaM_cnpj_titulo">CNPJ é GRATUITO !</p>
                <ul>
                <li className="Como_funcionaM_cnpj_li"><p>Para ter sua divulgação aqui na VisuMEI, você precisa ter um CNPJ</p></li>
                <li className="Como_funcionaM_cnpj_li"><p>Não se preocupe se não tiver, clique no botão abaixo para saber como tirá-lo e estar dentro da legalidade do país </p></li>
                <li className="Como_funcionaM_cnpj_li"><p>É rápido, fácil e GRATUITO </p></li>
                <div className="Como_funcionaM_cnpj_buttonAlign">
                    <button className="Como_funcionaM_cnpj_button"><a href="/CNPJ">Saiba Mais</a></button>
                </div>
                </ul>
            </div>
            
        </div>
    )
}
export default ComoFMCnpj