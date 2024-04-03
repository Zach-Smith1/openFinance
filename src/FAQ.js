import React, { useState, useEffect } from "react";

const FAQ = () => {
  useEffect(() => {

  }, []);

  return (
    <div className='FAQPage'>
      <div id='faqHeader'>
        {/* <h1>Frequently Asked Questions<br /></h1> */}
      </div>
      <h2>Concur Frequently Asked Questions</h2>
      <p>&emsp;&emsp;&emsp;&emsp;<strong>Q: When is my March expense report due?</strong><br/>
      &emsp;&emsp;&emsp;&emsp;A: </p><br />
        <img
      id="fpTimeline"
      src="../public/thumbs/FAQTime.jpg"
      alt="timeline"/>
      <br/><br/>
      <div className='faqInfo'>
        {/* <h1>FAQ</h1> */}
        <p>
          <strong>Q: What are some advantages of switching to KeyBank and the Concur expense management system?</strong><br />
          A: The KeyBank corporate card program adds value to LCSNW, as part of our overall banking partner conversion.  Concur Expense is a modern online workflow system with direct automated feed of agency credit card transactions, flexibility to pay out of pocket reimbursements twice a month and 24/7 support desk resources.<br /><br />
          <strong>Q: Do all LCSNW employees need to create an account in the Concur system?</strong><br />
          A: No. Only if you are an approved KeyBank MasterCard holder or have a legitimate out of pocket business expense requiring reimbursement by submitting an expense report. Use your Concur email invite link for your initial login.  If you do not have an invite or need to have an account created, please send your request to <a href='mailto:expenses@lcsnw.org'>expenses@lcsnw.org</a>.<br /><br />
          <strong>Q: How do I Sign in to the new Concur system? (username, password or SSO credentials)</strong><br />
          Use your email invite link for your initial login. Username is your LCSNW.org email
          <br />
          Set up Two-Factor Authentication find the video on intranet Finance tab/Finance Projects button for adding authenticator extension in Chrome or at <a href='https://www.concurtraining.com/toolkit/standard/en/expense/end-user'>Concur Expense End User Training</a> website for adding authenticator app to your mobile device
          <br />
          Create your own Password.  LSCNW does not use Single Sign On (SSO) credentials for Concur
          <br /><br />
          <strong>Q: How will out-of-pocket reimbursements be different in the new system?</strong><br />
          A: You may submit reimbursement requests twice a month, or continue to submit them once a month if you prefer. Expenses must be submitted within 60 days of the date incurred. Reimbursements will now be included as a separate line (not taxed, nor part of your earnings) on your 10th and 25th of the month paycheck based on timely submission and approval of your expense report.
          <br /><br />
          <strong>Q: When should I expect to see Credit Card transactions from KeyBank in Concur?</strong><br />
          A: Transactions will appear within 5-6 business days of the transaction date.<br />
          If you enable Expense Assistant (in your Concur profile preferences) credit card transactions will automatically create a report for the each month labeled Month 1, 202x.  Please rename the report YYMM format.  Using Concur Expense Assistant, along with ExpenseIT in your mobile app to upload or emailing your receipts, the system will try to match the receipt with the card transaction.  If the receipt is uploaded to Concur before a credit card transaction feed, then a pending transaction will be created. <br /><br />
          <strong>Q: How will entering vehicle mileage be different in the Concur system?</strong><br />
          A: You can use a mapping tool to automatically track mileage between waypoints or addresses. If you take a different route than what the map initially shows, you can “click” and “drag” the line to better represent the route(s) you actually drove. You can also use the “deduct commute” feature, which does the math for you – for instance, if your work requires driving to a different office than your normally assigned location.<br /><br />
          <strong>Q: Are mileage rates affected by the new system?</strong><br />
          A: No. Mileage rates are tied to Internal Revenue Service rates and automatically change when the IRS rate changes. The standard rate for 2024 is $0.67 cents per mile.<br /><br />
          <strong>Q: What is the purpose of the “add attendees” feature when submitting meal expenses?</strong><br />
          A: To meet federal tax requirements, you need to add the names of all the people who joined you for a meal and are included in the final bill. Attendees that were not found in the search feature can be entered manually and then will be saved for easy selection in the future.<br /><br />
          <strong>Q: What is the purpose of the “itemization” feature when submitting hotel expenses?</strong><br />
          A: Itemization ensures every type of expense is identified.  IRS regulations require Hotel bills to be itemized for room costs and verify any meals or incidental costs are separate and appropriately categorized by type, business purpose and if necessary, marked as personal (I.E. movie, partner meal, etc.)<br /><br />
          <strong>Q: What does it mean if I see an orange exclamation mark symbol when I’m submitting my expenses?</strong><br />
          A: These symbols are just “soft” reminders that help educate users as we get used to the new system and updated Travel and Expense (T&E) policy. You can still submit your expenses. <br /><br />
          <strong>Q: What does it mean if I see a red stop sign when I’m submitting my expenses?</strong><br />
          A: This brings a hard stop to the process. You have to resolve the identified problem in your expense report before your expenses can be submitted.<br /><br />
          <strong>Q: If I am an expense report approver, will I receive notification alerts like I did under the Wells Fargo system.</strong><br />
          A: Yes, if you have not turned off email alerts, approvers receive notification when a new report has entered their approval queue.  After 4-calendar days, if the report is still unapproved, another alert will be sent.  After 5 calendar days, the report will be escalated to the approvers manager.  Please review and approve submitted reports timely to ensure employees receive their reimbursements in their next paycheck.<br /><br />
          <strong>Q: If I am an expense report approver, how do I delegate someone to fill in for me when I am on vacation or otherwise unavailable?</strong><br />
          A: You no longer have to contact the expenses@lcsnw.org to assign a peer or above delegate.
          Click on the  Icon in the upper right hand corner and select “Personal Settings”
          Under Expense Settings, select Expense Delegates link to add your delegate<br /><br />
          <strong>Q: What should I do with my old Wells Fargo VISA cards after Feb. 29th? </strong><br />
          A: Cut them up or shred them.<br /><br />
          <strong>Q: When are expense reports due? </strong><br />
          A: Expense reports should be submitted on the 1st business day of the following month that  expenses are incurred. I.E. March “202403” expense report completed and submitted on April 1, 2024 allows for supervisor review and approval by April 3rd, then accounting review and posting to the accounting system (MIP GL) by April 5th and timely creation of monthly funder invoices and financial reporting.  Hint: adding expenses and uploading receipts throughout the month, makes the process smoother and easier to meet the timeline example above.
          <br /><br />
          <strong>Q: Are tolls a reimbursable expense? </strong><br />
          A: Yes<br /><br />
          <strong>Q: Are you able to upload multiple documents to support an expense?</strong><br />
          A: Yes<br /><br />
          <strong>Q: Are you able to restrict GL coding combinations entered (Program, RevSource, Area)? </strong><br />
          A: Not currently, but we are investigating ways to enhance the system to minimize coding errors.<br /><br />
          <strong>Q: Does the last four digits of my employee ID work for my District Purchasing Card? </strong><br />
          A: No. Check your email with separate credentials instructions. If you need a reminder of your credentials, please send a request to <a href='mailto:expenses@lcsnw.org'>expenses@lcsnw.org</a>.<br /><br />
          <strong>Q: Am I able to manage my individual expense reports and transactions I made on a District Purchasing Card with the same Concur login?</strong><br />
          A: Yes. Use your profile icon in the top right corner of your home page and select “Act as Another User” to switch between the radial button of “Myself” or “As a delegate for other users” <br />
        </p>
        <br/><br/>
      </div>
    </div>
  );
}

export default FAQ;
