import React, { useState, useEffect } from 'react';
import { BsArrowUpSquare} from 'react-icons/bs';

function ScrollToTopButton() {
    const [backToTop, setBackToTop] = useState(false);


    useEffect(() => {

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setBackToTop(true)
            }
            else {
                setBackToTop(false)
            }
        });

    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            {backToTop && (
                <BsArrowUpSquare
                    style={{ position: 'fixed', bottom: '50px', right: '50px', height: '40px', width: '40px', zIndex: '999' }}
                    onClick={scrollUp}
                />
            )}
        </>
    );
}

export default ScrollToTopButton;