import { useState, useEffect } from 'react';
import { ArrowUpCircleFill } from 'react-bootstrap-icons';

export const FloatingButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={`floating-button ${isVisible ? 'show' : ''}`} onClick={scrollToTop}>
            <ArrowUpCircleFill size={32} />
        </div>
    );
};
