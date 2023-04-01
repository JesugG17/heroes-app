import React from 'react'
import { Link } from 'react-router-dom';


export const HeroeCard = ({ hero }) => {

  const heroImageUrl = `/assets/heroes/${hero.id}.jpg`;
  
  return (
    <div className='col'>
        <div className='card'>
            <div className='row no-gutters'>
                <div className='col-4'>
                  <img src={ heroImageUrl } className='card-img' alt={ hero.superhero }/>
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h5 className='card-title'>{ hero.superhero }</h5>
                    <p className='card-text'>{ hero.alter_ego }</p>
                    <p className=''>{ hero.alter_ego !== hero.characters ? hero.characters : '' }</p>
                    <p className='card-text'>
                      <small>{ hero.first_appearance }</small>
                    </p>

                    <Link to={'/hero'}>
                      Mas...
                    </Link>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
