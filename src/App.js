import './style.css'
import Navbar from './components/Navbar';
import Hero from './Hero';
import Feature from './components/Feature';
import Clients from './components/Clients';
import Form from './components/Form'
import Footer from './components/Footer';

function App() {
  return (
    <div>
     <Navbar />
     <Hero />
     <Feature />
     <Clients />
     <Form />
     <Footer />
    </div>
  );
}

export default App;
