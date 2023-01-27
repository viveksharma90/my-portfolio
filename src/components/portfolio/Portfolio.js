import React from 'react';
import IMG1 from '../../assets/1.jpg';
import IMG2 from '../../assets/2.jpg';
import IMG3 from '../../assets/3.jpg';
import IMG4 from '../../assets/4.jpg';
import IMG5 from '../../assets/5.jpg';
import IMG6 from '../../assets/6.jpg';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'IIT Dhanbad',
      img: IMG1,
      link: '',
      github: '',
    },
    {
      id: 2,
      title: 'Admin UI',
      img: IMG4,
      link: 'https://admin-ui-gkt.netlify.app/',
      github: '',
    },
    {
      id: 3,
      title: 'To-Do-App',
      img: IMG2,
      link: '',
      github: '',
    },
    {
      id: 4,
      title: 'XFlix Frontend',
      img: IMG3,
      link: 'https://xflix-frontend018.netlify.app/',
      github: '',
    },
    {
      id: 5,
      title: 'QKart Frontend (Hooks)',
      img: IMG5,
      link: 'https://qkart-v2-frontend.netlify.app/',
      github: '',
    },
    {
      id: 6,
      title: 'QTrip',
      img: IMG6,
      link: 'https://qtrip-dynamic-vivek-frontend.netlify.app/',
      github: '',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
            </div>
            <div className="portfolio__item-cta">
              {/* <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a> */}
              <a
                href={pro.link}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
