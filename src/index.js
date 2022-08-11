import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import HeaderBottom from './HeaderBottom';
import { ClassComp, ClassComp2, Wrapper } from './classComponentWithProps';
import { CarBrands } from './CarBrands';
import { Cards } from './Cards';
import './style/all.min.css'
import './index.css';
import './script/script'


const dataPeople = [
  "Bobur",
  "Nortoy",
  "Salim",
  "Turg'un",
  "Nodir"
]

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <HeaderBottom />
    <CarBrands />
    <Cards />
    <ClassComp2 name="Xabibulloh" id={1} />
    <Wrapper>
      {dataPeople.map((value, index) => {
        return <ClassComp name={value} id={index + 1} />
      })}
    </Wrapper>
    <Wrapper>
      {dataPeople.map((value, index) => {
        return <ClassComp name={value} id={index + 1} />
      })}
    </Wrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
