import axios from "axios";
import { useState, useEffect } from "react";
import Filter from "../components/Filter";
import Rats from '../components/Rats'
import Header2 from '../components/Header2'

const Catalogue = () => {
    const [rats, setRats] = useState([]);
    const [vitesseTexte, setVitesseTexte] = useState([]);
    const [menaceTexte, setMenaceTexte] = useState([]);
    const [contagionTexte, setContagionTexte] = useState([]);
    const [vitesseValue, setVitesseValue] = useState(0);
    const [menaceValue, setMenaceValue] = useState(0);
    const [contagionValue, setContagionValue] = useState(0);
    const [result, setResult] = useState([]);
useEffect(() => {
  axios
    .get("http://localhost:4242/rats")
    .then((res) => res.data)
    .then((data) => {
      setRats(data);
      setResult(data);
    });
}, []);
useEffect(() => {
  axios
    .get("http://localhost:4242/vitesse")
    .then((res) => res.data)
    .then((data) => {
      setVitesseTexte(data);
    });
}, []);
useEffect(() => {
  axios
    .get("http://localhost:4242/menace")
    .then((res) => res.data)
    .then((data) => {
      setMenaceTexte(data);
    });
}, []);
useEffect(() => {
  axios
    .get("http://localhost:4242/contagion")
    .then((res) => res.data)
    .then((data) => {
      setContagionTexte(data);
    });
}, []);
    return (
        <div className="catalogue-container" >
          
            <Header2/>
            <Filter rats={rats} setResult = {setResult} setVitesseValue={setVitesseValue} vitesseTexte={vitesseTexte} setMenaceValue={setMenaceValue} menaceTexte={menaceTexte} setContagionValue={setContagionValue} contagionTexte={contagionTexte} vitesseValue={vitesseValue} menaceValue={menaceValue} contagionValue={contagionValue} result={result}/>
            <Rats result = {result}/>
        </div>
    )
}

export default Catalogue