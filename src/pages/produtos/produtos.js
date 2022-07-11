import React from "react";
import "./produtos.css";

import ProdutosFiltro from "../../components/ProdutosFiltro/Produto_filtro";
import ServicosBarra from "../../components/Servicos_barraBusca/Servicos_barraBusca";
import HeaderS from "../../components/HeaderS/HeaderS";
import FooterS from "../../components/FooterS/FooterS";

import { Link } from 'react-router-dom';

function Produtos() {
    return (
        <div className="Produtos_ContainerProdutos">

            <HeaderS />

            <ServicosBarra />

            <ProdutosFiltro />

            <div className="Produtos_ContainerPb">

                <section className="Produtos_Profiles">
                    <div className="Produtos_Center">
                        <div className="Produtos_img">
                            <img
                                alt="Foto de perfil da Emily rokeset"
                                src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/3e9e0c6bf7bb570ee13147c1c52496e596a6deb0/Produtos/Profile1.svg" />
                        </div>

                        <div className="Produtos_Classification">
                            <div>
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
                            </div>
                        </div>
                        <div className="Produtos_Name"> Emily rokeset </div>
                        <div className="Produtos_Profession"> Bolos da Emily </div>
                        <div className="Produtos_Locate">
                            <div>
                                <img
                                    alt="imagem que simboliza a localização do comercio"
                                    src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/403227015b335d431c05f2c31d664d3f4cfdffc8/Produtos/Servicos_mei_local.svg"
                                    className="Produtos_imgLocate" />
                                <p>São Paulo, Jardim Tex</p>
                            </div>
                        </div>

                        <Link
                            to="/produtos/profileMEI"
                            className="Produtos_ViewMore">
                            Ver mais
                        </Link>

                    </div>
                </section>

                <section className="Produtos_Publi">
                    <div className="Produtos_PublicTitle"> Produtos disponíveis </div>

                    <div className="Produtos_ContainerAnuncio">


                        <div className="Produtos_anuncio1">
                            <img
                                alt="Foto de doce de maracuja com cobertura de frutas"
                                src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/37fb309ef38c7feee8c45a19bd586ccbc23f0082/Produtos/image4.svg"
                                className="Produtos_ImageAnuncio" />
                            <p className="Produtos_AnuncioPrice">R$ 112,00</p>
                            <p className="Produtos_AnuncioTitle">Bolo de chocolate p/ Festa 4kg</p>
                            <p className="Produtos_AnuncioDesc">Bolo para festa de chocolate</p>
                        </div>

                        <div className="Produtos_anuncio2">
                            <img
                                alt="foto de um doce de laranja com chocolate"
                                src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/37fb309ef38c7feee8c45a19bd586ccbc23f0082/Produtos/image5.svg"
                                className="Produtos_ImageAnuncio" />
                            <p className="Produtos_AnuncioPrice">R$ 112,00</p>
                            <p className="Produtos_AnuncioTitle">Bolo de chocolate p/ Festa 4kg</p>
                            <p className="Produtos_AnuncioDesc">Bolo para festa de chocolate</p>
                        </div>

                        <div className="Produtos_anuncio3">
                            <img
                                alt="Bolo azul com cobertura de leite ninho e decoração de rosquinhas"
                                src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/37fb309ef38c7feee8c45a19bd586ccbc23f0082/Produtos/image6.svg"
                                className="Produtos_ImageAnuncio" />
                            <p className="Produtos_AnuncioPrice">R$ 112,00</p>
                            <p className="Produtos_AnuncioTitle">Bolo de chocolate p/ Festa 4kg</p>
                            <p className="Produtos_AnuncioDesc">Bolo para festa de chocolate</p>
                        </div>

                    </div>

                    <div className="Produtos_SocialMedias">
                        <div className="Produtos_Instagram">
                            <img
                                alt="botão para acessar o instagram do anunciante"
                                src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/8b50e51ca898c5ef28e1d48538055860258e0596/Produtos/InstaIcon.svg"
                                className="ImageIcon" />
                            @emily_rockt_bolos
                        </div>

                        <div className="Produtos_Facebook">
                            <img
                                alt="botão para acessar o facebook do anunciante"
                                src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/8b50e51ca898c5ef28e1d48538055860258e0596/Produtos/FaceIcon.svg"
                                className="ImageIcon" />
                            Emily Bolos
                        </div>
                    </div>

                </section>
            </div>

            <div className="Produtos_ContainerPb">

                <section className="Produtos_Profiles">
                    <div className="Produtos_Center">
                        <div className="Produtos_img">
                            <img
                                alt="Foto de perfil da Paloma Valenca"
                                src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/3e9e0c6bf7bb570ee13147c1c52496e596a6deb0/Produtos/Profile2.svg" />
                        </div>

                        <div className="Produtos_Classification">
                            <div>
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
                            </div>
                        </div>
                        <div className="Produtos_Name"> Paloma Valenca </div>
                        <div className="Produtos_Profession"> Bolos da Paloma </div>
                        <div className="Produtos_Locate">
                            <div>
                                <img
                                    alt="imagem que simboliza a localização do comercio"
                                    src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/403227015b335d431c05f2c31d664d3f4cfdffc8/Produtos/Servicos_mei_local.svg"
                                    className="Produtos_imgLocate" />
                                <p>São Paulo, Jardim Tex</p>
                            </div>
                        </div>

                        <Link
                            to="/produtos/profileMEI"
                            className="Produtos_ViewMore">
                            Ver mais
                        </Link>
                    </div>
                </section>

                <section className="Produtos_Publi">
                    <div className="Produtos_PublicTitle"> Produtos disponíveis </div>

                    <div className="Produtos_ContainerAnuncio">


                        <div className="Produtos_anuncio1">
                            <img
                                alt="Foto de um bolo azul e cobertura branca com decoração de rosquinhas e confetes"
                                src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/3e9e0c6bf7bb570ee13147c1c52496e596a6deb0/Produtos/image1.svg"
                                className="Produtos_ImageAnuncio" />
                            <p className="Produtos_AnuncioPrice">R$ 112,00</p>
                            <p className="Produtos_AnuncioTitle">Bolo de chocolate p/ Festa 4kg</p>
                            <p className="Produtos_AnuncioDesc">Bolo para festa de chocolate</p>
                        </div>

                        <div className="Produtos_anuncio2">
                            <img
                                alt="Foto de uma torta de bluebarry"
                                src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/3e9e0c6bf7bb570ee13147c1c52496e596a6deb0/Produtos/image2.svg"
                                className="Produtos_ImageAnuncio" />
                            <p className="Produtos_AnuncioPrice">R$ 112,00</p>
                            <p className="Produtos_AnuncioTitle">Bolo de chocolate p/ Festa 4kg</p>
                            <p className="Produtos_AnuncioDesc">Bolo para festa de chocolate</p>
                        </div>

                        <div className="Produtos_anuncio3">
                            <img
                                alt="Foto de um doce de maracuja com cobertura de frutas"
                                src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/3e9e0c6bf7bb570ee13147c1c52496e596a6deb0/Produtos/image3.svg"
                                className="Produtos_ImageAnuncio" />
                            <p className="Produtos_AnuncioPrice">R$ 112,00</p>
                            <p className="Produtos_AnuncioTitle">Bolo de chocolate p/ Festa 4kg</p>
                            <p className="Produtos_AnuncioDesc">Bolo para festa de chocolate</p>
                        </div>

                    </div>

                    <div className="Produtos_SocialMedias">
                        <div className="Produtos_Instagram">
                            <img
                                alt="botão para acessar o instagram do anunciante"
                                src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/8b50e51ca898c5ef28e1d48538055860258e0596/Produtos/InstaIcon.svg"
                                className="ImageIcon" />
                            @paloma_bolos22
                        </div>

                        <div className="Produtos_Facebook">
                            <img
                                alt="botão para acessar o facebook do anunciante"
                                src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/8b50e51ca898c5ef28e1d48538055860258e0596/Produtos/FaceIcon.svg"
                                className="ImageIcon" />
                            Bolos da Paloma
                        </div>
                    </div>

                </section>
            </div>

            <FooterS />

        </div>
    );
}

export default Produtos