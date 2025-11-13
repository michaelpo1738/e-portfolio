import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <main>
                <h1>Welcome to My E-Portfolio</h1>
                <p>This is the main landing page where you can find information about my projects, skills, and more.</p>
            </main>
            <Footer />
        </div>
    );
};

export default Home;