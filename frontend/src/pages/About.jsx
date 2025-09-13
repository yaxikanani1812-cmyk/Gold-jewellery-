import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Luxury Jewelry Store | Our Story & Mission</title>
        <meta name="description" content="Learn about our jewelry store's rich history, mission, and commitment to providing premium quality jewelry with exceptional craftsmanship." />
        <meta name="keywords" content="about jewelry store, jewelry history, jewelry craftsmanship, luxury jewelry mission" />
        <meta property="og:title" content="About Us - Luxury Jewelry Store" />
        <meta property="og:description" content="Learn about our jewelry store's rich history, mission, and commitment to premium quality." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/img/ring/13.jpg')",
            filter: 'brightness(0.6)'
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl">
            Crafting timeless elegance for generations
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-800 mb-6">
                A Legacy of Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                For over three decades, we have been dedicated to creating exceptional jewelry pieces 
                that celebrate life's most precious moments. Our journey began with a simple vision: 
                to bring together traditional craftsmanship and contemporary design.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Every piece in our collection tells a story of passion, precision, and perfection. 
                From the initial design concept to the final polish, our skilled artisans pour their 
                heart and soul into creating jewelry that will be treasured for generations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-jewelry-primary">30+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-jewelry-primary">10K+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-jewelry-primary">500+</div>
                  <div className="text-gray-600">Unique Designs</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/necklace/2.jpg"
                alt="Jewelry craftsmanship"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-jewelry-primary rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-jewelry-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To create exceptional jewelry that celebrates life's precious moments while 
                maintaining the highest standards of quality and craftsmanship.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-jewelry-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4">Quality Promise</h3>
              <p className="text-gray-600">
                We use only the finest materials and employ master craftsmen to ensure 
                every piece meets our exacting standards of excellence.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-jewelry-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.99L12 11l-1.99-2.01A2.5 2.5 0 0 0 8 8H5.46c-.8 0-1.54.37-2.01.99L1 12.5V22h2v-6h2.5l2.54-7.63A1.5 1.5 0 0 1 9.46 8H12c.8 0 1.54.37 2.01.99L16 11l1.99-2.01A2.5 2.5 0 0 1 20 8h2.54c.8 0 1.54.37 2.01.99L27 12.5V22h-7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4">Customer Focus</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We provide personalized service and 
                support to help you find the perfect piece for every occasion.
              </p>
            </div>
          </div>

          {/* Craftsmanship Section */}
          <div className="bg-gradient-to-r from-jewelry-primary to-jewelry-secondary text-white rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">
              Master Craftsmanship
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Our artisans combine traditional techniques with modern innovation to create 
              jewelry that stands the test of time. Each piece is carefully crafted by hand, 
              ensuring attention to every detail.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">Design</div>
                <div className="opacity-80">Creative vision</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Craft</div>
                <div className="opacity-80">Skilled hands</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Quality</div>
                <div className="opacity-80">Premium materials</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Perfection</div>
                <div className="opacity-80">Final polish</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The passionate individuals behind our beautiful creations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-48 h-48 bg-jewelry-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-6xl font-bold">JD</span>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-2">John Designer</h3>
              <p className="text-jewelry-primary mb-4">Creative Director</p>
              <p className="text-gray-600">
                With over 20 years of experience, John brings innovative designs to life, 
                blending traditional techniques with contemporary aesthetics.
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 bg-jewelry-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-6xl font-bold">SC</span>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-2">Sarah Craft</h3>
              <p className="text-jewelry-primary mb-4">Master Artisan</p>
              <p className="text-gray-600">
                Sarah's skilled hands have crafted thousands of pieces, each one a testament 
                to her dedication to perfection and attention to detail.
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 bg-jewelry-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-6xl font-bold">MQ</span>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-2">Michael Quality</h3>
              <p className="text-jewelry-primary mb-4">Quality Assurance</p>
              <p className="text-gray-600">
                Michael ensures every piece meets our exacting standards, overseeing the 
                quality control process with meticulous attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
