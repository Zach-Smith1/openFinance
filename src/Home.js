import React, { useState, useEffect } from "react";
import FAQ from "./FAQ.js";
import CC from "./CC.js";
import PI from "./PI.js";
import GLR from "./GLR.js";
import Bank from "./Bank.js";

const Home = () => {
  const [tab, setTab] = useState('FAQ')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {

  }, []);

  const changeTab = (t) => {
    if (t === 'Bank' || t === 'GLR') {
      setTimeout(()=>{
        setTab(t), 200
      })
    } else {
      setTab(t)
    }
  }

  const allTabs = ['FAQ', 'Projects', 'Cards & Concur']

  // const allTabs = ['FAQ', 'Projects', 'Cards & Concur', 'Invoice Lookup', 'MIP GL Tool', 'JV Convert']

  return (
    <div>
      <h1 id='homepagenav'>Finance Resources</h1>
      <img id="lcsIcon" src="../public/lcs-logo.jpg" alt="lcs icon"/>
      <img id="chaIcon" src="../public/CHA.png" alt="cha icon"/>
      <div className="navbar">
      {allTabs.map((t) => (
          t === 'Projects' ? // special dropdown conditions for Projects Tab
          <div
            key={t}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            className={`nav-item ${tab === t || tab === 'Bank' || tab === 'GLR' ? 'active' : ''}`}
            onClick={() => changeTab('Projects')}
          >
            {t.toUpperCase()}
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <span className='dropChoice' onClick={() => changeTab('GLR')}>MIP GL Redesign</span><br/>
                <span className='dropChoice' onClick={() => changeTab('Bank')}>Banking</span>
              </div>
            )}
          </div>
          : <div // normal tabs
          key={t}
          className={`nav-item ${tab === t ? 'active' : ''}`}
          onClick={() => changeTab(t)}
        >
          {t.toUpperCase()}
        </div>
        ))}
      </div>
      {tab === 'MIP GL Tool' && (<App/>)}
      {tab === 'FAQ' && (<FAQ/>)}
      {tab === 'JV Convert' && (<AutoCon/>)}
      {tab === 'Invoice Lookup' && (<IL/>)}
      {tab === 'Cards & Concur' && (<CC/>)}
      {tab === 'Projects' && (<PI/>)}
      {tab === 'GLR' && (<GLR />)}
      {tab === 'Bank' && (<Bank />)}
    </div>
  );
}

export default Home;
