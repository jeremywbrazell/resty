import React, { useState } from 'react';
import './form.scss';

function Form(props) {
  const [method, setMethod] = useState("GET");
  const [url, setURL] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method:method,
      url: url,
    };
    props.handleApiCall(formData);
  };
  const onHandleMethod = (e) => {
    setMethod(e.target.id);
    // console.log(e.target.id)
  };
  const onHandleURL = (e) => {
    setURL(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input onChange={onHandleURL} name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span onClick={onHandleMethod} id="get">GET</span>
          <span onClick={onHandleMethod} id="post">POST</span>
          <span onClick={onHandleMethod} id="put">PUT</span>
          <span onClick={onHandleMethod}id="delete">DELETE</span>
        </label>
      </form>
    </>
  );
}

export default Form;