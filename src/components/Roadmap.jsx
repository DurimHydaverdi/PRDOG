import React from 'react';
import '../styles/roadmap.scss';
import third from '../assets/third.png';

const Roadmap = () => {
  return (
    <section id="roadmap" className="roadmap">
      <div className="image-container">
        <img src={third} alt="Roadmap Background" />
        <div className="text-overlay">
          <h2>Our Roadmap</h2>
          <ul className="roadmap-list">
            <li>
              <h3>Phase 1: Launch & Hype ✅</h3>
              <p>
                Token launch and branding
                listing on decentralized exchanges
                meme creation contest
                community building on platforms
              </p>
            </li>
            <li>
              <h3>Phase 2: Expansion & Marketing</h3>
              <p>
                Influencer partnerships
                first airdrop to holders
                aggressive marketing campaigns
                meme contests for engagement
              </p>
            </li>
            <li>
              <h3>
                Phase 3: Utility & Growth
              </h3>
              <p>
                Development of $PRDOG staking
                NFT collection launch
                expansion to major exchanges
                community voting on next steps
              </p>
            </li>
            <li>
              <h3>
                Phase 4: Domination & Legacy
              </h3>
              <p>
                Major exchange listings
                $PRDOG merchandise launch
                global marketing push
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
