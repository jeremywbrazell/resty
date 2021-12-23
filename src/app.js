import React, { useState } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Results from './components/results/results';
import axios from 'axios';
import './app.scss';

function App() {

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
 
  // componentDidMount() {
  //   axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`)
  //   .then(res => {
  //     const poke = res.data;
  //     setState({ poke })
  //   })
  // }
  const callApi = async (requestParams) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`)
    .then(res => {
      const poke = res.data;
      setData({ poke })
    })
    // await setTimeout(() => {
    //   const data = {
    //     count: 2,
    //     results: [
    //       { name: 'fake thing 1', url: 'http://fakethings.com/1' },
    //       { name: 'fake thing 2', url: 'http://fakethings.com/2' },
    //     ],
    //   };
    //   setData(data);
    // }, 1000)
    setRequestParams(requestParams);
  }

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
