import React from 'react';

import { Suspense } from 'react';
import { motion } from 'framer-motion';

import { ContactDesc } from '../util/AboutData'; // 데이터 불러오기

import left from '/assets/left.png';

import ContactEmail from './ContactEmail';
import './About.css'; // about과 같은 css 사용

function Contact({ detailLeft, onClose }) {
    return (
        <div
            className="About scrollBar Pretendard-r"
            style={{ left: `${detailLeft}px`, width: `clac(100% - ${detailLeft})px`, height: '' }}
        >
            <div className="StickyCont">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ backgroundColor: '#ffffff', height: '100%' }} // 배경색 기본 설정
                >
                    <button onClick={onClose} className="close Pretendard-r">
                        <img src={left} alt="레프트버튼" />
                        <span>Contact</span>
                    </button>
                    <div className="aboutWrap">
                        {ContactDesc.map((item, index) => (
                            <div className="aboutItem" key={index} style={{ height: 'auto' }}>
                                <p className="name">{item.name}</p>
                                <p className="mainInfo">{item.mainInfo}</p>

                                <div className="subInfo">
                                    <div className="skill">
                                        <div>Phone</div>
                                        <span>
                                            <a href="tel:010-1234-5678">{item.phone}</a>
                                        </span>
                                    </div>
                                    <div className="skill">
                                        <div>E-mail</div>
                                        <span>
                                            <a href="mailto:ehdqls0165@naver.com">{item.email}</a>
                                        </span>
                                    </div>
                                    <div className="skill">
                                        <div>github</div>
                                        <span>
                                            <a href={item.github} target="_blank">
                                                dongbinkoo1205
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <ContactEmail />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Contact;
