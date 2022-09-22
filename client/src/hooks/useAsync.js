// { data, isLoading, isError}
import axios from "axios";
import { useReducer, useEffect, useRef } from "react";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT": {
      return {
        data: [],
        isLoading: true,
        isError: false,
      };
    }
    case "FETCH_FAILURE": {
      return {
        isLoading: false,
        data: [],
        isError: true,
      };
    }
    case "FETCH_SUCCESS": {
      return {
        isError: false,
        isLoading: false,
        data: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

const useAsync = (url) => {
  let cache = useRef({});
  const [state, dispatch] = useReducer(dataFetchReducer, initialState);

  useEffect(() => {
    if (!url) {
      return;
    }
    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });
      if (cache[url]) {
        dispatch({ type: "FETCH_SUCCESS", payload: cache[url] });
        return;
      }
      try {
        const response = await axios.get(url);
        const data = response.data;
        cache[url] = data;
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (e) {
        dispatch({ type: "FETCH_FAILURE" });
      }
    };
    fetchData();
  }, [url]);
  return state;
};

export default useAsync;
