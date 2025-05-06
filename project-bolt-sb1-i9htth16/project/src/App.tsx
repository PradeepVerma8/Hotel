import React from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProperty from './components/FeaturedProperty';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Location from './components/Location';
import FloorPlans from './components/FloorPlans';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Layout>
      <Header />
      <Hero />
      <FeaturedProperty />
      <Amenities />
      <Gallery />
      <Location />
      <FloorPlans />
      <About />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;