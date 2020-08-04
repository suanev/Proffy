import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import './styles.css';

const TeacherItem = () => {
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/49046892?s=460&u=c57857f9cf2449732b841a79744c227d53410297&v=4" alt="Suane Vallim" />
                        <div>
                            <strong>Suane Vallim</strong>
                            <span>Quimica</span>
                        </div>
                    </header>

                    <p>
                        Entusiasta das melhores tecnologias da quimica avançada.
                        <br /><br />
                        Apaixonada por explodir coisas em laboratório e por mudar
                        a vida das pessoas através de experiências. Mais de 200.000
                        pessoas já passaram por uma das minhas explosões.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 40,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    );
};

export default TeacherItem;