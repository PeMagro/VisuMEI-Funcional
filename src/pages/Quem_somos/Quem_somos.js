import FooterS from "../../components/FooterS/FooterS";

import './Quem_somos.css';

function QuemSomos() {
    return (
        <div className="Quem_somos">
            <div className="Quem_somos_header">
                <a href='/'><img className="Quem_somos_logo_header" src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/eca9ce57b103a0c98368a2495471963e362d49b3/QuemSomos/Quem_somos_logo_header.svg" /></a>
                <nav className="Quem_somos_nav_header">
                    <div className="Quem_somos_link"><a href="servicos">Serviços</a></div>
                    <div className="Quem_somos_link"><a href="produtos">Produtos</a></div>
                    <div className="Quem_somos_link_2"><a href="como-funciona">Como funciona</a></div>
                    <div className="Quem_somos_link"><a href="para-mei">Para MEI</a></div>
                    <div className="Quem_somos_login"><a href="login">Login</a></div>
                </nav>
            </div>

            <div className="Quem_somos_oque">
                <p className="Quem_somos_oque_titulo">O que é a VisuMEI ?</p>
                <div className="Quem_somos_oque_align">
                    <p className="Quem_somos_oque_text">A VisuMEI surgiu para o projeto “Demoday” do Instituto Proa. A plataforma foi desenvolvida com o intuito de ajudar microempreendedores, principalmente da periferia, a aumentarem suas vendas com a divulgação do seu trabalho. Faz parte do nosso objetivo, também, estimulá-los a se tornarem pessoas jurídicas para estarem dentro da legalidade do país, além de obterem diversos benefícios com isso.</p>
                    <img className="Quem_somos_oque_img" src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/eca9ce57b103a0c98368a2495471963e362d49b3/QuemSomos/Quem_somos_oque.svg" />
                </div>
            </div>

            <div className="Quem_somos_criacao">
                <p className="Quem_somos_criacao_titulo">Quem criou a VisuMEI ?</p>
                <p className="Quem_somos_criacao_text">A VisuMEI foi criada por 7 estudantes de programação web Java do Instituto Proa: Ana Beatriz Laurenzano, Bruno Nogueira, Eduardo Costa, Gabriel de Jesus, Mariana dos Santos, Pedro Victor de Oliveira e Richard Chagas.</p>
                <div className="Quem_somos_criacao_integrantes1">
                    <div className="Criacao_integrante">
                        <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/eca9ce57b103a0c98368a2495471963e362d49b3/QuemSomos/Quem_criacao_ana.svg" />
                        <p>Ana Beatriz</p><p>Laurenzano</p>
                    </div>
                    <div className="Criacao_integrante">
                        <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/eca9ce57b103a0c98368a2495471963e362d49b3/QuemSomos/Quem_criacao_bruno.svg" />
                        <p>Bruno</p><p>Nogueira</p>
                    </div>
                    <div className="Criacao_integrante">
                        <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/eca9ce57b103a0c98368a2495471963e362d49b3/QuemSomos/Quem_criacao_edu.svg" />
                        <p>Eduardo</p><p>Costa</p>
                    </div>
                    <div className="Criacao_integrante">
                        <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/eca9ce57b103a0c98368a2495471963e362d49b3/QuemSomos/Quem_criacao_gabriel.svg" />
                        <p>Gabriel</p><p>de Jesus</p>
                    </div>
                </div>
                <div className="Quem_somos_criacao_integrantes2">
                    <div className="Criacao_integrante">
                        <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/eca9ce57b103a0c98368a2495471963e362d49b3/QuemSomos/Quem_criacao_mari.svg" />
                        <p>Mariana</p><p>dos Santos</p>
                    </div>
                    <div className="Criacao_integrante">
                        <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/eca9ce57b103a0c98368a2495471963e362d49b3/QuemSomos/Quem_criacao_pedro.svg" />
                        <p>Pedro</p><p>de Oliveira</p>
                    </div>
                    <div className="Criacao_integrante">
                        <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/eca9ce57b103a0c98368a2495471963e362d49b3/QuemSomos/Quem_criacao_richard.svg" />
                        <p>Richard</p><p>Chagas</p>
                    </div>
                </div>
                <div className="Quem_criacao_img">
                    <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/eca9ce57b103a0c98368a2495471963e362d49b3/QuemSomos/Quem_criacao_vm.svg" /></div>
            </div>

            <FooterS />
        </div>
    )
}
export default QuemSomos