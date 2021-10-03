import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function GifFinder(props) {
  const [value, setValue] = useState("");
  const history = useHistory();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    history.replace(`/search/${value}`);
    setValue("");
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="">Find and get gifs</label>
        <input
          type="text"
          name="gifSearch"
          id="gifSearchInput"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </form>
    </div>
  );
}
