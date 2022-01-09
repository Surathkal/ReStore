import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { Product } from '../../app/models/product'

import ProductList from './ProductList'

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([])

  function addProduct() {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 201,
        name: 'product' + prevState.length + 1,
        price: 100 * prevState.length + 1,
        brand: 'some brand',
        description: 'some description',
        pictureUrl: 'http://picsum.photos/200',
      },
    ])
  }

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <>
      <ProductList products={products} />

      <Button variant="contained" onClick={addProduct}>
        Add Product
      </Button>
    </>
  )
}
