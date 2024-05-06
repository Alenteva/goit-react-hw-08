import css from "../searchbox/searchbox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";

const useFilterValue = () => {
  const filter = useSelector((state) => state.filters.filter);
  return { filter };
};

const SearchBox = () => {
  const dispatch = useDispatch();
  const { filter } = useFilterValue();

  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    dispatch(changeFilter(filterValue));
  };

  return (
    <div className={css["SearchBox"]}>
      <label>Find contacts by name or number</label>
      <input
        className={css["inputSearchBox"]}
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};
export default SearchBox;
