import React, { useState, useEffect } from "react";
import FAQ from "./FAQ.js"
import CC from "./CC.js"
import PI from "./PI.js"
import Bank from "./Bank.js";

const Home = () => {
  const [tab, setTab] = useState('Projects')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  useEffect(() => {

  }, []);

  const changeTab = (tab) => {
    setTab(tab)
  }

  const allTabs = ['Projects', 'FAQ', 'Cards & Concur']

  return (
    <div>
      <h1 id='homepagenav'>Finance Resources</h1>
      <img id="lcsIcon" src="../public/lcs-logo.jpg" alt="lcs icon" />
      <img id="chaIcon" src="../public/CHA.png" alt="cha icon" />
      <div className="navbar">
        {allTabs.map((t) => (
          t === 'Projects' ?
          <div
            key={t}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            className={`nav-item ${tab === t || tab === 'Bank' ? 'active' : ''}`}
          >
            {t.toUpperCase()}
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <span className='dropChoice' onClick={() => changeTab('Projects')}>MIP GL Redesign</span><br/>
                <span className='dropChoice' onClick={() => changeTab('Bank')}>Banking</span>
              </div>
            )}
          </div>
          : <div
          key={t}
          className={`nav-item ${tab === t ? 'active' : ''}`}
          onClick={() => changeTab(t)}
        >
          {t.toUpperCase()}
        </div>
        ))}
      </div>
      {tab === 'FAQ' && (<FAQ />)}
      {tab === 'Cards & Concur' && (<CC />)}
      {tab === 'Projects' && (<PI />)}
      {tab === 'Bank' && (<Bank />)}
    </div>
  );
}

export default Home;
