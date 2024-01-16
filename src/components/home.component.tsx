import React, { useEffect } from 'react';

import BackPicture from '../assets/home/backpicture.jpg';

import MAFPicture from '../assets/home/mafpicture.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';

import './home.component.css'
import { Link } from 'react-router-dom';


export const HomeComponent: React.FC = (): React.ReactElement => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div>
            <div data-aos="fade-up" className='home-backpicture-box'>
                <img className='home-backpicture' src={BackPicture} alt='from the back' />
            </div>
            <div style={{ paddingRight: '80px', paddingLeft: '80px' }}>
                <div aria-label='present-commitment'>
                    <div data-aos='fade-right' style={{ fontSize: '65px', marginBottom: '60px', marginLeft: '120px' }}>My present commitment</div>

                    <div style={{ display: 'flex', flexDirection: 'row' }}>

                        <div style={{ width: '50%' }}>
                            <img className='maf-picture' data-aos-delay='300' src={MAFPicture} alt='MAF plane in Sainte-Marie MDG' data-aos='fade-right' />
                        </div>
                        <div style={{ width: '50%' }}>
                            <div data-aos='fade-left' data-aos-delay='600' style={{ fontSize: '50px', marginBottom: '45px' }}>Volunteer in Madagascar</div>

                            <p data-aos='fade-left' data-aos-delay='600' style={{ fontSize: '22px' }}>As a dedicated volunteer with MAF Madagascar, I am actively engaged in leveraging my IT expertise to support their mission.</p>

                            <p data-aos='fade-left' data-aos-delay='600' style={{ fontSize: '22px' }}>Working collaboratively with a team of professionals, I contribute to enhancing technological infrastructure and systems that empower the organization's vital work.
                            </p>

                            <p data-aos='fade-left' data-aos-delay='600' style={{ fontSize: '22px' }}>This experience not only fuels my passion for IT but also allows me to be part of a meaningful initiative that makes a tangible difference in the lives of others.</p>

                            <p data-aos='fade-left' data-aos-delay='600' style={{ fontSize: '22px' }}>I am proud to align my skills with MAF Madagascar's mission and contribute to their impactful work in the community.</p>
                            <div data-aos='fade-left' data-aos-delay='600' style={{ border: '1px solid #195c95', padding: '15px', color: '#195c95', fontWeight: '700', width: 'fit-content', textTransform: 'uppercase', fontSize: '14px' }}>
                                <Link to="/work" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className='link-element'>Find out more</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div aria-label='present-commitment' style={{marginTop: '150px'}}>
                    <div data-aos='fade-left' style={{ fontSize: '65px', marginBottom: '60px', marginLeft: '120px', textAlign: 'center' }}>Personal galery</div>

                    <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>

                        <div style={{ width: '50%' }}>
                            <img className='maf-picture' data-aos-delay='300' src={MAFPicture} alt='MAF plane in Sainte-Marie MDG' data-aos='fade-left' />
                        </div>
                        <div style={{ width: '50%' }}>
                            <div data-aos='fade-right' data-aos-delay='600' style={{ fontSize: '50px', marginBottom: '45px' }}>Volunteer in Madagascar</div>

                            <p data-aos='fade-right' data-aos-delay='600' style={{ fontSize: '22px' }}>As a dedicated volunteer with MAF Madagascar, I am actively engaged in leveraging my IT expertise to support their mission.</p>

                            <p data-aos='fade-right' data-aos-delay='600' style={{ fontSize: '22px' }}>Working collaboratively with a team of professionals, I contribute to enhancing technological infrastructure and systems that empower the organization's vital work.
                            </p>

                            <p data-aos='fade-right' data-aos-delay='600' style={{ fontSize: '22px' }}>This experience not only fuels my passion for IT but also allows me to be part of a meaningful initiative that makes a tangible difference in the lives of others.</p>

                            <p data-aos='fade-right' data-aos-delay='600' style={{ fontSize: '22px' }}>I am proud to align my skills with MAF Madagascar's mission and contribute to their impactful work in the community.</p>
                            <div data-aos='fade-right' data-aos-delay='600' style={{ border: '1px solid #195c95', padding: '15px', color: '#195c95', fontWeight: '700', width: 'fit-content', textTransform: 'uppercase', fontSize: '14px' }}>
                                <Link to="/work" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className='link-element'>Find out more</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
}