import React from 'react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4 font-sans text-gray-800">
      <div className="max-w-4xl bg-white shadow-sm border border-gray-100 p-12 rounded-lg leading-relaxed">
        <div className="mb-12 border-b border-gray-100 pb-8 text-center">
          <h1 className="text-3xl font-bold text-[#0A192F] mb-4">Privacy Policy</h1>
          <p className="text-[#C5A059] text-xs font-bold uppercase tracking-widest">Effective Date: 13th March 2026</p>
        </div>
        
        <div className="space-y-8 text-sm text-gray-600">
          <p>
            Welcome to Sumedha Chits Private Limited (“Company”, “we”, “our”, or “us”). We value your trust and are committed to protecting your personal information.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>

          <h2 className="text-xl font-bold text-[#0A192F] mt-8 mb-4">1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <div className="ml-4 space-y-4">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">a) Personal Information</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Address</li>
                <li>ID proof (if required for chit enrollment)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">b) Non-Personal Information</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Browser type</li>
                <li>Device information</li>
                <li>IP address</li>
                <li>Pages visited on our website</li>
              </ul>
            </div>
          </div>

          <h2 className="text-xl font-bold text-[#0A192F] mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Register and manage chit subscriptions</li>
            <li>Contact you regarding schemes, payments, and updates</li>
            <li>Provide customer support</li>
            <li>Improve our website and services</li>
            <li>Send promotional or marketing communication (only if consent is given)</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0A192F] mt-8 mb-4">3. Sharing of Information</h2>
          <p>We do not sell or rent your personal information. We may share information only with:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Regulatory authorities (if required by law)</li>
            <li>Trusted service providers (e.g., payment processors, HRMS tools)</li>
            <li>Internal staff for business operations</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0A192F] mt-8 mb-4">4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your data from unauthorized access, misuse, loss or disclosure. 
            However, no online system is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-xl font-bold text-[#0A192F] mt-8 mb-4">5. Cookies Policy</h2>
          <p>Our website may use cookies to enhance user experience, track website usage, and improve services. You can choose to disable cookies through your browser settings.</p>

          <h2 className="text-xl font-bold text-[#0A192F] mt-8 mb-4">6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Access your personal data</li>
            <li>Request correction of incorrect data</li>
            <li>Request deletion of your data (subject to legal requirements)</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0A192F] mt-8 mb-4">7. Third-Party Links</h2>
          <p>Our website may contain links to external websites. We are not responsible for their privacy practices.</p>

          <h2 className="text-xl font-bold text-[#0A192F] mt-8 mb-4">8. Compliance with Laws</h2>
          <p>We comply with applicable laws in India, including the Information Technology Act, 2000 and Applicable RBI / Chit Fund regulations (where applicable).</p>

          <h2 className="text-xl font-bold text-[#0A192F] mt-8 mb-4">9. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>

          <h2 className="text-xl font-bold text-[#0A192F] mt-8 mb-4">10. Contact Us</h2>
          <p>If you have any questions regarding this Privacy Policy, you can contact us:</p>
          <div className="bg-gray-50 p-6 rounded border border-gray-100 mt-4">
            <p className="font-bold text-[#0A192F]">Sumedha Chits Private Limited</p>
            <p>No.3FC-401, Raghav’s Complex, 4th Cross,</p>
            <p>East of New BDA Layout, Ramamurthy Nagar, Bengaluru – 560016</p>
            <p className="mt-2"><strong>Phone:</strong> +91 9964556559</p>
            <p><strong>Email:</strong> info@sumedhachits.com</p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="/" className="text-[#C5A059] font-bold text-xs uppercase tracking-widest hover:underline">
            &larr; Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
