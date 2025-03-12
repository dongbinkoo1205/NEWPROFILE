import React from 'react';
import { Suspense } from 'react';
import { motion } from 'framer-motion';

import { AboutDesc } from '../util/AboutData'; // 데이터 불러오기

import left from '/assets/left.png';

import './About.css';

function About({ detailLeft, onClose }) {
    return (
        <div
            className="About scrollBar Pretendard-r"
            style={{ left: `${detailLeft}px`, width: `clac(100% - ${detailLeft})px` }}
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
                        <span>About</span>
                    </button>
                    <div className="aboutWrap">
                        {AboutDesc.map((item, index) => (
                            <div className="aboutItem" key={index}>
                                <p className="name">{item.name}</p>
                                <p className="mainInfo">{item.mainInfo}</p>

                                <div className="subInfo">
                                    <div className="skill">
                                        <div>Language</div>
                                        <span>{item.skill.join(', ')}</span>
                                    </div>
                                    <div className="skill">
                                        <div>Tool</div>
                                        <span>{item.Tool.join(', ')}</span>
                                    </div>{' '}
                                    <div className="skill">
                                        <div>Design</div>
                                        <span>{item.Design.join(', ')}</span>
                                    </div>
                                </div>
                                <div className="subInfo">
                                    <p>{item.subInfo}</p>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default About;
