import React, { useState } from 'react';

const CustomInput = () => {
  const [inputText, setInputText] = useState('');
  return (
    <div>
      <input
        placeholder="Enter some text"
        onChange={e => setInputText(e.target.value)}
      />
      <h1>{inputText}</h1>
    </div>
  );
};

export default CustomInput;
