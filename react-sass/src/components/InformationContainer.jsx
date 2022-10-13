import { AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai';
import '../styles/components/informationcontainer.sass';

const InformationContainer = () => {
    return (
        <section id="information">
            <div className="info-card">
                <AiFillPhone id="phone-icon"/>
                <div>
                    <h3>Telefone</h3>
                    <p>(11)00000-0000</p>
                </div>
            </div>

            <div className="info-card">
                <AiOutlineMail id="email-icon"/>
                <div>
                    <h4>E-mail</h4>
                    <p>beatriz@mail.com</p>
                </div>
            </div>

            <div className="info-card">
                <AiFillEnvironment id="pin-icon"/>
                <div>
                    <h5>Localização</h5>
                    <p>SBC / SP</p>
                </div>
            </div>
        </section>
    );
};

export default InformationContainer;