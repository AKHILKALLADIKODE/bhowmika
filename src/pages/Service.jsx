function Service() {
  const services = [
    { 
      id: 1, 
      name: 'Consulting', 
      icon: 'fas fa-lightbulb',
      description: 'Expert consulting services to guide your business decisions' 
    },
    { 
      id: 2, 
      name: 'Product Design', 
      icon: 'fas fa-pencil-ruler',
      description: 'Custom product design tailored to your requirements' 
    },
    { 
      id: 3, 
      name: 'Quality Assurance', 
      icon: 'fas fa-check-double',
      description: 'Rigorous testing to ensure product excellence' 
    },
    { 
      id: 4, 
      name: 'Support & Maintenance', 
      icon: 'fas fa-tools',
      description: 'Ongoing support and maintenance services' 
    },
    { 
      id: 5, 
      name: 'Training', 
      icon: 'fas fa-graduation-cap',
      description: 'Comprehensive training programs for your team' 
    },
    { 
      id: 6, 
      name: 'Logistics', 
      icon: 'fas fa-shipping-fast',
      description: 'Efficient delivery and logistics solutions' 
    },
  ]

  return (
    <>
      
      <main>
        {/* Sub Banner */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-cinzel font-bold">SERVICES</h1>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold font-cinzel text-center mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Professional solutions tailored to meet your unique business needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map(service => (
                <div key={service.id} className="service-card">
                  <i className={`${service.icon} text-5xl text-blue-600 mb-4`}></i>
                  <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <button className="btn-primary mt-6 text-sm">Learn More</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold font-cinzel text-center mb-12">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                <h3 className="text-xl font-bold mb-2">Consultation</h3>
                <p className="text-gray-600">Understanding your needs and goals</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                <h3 className="text-xl font-bold mb-2">Planning</h3>
                <p className="text-gray-600">Developing a customized solution</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                <h3 className="text-xl font-bold mb-2">Execution</h3>
                <p className="text-gray-600">Implementing the solution</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
                <h3 className="text-xl font-bold mb-2">Support</h3>
                <p className="text-gray-600">Ongoing support and optimization</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Service
