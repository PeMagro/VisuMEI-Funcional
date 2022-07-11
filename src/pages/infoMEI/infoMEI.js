import React from 'react';
import './infoMEI.css';
import HeaderS from "../../components/HeaderS/HeaderS";
import FooterS from "../../components/FooterS/FooterS";

function ProdutosInfo() {
    return (
        <section>
            <HeaderS />
            <div className='PI-Body'>
                <div className='PI-Container'>
                    <section className='PI-ProfileInfo'>
                        <div className='PI-Profile-Container1'>
                            <div className='PI-Img'><img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/8d7f4d535ad0f387ba0a1f1e73638d52e6e21fa0/ProfileMEI/Profile.svg" className="PI-ImgProfile" /></div>
                            <div className='PI-Profile-Bloco1'>
                                <p className='PI-Profile-Name'>Paloma Valenca</p>
                                <div className='PI-Profile-Star'>
                                    <img
                                        alt="Imagem de uma estrela"
                                        src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/403227015b335d431c05f2c31d664d3f4cfdffc8/Produtos/Servicos_mei_estrela.svg"
                                        className="Produtos_estrela"
                                    />
                                    <img
                                        alt="Imagem de uma estrela"
                                        src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/403227015b335d431c05f2c31d664d3f4cfdffc8/Produtos/Servicos_mei_estrela.svg"
                                        className="Produtos_estrela"
                                    />
                                    <img
                                        alt="Imagem de uma estrela"
                                        src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/403227015b335d431c05f2c31d664d3f4cfdffc8/Produtos/Servicos_mei_estrela.svg"
                                        className="Produtos_estrela"
                                    />
                                    <img
                                        alt="Imagem de uma estrela"
                                        src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/403227015b335d431c05f2c31d664d3f4cfdffc8/Produtos/Servicos_mei_estrela.svg"
                                        className="Produtos_estrela"
                                    />






                                </div>
                                <img alt="imagem que simboliza a localização do comercio"
                                    src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/403227015b335d431c05f2c31d664d3f4cfdffc8/Produtos/Servicos_mei_local.svg"
                                    className='PI-Locate' />
                                <p className='PI-Locate-Name'>São Paulo, Jardim Tex</p>
                                <img
                                    alt="botão para acessar o facebook do anunciante"
                                    src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/8b50e51ca898c5ef28e1d48538055860258e0596/Produtos/FaceIcon.svg"
                                    className='PI-socialmedia-FB' />
                                    <p className='PI-socialmedia-link'>Bolos da Paloma</p>
                                <img
                                    alt="botão para acessar o instagram do anunciante"
                                    src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/8b50e51ca898c5ef28e1d48538055860258e0596/Produtos/InstaIcon.svg"
                                    className='PI-socialmedia-Insta' />
                                    <p className='PI-socialmedia-link'>@paloma_bolos22</p>
                            </div>
                            <h2 className='PI-Left-title'> Bolos da Paloma</h2>
                        </div>

                        <div className='PI-Profile-Container2'>
                            <h2>
                                Sobre mim
                            </h2>
                            <p>
                                Meu nome é Paloma e trabalho em casa fazendo bolos e tortas de vários tipos. Faço bolos indivuduais, para pronta entrega e também para festas, nesse caso somente com encomenda uma semana antes. Meus trabalhos para festas são feitos com pasta americana ou chantilly, ficando a critério do cliente. Se quiser saber mais sobre o meu trabalho ou realizar uma encomenda é só entrar em contato.
                            </p>
                        </div>
                    </section>

                    <section className='PI-Publi'>
                        <div className='PI-Anuncio1'>
                            <div className='PI-Anuncio-Container1'>
                                <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/8d7f4d535ad0f387ba0a1f1e73638d52e6e21fa0/ProfileMEI/Vector.svg" alt='' />
                                <div> Torta de blueberry - <span className='PI-Price'> R$60,00 </span></div>
                            </div>

                            <div className='PI-Anuncio-Container2'>
                                <img
                                    src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/8d7f4d535ad0f387ba0a1f1e73638d52e6e21fa0/ProfileMEI/1Bolo1.svg"
                                    alt='Imagem de bolo'
                                    className='PI-Anuncio-Img'
                                />

                                <img
                                    src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/8d7f4d535ad0f387ba0a1f1e73638d52e6e21fa0/ProfileMEI/1Bolo2.svg"
                                    alt='Imagem de bolo'
                                    className='PI-Anuncio-Img'
                                />

                                <img
                                    src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/8d7f4d535ad0f387ba0a1f1e73638d52e6e21fa0/ProfileMEI/1Bolo3.svg"
                                    alt='Imagem de bolo'
                                    className='PI-Anuncio-Img'
                                />

                                <img
                                    src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/8d7f4d535ad0f387ba0a1f1e73638d52e6e21fa0/ProfileMEI/1Bolo3.svg"
                                    alt='Imagem de bolo'
                                    className='PI-Anuncio-Img'
                                />
                            </div>

                            <div className='PI-Anuncio-Container3'>
                                <h3 className='PI-Anuncio-Desc'>
                                    Torta de blueberry com recheio de chocolate e creme branco em cima
                                </h3>
                            </div>
                        </div>

                        <div className='PI-Anuncio2'>
                            <div className='PI-Anuncio-Container1'>
                                <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/8d7f4d535ad0f387ba0a1f1e73638d52e6e21fa0/ProfileMEI/Vector.svg" />
                                <div> Torta de blueberry - <span className='PI-Price'> R$60,00 </span></div>
                            </div>

                            <div className='PI-Anuncio-Container2'>
                                <img
                                    src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/8d7f4d535ad0f387ba0a1f1e73638d52e6e21fa0/ProfileMEI/2Bolo1.svg"
                                    alt='Imagem de bolo'
                                    className='PI-Anuncio-Img'
                                />

                                <img
                                    src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/8d7f4d535ad0f387ba0a1f1e73638d52e6e21fa0/ProfileMEI/2Bolo2.svg"
                                    alt='Imagem de bolo'
                                    className='PI-Anuncio-Img'
                                />

                                <img
                                    src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/8d7f4d535ad0f387ba0a1f1e73638d52e6e21fa0/ProfileMEI/2Bolo3.svg"
                                    alt='Imagem de bolo'
                                    className='PI-Anuncio-Img'
                                />

                                <img
                                    src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/8d7f4d535ad0f387ba0a1f1e73638d52e6e21fa0/ProfileMEI/2Bolo1.svg"
                                    alt='Imagem de bolo'
                                    className='PI-Anuncio-Img'
                                />
                            </div>

                            <div className='PI-Anuncio-Container3'>
                                <h3 className='PI-Anuncio-Desc'>
                                    Torta de blueberry com recheio de chocolate e creme branco em cima
                                </h3>
                            </div>
                        </div>
                    </section>

                    <section className='PI-Contato'>
                        <div className='PI-Contato-Left'>
                            <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/8d7f4d535ad0f387ba0a1f1e73638d52e6e21fa0/ProfileMEI/Contato.svg" />
                        </div>
                        <div className='PI-Contato-Right'>
                            <h3>Entre em contato comigo</h3>

                            <p className='PI-Contato-Right1'>
                                <span>Whatsapp:</span> 11 98866-7755</p>
                            <p className='PI-Contato-Right2'>
                                <span>Email:</span> emilysantos@gmail.com   </p>
                            <p className='PI-Contato-Right3'>
                                <span>Telefone:</span> - </p>
                            <p className='PI-Contato-Right4'>
                                <span>Facebook:</span> - </p>
                        </div>
                    </section>

                    <section className='PI-Feedback'>
                        <p className='PI-FB-Title'> Histórico de avaliações </p>

                        <div className='PI-FB-1'>
                            <div className='PI-FB-left'>
                                <h3>Lorraine Almeida</h3>
                                <p> Compro sempre os memos bolo do Jason e são os melhores que já comi, fora a qualidade do atendimento</p>
                            </div>

                            <div className='PI-FB-right'>
                                <div className='PI-FB-Stars'>
                                    <img
                                        alt="Imagem de uma estrela"
                                        src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/403227015b335d431c05f2c31d664d3f4cfdffc8/Produtos/Servicos_mei_estrela.svg"
                                        className="Produtos_estrela"
                                    />
                                    <img
                                        alt="Imagem de uma estrela"
                                        src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/403227015b335d431c05f2c31d664d3f4cfdffc8/Produtos/Servicos_mei_estrela.svg"
                                        className="Produtos_estrela"
                                    />
                                    <img
                                        alt="Imagem de uma estrela"
                                        src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/403227015b335d431c05f2c31d664d3f4cfdffc8/Produtos/Servicos_mei_estrela.svg"
                                        className="Produtos_estrela"
                                    />
                                    <img
                                        alt="Imagem de uma estrela"
                                        src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/403227015b335d431c05f2c31d664d3f4cfdffc8/Produtos/Servicos_mei_estrela.svg"
                                        className="Produtos_estrela"
                                    />
                                </div>
                                <p> jan - 2022</p>
                            </div>
                        </div>

                        <div className='PI-FB-2'>
                            <div className='PI-FB-left'>
                                <h3>Lorraine Almeida</h3>
                                <p> Compro sempre os memos bolo do Jason e são os melhores que já comi, fora a qualidade do atendimento</p>
                            </div>

                            <div className='PI-FB-right'>
                                <div className='PI-FB-Stars'>
                                    <img
                                        alt="Imagem de uma estrela"
                                        src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/403227015b335d431c05f2c31d664d3f4cfdffc8/Produtos/Servicos_mei_estrela.svg"
                                        className="Produtos_estrela"
                                    />
                                    <img
                                        alt="Imagem de uma estrela"
                                        src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/403227015b335d431c05f2c31d664d3f4cfdffc8/Produtos/Servicos_mei_estrela.svg"
                                        className="Produtos_estrela"
                                    />
                                    <img
                                        alt="Imagem de uma estrela"
                                        src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/403227015b335d431c05f2c31d664d3f4cfdffc8/Produtos/Servicos_mei_estrela.svg"
                                        className="Produtos_estrela"
                                    />
                                    <img
                                        alt="Imagem de uma estrela"
                                        src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/403227015b335d431c05f2c31d664d3f4cfdffc8/Produtos/Servicos_mei_estrela.svg"
                                        className="Produtos_estrela"
                                    />
                                </div>
                                <p> jan - 2022</p>
                            </div>
                        </div>

                        <div className='PI-FB-3'>
                            <div className='PI-FB-left'>
                                <h3>Lorraine Almeida</h3>
                                <p> Compro sempre os memos bolo do Jason e são os melhores que já comi, fora a qualidade do atendimento</p>
                            </div>

                            <div className='PI-FB-right'>
                                <div className='PI-FB-Stars'>
                                    <img
                                        alt="Imagem de uma estrela"
                                        src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/403227015b335d431c05f2c31d664d3f4cfdffc8/Produtos/Servicos_mei_estrela.svg"
                                        className="Produtos_estrela"
                                    />
                                    <img
                                        alt="Imagem de uma estrela"
                                        src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/403227015b335d431c05f2c31d664d3f4cfdffc8/Produtos/Servicos_mei_estrela.svg"
                                        className="Produtos_estrela"
                                    />
                                    <img
                                        alt="Imagem de uma estrela"
                                        src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/403227015b335d431c05f2c31d664d3f4cfdffc8/Produtos/Servicos_mei_estrela.svg"
                                        className="Produtos_estrela"
                                    />
                                    <img
                                        alt="Imagem de uma estrela"
                                        src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/403227015b335d431c05f2c31d664d3f4cfdffc8/Produtos/Servicos_mei_estrela.svg"
                                        className="Produtos_estrela"
                                    />
                                </div>
                                <p> jan - 2022</p>
                            </div>
                        </div>
                        <div className='PI-FB-Button'>
                            <button>Ver mais avaliações +</button>
                        </div>
                    </section>

                    <section className='PI-NewFeedback'>
                        <div className='PI-NFB-Left'>
                        <div className="PI-NFB-Title">
                            <p> Adicionar avaliação</p>

                            <div className="PI-NFB-Stars">
                                <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/8d7f4d535ad0f387ba0a1f1e73638d52e6e21fa0/ProfileMEI/Vector.svg"/>
                                <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/8d7f4d535ad0f387ba0a1f1e73638d52e6e21fa0/ProfileMEI/Vector.svg"/>
                                <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/8d7f4d535ad0f387ba0a1f1e73638d52e6e21fa0/ProfileMEI/Vector.svg"/>
                                <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/8d7f4d535ad0f387ba0a1f1e73638d52e6e21fa0/ProfileMEI/Vector.svg"/>
                                <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/8d7f4d535ad0f387ba0a1f1e73638d52e6e21fa0/ProfileMEI/Vector.svg"/>
                            </div>
                        </div>

                        <textarea
                            rows="6"
                            className="PI-NFB-Text"
                            type="text"
                            placeholder="Digite aqui" />

                        <input
                            className="PI-NFB-Button"
                            type="button"
                            value="Enviar" />
                        </div>
                    </section>
                </div>
            </div>
            <FooterS />
        </section>
    );
}

export default ProdutosInfo;