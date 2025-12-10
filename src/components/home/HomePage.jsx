import React, { useEffect, useEffectEvent, useState } from 'react';
import Header from "./Header";
import CardContainer from "./CardContainer";
import api from '../../api'; // Asegúrate de tener tu instancia de Axios aquí
import PlaceHolderContainer from '../ui/PlaceHolderContainer';
import Error from "../ui/ErrorTemp";
import { randomValue } from '../../GenerateCartCode';


const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading ] = useState(false)
  const [error, setError] = useState("")

  useEffect(function(){

    if(localStorage.getItem("cart_code") === null){
      localStorage.setItem("cart_code", randomValue)
    }


  },[])
  

  useEffect(() => {
    setLoading(true)
    api.get("products")
    
    
      .then(res => {
        console.log(res.data);
        setProducts(res.data); // Guardamos los productos en el estado
        setLoading(false)
        setError("")
      })
      .catch(err => {
        console.error(err.message);
        setLoading(false)
        setError(err.message)
      });
  }, []);

  return (
    <>
      <Header />
      {error && <Error error={error}/>}
      {loading && <PlaceHolderContainer/>}
      {loading || error !="" ||   <CardContainer products={products} />}
      
      
    </>
  );
}

export default HomePage;
