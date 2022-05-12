import SearchCocktail from "./components/SearchCocktail";
import { useDispatch } from "react-redux";
import { setString } from "./data/cocktailSlice";
import "./app.css";

const App = () => {
  const dispatch = useDispatch();
  return (
    <div className="general">
      <input
        type="text"
        onChange={(e) => {
          e.preventDefault();
          dispatch(setString(e.target.value));
        }}
      ></input>
      <div className="drinkContainer">
        <SearchCocktail />
      </div>
    </div>
  );
};

export default App;
