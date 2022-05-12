import { useGetCocktailByIdQuery } from "../data/cocktailApi";
import { useSelector } from "react-redux";

const OneCocktail = () => {
  const { id, string } = useSelector((s) => s.cocktailState);
  const {
    data: { drinks },
    isError,
    isLoading,
  } = useGetCocktailByIdQuery(id);
  return (
    <>
      {isError && <p>Er is een error</p>}
      {isLoading && <p>loading...</p>}
      <div className="detail" key={id}>
        {JSON.stringify(drinks, null, 2)}
      </div>
    </>
  );
};

export default OneCocktail;
