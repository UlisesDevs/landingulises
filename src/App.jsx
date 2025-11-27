import React, { useState } from 'react';
import BentoCard from './components/BentoCard';
import Modal from './components/Modal';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import Clock from './components/Clock';
import VisitorCounter from './components/VisitorCounter';
import './App.css';

import aboutImg from './assets/About.png';
import pixelMeImg from './assets/Pixelme2.png';
import meImg from './assets/me.jpg';
import portfolioImg from './assets/Portfolio.png';
import techImg from './assets/Techstack.png';
import socialImg from './assets/Socials.png';
import contactImg from './assets/Contact.png';

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [modalColor, setModalColor] = useState(null);

  const colors = {
    header: '#ffc6ff', // Pastel Purple
    about: '#ff99c8', // Pastel Pink
    portfolio: '#a9def9', // Pastel Blue
    tech: '#fcf6bd', // Pastel Lemon
    social: '#c7ceea', // Pastel Lavender
    contact: '#ffb7b2', // Pastel Peach
    clock: '#b0efeb',   // Pastel Mint
    visitor: '#ffdfba'  // Pastel Orange
  };

  const openModal = (id) => {
    setActiveModal(id);
    setModalColor(colors[id]);
  };
  const closeModal = () => setActiveModal(null);

  const renderModalContent = () => {
    switch (activeModal) {
      case 'about':
        return (
          <div className="modal-body">
            <div className="profile-header">
              <div
                className="profile-pic"
                style={{
                  '--bg-default': `url(${pixelMeImg})`,
                  '--bg-hover': `url(${meImg})`
                }}
              ></div>
              <h2>Software Engineer Student</h2>
            </div>
            <div className="profile-details">
              <p>
                Hi, I am currently learning Mobile Development, Living in Mexico, I am passionate about expanding my programming skills and knowledge through self-study. My journey in programming is driven by curiosity and a desire to build innovative solutions. I am committed to continuous learning and eager to explore the diverse possibilities that tech offer.
              </p>
            </div>
          </div>
        );
      case 'portfolio':
        return (
          <div className="modal-body">
            <h2>My Portfolio</h2>
            <div className="portfolio-grid">
              <div className="portfolio-item">
                <h4>Portfolio Website</h4>
                <p>This responsive retro-themed portfolio built with React and Vite.</p>
              </div>
              <div className="portfolio-item">
                <h4>Appointment SaaS</h4>
                <p>A scheduling platform for businesses to organize and manage appointments (In Progress).</p>
              </div>
            </div>
          </div>
        );
      case 'tech':
        return (
          <div className="modal-body">
            <h2>Tech Stack</h2>
            <ul className="tech-list">
              <li>React / React Native</li>
              <li>JavaScript / TypeScript</li>
              <li>Java / Spring Boot (Learning)</li>
              <li>Git / GitHub</li>
              <li>UI/UX Design Principles</li>
            </ul>
          </div>
        );
      case 'social':
        return (
          <div className="modal-body">
            <h2>Connect With Me</h2>
            <div className="social-links">
              <a href="https://github.com/UlisesDevs" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
              <a href="https://www.linkedin.com/in/ulisesdevs" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="modal-body">
            <h2>Get in Touch</h2>
            <p style={{ marginBottom: '1rem' }}>Have a project in mind or just want to say hi?</p>
            <ContactForm />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <main className="bento-grid">
        <BentoCard
          className="card-header"
          backgroundColor={colors.header}
        >
          <div className="header-content">
            <h1>Ulises De la Madrid Lázaro</h1>
          </div>
        </BentoCard>

        <BentoCard
          title="About Me"
          image={aboutImg}
          backgroundColor={colors.about}
          className="card-about"
          onClick={() => openModal('about')}
        />

        <BentoCard
          title="Works"
          image={portfolioImg}
          backgroundColor={colors.portfolio}
          className="card-portfolio"
          onClick={() => openModal('portfolio')}
        />

        <BentoCard
          backgroundColor={colors.clock}
          className="card-clock"
          onClick={() => { }}
        >
          <Clock />
        </BentoCard>

        <BentoCard
          title="Tech Stack"
          image={techImg}
          backgroundColor={colors.tech}
          className="card-tech"
          onClick={() => openModal('tech')}
        />

        <BentoCard
          title="Media"
          image={socialImg}
          backgroundColor={colors.social}
          className="card-social"
          onClick={() => openModal('social')}
        />

        <BentoCard
          title="Contact"
          image={contactImg}
          backgroundColor={colors.contact}
          className="card-contact"
          onClick={() => openModal('contact')}
        />

        <BentoCard
          title="Visitors"
          backgroundColor={colors.visitor}
          className="card-visitor"
          onClick={() => { }}
        >
          <VisitorCounter />
        </BentoCard>
      </main>

      <Footer />

      <Modal isOpen={!!activeModal} onClose={closeModal} backgroundColor={modalColor}>
        {renderModalContent()}
      </Modal>
    </div>
  );
}

export default App;
