import { useState } from 'react';

import CustomTooltip from '../Mui/MuiCustomToolTip';

import './SideBar.css'; // 스타일 파일 따로 분리

import graph from '/assets/graph.png';
import mail from '/assets/mail.png';
import person from '/assets/person.png';
import phone from '/assets/phone.png';
import menubar from '/assets/menubar.png';
import close from '/assets/close.png';

export default function SideBar({ PortSelected, setAboutSelecte }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleBackgroundColor = PortSelected === null ? '#fff' : '#e2e2e26e';

    return (
        <div className="side border-right" style={{ background: toggleBackgroundColor }}>
            {/* 헤더 */}
            <div className="header flex border-bottom">
                {/* 햄버거 버튼 */}
                <div className="hamburger flex border-right" onClick={() => setMenuOpen(!menuOpen)}>
                    <img src={menubar} alt="햄버거메뉴" style={{ display: menuOpen ? 'none' : 'block' }} />
                    <img src={close} alt="닫기버튼" style={{ display: menuOpen ? 'block' : 'none' }} />
                </div>
                <div className="Pname" style={{ cursor: 'pointer' }} onClick={() => window.location.reload()}>
                    Portfolio
                </div>
            </div>

            {/* 햄버거 메뉴 */}
            <div className={`hamburger-menu ${menuOpen ? 'show' : 'hide'}`}>
                <label>STUDIO</label>
                <div onClick={() => setAboutSelecte(null)}>Portfolio</div>
                <div onClick={() => setAboutSelecte('About')}>About</div>
                <div onClick={() => setAboutSelecte('Contact')}>Contact</div>
                <div>
                    <a href="https://profile-theta-lovat.vercel.app/" target="_blank">
                        이전 프로필 사이트
                    </a>
                </div>
            </div>

            {/* 본문 */}
            <div className="nameWrap Pretendard-r">
                <span className="KName">dongbinKoo </span>
                <span className="KDesc">
                    {/* Through the code, designing more intuitive, and focus on implementing websites with functional
                    beauty */}
                    코드를 통해 실용적인 것을 만듭니다. 사용자의 편리한 경험과 눈이 즐거운 웹사이트를 구현합니다.
                </span>
            </div>
            <span onClick={() => setAboutSelecte('Contact')} className="button">
                WORK WITH ME
            </span>
            {/* 소셜 아이콘 */}
            <div className="socials">
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
        </div>
    );
}
