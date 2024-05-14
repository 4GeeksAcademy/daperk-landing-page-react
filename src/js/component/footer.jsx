import React from 'react';

const Footer = () => {
  return (
    <div className='navbar-dark bg-dark p-3'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-2'>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className='col-md-8 d-flex align-items-center'>
          <p className='text-white mb-0'>
          Florida has some amazing cities to visit. Orlando is famous for its fun theme parks like Disney World and Universal Studios. Miami offers beautiful beaches, exciting nightlife, and cool art scenes. St. Augustine, the oldest city in the U.S., has historic sites and charming streets. Key West, at the state's southern tip, is perfect for relaxing with its island vibe and stunning sunsets. Each city has its own unique charm, making Florida a great place to explore.
          </p>
        </div>
      </div>
    </div>
    <footer className='text-center text-white mt-3'>
      <p>Created by Daniel Pena/Daperk - 2024</p>
    </footer>
  </div>
);
};

export default Footer;
