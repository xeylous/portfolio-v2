'use client';
import React from 'react';

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = React.useState('idle');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  const SocialIcon = ({ name, url, path }) => (
    <a 
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label={name}
      className="w-12 h-12 flex items-center justify-center rounded-lg border border-[#ffffff10] bg-[#ffffff05] hover:bg-[#ffffff10] hover:border-[#ffffff30] text-[var(--linear-grey)] hover:text-white transition-all duration-300"
    >
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d={path} />
      </svg>
    </a>
  );

  return (
    <section className="w-full h-fit flex flex-col items-center py-[60px] sm:py-[80px] md:py-[100px] bg-[var(--hack-bg)]" id="contact">
      <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[1100px] h-fit flex items-center flex-col mb-10 sm:mb-12 md:mb-16">
        <small className="text-[0.9rem] sm:text-[1rem] md:text-[1.2rem] text-[var(--linear-grey)] mb-5 max-w-[600px] leading-[1.6] text-center">
          Got an idea? Let's build something great together.
        </small>
      </div>

      <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-0 sm:px-4 md:px-8">
        
        {/* Left Card: Contact Info (hidden on small + tablet, visible on large+) */}
        <div className=" lg:flex w-full h-full flex-col justify-between bg-[rgb(22,22,26)] p-6 sm:p-8 md:p-10 rounded-2xl border border-[#ffffff10] gap-8">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-[family-name:var(--font-dosis)] mb-4 sm:mb-6 text-white">Let's Connect</h1>
            <p className="text-[var(--linear-grey)] text-base sm:text-lg leading-relaxed mb-8 sm:mb-12">
              I'm passionate about creating digital experiences that make a difference. Reach out via email, phone, or socials.
            </p>

            <div className="flex flex-col gap-4 sm:gap-6">
              <a href="mailto:xeylous@gmail.com" className="flex items-center gap-3 sm:gap-4 text-[var(--linear-grey)] hover:text-white transition-colors group">
                <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </div>
                <span className="text-base sm:text-lg break-all">xeylous@gmail.com</span>
              </a>
              
              <div className="flex items-center gap-3 sm:gap-4 text-[var(--linear-grey)]">
                 <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                 </div>
                 <span className="text-base sm:text-lg">Kolkata, India</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            <h4 className="text-xs sm:text-sm uppercase font-bold text-white tracking-wider">Follow Me</h4>
            <div className="flex gap-3 sm:gap-4">
              <SocialIcon 
                name="GitHub" 
                url="https://github.com/xeylous" 
                path="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" 
              />
              <SocialIcon 
                name="LinkedIn" 
                url="https://linkedin.com/in/apurv-sinha-xeylous" 
                path="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" 
              />
              <SocialIcon 
                name="X (Twitter)" 
                url="https://twitter.com/xeylous" 
                path="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" 
              />
            </div>
          </div>
        </div>

        {/* Right Card: Form */}
        <div className="hidden lg:block w-full bg-[rgb(22,22,26)] p-6 sm:p-8 md:p-10 rounded-2xl border border-[#ffffff10]">
          <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-dosis)] mb-2 sm:mb-3 text-white">
            Start a Conversation
          </h3>
          <p className="text-[var(--linear-grey)] text-xs sm:text-sm mb-6 sm:mb-8">
            Fill out the form below and I'll get back to you soon.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full bg-[#ffffff05] border border-[#ffffff10] p-3 sm:p-4 rounded-lg text-white text-sm sm:text-base placeholder-[var(--linear-grey)] focus:outline-none focus:border-[var(--linear-grey)] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full bg-[#ffffff05] border border-[#ffffff10] p-3 sm:p-4 rounded-lg text-white text-sm sm:text-base placeholder-[var(--linear-grey)] focus:outline-none focus:border-[var(--linear-grey)] transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full bg-[#ffffff05] border border-[#ffffff10] p-3 sm:p-4 rounded-lg text-white text-sm sm:text-base placeholder-[var(--linear-grey)] focus:outline-none focus:border-[var(--linear-grey)] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <textarea
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message..."
                className="w-full bg-[#ffffff05] border border-[#ffffff10] p-3 sm:p-4 rounded-lg text-white text-sm sm:text-base placeholder-[var(--linear-grey)] focus:outline-none focus:border-[var(--linear-grey)] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-[#111] text-white font-bold py-3 sm:py-4 rounded-lg mt-1 sm:mt-2 hover:bg-black border border-[#ffffff10] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message →'}
            </button>

            {status === 'success' && (
              <p className="text-green-400 text-center font-medium animate-pulse text-sm sm:text-base">
                Message sent successfully!
              </p>
            )}
            
            {status === 'error' && (
              <p className="text-red-400 text-center font-medium text-sm sm:text-base">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
