import { useState } from 'react';
import copy from '/assets/copy.png';

import './ContactEmail.css';

const ContactEmail = () => {
    const [copied, setCopied] = useState(false);
    const email = 'ehdqls0165@naver.com';

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="contact-container">
            <div className="availability">
                <span className="status-dot"></span> Available for anything
            </div>
            <p>채용이나 피드백 등 어떠한 연락도 기쁘게 기다리고 있습니다.</p>

            <div className="email-box" onClick={handleCopyEmail}>
                <img src={copy} alt="복사하기이미지" />
                <span>{email}</span>
                {copied && <span className="copied">Copied!</span>}
            </div>
        </div>
    );
};

export default ContactEmail;
