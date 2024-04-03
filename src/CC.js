import React, { useState, useEffect } from "react";

const CC = () => {

  useEffect(() => {
  }, []);

  const thumbClick = (link) => {
    window.open(link, '_blank');
  };


  return (
    <div className='CCPage'>
      <h3>Travel and Expense Onboarding</h3>
      <div className='CClinks'>
        <div className='thumbLink'>
          <div className='overlay'>Travel and Expense Policy</div>
          <img
            src="../public/thumbs/TEthumb.jpg"
            alt="Thumbnail"
            onClick={() => thumbClick('../public/TEPolicy.pdf')}
            style={{ cursor: 'pointer', width: '300px' }}
          />
          </div>
          <div className='thumbLink' id='video'>
          Concur Town Hall Video
        <video width="300" height="240" controls>
          {/* <source src="../public/ConcurTownHall.mp4" type="video/mp4" /> */}
          <source src="https://github.com/Zach-Smith1/openFinance/raw/main/public/ConcurTownHall.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video><br />
          </div>
          <div className='thumbLink'>
          <div className='overlay'>Concur Town Hall PowerPoint</div>
          <img
            src="../public/thumbs/ConcurTownThumb.jpg"
            alt="Thumbnail"
            onClick={() => thumbClick('../public/ConcurTownHall.pdf')}
            style={{ cursor: 'pointer', width: '300px' }}
          />
          </div>
      </div>
      <h3>KeyBank Mastercard Activation</h3><br />
      <div className='CClinks'>
        <div className='thumbLink'>
        <div className='overlay'>Key Bank Commercial Card Activation Instructions</div>
          <img
          src="../public/thumbs/keyComCard.jpg"
          alt="Thumbnail"
          onClick={() => thumbClick('../public/KeyCommercialCard.pdf')}
          style={{ cursor: 'pointer', width: '300px' }}
        />
        </div>
        <div className='thumbLink' id='video'>
        KeyBank Card Activation Video
        <video width="200" height="180" controls>
          {/* <source src="../public/KeyBankActivationVideo.mp4" type="video/mp4" /> */}
          <source src="https://github.com/Zach-Smith1/openFinance/raw/main/public/KeyBankActivationVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video><br />
         </div>
      </div>
      <h3>Sap Concur Expense</h3>
      <div className='CClinks'>
        <div className='thumbLink'>
        <div className='overlay'>QuickStart Concur Guide</div>
          <img
            src="../public/thumbs/quickStart.jpg"
            alt="Thumbnail"
            onClick={() => thumbClick('../public/ConcurExpenseGuide.pdf')}
            style={{ cursor: 'pointer', width: '300px' }}
          />
          </div>
          <div className='thumbLink' id='video'>
          Sign into Concur<br/>Two-Factor Authentication Video
          <video width="300" height="240" controls>
          {/* <source src="../public/ConcurMFAInstructions.mp4" type="video/mp4" /> */}
          <source src="https://github.com/Zach-Smith1/openFinance/raw/main/public/ConcurMFAInstructions.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video><br />
          </div>
        <div className='thumbLink'>
        <div className='overlay'>Concur Training Toolkit</div>
          <img
            src="../public/thumbs/concur.jpg"
            alt="Thumbnail"
            onClick={() => thumbClick('https://www.concurtraining.com/toolkit/standard/en/expense/end-user')}
            style={{ cursor: 'pointer', width: '300px' }}
          />
        </div>
        <div id='bold'><br /><strong>Note: To open <span id='blue'>links</span> in a new tab in the PDF below, hold down the Command key on Mac or the Ctrl key on Windows when clicking <span id='blue'>links</span></strong></div><br/><br/>
        <iframe id='pdf' src="../public/SAPConcurQuickStartChecklist.pdf" width="100%" height='800px'></iframe>
      </div>
    </div>
  );
}
//  and "" ""
export default CC;
