import React from 'react'
import ProductCard from '../ui/ProductCard'

const Catalog = () => {
  return (
    <section className='px-5 py-3'>
        <p className='text-vermelho font-body font-semibold text-xs'>NOSSO CATÁLOGO</p>
        <h1 className='font-heading text-2xl font-bold'>Canecas para cada momento</h1>
        <ProductCard/>
    </section>
  )
}

export default Catalog