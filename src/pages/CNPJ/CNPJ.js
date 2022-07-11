import './CNPJ.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Infos from './components/Infos/Infos';
import Beneficios from './components/Beneficios/Beneficios';
import ComoFazer from './components/ComoFazer/ComoFazer';
import SaberMais from './components/SaberMais/SaberMais';

function CNPJ() {
    return(
        <div className='cnpj'>

            <header className='header-cnpj'>
                <Header/>
            </header>

            <main className='main-cnpj'>
                <Infos />
                <Beneficios />
                <ComoFazer />
                <SaberMais />
            </main>

            <footer className='footer-cnpj'>
                <Footer />
            </footer>

        </div>
    );
}

export default CNPJ;