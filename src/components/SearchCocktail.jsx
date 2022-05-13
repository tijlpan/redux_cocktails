import { useGetAllCocktailsByInputQuery } from "../data/cocktailApi";
import { useSelector, useDispatch } from "react-redux";
import { setID, setDetailShown } from "../data/cocktailSlice";

const SearchCocktail = () => {
  const { string } = useSelector((s) => s.cocktailState);
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useGetAllCocktailsByInputQuery(string);
  return (
    <>
      {isError && <p>Er is een error</p>}
      {isLoading && <p>loading...</p>}
      {data && data.drinks && (
        <>
          {data.drinks.map(({ strDrink, strDrinkThumb, idDrink }) => (
            <div className="drink" key={idDrink}>
              <div className="imgholder">
                <img src={strDrinkThumb}></img>
              </div>
              <h2>{strDrink}</h2>
              <button
                type="button"
                onClick={() => {
                  dispatch(setID(idDrink));
                  dispatch(setDetailShown(true));
                }}
              >
                See more details
              </button>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default SearchCocktail;
