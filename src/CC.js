import React, { useState, useEffect } from "react";

const CC = () => {

  // useEffect(() => {
  // }, []);

  const thumbClick = (link) => {
      window.open(link, '_blank');
    };


  return (
    <div className='CCPage'>
      <h2>Bank Mastercard</h2><br />
      <div className='CClinks'>
        <div className='thumbLink'><img
          src="../public/thumbs/keyComCard.jpg"
          alt="Thumbnail"
          onClick={() => thumbClick('../public/KeyCommercialCard.pdf')}
          style={{ cursor: 'pointer', width: '200px' }}
        />
          <br />
          Key Bank Commercial Card Activation Instructions
        </div>
        <video width="320" height="240" controls>
          <source src="../public/KeyBankActivationVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
        <h2>Sap Concur Expense</h2>
        <div className='CClinks'>
        <div className='thumbLink'>
          <img
            src="../public/thumbs/quickStart.jpg"
            alt="Thumbnail"
            onClick={() => thumbClick('../public/ConcurExpenseGuide.pdf')}
            style={{ cursor: 'pointer', width: '200px' }}
          /><br />
          QuickStart Concur Guide</div>
        <div className='thumbLink'>
          <img
            src="../public/thumbs/concur.jpg"
            alt="Thumbnail"
            onClick={() => thumbClick('https://www.concurtraining.com/toolkit/standard/en/expense/end-user')}
            style={{ cursor: 'pointer', width: '300px' }}
          /><br />
          Concur Training Toolkit
          </div>
          <iframe src="../public/SAPConcurQuickStartChecklist.pdf" width="100%" height='800px'></iframe>
      </div>
    </div>
  );
}

export default CC;
