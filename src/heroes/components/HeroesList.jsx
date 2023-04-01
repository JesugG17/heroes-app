import { HeroeCard } from './';
import { getHeroesByPublisher } from '../helpers'

export const HeroesList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher);

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {
            heroes.map( hero => {
                return (
                    <HeroeCard
                        key={ hero.id } 
                        hero={ hero }
                    />
                )
            })
        }

    </div>
  )
}
