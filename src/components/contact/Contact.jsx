import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { MdOutlineEmail } from 'react-icons/md'
import { BsLinkedin, BsWhatsapp, BsGithub } from 'react-icons/bs'
import './contact.css'

const contactInfo = [
  {
    icon: <MdOutlineEmail />,
    label: 'Email',
    value: 'samiullah0813@gmail.com',
    href:  'mailto:samiullah0813@gmail.com',
    color: '#818cf8',
  },
  {
    icon: <BsLinkedin />,
    label: 'LinkedIn',
    value: 'mohd-samiullah1',
    href:  'https://www.linkedin.com/in/mohd-samiullah1/',
    color: '#0a66c2',
  },
  {
    icon: <BsWhatsapp />,
    label: 'WhatsApp',
    value: '+91 742 809 8866',
    href:  'https://wa.me/917428098866',
    color: '#4ade80',
  },
  {
    icon: <BsGithub />,
    label: 'GitHub',
    value: 'MOHDSAMIULLAH',
    href:  'https://github.com/MOHDSAMIULLAH',
    color: '#f1f5f9',
  },
]

const Contact = () => {
  const form   = useRef()
  const [status, setStatus] = useState(null) // 'success' | 'error' | null
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus(null)
    setLoading(true)

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('success')
        e.target.reset()
      })
      .catch(() => setStatus('error'))
      .finally(() => setLoading(false))
  }

  return (
    <section id="contact">
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section__label">Hire Me</span>
          <h2 className="section__title">Let's Build Together</h2>
          <p className="section__subtitle">
            Looking for a backend-focused fullstack developer? I'm available for full-time roles, freelance projects, and exciting technical collaborations.
          </p>
        </motion.div>

        <div className="contact__grid">
          {/* Left — Contact Info */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <h3 className="contact__info-title">Ready to ship something great?</h3>
            <p className="contact__info-text">
              I'm open to backend/fullstack roles, contract work, and impactful
              collaborations. Experienced with Node.js, AWS, Docker, and scalable
              system design. Send a message — I respond within 24 hours.
            </p>

            <div className="contact__links">
              {contactInfo.map(({ icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__link glass-card"
                  aria-label={`Contact via ${label}`}
                >
                  <span className="contact__link-icon" style={{ color }} aria-hidden="true">
                    {icon}
                  </span>
                  <div className="contact__link-info">
                    <span className="contact__link-label">{label}</span>
                    <span className="contact__link-value">{value}</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="contact__form glass-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
            noValidate
          >
            <div className="contact__form-group">
              <label htmlFor="contact-name" className="contact__label">Full Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="John Doe"
                className="contact__input"
                required
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="contact-email" className="contact__label">Email Address</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="john@example.com"
                className="contact__input"
                required
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="contact-message" className="contact__label">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="6"
                placeholder="Tell me about your project or opportunity..."
                className="contact__input contact__textarea"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary contact__submit"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <motion.p
                className="contact__feedback contact__feedback--success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                role="status"
              >
                Message sent successfully! I'll get back to you soon.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                className="contact__feedback contact__feedback--error"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                role="alert"
              >
                Something went wrong. Please try again or email me directly.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
