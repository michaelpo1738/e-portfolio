import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
                <a href="#top">Back to top</a>
            </div>
        </footer>
    );
};

export default Footer;