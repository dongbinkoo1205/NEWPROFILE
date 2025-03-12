// 포트폴리오 데이터
import { PORTDATA } from '../util/PortfolioData';
import { Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import About from './About';
import Contact from './Contact';
import Footer from '../Componenes/Footer';

import './PortWrap.css';

// 상세 페이지를 동적으로 불러오기 (Lazy Loading)
const Detail = lazy(() => import('../Componenes/Detail'));

function PortWrap({ PortSelected, setPortSelected, detailLeft, AboutSelected, setAboutSelecte }) {
    return (
        <div className="content">
            {PORTDATA.map((item, index) => (
                <div
                    className="portBox"
                    key={index}
                    onClick={() => setPortSelected((prev) => (prev?.name === item.name ? null : item))}
                >
                    <motion.div className="PortCard">
                        <div className="PortName">{item.name}</div>
                        <div className={`PortImg ${item.sizeClass}`}>
                            <img src={item.img} alt={item.name} />
                        </div>
                        <div className="DescWrap">
                            <div className="PortDesc">{item.shortDescription}</div>
                            <div className="PortButton">{item.technologies.join(', ')}</div>
                        </div>
                    </motion.div>
                </div>
            ))}
            {/* 상세 페이지 (Lazy Loading + 애니메이션 적용) */}
            <AnimatePresence mode="wait">
                {AboutSelected === 'About' && <About detailLeft={detailLeft} onClose={() => setAboutSelecte(null)} />}
                {AboutSelected === 'Contact' && (
                    <Contact detailLeft={detailLeft} onClose={() => setAboutSelecte(null)} />
                )}
                {PortSelected && (
                    <Suspense fallback={<div className="loading">Loading...</div>}>
                        <Detail detailLeft={detailLeft} item={PortSelected} onClose={() => setPortSelected(null)} />
                    </Suspense>
                )}
            </AnimatePresence>
            <Footer />
        </div>
    );
}

export default PortWrap;
