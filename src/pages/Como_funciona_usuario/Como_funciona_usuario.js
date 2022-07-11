import FooterS from '../../components/FooterS/FooterS';

import './Como_funciona_usuario.css';

function ComoFuncionaUsuario() {
    return (
        <div className="Como_funciona_usuario">

            <div className="Como_funcionaU_header">
                <a href='/'><img className="Como_funcionaU_logo_header" src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/adb35ab17d89a66adb35775990aa8aeb1e88c9a4/Como%20Funciona/Logotipo.svg" alt='' /></a>
                <nav className="Como_funcionaU_nav_header">
                    <div className="Como_funcionaU_link"><a href="/servicos">Serviços</a></div>
                    <div className="Como_funcionaU_link"><a href="/produtos">Produtos</a></div>
                    <div className="Como_funcionaU_link_colorido"><a href="/como-funciona">Como funciona</a></div>
                    <div className="Como_funcionaU_link"><a href="/como-funciona-mei">Para MEI</a></div>
                    <div className="Como_funcionaU_login"><a href="/login">Login</a></div>
                </nav>
            </div>

            <div className="Como_funcionaU_topo">
                <p className="Como_funcionaU_titulo">Como funciona a VisuMEI?</p>
                <p className="Como_funcionaU_text">Aqui você encontra produtos e serviços de acordo com as suas necessidades</p>
                <div className="Como_funcionaU_topo_align">
                    <div className="Como_funcionaU_topo_botao">
                        <p><a href='como-funciona'>Estou em busca de um produto ou serviço</a></p>
                    </div>
                    <p className="Como_funcionaU_text2"><a href='como-funciona-mei'>Quero anunciar um produto ou serviço</a></p>
                </div>
            </div>

            <div className="Como_funcionaU_cadastro">
                <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/cec95b064091ff461a2350b1e8a33d00bf92a21c/Como%20Funciona/Como_funciona_usuario_cadastro.svg" />
                <div className="Como_funcionaU_cadastro_align">
                    <p className="Como_funcionaU_cadastro_titulo">Faça seu cadastro em nosso site</p>
                    <p className="Como_funcionaU_cadastro_text">Cadastre-se com o seu email e crie uma senha para ter seu perfil personalizado aqui na VisuMEI </p>
                    <button className="Como_funcionaU_cadastro_button"><a href='/login'>Cadastre-se agora</a></button>
                </div>
            </div>

            <div className="Como_funcionaU_escolha">
                <div className="Como_funcionaU_escolha_align">
                    <p className="Como_funcionaU_escolha_titulo">Escolha a aba Serviços ou Produtos</p>
                    <ul>
                        <li className="Como_funcionaU_escolha_li"><p>Utilize os filtros quando quiser especificar sua busca</p></li>
                        <li className="Como_funcionaU_escolha_li2"><p>Na barra de pesquisa você pode procurar pelo que quer de forma mais precisa</p></li>
                        <li className="Como_funcionaU_escolha_li3"><p>Quando achar o que procura, é só entrar em contato com o MEI através da forma disponibilizada por ele</p></li>
                    </ul>
                </div>
                <img className="Como_funcionaU_escolha_img" src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/cec95b064091ff461a2350b1e8a33d00bf92a21c/Como%20Funciona/Como_funciona_usuario_escolha.svg" />
            </div>

            <div className="Como_funcionaU_local">
                <img className="Como_funcionaU_local_gif" src="https://github.com/EduardoOliveiraDev/ImagesVisuMEI/blob/main/Como%20Funciona/Como_funciona_usuario_local.gif?raw=true" />
                <div className="Como_funcionaU_local_align">
                    <p className="Como_funcionaU_local_titulo">Os mais próximos da sua região</p>
                    <p className="Como_funcionaU_local_text">Utilizaremos a sua localização atual e real para exibir em primeiro lugar, nos serviços e produtos, os microempreendedores mais próximos de você, o que facilitará suas buscas </p>
                </div>
            </div>

            <div className="Como_funcionaU_classifique">
                <div className="Como_funcionaU_classifique_align">
                    <p className="Como_funcionaU_classifique_titulo">Classifique os microempreendedores!</p>
                    <ul>
                        <li className="Como_funcionaU_classifique_li"><p>Depois que tiver sua primeira experiência com o trabalho de algum microempreendedor, o avalie e deixe seu comentário</p></li>
                        <li className="Como_funcionaU_classifique_li"><p>Sua opinião é muito importante para a dinamicidade da VisuMei e ajudará o MEI a evoluir cada vez mais</p></li>
                    </ul>
                </div>
                <img className="Como_funcionaU_classifique_img" src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/cec95b064091ff461a2350b1e8a33d00bf92a21c/Como%20Funciona/Como_funciona_usuario_classifique.svg" />
            </div>

            <FooterS />
        </div>
    )
}
export default ComoFuncionaUsuario