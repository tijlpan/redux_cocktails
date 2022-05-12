import { useGetAllCocktailsByInputQuery } from "../data/cocktailApi";
import OneCocktail from "./OneCocktail";
import { useSelector, useDispatch } from "react-redux";
import { setID } from "../data/cocktailSlice";

const SearchCocktail = () => {
  const { id, string } = useSelector((s) => s.cocktailState);
  const dispatch = useDispatch();
  const {
    data: { drinks },
    isLoading,
    isError,
  } = useGetAllCocktailsByInputQuery(string);
  return (
    <>
      {isError && <p>Er is een error</p>}
      {isLoading && <p>loading...</p>}
      {drinks && (
        <ul>
          {drinks.map(({ strDrink, strDrinkThumb, idDrink }) => (
            <div className="drink" key={idDrink}>
              <img href={strDrinkThumb}></img>
              <h2>{strDrink}</h2>
              <a
                href=""
                onClick={() => {
                  dispatch(setID(idDrink));
                  <OneCocktail />;
                }}
              >
                See more details
              </a>
            </div>
          ))}
        </ul>
      )}
    </>
  );
};

export default SearchCocktail;
