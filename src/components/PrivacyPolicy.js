import React from 'react';
import './LegalPages.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <h2>Privacy Policy</h2>
      
      <div className="legal-content">
        <section className="legal-section">
          <h3>1. Introduction</h3>
          <p>
            At Certificate Verification System, we take your privacy seriously. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you use our certificate verification service.
          </p>
          <p>
            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
            please do not access the site.
          </p>
        </section>
        
        <section className="legal-section">
          <h3>2. Collection of Your Information</h3>
          <p>
            We may collect information about you in a variety of ways. The information we may collect via the Service includes:
          </p>
          <h4>Personal Data</h4>
          <p>
            When you use our service to verify certificates, we may collect personally identifiable information, 
            such as your name, email address, and organization. This information is collected only when voluntarily submitted.
          </p>
          <h4>Certificate Data</h4>
          <p>
            When verifying certificates, we collect the certificate hash and related verification data.
          </p>
        </section>
        
        <section className="legal-section">
          <h3>3. Use of Your Information</h3>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. 
            Specifically, we may use information collected about you via the Service to:
          </p>
          <ul>
            <li>Verify the authenticity of certificates</li>
            <li>Create and manage your account</li>
            <li>Respond to customer service requests</li>
            <li>Administer promotions, surveys, or other site features</li>
            <li>Compile anonymous statistical data for research purposes</li>
            <li>Deliver targeted advertising, newsletters, and other information regarding our services</li>
            <li>Increase the efficiency and operation of the Service</li>
            <li>Monitor and analyze usage and trends to improve your experience with the Service</li>
          </ul>
        </section>
        
        <section className="legal-section">
          <h3>4. Disclosure of Your Information</h3>
          <p>
            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
          </p>
          <h4>By Law or to Protect Rights</h4>
          <p>
            If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy 
            potential violations of our policies, or to protect the rights, property, and safety of others, we may share your 
            information as permitted or required by any applicable law, rule, or regulation.
          </p>
        </section>
        
        <section className="legal-section">
          <h3>5. Security of Your Information</h3>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. 
            While we have taken reasonable steps to secure the personal information you provide to us, please be aware that 
            despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be 
            guaranteed against any interception or other type of misuse.
          </p>
        </section>
        
        <section className="legal-section">
          <h3>6. Contact Us</h3>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <p>
            Certificate Verification System<br />
            Email: privacy@certverify.com<br />
            Phone: +1 (555) 123-4567
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 