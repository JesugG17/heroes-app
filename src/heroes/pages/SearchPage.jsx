import { useLocation, useNavigate } from 'react-router';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { getHerosByName } from '../helpers';
import { HeroeCard } from '../components/HeroeCard';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { hero } = queryString.parse(location.search);

  const heroes = getHerosByName( hero );

  const { searchText, onInputChange } = useForm({
    searchText: hero
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();

    navigate(`?hero=${searchText.toLowerCase().trim()}`);
  }

  return (
    <>
      <h1>SearchHero</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searchings</h4>
          <hr />
          <form onSubmit={ onSearchSubmit }>
            <input
              className="form-control"
              type="text"
              placeholder="Search a hero"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />
            <button className="btn btn-outline-primary mt-2">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary">
            Search a hero
          </div>
          <div className="alert alert-danger">
            No hero found with <b>{ hero }</b>
          </div>

          {
            heroes.length > 0 &&
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
      </div>
    </>
  );
};
