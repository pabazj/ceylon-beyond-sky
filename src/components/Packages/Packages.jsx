import React, {useEffect} from 'react';
import './package.css';
import { packageList } from '../../Data';
import { Link, useLocation    } from "react-router-dom";

function Packages() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section name='packages' className='package_main'>
      <h2>Packages</h2>
      <div className='package_container'>
        {packageList?.map(item => (
       
          <article key={item.id}>
            <div className="article-wrapper">
              <figure>
                <img src={item.image} alt="" />
              </figure>
              <div className="article-body">
                <h2>{item.title}</h2>
                <p className="article-details">
                  {item.details}
                </p>
                <p className='btn-wrapper'>
                <Link to={item.url} ><button className="button" >View More</button></Link>
                </p>
              </div>
            </div>
          </article>
                
        ))}
      </div>

    </section>
  )
}

export default Packages
