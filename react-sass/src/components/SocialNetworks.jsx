import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import '../styles/components/socialnetworks.sass';

const SocialNetworks = [
      { name: "linkedin", icon: <FaLinkedinIn /> },
      { name: "github", icon: <FaGithub /> },
  ]
  
const socialnetworks = () => {
    return (
      <section id="social-networks">
        {SocialNetworks.map((network) => (
          <a href="#" className="social-btn" id={network.name} key={network.name}>
            {network.icon}
          </a>
        ))}
      </section>
    );
  };
  

export default SocialNetworks;