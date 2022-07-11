import React from 'react';
import { Link } from 'react-router-dom';

import './HeaderS.css'

function HeaderS() {
    return (
        <section className="HeaderS-Container">
            <a href='/'><img
                alt='Logo da visumei'
                className='HeaderS-Logo'
                src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/efcb8bfdefc03d0fb5005edd5b15e47c196faecd/Header_ProdutosServi%C3%A7os/LogoVisu.svg">
            </img></a>

            <nav>
                <Link
                    to="/servicos"
                    className='HeaderS-Link' >
                    Serviços
                </Link>

                <Link
                    to="/produtos"
                    className='HeaderS-Link' >
                    Produtos
                </Link>

                <Link
                    to="/como-funciona"
                    className='HeaderS-Link' >
                    Como funciona
                </Link>

                <Link
                    to="/quem-somos"
                    className='HeaderS-Link' >
                    Quem somos
                </Link>
            </nav>

            <img
                alt='Foto de perfil do usuario'
                src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/efcb8bfdefc03d0fb5005edd5b15e47c196faecd/Header_ProdutosServi%C3%A7os/Servicos_perfil.svg"
                className="HeaderS-Profile"
            />
        </section>
    )
}

export default HeaderS