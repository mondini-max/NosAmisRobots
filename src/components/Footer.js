import React from 'react';

const Footer = () => {
  return (
    <footer className='pv4 ph3 ph5-m ph6-l mid-gray'>
      <small className='f6 db tc'>
        © 2021{' '}
        <b className='ttu'>
          made by 💖{' '}
          <a
            href='https://github.com/moshtaghfr'
            title='juste for fun'
            className='f6 dib ph2 link mid-gray dim'
            target='_blank'
            rel='noreferrer'
          >
            Maxime
          </a>{' '}
        </b>{' '}
        All Rights Reserved
      </small>
      <div className='tc mt3'>
        <a
          href='/'
          title='juste for fun'
          className='f6 dib ph2 link mid-gray dim'
        >
          just for fun 😅
        </a>
      </div>
    </footer>
  );
};

export default Footer;
