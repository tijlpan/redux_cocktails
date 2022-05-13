import { useGetCocktailByIdQuery } from "../data/cocktailApi";
import { useSelector } from "react-redux";

const OneCocktail = () => {
  const { id } = useSelector((s) => s.cocktailState);
  const { data, isError, isLoading } = useGetCocktailByIdQuery(id);
  return (
    <>
      {isError && <p>Er is een error</p>}
      {isLoading && <p>loading...</p>}
      <div className="detail" key={id}>
        {data && JSON.stringify(data.drinks, null, 2)}
      </div>
    </>
  );
};

export default OneCocktail;
