import React from 'react';
import CustomTooltip from '../Mui/MuiCustomToolTip';

import './Footer.css';

import graph from '/assets/graph.png';
import mail from '/assets/mail.png';
import person from '/assets/person.png';
import phone from '/assets/phone.png';

const Footer = () => {
    return (
        <footer className="footer Pretendard-r">
            <p className="footer-text">Let's talk</p>
            <h1 className="footer-title">dongbinKoo</h1>
            <div className="footer-icons">
                <CustomTooltip title="01022769712">
                    <a href="tel:010-1234-5678">
                        <span>
                            <img src={phone} alt="Phone" />
                        </span>
                    </a>
                </CustomTooltip>

                <CustomTooltip title="ehdqls0165@naver.com">
                    <a href="mailto:ehdqls0165@naver.com">
                        <span>
                            <img src={mail} alt="Mail" />
                        </span>
                    </a>
                </CustomTooltip>

                <CustomTooltip title="GitHub">
                    <a href="https://github.com/dongbinkoo1205" target="_blank">
                        <span>
                            <img src={graph} alt="Graph" />
                        </span>
                    </a>
                </CustomTooltip>

                <CustomTooltip title="준비중">
                    <a>
                        <span>
                            <img src={person} alt="Person" />
                        </span>
                    </a>
                </CustomTooltip>
            </div>
            <hr className="footer-line" />
        </footer>
    );
};

export default Footer;
