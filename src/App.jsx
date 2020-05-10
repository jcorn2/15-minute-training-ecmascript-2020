/* global globalThis */
import React, { useEffect, useState } from 'react';
import './App.css';
import Car from './Car';

function App() {
  const [promises, setPromises] = useState([]);
  const [myValue, setMyValue] = useState(null);
  const object = { a: { b: { c: 1 } } };
  const matches = [...'a b c a b c a b c'.matchAll(/a/g)];
  const myCar = new Car();

  useEffect(() => {
    Promise.allSettled([Promise.resolve('resolve'), Promise.reject('reject')])
      .then((data) => setPromises(data));
  }, [setPromises]);

  useState(() => {
    const getValue = async () => {
      const val = await import(`./${'value.js'}`);
      setMyValue(val.default.value);
    }

    getValue();
  }, [])

  return (
    <div className="App">
      <div>
        <p>typeof 99999999999999999999999999999999999999999n = {typeof 99999999999999999999999999999999999999999n}</p>
      </div>
      <div>
        { promises.map((p, i) => (
          <p key={i}>{p.status}</p>
        ))
        }
      </div>
      <div>
        <p>globalThis = {globalThis.toString()}</p>
      </div>
      <div>
        <p>undefined ?? 1 = {undefined ?? 1}</p>
        <p>null ?? 1 = {null ?? 1}</p>
        <p>0 ?? 1 = {0 ?? 1}</p>
      </div>
      <div>
        <p>object?.a?.b?.d ?? not defined = {object?.a?.b?.d ?? 'not defined'}</p>
      </div>
      <div>
        {matches.map((match, i) => (
          <p key={i}>match {i} = {match}</p>
        ))}
      </div>
      <div>
        <p>myCar.getYear() = {myCar.getYear()}</p>
        <p>myCar.driveCar() = {myCar.driveCar()}</p>
      </div>
      <div>
        <p>My value is {myValue}</p>
      </div>
    </div>
  );
}

export default App;
