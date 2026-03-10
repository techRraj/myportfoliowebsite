import React from 'react';

const About = ({ id }) => {
  return (
    <section id={id} className="">
    <div className="container py-5 bg-white ">
      <div className="row px-3">
        <div className="col-12">
          <h2 className="title position-relative pb-2 mb-4">About Me</h2>
        </div>
        <div className="col-12 ">
          <p className="text-break" style={{ overflowWrap: 'break-word' }}>
  Hello 👋, I'm Rajkumar Chourasiya! <br />
  A <strong>problem solver</strong> who happens to write code. A builder who believes in <strong>integrity</strong>.<br />
  I build intelligent full-stack apps with <strong>MERN (React, Node.js, Express, MongoDB)</strong>—but my superpower is{' '}
  <strong>breaking down complex challenges</strong> into smart, autonomous solutions.<br />
  
  Today, I specialize in <strong>AI Agent Development</strong>—integrating <strong>LangChain.js, LLMs (Gemini/OpenAI), Function Calling</strong>, and <strong>Vector DBs</strong> to create systems that don't just display data, but <em>act</em> on it.<br />
  
  Debugging APIs? Optimizing queries? Building AI workflows? I geek out on the{' '}
  <em>how</em> and <em>why</em>.<br />
  <strong>I adapt fast</strong>—give me a new framework, language, or stack, and I'll be productive{' '}
  <em>in no time</em>.<br />
  
  I don't just code—I ask: <em>"Are we solving the right problem?"</em><br />
  My code reflects my integrity: <strong>40% faster load times</strong> through optimization, <strong>30% boost in user satisfaction</strong> via intuitive UX, and <strong>20% team productivity gain</strong> through mentorship.<br />
  
  During internships, I went beyond specs: suggesting improvements, integrating APIs (<strong>Google Sheets, WhatsApp</strong>), and learning on the fly.<br />
  Unfamiliar tech stack? Third-party tools? <strong>No problem—I thrive in new environments</strong>.<br />
  
  I <strong>communicate clearly</strong>, collaborate openly, and treat your project like my own.<br />
  Outside work: competitive coding, open-source contributions, and building passion projects.<br />
  Often found sipping chai ☕ while exploring <strong>Generative AI</strong>, new frameworks, or planning my next build.<br />
  
  Fluent in <strong>Hindi (native)</strong> and <strong>English (professional)</strong>.<br />
  I believe <strong>growth lives outside the comfort zone</strong>—so that's where I stay.<br />
  
  Need a developer who <strong>thinks first, codes with integrity, and ships reliably</strong>? Let's connect!<br />
  I'd love to help bring your vision to life—with speed, care, and clean code.
</p>

          <div className="row mt-4">
            <div className="col-12 col-sm-6 py-1">
              <h5 className="d-inline text-primary me-2">Name:</h5> Rajkumar Chourasiya
            </div>
            {/* <div className="col-12 col-sm-6 py-1">
              <h5 className="d-inline text-primary me-2">Birthday:</h5> 28 June 2002
            </div> */}
            <div className="col-12 col-sm-6 py-1">
              <h5 className="d-inline text-primary me-2">Degree:</h5> B.Tech Computer Science
            </div>
            <div className="col-12 col-sm-6 py-1">
              <h5 className="d-inline text-primary me-2">Phone:</h5> +91 7415104895
            </div>
            <div className="col-12 col-sm-6 py-1">
              <h5 className="d-inline text-primary me-2">Email:</h5>{' '}
              <span className="text-break" style={{ overflowWrap: 'break-word' }}>
                rajchourasiya2862002@gmail.com
              </span>
            </div>
            <div className="col-12 col-sm-6 py-1">
              <h5 className="d-inline text-primary me-2">Address:</h5> Indore (M.P)
            </div>
            <div className="col-12 col-sm-6 py-1">
              <h5 className="d-inline text-primary me-2">Freelance:</h5> Available
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;