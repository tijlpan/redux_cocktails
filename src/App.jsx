import SearchCocktail from "./components/SearchCocktail";
import OneCocktail from "./components/OneCocktail";
import { useDispatch, useSelector } from "react-redux";
import { setString } from "./data/cocktailSlice";
import "./app.scss";

const App = () => {
  const { detailShown } = useSelector((s) => s.cocktailState);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Cocktailzzz</h1>
      <input
        type="text"
        className="input"
        placeholder="Zoek hier"
        onChange={(e) => {
          dispatch(setString(e.target.value));
        }}
      ></input>
      <div className="general">
        <div className="drinkContainer">
          <SearchCocktail />
        </div>
        {detailShown && <OneCocktail />}
      </div>
    </>
  );
};

export default App;
