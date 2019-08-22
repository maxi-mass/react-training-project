import React from 'react';
import h from './Header.module.css';

const Header = () => {
    return (
    <header className={h.header}>
        <img src="https://bcassetcdn.com/asset/logo/e33c12b4-1128-4129-b31f-2c31cb0878c7/logo?v=4&text=Logo+Text+Here" />
    </header>
    );
}

export default Header;