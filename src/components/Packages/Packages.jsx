import React from 'react';
import './package.css';
import { packageList } from '../../Data';
import { Link   } from "react-router-dom";

function Packages() {
  return (
    <section name='packages'>
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
                <p>
                <Link to={`/package/${item.title.replace(/\s/g, '')}`} ><button className="button">Details</button></Link>
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
