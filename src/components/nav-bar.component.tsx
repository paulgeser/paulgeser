import React from 'react';
import './nav-bar.component.css';
import { Link } from 'react-router-dom';

export const NavBarComponent: React.FC = (): React.ReactElement => {
    return (
        <div className={'nav-bar-top-main-box'}>
            <div className={'nav-bar-top-sub-box'}>
                <div className='nav-bar-top-sub-left-box'>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className='nav-bar-top-sub-left-initial-main-box'>
                            <div className='nav-bar-top-sub-left-initial-sub-box link-element'>
                                PG
                            </div>
                        </div>
                    </Link>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className='link-element'>Paul Geser</div>
                    </Link>
                </div>

                <div className='nav-bar-top-sub-right-box'>
                    <Link to="/work" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className='link-element' style={{ marginRight: '40px' }}>Work</div>
                    </Link>
                    <Link to="/galery" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className='link-element' style={{ marginRight: '20px' }}>Galery</div>
                    </Link>
                </div>
            </div>
        </div >
    );
}