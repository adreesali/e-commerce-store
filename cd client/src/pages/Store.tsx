import { Col, Row } from "react-bootstrap";
// import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";
import { useEffect, useState } from "react";
const Store = () => {


  const [data, setData] = useState([]);

  useEffect( () => {
    fetch('http://127.0.0.1:8787/api/database')
    .then(v => v.json())
    .then(data => setData(data))
  }, [])

console.log(data)
  

  return (
    <>
    <Row md={2} xs={1} lg={3} className="g-3">
      {data.map((item: any) => (
        <Col key={item.ItemId }><StoreItem {...item}/></Col>
      ))}
    </Row>
    </>
  )
} 

export default Store

