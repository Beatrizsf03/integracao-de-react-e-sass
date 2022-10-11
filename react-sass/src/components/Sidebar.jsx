import SocialNetworks from "./SocialNetworks";

import Avatar from '../img/img-icon.png';

import '../styles/components/sidebar.sass';

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Beatriz Ferreira" />
            <p className="title">Desenvolvedora</p>
            
            <p>informações de contato</p>
            <a href="" className="btn">
                Download currículo
            </a>
        </aside>
    )
};

export default Sidebar;