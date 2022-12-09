import Image from "../assets/images/lucas.png"
import "./modal.less"
import { FaLinkedinIn, FaGithubAlt, FaTerminal } from "react-icons/fa"

const Modal = ({ open, onClose }) => {
    if (!open) return null;

    const handleStop = e => {
        e.stopPropagation();
    }

    return (
        <section className='container' onClick={onClose}>
            <div className="container__sub" onClick={handleStop}>
                <div className="content">
                    <div className="content__btn-close">
                        <button onClick={onClose}>X</button>
                    </div>
                    <div className="content__image">
                        <img src={Image} alt="imagem" />
                    </div>
                    <div className="content__texts">
                        <div className="content__texts--title">
                            <h3> Olá, eu sou Lucas</h3>
                        </div>
                        <div className="content__texts--text">
                            <p>Sejam bem-vindos ao meu simples modal, desenvolvido com React e Less!!!</p>
                        </div>
                        <div className="content__texts--links">
                            <a href="https://www.linkedin.com/in/luquinhasssilva/" target="_blank"><FaLinkedinIn size={25} color="#c1ffd7"/></a>
                            <a href="https://github.com/Lucassocorrosilva7" target="_blank"><FaGithubAlt size={25} color="#c1ffd7"/></a>
                            <a href="https://lucas-bio.netlify.app/" target="_blank"><FaTerminal size={25} color="#c1ffd7"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Modal