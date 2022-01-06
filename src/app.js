import React, { useReducer, useEffect, useState } from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Form from "./components/form/form";
import Results from "./components/results/results";
import axios from "axios";
import "./app.scss";

const initialState = {
  data: null,
  requestParams:{}
}

const reducer = (state = initialState, action) => {
  console.log('line 15', state, action)
  switch(action.type) {
    default: return state;
    case 'UPDATE_REQUESTPARAMS': return {...state, ...action.payload};
    case 'UPDATE_DATA': return {...state, ...action.payload}
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  // const [data, setData] = useState(null);
  // const [requestParams, setRequestParams] = useState({});

  const callApi = async (requestParams) => {
    // setRequestParams(requestParams);
    const action = {
      type: 'UPDATE_REQUESTPARAMS',
      payload: {requestParams}
    }
    dispatch(action)
  };
  useEffect(async () => {
    if (Object.keys(state.requestParams).length > 0) {
      const response = await axios({
        method: state.requestParams.method,
        url: state.requestParams.url,
      })
        .then((res) => res)
        .catch((e) => console.log(e));
        
      const action = {
        type: 'UPDATE_DATA',
        payload: { data: response }
      }
      dispatch(action)
    }
  }, [state.requestParams]);

  return (
    <>
      <Header />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={state.data} />
      <Footer />
    </>
  );
}

export default App;
