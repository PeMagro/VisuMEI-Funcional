import './Como_funcionaM_header.css';

function ComoFMHeader (){
    return(
        <div className="Como_funcionaM_header">
        <a href='/'><img className="Como_funcionaM_logo_header" src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/adb35ab17d89a66adb35775990aa8aeb1e88c9a4/Como%20Funciona/Logotipo.svg" alt='' /></a>
        <nav className="Como_funcionaM_nav_header">
            <div className="Como_funcionaM_link"><a href="/servicos">Serviços</a></div>
            <div className="Como_funcionaM_link"><a href="/produtos">Produtos</a></div>
            <div className="Como_funcionaM_link_colorido"><a href="/como-funciona">Como funciona</a></div>
            <div className="Como_funcionaM_link"><a href="/como-funciona-mei">Para MEI</a></div>
            <div className="Como_funcionaM_login"><a href="/login">Login</a></div>
        </nav>
    </div>
    )
}
export default ComoFMHeader