import { Suspense, useState } from 'react';
import { motion } from 'framer-motion';

import Footer from './Footer';

import './Detail.css';

import left from '/assets/left.png';
import arrow from '/assets/arrow.png';
import loading from '/assets/loading.png';

function Detail({ item, onClose, detailLeft }) {
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [item]);

    const [isLoading, setIsLoading] = useState(true); // 동영상 로딩

    return (
        <div
            className="Detail scrollBar Pretendard-r"
            style={{ left: `${detailLeft}px`, width: `clac(100% - ${detailLeft})px` }}
        >
            <div className="StickyCont">
                <motion.div
                    className="detail"
                    initial={{ x: '100%', y: 0 }} // 무조건 상단에서 시작
                    animate={{ x: 0, y: 0 }} // 애니메이션으로 이동할 때도 상단 유지
                    exit={{ x: '100%', y: 0 }} // 닫힐 때도 항상 상단에서 이동
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ backgroundColor: '#ffffff' }} // 배경색 기본 설정
                >
                    <button onClick={onClose} className="close Pretendard-r">
                        <img src={left} alt="레프트버튼" />
                        <span>{item.name}</span>
                    </button>
                    <div className="PortWrap">
                        <div className="PortInfo">
                            <div className="infowrap">
                                <div className="desc">Portfolio</div>
                                <motion.h2
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    {item.name}
                                </motion.h2>
                            </div>
                            <div className="infowrap">
                                <div className="desc">Description</div>
                                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                                    {item.shortDescription}
                                </motion.p>
                            </div>
                            <div className="infowrap">
                                <div className="desc">Year</div>
                                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                                    {item.year}
                                </motion.p>
                            </div>
                            <div className="infowrap">
                                <div className="desc">Category</div>
                                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                                    {item.category}
                                </motion.p>
                            </div>
                            <div className="infowrap">
                                <div className="desc">Technologies</div>
                                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                                    {item.technologies.join(', ')}
                                </motion.p>
                            </div>
                            <div className="infowrap">
                                <div className="desc">Other</div>
                                {item.additionalInfo && (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.6 }}
                                    >
                                        {item.additionalInfo.join(', ')}
                                    </motion.p>
                                )}
                            </div>
                            <div className="infowrap">
                                <div className="desc">Url</div>
                                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                                    <a href={item.url} className="link" target="_blank">
                                        <span>
                                            <img src={arrow} alt="화살표이미지" />
                                        </span>
                                        {item.name}
                                    </a>
                                </motion.p>
                            </div>
                        </div>
                        <div className="PortImgVd">
                            {isLoading && (
                                <div className="loading">
                                    <img src={loading} alt="로딩이미지" />
                                    <p>Loading...</p>
                                </div>
                            )}
                            <video
                                muted
                                preload="auto"
                                loop
                                autoPlay
                                playsInline
                                onLoadedData={() => setIsLoading(false)}
                                style={{ display: isLoading ? 'none' : 'block' }}
                            >
                                <source src={item.webVd} type="video/webm" />
                            </video>
                            {/* <img src={item.pg} alt="" /> */}
                        </div>
                        <div className={`PortLogo PortImgHalf ${item.sizeClass}`}>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                                <img src={item.img} alt={item.name} className={`${item.sizeClass}`} />
                            </motion.div>
                        </div>

                        <div className="PortImgDesc">
                            <div className="infowrap">
                                <div className="desc">This is</div>
                                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                                    {item.longDescription}
                                </motion.p>
                            </div>
                        </div>
                        <div className="PortImgDesc bottom">
                            <div className="infowrap">
                                <div className="desc">How made</div>
                                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                                    {item.how}
                                </motion.p>
                            </div>
                        </div>
                        <motion.div
                            className={`PortLogo PortImgHalf ${item.sizeClass}`}
                            style={{ background: `${item.color}` }}
                        >
                            <img
                                src={item.img}
                                style={{ filter: 'invert(1)' }}
                                alt={item.name}
                                className={`${item.sizeClass}`}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
}

export default Detail;
