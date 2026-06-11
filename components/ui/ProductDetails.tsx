const ProductDetails = () => {
  return (
    <div className='font-body border-2 rounded-sm border-gray-300 shadow my-3'>
        <h2 className='font-bold text-sm px-4 py-3'>Detalhes do produto</h2>
        <div className='text-xs'>
            <div className='flex justify-between items-center border-t-2 border-gray-300 px-4 py-2'>
                <p className='text-gray-400'>Material</p>
                <p className='font-semibold'>Cerâmica</p>
            </div>
            <div className='flex justify-between items-center border-t-2 border-gray-300 px-4 py-2'>
                <p className='text-gray-400'>Capacidade</p>
                <p className='font-semibold'>325ml</p>
            </div>
            <div className='flex justify-between items-center border-t-2 border-gray-300 px-4 py-2'>
                <p className='text-gray-400'>Impressão</p>
                <p className='font-semibold'>Sublimação</p>
            </div>
            <div className='flex justify-between items-center border-t-2 border-gray-300 px-4 py-2'>
                <p className='text-gray-400'>Lavagem recomendada</p>
                <p className='font-semibold'>À mão</p>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails