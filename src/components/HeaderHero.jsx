import React from 'react';
import '../styles/header-hero.scss';
import prdogg from '../assets/PRDOGG.png';
import { FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const HeaderHero = () => {
  return (
    <header className="header-hero">
      <div className="hero">
      <nav className="header">
        <div className="header-logo">$PRDOG</div>
        <ul className="header-nav">
          <a href="https://t.me/PirateDog2Moon" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
          <a href="https://x.com/piratedogg" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
          {/* <a href="#footer">Contact</a> */}
        </ul>
      </nav>
      <div className='buy-token'>
        <img src={prdogg} alt="" />
        <p>Set sail with Pirate Dog Coin—the first-ever pirate-themed meme coin that’s stealing hearts and treasure across the crypto seas! With boundless potential to skyrocket to the moon, this People’s Coin is here to change lives, one doubloon at a time. Join the crew and claim your share of the booty—your financial freedom awaits! 🌙💰</p>
        <h1 href="#services" className="hero-button">2HdZWmrffZSstsBhRLXihkSrC5AEKu6xk283v6RDpump</h1>
    </div>
      </div>
    </header>
  );
};

export default HeaderHero;
