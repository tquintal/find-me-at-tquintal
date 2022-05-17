import './App.css';
import { useState } from 'react';
import { availableSoonNotyf } from './utils';
import { AiFillCode, AiFillMail, AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillYoutube, AiFillFacebook } from 'react-icons/ai';
import { SiCodewars, SiSpotify, SiLetterboxd, SiSteam, SiTwitch } from 'react-icons/si';

function App() {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className='main'>
      <div className='main-container'>
        <div className='profile-container'>
          <div className='profile-picture' />
          <div className='profile-bio'>
            <h4>Tomás Quintal</h4>
            <p>Dev, music and car enthusiast</p>
            <p>Aveiro, Portugal</p>
          </div>
        </div>
        <h4>Reach me</h4>
        <a href='https://tquintal.vercel.app/' target='_blank' rel='noopener noreferrer' className='section-container'>
          <div className='icon'>
            <AiFillCode size='1.5em' />
          </div>
          <div className='section-content'>
            <p>Portfolio / Website</p>
          </div>
        </a>
        <a
          href='mailto:tomas.quintal@gmail.com'
          className='section-container'
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}>
          <div className='icon'>
            <AiFillMail size='1.5em' />
          </div>
          <div className='section-content'>
            {
              isShown ?
                <p>tomas.quintal@gmail.com</p> :
                <p>Email</p>
            }
          </div>
        </a>
        <div className='section-container' onClick={availableSoonNotyf}>
          <div className='icon'>
            <AiFillLinkedin size='1.5em' />
          </div>
          <div className='section-content'>
            <p>Linkedin</p>
          </div>
        </div>
        <h4>Learning / Work</h4>
        <a href='https://github.com/tquintal' target='_blank' rel='noopener noreferrer' className='section-container'>
          <div className='icon'>
            <AiFillGithub size='1.5em' />
          </div>
          <div className='section-content'>
            <p>GitHub</p>
          </div>
        </a>
        <a href='https://www.codewars.com/users/tquintal' target='_blank' rel='noopener noreferrer' className='section-container'>
          <div className='icon'>
            <SiCodewars size='1.5em' />
          </div>
          <div className='section-content'>
            <p>Codewars</p>
          </div>
        </a>
        <h4>Social</h4>
        <a href='https://open.spotify.com/user/tpereiiraq98' target='_blank' rel='noopener noreferrer' className='section-container'>
          <div className='icon'>
            <SiSpotify size='1.5em' />
          </div>
          <div className='section-content'>
            <p>Spotify</p>
          </div>
        </a>
        <a href='https://letterboxd.com/tquintal/' target='_blank' rel='noopener noreferrer' className='section-container'>
          <div className='icon'>
            <SiLetterboxd size='1.5em' />
          </div>
          <div className='section-content'>
            <p>Letterboxd</p>
          </div>
        </a>
        <a href='https://www.youtube.com/channel/UCHsj3HF0qDxXle5_9TpA5Hg' target='_blank' rel='noopener noreferrer' className='section-container'>
          <div className='icon'>
            <AiFillYoutube size='1.5em' />
          </div>
          <div className='section-content'>
            <p>YouTube</p>
          </div>
        </a>
        <a href='https://www.instagram.com/tpquintal/' target='_blank' rel='noopener noreferrer' className='section-container'>
          <div className='icon'>
            <AiFillInstagram size='1.5em' />
          </div>
          <div className='section-content'>
            <p>Instagram</p>
          </div>
        </a>
        <a href='https://www.facebook.com/tpquintal/' target='_blank' rel='noopener noreferrer' className='section-container'>
          <div className='icon'>
            <AiFillFacebook size='1.5em' />
          </div>
          <div className='section-content'>
            <p>Facebook</p>
          </div>
        </a>
        <h4>Game</h4>
        <a href='https://steamcommunity.com/id/tquintal/' target='_blank' rel='noopener noreferrer' className='section-container'>
          <div className='icon'>
            <SiSteam size='1.5em' />
          </div>
          <div className='section-content'>
            <p>Steam</p>
          </div>
        </a>
        <a href='https://www.twitch.tv/tquintal' target='_blank' rel='noopener noreferrer' className='section-container'>
          <div className='icon'>
            <SiTwitch size='1.5em' />
          </div>
          <div className='section-content'>
            <p>Twitch</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;
