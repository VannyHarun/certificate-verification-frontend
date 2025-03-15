import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import CertificateVerification from './components/CertificateVerification';
import CertificateForm from './components/CertificateForm';
import AdminLogin from './components/AdminLogin';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

function AppWithRouting() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [activeTab, setActiveTab] = useState('issue'); // 'issue' or 'verify'
  
  const handleAdminLogin = (success) => {
    setIsAdmin(success);
    setShowLoginModal(false); // Close the modal on successful login
  };

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setActiveTab('issue'); // Reset to default tab
  };

  // Main content component that changes based on route
  const MainContent = () => {
    return (
      <main className="App-main">
        {!isAdmin ? (
          <>
            <div className="component-container">
              <CertificateVerification />
            </div>
            
            {showLoginModal && (
              <div className="modal-overlay">
                <div className="modal-content">
                  <AdminLogin onLogin={handleAdminLogin} />
                  <button className="cancel-button" onClick={toggleLoginModal}>
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="admin-dashboard">
            <div className="admin-tabs">
              <button 
                className={`tab-button ${activeTab === 'issue' ? 'active' : ''}`}
                onClick={() => setActiveTab('issue')}
              >
                Issue Certificate
              </button>
              <button 
                className={`tab-button ${activeTab === 'verify' ? 'active' : ''}`}
                onClick={() => setActiveTab('verify')}
              >
                Verify Certificate
              </button>
            </div>
            
            <div className="tab-content">
              {activeTab === 'issue' ? (
                <CertificateForm />
              ) : (
                <CertificateVerification />
              )}
            </div>
          </div>
        )}
      </main>
    );
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/" className="header-logo-link">
            <h1>Certificate Verification System</h1>
          </Link>
          {isAdmin ? (
            <div className="admin-controls">
              <span className="user-name">Admin Panel</span>
              <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div className="admin-controls">
              <button className="header-login-button" onClick={toggleLoginModal}>
                Admin Login
              </button>
            </div>
          )}
        </header>
        
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
        
        <footer className="App-footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Certificate Verification System</h3>
              <p>A secure platform for issuing and verifying educational certificates.</p>
            </div>
            
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Verify Certificate</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Contact Us</h3>
              <p>Email: <a href="mailto:support@certverify.com" className="footer-email">support@certverify.com</a></p>
              <p>Phone: +1 (555) 123-4567</p>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">FB</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">TW</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">LI</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Certificate Verification System. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy Policy</Link>
              <span className="footer-divider">|</span>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default AppWithRouting; 