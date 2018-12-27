import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark border-bottom border-white ">
          <span className="navbar-brand mb-0 h1 font-weight-bold ml-5 border rounded pr-2 pl-2">Alexander Thompson</span>
        </nav>
        <div className="d-flex flex-grow-1">
          <div className="d-flex flex-column flex-grow-1 align-items-center pt-2 border-right bg-img text-white container">
            <h3 className="font-weight-bold text-primary border rounded bg-black pr-2 pl-2"> List Of Helpfull Advice: </h3>
            <ul>
              <li className="font-weight-bold pt-1">Cooked Meat should only be out for 2 hours.</li>
              <li className="font-weight-bold pt-3">Drink water regularly, 64oz a day.</li>
              <li className="font-weight-bold pt-3">Never lend anyone money.</li>
              <li className="font-weight-bold pt-3">Stay off public WIFI.</li>
              <li className="font-weight-bold pt-3">Get taxes done early!</li>
              <li className="font-weight-bold pt-3">Don't underestimate the power of rednecks.</li>
              <li className="font-weight-bold pt-3">Be cautious of what you say.</li>
              <li className="font-weight-bold pt-3">Be mindfull of others.</li>
              <li className="font-weight-bold pt-3">You are not your job. You are not the amount of cash you have in the bank.<br /> You are not your possessions.</li>
              <li className="font-weight-bold pt-3">Find your passion. Look for what inspires you.<br /> Find what you love to do and pursue it with all your heart.<br /> You may well find a way how to make money from doing it.</li>
              <li className="font-weight-bold pt-3">Love hurts.<br /> But it is so much better than closing yourself off for fear of being hurt and not experiencing love.</li>
              <li className="font-weight-bold pt-3">Communication and respect are the foundations for a lasting relationship.</li>
              <li className="font-weight-bold pt-3">Three things are needed in a relationship — lust, love, and shared values.</li>
              <li className="font-weight-bold pt-3">Look after your health — physical, mental, and spiritual</li>
            </ul>
          </div>
          <div className="d-flex flex-column bg-primary flex-grow-1 align-items-center pt-2 container">
            <h3 className="font-weight-bold text-white border rounded pr-2 pl-2 bg-black">Links:</h3>
            <a className="font-weight-bold pb-3 text-dark" href="https://www.getbellhops.com/blog/move-out-parents-house/">How to Move Out of Your Parents’ House (With a Checklist)</a>
            <a className="text-dark font-weight-bold pb-3" href="https://www.moving.com/tips/how-to-move-out-of-your-parents-house-in-13-easy-steps/">How to Move Out of Your Parents’ House in 13 Easy Steps</a>
            <a className="text-dark font-weight-bold pb-3" href="https://www.huffingtonpost.com/rebecca-perkins/parents-words-of-wisdom_b_5598671.html">40 Words of Wisdom Every Parent Needs to Give Their Child</a>
            <a className="text-dark font-weight-bold pb-3" href="http://www.ba-bamail.com/content.aspx?emailid=14179">Inspiring Words for the Searching Soul</a>
            <a className="text-dark font-weight-bold pb-3" href="https://inktank.fi/28-of-the-best-pieces-of-advice-about-life-youll-ever-read/">28 of the best pieces of advice about life you’ll ever read</a>
            <a className="text-dark font-weight-bold pb-3" href="https://www.businessinsider.com/life-changing-advice-and-words-of-wisdom-2015-12">People reveal the most life-changing piece of advice<br /> they’ve ever received</a>
            <a className="text-dark font-weight-bold pb-3" href="https://www.inc.com/christina-desmarais/28-successful-executives-share-best-advice-they-received-from-their-dads.html">28 Successful Executives Share the Best Advice<br /> They Received From Their Dads</a>
            <a className="text-dark font-weight-bold pb-3" href="https://www.theodysseyonline.com/50-people-respond-what-best-piece-advice-ever-received">50 People Answer,<br /> "What Is The Best Piece Of Advice You Ever Received?"</a>
            <a className="text-dark font-weight-bold pb-3" href="https://www.success.com/the-best-advice-these-11-successful-people-ever-received/">The Best Advice These 11 Successful People Ever Received</a>
            <a className="text-dark font-weight-bold pb-3" href="https://www.realsimple.com/work-life/family/kids-parenting/mom-advice">The Best Advice From Mom</a>
            <a className="text-dark font-weight-bold pb-3" href="https://www.rd.com/advice/relationships/best-advice-got-from-mother-in-law/">The Best Advice I Ever Got from My Mother-in-Law</a>
          </div>
        </div>
        <div className="bg-dark border-top">
          <h3>Contact me at:</h3>
          <ul>

          </ul>
        </div>
      </div>
    );
  }
}

export default App;
