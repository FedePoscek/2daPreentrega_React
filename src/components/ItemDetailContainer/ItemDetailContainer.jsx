import  { useState, useEffect } from "react";
import { getUnProducto } from "../../asynmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

  const [producto, setProducto] = useState(null);

  const {idItem} = useParams();

  useEffect( () => {
    getUnProducto(idItem)
        .then(res => setProducto(res))
}, [idItem])

  return (
    <h2>
     <ItemDetail {...producto} />

    </h2>
  )
}

export default ItemDetailContainer