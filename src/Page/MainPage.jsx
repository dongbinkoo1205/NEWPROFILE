import { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// 컴포넌트
import SideBar from '../Componenes/SideBar';
import PortWrap from '../Componenes/PortWrap';

// css
import './MainPage.css';

export default function MainPage() {
    const [PortSelected, setPortSelected] = useState(null);
    const [AboutSelected, setAboutSelecte] = useState(null);

    const [detailLeft, setDetailLeft] = useState('0px');
    const widthWrap = useRef(null);

    useEffect(() => {
        const updateDetailPosition = () => {
            let mainContent = widthWrap.current;
            if (mainContent) {
                let rect = mainContent.getBoundingClientRect();
                setDetailLeft(`${rect.right}px`);
            }
        };

        updateDetailPosition(); // 초기 실행
        window.addEventListener('resize', updateDetailPosition);

        return () => {
            window.removeEventListener('resize', updateDetailPosition);
        };
    }, []);

    return (
        <div className="main ">
            <div className="container ">
                {/* 왼쪽 사이드바 */}
                <SideBar ref={widthWrap} PortSelected={PortSelected} setAboutSelecte={setAboutSelecte} />
                {/* 오른쪽 콘텐츠 리스트 */}
                <PortWrap
                    detailLeft={detailLeft} // 동적으로 left 값 맞추기
                    PortSelected={PortSelected} //포트폴리오 state
                    setPortSelected={setPortSelected} //포트폴리오 state
                    AboutSelected={AboutSelected} //어바웃 state
                    setAboutSelecte={setAboutSelecte} //어바웃 state
                />
            </div>
        </div>
    );
}
