
const Privacy = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose lg:prose-lg">
          <p className="text-gray-600 mb-6">Last updated: April 24, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-700">
              LinguaLab ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, and safeguard your information 
              when you use our language learning platform.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Learning preferences and language selections</li>
              <li>Progress data and lesson completion status</li>
              <li>Usage statistics and interaction with the platform</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>To personalize your learning experience</li>
              <li>To track and save your progress</li>
              <li>To improve our platform and services</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please contact us at:
              privacy@lingualab.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
