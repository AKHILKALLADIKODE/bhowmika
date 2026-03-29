import { useState } from 'react'
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <main>
        {/* Sub Banner */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-cinzel font-bold">CONTACT US</h1>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold font-cinzel mb-8">Get In Touch</h2>
                {submitted && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                    Thank you for your message. We will get back to you soon!
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">Your Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea 
                      className="form-control" 
                      id="message" 
                      name="message" 
                      rows="5" 
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-primary">Send Message</button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold font-cinzel mb-8">Contact Information</h2>
                <div className="contact-grid">
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt text-2xl text-blue-600 mb-4"></i>
                    <h3 className="font-bold text-lg mb-2">Location</h3>
                    <address className="text-gray-600">
                      Panjami, Meppadi, Kottappadi part<br/>
                      Wayanad, Kerala 673577
                    </address>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-envelope text-2xl text-blue-600 mb-4"></i>
                    <h3 className="font-bold text-lg mb-2">Email</h3>
                    <a href="mailto:akhilkalladikode774@gmail.com" className="text-blue-600 hover:text-blue-800">
                      akhilkalladikode774@gmail.com
                    </a>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-phone text-2xl text-blue-600 mb-4"></i>
                    <h3 className="font-bold text-lg mb-2">Phone</h3>
                    <a href="tel:+918086859458" className="text-blue-600 hover:text-blue-800">
                      +91-8086859458
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Contact
