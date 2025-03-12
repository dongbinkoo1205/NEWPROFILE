import React from 'react';
import { Tooltip } from '@mui/material';

// ✅ 재사용 가능한 CustomTooltip 컴포넌트
const CustomTooltip = ({ title, children }) => {
    return (
        <Tooltip
            title={title}
            arrow
            componentsProps={{
                tooltip: {
                    sx: {
                        color: 'white', // 글씨 색상
                        fontSize: '1rem', // 글씨 크기
                        borderRadius: '6px', // 둥근 모서리
                    },
                },
                arrow: {
                    sx: {
                        color: 'black', // 화살표 색상
                    },
                },
            }}
        >
            {children}
        </Tooltip>
    );
};

export default CustomTooltip;
