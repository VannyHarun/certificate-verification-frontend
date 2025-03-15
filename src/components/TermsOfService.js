import React from 'react';
import './LegalPages.css';

const TermsOfService = () => {
  return (
    <div className="legal-page">
      <h2>Terms of Service</h2>
      
      <div className="legal-content">
        <section className="legal-section">
          <h3>1. Agreement to Terms</h3>
          <p>
            By accessing our website at certverify.com, you are agreeing to be bound by these Terms of Service, 
            all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
          </p>
          <p>
            If you do not agree with any of these terms, you are prohibited from using or accessing this site. 
            The materials contained in this website are protected by applicable copyright and trademark law.
          </p>
        </section>
        
        <section className="legal-section">
          <h3>2. Use License</h3>
          <p>
            Permission is granted to temporarily download one copy of the materials on Certificate Verification System's website 
            for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and 
            under this license you may not:
          </p>
          <ul>
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose, or for any public display;</li>
            <li>Attempt to decompile or reverse engineer any software contained on Certificate Verification System's website;</li>
            <li>Remove any copyright or other proprietary notations from the materials; or</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>
          <p>
            This license shall automatically terminate if you violate any of these restrictions and may be terminated by 
            Certificate Verification System at any time. Upon terminating your viewing of these materials or upon the termination 
            of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
          </p>
        </section>
        
        <section className="legal-section">
          <h3>3. Disclaimer</h3>
          <p>
            The materials on Certificate Verification System's website are provided on an 'as is' basis. 
            Certificate Verification System makes no warranties, expressed or implied, and hereby disclaims and negates 
            all other warranties including, without limitation, implied warranties or conditions of merchantability, 
            fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <p>
            Further, Certificate Verification System does not warrant or make any representations concerning the accuracy, 
            likely results, or reliability of the use of the materials on its website or otherwise relating to such materials 
            or on any sites linked to this site.
          </p>
        </section>
        
        <section className="legal-section">
          <h3>4. Limitations</h3>
          <p>
            In no event shall Certificate Verification System or its suppliers be liable for any damages 
            (including, without limitation, damages for loss of data or profit, or due to business interruption) 
            arising out of the use or inability to use the materials on Certificate Verification System's website, 
            even if Certificate Verification System or a Certificate Verification System authorized representative 
            has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>
        
        <section className="legal-section">
          <h3>5. Accuracy of Materials</h3>
          <p>
            The materials appearing on Certificate Verification System's website could include technical, typographical, 
            or photographic errors. Certificate Verification System does not warrant that any of the materials on its website 
            are accurate, complete or current. Certificate Verification System may make changes to the materials contained on 
            its website at any time without notice. However Certificate Verification System does not make any commitment to 
            update the materials.
          </p>
        </section>
        
        <section className="legal-section">
          <h3>6. Links</h3>
          <p>
            Certificate Verification System has not reviewed all of the sites linked to its website and is not responsible 
            for the contents of any such linked site. The inclusion of any link does not imply endorsement by 
            Certificate Verification System of the site. Use of any such linked website is at the user's own risk.
          </p>
        </section>
        
        <section className="legal-section">
          <h3>7. Modifications</h3>
          <p>
            Certificate Verification System may revise these terms of service for its website at any time without notice. 
            By using this website you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </section>
        
        <section className="legal-section">
          <h3>8. Governing Law</h3>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws and you irrevocably 
            submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService; 