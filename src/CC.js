import React, { useState, useEffect } from "react";

const CC = () => {

  // useEffect(() => {
  // }, []);

  return (
    <div className='CCPage'>
        <div className='faqLinks'>
        <strong>Useful Links:</strong><br />
        <ul className='linkList'>
          <li><a href='../public/KeyCommercialCard.pdf' target='_blank'>Key Bank Commercial Card Activation Instructions</a></li>
          <li><a href='../public/ConcurExpenseGuide.pdf' target='_blank'>QuickStart Concur Guide</a></li>
          <li><a href='https://www.concurtraining.com/toolkit/standard/en/expense/end-user' target='_blank'>Concur Training Toolkit</a></li>
        </ul>
      </div>
    </div>
  );
}

export default CC;
