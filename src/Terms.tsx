import React from 'react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4 font-sans text-gray-800">
      <div className="max-w-4xl bg-white shadow-sm border border-gray-100 p-12 rounded-lg leading-relaxed">
        <div className="mb-12 border-b border-gray-100 pb-8 text-center">
          <h1 className="text-3xl font-bold text-[#0A192F] mb-4">Terms and Conditions</h1>
          <p className="text-[#C5A059] text-xs font-bold uppercase tracking-widest">Effective Date: 13th March 2026</p>
        </div>
        
        <div className="space-y-8 text-sm text-gray-600">
          <p>
            Welcome to Sumedha Chits Private Limited (“Company”, “we”, “our”, or “us”). These Terms and Conditions govern your use of our website and participation in our chit fund schemes.
            By accessing our website or enrolling in any chit scheme, you agree to comply with these Terms.
          </p>

          <h2 className="text-xl font-bold text-[#0A192F] mt-8 mb-4">1. Definitions</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Chit Fund:</strong> A financial arrangement where members contribute a fixed amount periodically to a common pool.</li>
            <li><strong>Subscriber/Member:</strong> Any individual or entity enrolled in a chit scheme.</li>
            <li><strong>Foreman:</strong> The Company acting as the organizer and manager of the chit.</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0A192F] mt-8 mb-4">2. Eligibility</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Must be 18 years or above and below 60 years</li>
            <li>Must be legally capable under Indian law</li>
            <li>Must complete KYC verification (Aadhaar, PAN, etc.)</li>
            <li>Must provide accurate and complete information</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0A192F] mt-8 mb-4">3. Registration & Membership</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Membership is subject to approval by the Company</li>
            <li>Each subscriber must sign a chit agreement before joining</li>
            <li>Membership is non-transferable without prior approval</li>
            <li>The Company reserves the right to accept or reject applications</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0A192F] mt-8 mb-4">4. Chit Contributions</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Subscribers must pay monthly installments on or before the due date</li>
            <li>Delay in payment may attract penalties or interest charges</li>
            <li>Non-payment may lead to suspension or termination of membership</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0A192F] mt-8 mb-4">5. Auction / Prize Process</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Chit auctions will be conducted as per the chit agreement</li>
            <li>Subscribers may participate in bidding or lottery (as applicable)</li>
            <li>The winning bidder must provide required surety/guarantee before receiving funds</li>
            <li>If surety is not provided, payment may be withheld or delayed</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0A192F] mt-8 mb-4">6. Payment of Prize Amount</h2>
          <p className="mb-2">Prize amount will be disbursed after:</p>
          <ul className="list-disc list-inside space-y-2 ml-8 mb-4">
            <li>Verification of documents</li>
            <li>Submission of surety/security</li>
          </ul>
          <p>The Company may deduct applicable charges, commission, or dues.</p>

          <h2 className="text-xl font-bold text-[#0A192F] mt-8 mb-4">7. Default & Penalties</h2>
          <p className="mb-2">Failure to pay installments may result in:</p>
          <ul className="list-disc list-inside space-y-2 ml-8">
            <li>Penalty charges</li>
            <li>Loss of dividend benefits</li>
            <li>Legal action for recovery of dues</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0A192F] mt-8 mb-4">8. Withdrawal / Substitution</h2>
          <p className="mb-2">A subscriber wishing to exit must:</p>
          <ul className="list-disc list-inside space-y-2 ml-8 mb-4">
            <li>Arrange a replacement member OR</li>
            <li>Wait until the Company finds a replacement</li>
          </ul>
          <p>Refunds will be processed after deductions and conditions are met.</p>

          <h2 className="text-xl font-bold text-[#0A192F] mt-8 mb-4">9. Website Usage Terms</h2>
          <p className="mb-2">By using our website, you agree that:</p>
          <ul className="list-disc list-inside space-y-2 ml-8">
            <li>You will not misuse the website or engage in illegal activities</li>
            <li>You will not share login credentials (OTP, password, etc.)</li>
            <li>The Company is not responsible for misuse of your account</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0A192F] mt-8 mb-4">10. Data & Privacy</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>You agree to provide accurate information</li>
            <li>Your data will be handled as per our Privacy Policy</li>
            <li>The Company may use your data for operational and regulatory purposes</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0A192F] mt-8 mb-4">11. Limitation of Liability</h2>
          <p className="mb-2">The Company is not liable for:</p>
          <ul className="list-disc list-inside space-y-2 ml-8 mb-4">
            <li>Technical issues or website downtime</li>
            <li>Loss due to user negligence</li>
            <li>External factors beyond control</li>
          </ul>
          <p>Services are provided on an “as-is” basis without guarantees.</p>

          <h2 className="text-xl font-bold text-[#0A192F] mt-8 mb-4">12. Compliance with Laws</h2>
          <p className="mb-2">All chit schemes are governed by:</p>
          <ul className="list-disc list-inside space-y-2 ml-8 mb-4">
            <li>Chit Funds Act, 1982</li>
            <li>Applicable state rules and regulations</li>
          </ul>
          <p>All disputes shall fall under jurisdiction of courts in Bangalore.</p>

          <h2 className="text-xl font-bold text-[#0A192F] mt-8 mb-4">13. Modification of Terms</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>The Company may update these Terms at any time</li>
            <li>Continued use of services implies acceptance of changes</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0A192F] mt-8 mb-4">14. Termination</h2>
          <p className="mb-2">The Company may suspend or terminate membership for:</p>
          <ul className="list-disc list-inside space-y-2 ml-8 mb-4">
            <li>Violation of terms</li>
            <li>Fraud or misrepresentation</li>
            <li>Non-payment of dues</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0A192F] mt-8 mb-4">15. Contact Information</h2>
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
