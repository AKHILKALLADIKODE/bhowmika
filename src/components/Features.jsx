function Features() {
  const features = [
    {
      id: 1,
      title: 'Free Delivery',
      description: 'All over India above Rs.2999',
      icon: 'fa-truck'
    },
    {
      id: 2,
      title: '7 Days Return',
      description: 'If goods have problems',
      icon: 'fa-redo'
    },
    {
      id: 3,
      title: 'Secure Payment',
      description: '100% secure payment',
      icon: 'fa-shield-alt'
    },
    {
      id: 4,
      title: 'Customer Care',
      description: '24+7 Customer Spport',
      icon: 'fa-headset'
    },
  ]

  return (
    <section className="cmmt">
      <div className="container-fluid cmpad">
        <div className="row delivery-box">
          {features.map((feature, index) => (
            <div key={feature.id} className="col-lg-3 col-md-6 col-12 mt-2 mb-2">
              <div className={`delivery-policy-box ${index !== features.length - 1 ? 'border-right' : ''}`}>
                <div>
                  <i className={`fa-solid ${feature.icon}`}></i>
                </div>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
