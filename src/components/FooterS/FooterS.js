import React from 'react';
import { Link } from 'react-router-dom';
import "./FooterS.css";

function FooterS() {
    return (
        <section className='FooterS-Container'>
            <section>
                <p
                    className='FooterS-Link'>
                    VisuMei © 2022
                </p>
                <span>|</span>
                <Link
                    to="/politicadeprivacidade"
                    className='FooterS-Link'>
                    Politica de Privacidade
                </Link>
                <span>|</span>
                <Link
                    to="/quem-somos"
                    className='FooterS-Link'>
                    Quem somos
                </Link>
            </section>
        </section>
    );
}

export default FooterS;