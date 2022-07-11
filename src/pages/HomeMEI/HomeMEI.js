import './HomeMEI.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ComoFunciona from './components/ComoFunciona/ComoFunciona';
import Informacoes from './components/Informações/Informacoes';
import Porque from './components/Porque/Porque';
import Objetivos from './components/Objetivos/Objetivos';
import Venha from './components/Venha/Venha';

function HomeMEI() {
    return(
        <div className='homeMEI'>

            <header className='header-homeMEI'>
                <Header />
            </header>

            <main className='main-homeMEI'>

                <ComoFunciona />
                <Informacoes />
                <Porque />
                <Objetivos />
                <Venha />

            </main>

            <footer className='footer-homeMEI'>
                <Footer />
            </footer>

        </div>
    );
}

export default HomeMEI;