import './Como_funcionaM_cadastro.css';

function ComoFMCadastro (){
    return(
        <div className="Como_funcionaM_cadastro">
        <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/fdaa05bb196d6807171a84ba26000833b83c0662/Como%20Funciona(MEI)/Como_funciona_mei_cadastro.svg" />
        <div className="Como_funcionaM_cadastro_align">
            <p className="Como_funcionaM_cadastro_titulo">Faça seu cadastro em nosso site</p>
            <p className="Como_funcionaM_cadastro_text">Cadastre-se com o seu email, crie uma senha e coloque as suas informações e as do seu negócio para ter seu perfil personalizado aqui na VisuMEI  </p>
            <button className="Como_funcionaM_cadastro_button"><a href="/login">Cadastre-se agora</a></button>
        </div>

    </div>
    )
}
export default ComoFMCadastro