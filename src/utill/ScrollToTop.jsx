import { useEffect, useLayoutEffect , useState } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();

  const [fadeOut, setFadeOut] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
        window.scrollTo(0, 0);
      }, 500);
  
      return () => clearTimeout(timer);
  }, [location]);

// useEffect(() => {
//     const element = document.scrollingElement || document.documentElement;
//     element.scrollTo({ top: 0, behavior: 'smooth' });
//   }, [location]);

  return <>{props.children}</>

// useEffect(() => {
//     setFadeOut(true);
//     const timeout = setTimeout(() => {
//       const element = document.scrollingElement || document.documentElement;
//       element.scrollTo({ top: 0, behavior: 'smooth' });
//       setFadeOut(false);
//     }, 500);
//     return () => clearTimeout(timeout);
//   }, [location]);


// return (
//     <div style={{ opacity: fadeOut ? 0 : 1, transition: 'opacity 0.5s ease-out' }}>
//         {props.children}
//     </div>
//   );
};

export default ScrollToTop;