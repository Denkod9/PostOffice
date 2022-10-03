import React from "react";
import '../assets/css/footer.css'

const Footer = () => {
    const yearNow = new Date().getFullYear()

    return (
        <div className='navbar-fixed-bottom footer_position'>
            <footer className="py-2">
                <div className="container text-center">
                    <span className="text-muted">
                        @{yearNow} Полица Денис <span />
                        <a href="https://github.com/Denkod9/test_postoffice"
                            target="_blank">
                            GitHub
                        </a>
                    </span>
                </div>
            </footer>
        </div>
    );
}

export default Footer;

