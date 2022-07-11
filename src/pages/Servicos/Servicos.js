import HeaderS from "../../components/HeaderS/HeaderS";
import ServicosBarra from "../../components/Servicos_barraBusca/Servicos_barraBusca";
import ServicosFiltro from "../../components/ServicosFiltro/Servicos_filtro";
import FooterS from "../../components/FooterS/FooterS";

import './Servicos.css';

function Servicos() {
    return (
        <div className="Servicos">
            <HeaderS />
            <ServicosBarra />
            <ServicosFiltro />

            <div className="Servicos_mei">
                <div className="Servicos_mei_align">
                    <div className="Servicos_mei_informacoes_esquerda">
                        <img
                            className="Servicos_mei_img_perfil"
                            src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/5ed04c001dde0cf1b47007ef562447db2c1c0971/Servicos/Servicos_mei_1.svg"
                            alt="Imagem de perfil do mei" />
                        <div className="Servicos_mei_estrelas">
                            <img
                                alt="Imagem de uma estrela"
                                src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/403227015b335d431c05f2c31d664d3f4cfdffc8/Produtos/Servicos_mei_estrela.svg"
                                className="Produtos_estrela" />
                            <img
                                alt="Imagem de uma estrela"
                                src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/403227015b335d431c05f2c31d664d3f4cfdffc8/Produtos/Servicos_mei_estrela.svg"
                                className="Produtos_estrela" />
                            <img
                                alt="Imagem de uma estrela"
                                src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/403227015b335d431c05f2c31d664d3f4cfdffc8/Produtos/Servicos_mei_estrela.svg"
                                className="Produtos_estrela" />
                            <img
                                alt="Imagem de uma estrela"
                                src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/403227015b335d431c05f2c31d664d3f4cfdffc8/Produtos/Servicos_mei_estrela.svg"
                                className="Produtos_estrela" />
                            <img
                                alt="Imagem de uma estrela"
                                src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/403227015b335d431c05f2c31d664d3f4cfdffc8/Produtos/Servicos_mei_estrela.svg"
                                className="Produtos_estrela" />
                            <p>5</p>
                        </div>
                        <p className="Servicos_mei_nome">Winderson Melo</p>
                        <p className="Servicos_mei_nome_negocio">Winderson designs</p>
                        <div className="Servicos_mei_local">
                            <img src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/403227015b335d431c05f2c31d664d3f4cfdffc8/Produtos/Servicos_mei_local.svg" />
                            <p className="Servicos_mei_cidade">São Paulo,</p><p className="Servicos_mei_bairro">Jardim Tex</p>
                        </div>
                        <button className="Servicos_mei_botao"><a href="/produtos/profileMEI">Ver mais</a></button>
                    </div>
                    <div className="Servicos_mei_informacoes_direita">
                        <p className="Servicos_mei_titulo">Serviços disponíneis</p>
                        <div className="Servicos_mei_trabalho_img">
                            <img
                                src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/5ed04c001dde0cf1b47007ef562447db2c1c0971/Servicos/Servicos_mei_1_trabalho.svg"
                                alt="Imagem de um site" />
                            <img
                                className="Servicos_servico2_img"
                                src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/5ed04c001dde0cf1b47007ef562447db2c1c0971/Servicos/Servicos_mei_1_trabalho2.svg"
                                alt="Imagem 3d de um cachorro com ser humano" />
                        </div>
                        <div className="Servicos_mei_informacoes">
                            <div className="Sevicos_mei_servico1">
                                <p className="Servicos_mei_preco">a partir de R$300,00</p>
                                <p className="Servicos_mei_nome_servico">Layout de site</p>
                            </div>
                            <div className="Servicos_mei_servico2">
                                <p className="Servicos_mei_preco">a partir de R$12,00</p>
                                <p className="Servicos_mei_nome_servico">Vetores em 3D</p>
                            </div>
                        </div>
                        <div className="Servicos_mei_tags">
                            <p>Tags: </p>
                            <ul type="circle">
                                <li>Design</li>
                                <li>Ux</li>
                                <li>Ui</li>
                            </ul>
                        </div>
                        <div className="Servicos_mei_sociais">
                            <img src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/8b50e51ca898c5ef28e1d48538055860258e0596/Produtos/InstaIcon.svg" />
                            <p>@winderson_melo21</p>
                            <img src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/8b50e51ca898c5ef28e1d48538055860258e0596/Produtos/FaceIcon.svg" />
                            <p>Winderson Melo</p>

                        </div>

                    </div>

                </div>
                <div className="Servicos_mei_align2">
                    <div className="Servicos_mei_informacoes_esquerda">
                        <img
                            className="Servicos_mei_img_perfil"
                            src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/74751675f87d8601866964a80561e2b7d451f7b8/Servicos/Servicos_perfil.svg"
                            alt="Foto de perfil" />
                        <div className="Servicos_mei_estrelas">
                            <img
                                alt="Imagem de uma estrela"
                                src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/403227015b335d431c05f2c31d664d3f4cfdffc8/Produtos/Servicos_mei_estrela.svg"
                                className="Produtos_estrela" />
                            <img
                                alt="Imagem de uma estrela"
                                src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/403227015b335d431c05f2c31d664d3f4cfdffc8/Produtos/Servicos_mei_estrela.svg"
                                className="Produtos_estrela" />
                            <img
                                alt="Imagem de uma estrela"
                                src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/403227015b335d431c05f2c31d664d3f4cfdffc8/Produtos/Servicos_mei_estrela.svg"
                                className="Produtos_estrela" />
                            <img
                                alt="Imagem de uma estrela"
                                src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/403227015b335d431c05f2c31d664d3f4cfdffc8/Produtos/Servicos_mei_estrela.svg"
                                className="Produtos_estrela" />

                            <p>4</p>
                        </div>
                        <p className="Servicos_mei_nome">Leticia Fagundes</p>
                        <p className="Servicos_mei_nome_negocio">Leticia Nails</p>
                        <div className="Servicos_mei_local">
                            <img src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/403227015b335d431c05f2c31d664d3f4cfdffc8/Produtos/Servicos_mei_local.svg" />
                            <p className="Servicos_mei_cidade">São Paulo,</p><p className="Servicos_mei_bairro">Jardim Flor</p>
                        </div>
                        <button className="Servicos_mei_botao" href="/produtos/profileMEI"><a href="/produtos/profileMEI">Ver mais</a></button>
                    </div>
                    <div className="Servicos_mei_informacoes_direita">
                        <p className="Servicos_mei_titulo">Serviços disponíneis</p>
                        <div className="Servicos_mei_trabalho_img">
                            <img
                                src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/5ed04c001dde0cf1b47007ef562447db2c1c0971/Servicos/Servicos_mei_2_trabalho.svg"
                                alt="Imagem de unhas" />
                            <img
                                className="Servicos_servico2_img"
                                src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/5ed04c001dde0cf1b47007ef562447db2c1c0971/Servicos/Servicos_mei_2_trabalho2.svg"
                                alt="Imagem de unhas personalizadas" />
                            <img
                                className="Servicos_servico2_img"
                                src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/5ed04c001dde0cf1b47007ef562447db2c1c0971/Servicos/Servicos_mei_2_trabalho3.svg"
                                alt="Imagem de um serviço de unhas" />
                        </div>
                        <div className="Servicos_mei_informacoes">
                            <div className="Sevicos_mei_servico1">
                                <p className="Servicos_mei_preco">a partir de R$60,00</p>
                                <p className="Servicos_mei_nome_servico">Nail art</p>
                            </div>
                        </div>
                        <div className="Servicos_mei_tags">
                            <p>Tags: </p>
                            <ul type="circle">
                                <li>Manicure</li>
                                <li>Unhas</li>
                                <li>Nail art</li>
                            </ul>
                        </div>
                        <div className="Servicos_mei_sociais">
                            <img src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/8b50e51ca898c5ef28e1d48538055860258e0596/Produtos/InstaIcon.svg" />
                            <p>@fagundes_nails</p>


                        </div>

                    </div>

                </div>
            </div>

            <FooterS />

        </div>
    )
}
export default Servicos
