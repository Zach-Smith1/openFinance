import React, { useState, useEffect } from "react";

const CC = () => {

  useEffect(() => {
  }, []);

  const thumbClick = (link) => {
    window.open(link, '_blank');
  };


  return (
    <div className='CCPage'>
      <div className='CClinks'>
        <div className='thumbLink'>
          <img
            src="../public/thumbs/TEthumb.jpg"
            alt="Thumbnail"
            onClick={() => thumbClick('../public/TEPolicy.pdf')}
            style={{ cursor: 'pointer', width: '300px' }}
          /><br />
          Travel and Expense Policy</div>
          <div className='thumbLink' id='video'>
          Concur Town Hall Video
        <video width="300" height="240" controls>
          {/* <source src="../public/ConcurTownHall.mp4" type="video/mp4" /> */}
          <source src="https://github.com/Zach-Smith1/openFinance/raw/main/public/ConcurTownHall.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video><br />
          </div>
          <div className='thumbLink'>
          <img
            src="../public/thumbs/ConcurTownThumb.jpg"
            alt="Thumbnail"
            onClick={() => thumbClick('../public/ConcurTownHall.pdf')}
            style={{ cursor: 'pointer', width: '300px' }}
          /><br />
          Concur Town Hall PowerPoint</div>
      </div>
      <h2>Bank Mastercard</h2><br />
      <div className='CClinks'>
        <div className='thumbLink'><img
          src="../public/thumbs/keyComCard.jpg"
          alt="Thumbnail"
          onClick={() => thumbClick('../public/KeyCommercialCard.pdf')}
          style={{ cursor: 'pointer', width: '300px' }}
        />
          <br />
          Key Bank Commercial Card Activation Instructions
        </div>
        <div className='thumbLink' id='video'>
        KeyBank Card Activation Video
        <video width="300" height="240" controls>
          {/* <source src="../public/KeyBankActivationVideo.mp4" type="video/mp4" /> */}
          <source src="https://github.com/Zach-Smith1/openFinance/raw/main/public/KeyBankActivationVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video><br />
         </div>
      </div>
      <h2>Sap Concur Expense</h2>
      <div className='CClinks'>
        <div className='thumbLink'>
          <img
            src="../public/thumbs/quickStart.jpg"
            alt="Thumbnail"
            onClick={() => thumbClick('../public/ConcurExpenseGuide.pdf')}
            style={{ cursor: 'pointer', width: '300px' }}
          /><br />
          QuickStart Concur Guide</div>
          <div className='thumbLink' id='video'>
          Sign into Concur with Two-Factor Authentication Video
          <video width="300" height="240" controls>
          {/* <source src="../public/ConcurMFAInstructions.mp4" type="video/mp4" /> */}
          <source src="https://github.com/Zach-Smith1/openFinance/raw/main/public/ConcurMFAInstructions.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video><br />
          </div>
        <div className='thumbLink'>
          <img
            src="../public/thumbs/concur.jpg"
            alt="Thumbnail"
            onClick={() => thumbClick('https://www.concurtraining.com/toolkit/standard/en/expense/end-user')}
            style={{ cursor: 'pointer', width: '300px' }}
          /><br />
          Concur Training Toolkit
        </div>
        <div><br />Note: To open links in a new tab in the PDF below, hold down the Command key on Mac or the Ctrl key on Windows when clicking links</div>
        <iframe id='pdf' src="../public/SAPConcurQuickStartChecklist.pdf" width="100%" height='800px'></iframe>
      </div>
    </div>
  );
}
//  and "" ""
export default CC;
