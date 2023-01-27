import { lazy } from 'react';

const Intro = lazy(() => import('./components/intro/Intro'))
const Topbar = lazy(() => import('./components/topbar/Topbar'))
const Header = lazy(() => import('./components/header/Header'))

const Experience = lazy(() => import('./components/experience/Experience'))
const Portfolio = lazy(() => import('./components/portfolio/Portfolio'))
// const Testimonials = lazy(() => import('./components/testimonials/Testimonials'))
const Contact = lazy(() => import('./components/contact/Contact'))
const Footer = lazy(() => import('./components/footer/Footer'))


const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
      <Experience />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App
