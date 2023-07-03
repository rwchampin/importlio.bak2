'use client';

import Tag from './Tag';
import React, { useState, useRef } from 'react';

const TagInput = (props) => {
  const [tags, setTags] = useState(['JavaScript', 'TypeScript']);
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState('');

  const inputValueChangeHandler = (inputChange) => {
    setInputValue(inputChange);
    if (inputChange[inputChange.length - 1] === ',') {
      setTags([...tags, inputChange.slice(0, inputChange.length - 1)]);
      setInputValue('');
    }
  };
  const cullTagFromTags = (tag) => {
    setTags([...tags.filter((element) => element !== tag)]);
  };

  return (
    <div className="tag-container">
      <input
        type="text"
        ref={inputRef}
        value={inputValue}
        onChange={(event) => inputValueChangeHandler(event.target.value)}
        placeholder="separated by commas"
        className="tag-input"
      />
      <div className="tag-area bg-zinc-800 rounded-lg p-5 flex gap-5 h-20">
        {tags.map((tag, i) => (
          <Tag key={i} text={tag} cullTagFromTags={cullTagFromTags} />
        ))}
      </div>
    </div>
  );
};

export default TagInput;
