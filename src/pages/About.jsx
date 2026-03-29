function About() {
  return (
    <>
      <main>
        {/* Sub Banner */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-cinzel font-bold">ABOUT US</h1>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-4xl font-bold font-cinzel mb-6 text-gray-800">Our Story</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  BHOWMIKA is dedicated to providing premium products and services that meet the highest standards of quality and excellence. 
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our mission is to deliver value to our customers through innovative solutions and outstanding service. With years of experience in the industry, 
                  we have built a reputation for reliability and excellence.
                </p>
              </div>
              <div>
                <h2 className="text-4xl font-bold font-cinzel mb-6 text-gray-800">Our Mission</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  We are committed to being the leading provider in our industry, offering products that exceed expectations 
                  and services that make a real difference in our customers' lives.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Every product is carefully selected and tested to ensure it meets our strict quality standards. 
                  We believe in building long-lasting relationships with our customers based on trust and excellence.
                </p>
              </div>
            </div>

            {/* Values Section */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-lg">
              <h2 className="text-4xl font-bold font-cinzel mb-8 text-center text-gray-800">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <i className="fas fa-star text-4xl text-blue-600 mb-4"></i>
                  <h3 className="text-xl font-bold mb-2">Quality</h3>
                  <p className="text-gray-600">Commitment to excellence in every product and service</p>
                </div>
                <div className="text-center">
                  <i className="fas fa-handshake text-4xl text-blue-600 mb-4"></i>
                  <h3 className="text-xl font-bold mb-2">Integrity</h3>
                  <p className="text-gray-600">Honest and transparent dealings with all stakeholders</p>
                </div>
                <div className="text-center">
                  <i className="fas fa-heart text-4xl text-blue-600 mb-4"></i>
                  <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
                  <p className="text-gray-600">Putting customer satisfaction at the heart of everything</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default About
