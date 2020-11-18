import React, { useEffect, useState } from 'react';
import { useCombobox } from 'downshift';

function Search() {
  // set state, passing in an array
  const [inputItems, setInputItems] = useState([]);
  const [users, setUsers] = useState([]);
  const [single, setSingleUser] = useState('');

  useEffect(() => {
    fetch().then(res => res.json().then(data => setUsers(data)).catch(err => console.log(err))).catch(err => console.log(err));
  }, []);

  return <div></div>;
}

export default Search;
