import { useState, useEffect } from "react";

import RatsCard from "./RatsCard";

const Rats = (props) => {
  const [cart, setCart] = useState([])
  const [removeOnCart, setRemoveOnCart] = useState('')

  useEffect(() => {
    setCart(cart.filter(item => item !== removeOnCart))
    setRemoveOnCart('')
  }, [removeOnCart])

  const items = JSON.parse(localStorage.getItem('cartRat'))
  useEffect(() => {
    if (items) {
      setCart(items)
    }
  }, [])
  useEffect(() => {
    if (cart.length !== 0) {
      let uniqueArray = []
      for (let i = 0; i < cart.length; i++) {
        let exists = false
        for (let j = 0; j < uniqueArray.length; j++) {
          if (JSON.stringify(cart[i]) === JSON.stringify(uniqueArray[j])) {
            exists = true
            break
          }
        }
        if (!exists) {
          uniqueArray.push(cart[i])
        }
      }
      localStorage.setItem('cartRat', JSON.stringify(uniqueArray))
    }
  }, [cart])
  return (
    <>

{console.log(cart)}
      <div className="rat-global">
        {props.result.map((rat,i) => (
          <RatsCard
            key={i}
            rat = {rat}
            setCart = {setCart}
          />
        ))}
      </div>
    </>
  );
};

export default Rats;
