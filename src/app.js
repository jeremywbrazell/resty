import React, { useEffect, useState } from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Form from "./components/form/form";
import Results from "./components/results/results";
import axios from "axios";
import "./app.scss";

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  const callApi = async (requestParams) => {
    setRequestParams(requestParams);
  };
  useEffect(async () => {
    if (Object.keys(requestParams).length > 0) {
      const response = await axios({
        method: requestParams.method,
        url: requestParams.url,
      })
        .then((res) => res)
        .catch((e) => console.log(e));
      setData(response);
    }
  }, [requestParams]);

  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </>
  );
}

export default App;
