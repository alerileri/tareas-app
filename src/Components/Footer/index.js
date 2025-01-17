import React from "react";
import './Footer.css'
import { CompleteIcon } from "../CompleteIcon";

function Footer() {
    return (
        <footer>
            <section className="footer-container">
                <svg
                    className="check-footer"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    width="48">
                    <path
                        d="m421-298 283-283-46-45-237 237-120-120-45 45 165 166Zm59 218q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Z"
                    />
                </svg>
                <p className="pendientes">©Pendientes 2023</p>
                <p className="author-name">by <a href="https://github.com/alerileri/">@alerileri</a>
                </p>
            </section>
        </footer>
    )
}

export { Footer }