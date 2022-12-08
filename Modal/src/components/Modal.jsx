import Image from "../assets/images/lucas.png"
import "./Modal.less"

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
                            <a href="http://">1</a>
                            <a href="http://">2</a>
                            <a href="http://">3</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Modal