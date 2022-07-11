import ComoFMHeader from './Components/Como_funcionaM_header/Como_funcionaM_header';
import ComoFMtopo from './Components/Como_funcionaM_topo/Como_funcionaM_topo';
import ComoFMCadastro from './Components/Como_funcionaM_cadastro/Como_funcionaM_cadastro';
import ComoFMAnuncie from './Components/Como_funcionaM_anuncie/Como_funcionaM_anuncie';
import ComoFMDashboard from './Components/Como_funcionaM_dashboard/Como_funcionaM_dashboard';
import ComoFMFeedback from './Components/Como_funcionaM_feedback/Como_funcionaM_feedback';
import ComoFMCnpj from './Components/Como_funcionaM_cnpj/Como_funcionaM_cnpj';
import FooterS from '../../components/FooterS/FooterS';

import './Como_funciona_mei.css';

function ComoFuncionaMei() {
    return (
        <div className="Como_funciona_mei">
            <ComoFMHeader />
            <ComoFMtopo />
            <ComoFMCadastro />
            <ComoFMAnuncie />
            <ComoFMDashboard />
            <ComoFMFeedback />
            <ComoFMCnpj />
            <FooterS />
        </div>

    )
}
export default ComoFuncionaMei