import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading'; // Assuming you have this component
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitSuccess) setSubmitSuccess(false);
    if (submitError) setSubmitError(false);
  };

  // ... (validateForm function same as before) ...
  const validateForm = () => {
    const errors = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'Please enter your name.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Please enter your email.';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email format.';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Please enter the subject.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'Please enter your message.';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  // ... (handleSubmit function same as before) ...
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mvgwdeoy', { // Your Formspree URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Network error');

      setSubmitSuccess(true);
      setSubmitError(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormErrors({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error(error);
      setSubmitError(true);
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };


  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'sshwani59@gmail.com',
      link: 'mailto:sshwani59@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91 9876543210',
      link: 'tel:+919876543210',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Lucknow, India',
    },
  ];

  // Naya input style
  const inputStyle = "w-full p-3 bg-transparent border-b-2 border-border/50 focus:border-primary transition-colors duration-300 outline-none focus:ring-0";

  return (
    <section id="contact" className="section-padding bg-background transition-colors duration-500">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Contact Me"
          subtitle="Feel free to get in touch. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions."
        />

        {/* --- Layout Change: 2/5 aur 3/5 split --- */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          
          {/* --- Left Column (Contact Info) --- */}
          {/* Note: Redundant text 'Get in Touch' hata diya gaya hai */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center text-primary mr-5">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-muted-foreground hover:text-primary transition-colors" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* --- Right Column (Contact Form) --- */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* --- Card Style Change: Solid card, behtar padding --- */}
            <div className="bg-background-secondary p-8 md:p-12 rounded-lg border border-border/10 shadow-lg">
              <h3 className="text-2xl font-semibold mb-8">Send a Message</h3>

              {submitSuccess && (
                <div className="mb-6 p-4 rounded-lg bg-green-100 text-green-700">
                  ✅ Your message has been sent successfully!
                </div>
              )}
              {submitError && (
                <div className="mb-6 p-4 rounded-lg bg-red-100 text-red-700">
                  ❌ Something went wrong. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 mb-6">
                  
                  {/* --- Input Style Change --- */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputStyle}
                      placeholder="Full Name"
                    />
                    {formErrors.name && <p className="text-sm text-red-500 mt-1">{formErrors.name}</p>}
                  </div>

                  {/* --- Input Style Change --- */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputStyle}
                      placeholder="example@email.com"
                    />
                    {formErrors.email && <p className="text-sm text-red-500 mt-1">{formErrors.email}</p>}
                  </div>
                </div>

                {/* --- Input Style Change --- */}
                <div className="mb-8">
                  <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={inputStyle}
                    placeholder="Subject"
                  />
                  {formErrors.subject && <p className="text-sm text-red-500 mt-1">{formErrors.subject}</p>}
                </div>

                {/* --- Input Style Change --- */}
                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4} // 5 thoda zyaada lag raha tha
                    className={`${inputStyle} resize-none`}
                    placeholder="Type your message..."
                  />
                  {formErrors.message && <p className="text-sm text-red-500 mt-1">{formErrors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button-primary w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin border-2 rounded-full w-4 h-4 border-t-transparent border-white"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;