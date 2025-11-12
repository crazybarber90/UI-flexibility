import './Contact.css'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Your message has been sent!')
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Let's build something great together.</p>
      </section>

      <section className="contact-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@domain.com"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your project"
            required
          />

          <button type="submit" className="btn-submit">
            Send message
          </button>
        </form>
      </section>
    </main>
  )
}
