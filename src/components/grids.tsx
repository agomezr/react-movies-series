export default function Grids() {
  return (
    <>

     <section className="my-6">
        <h2 className="font-bold text-2xl">Flex  de 1/3 desde tablet</h2>
        <p className="mb-3">flex flex-col md:flex-row gap-4 &gt; w-full md:w-1/3</p>

        <div className="flex flex-col md:flex-row gap-4 my-6">
          <div className="w-full md:w-1/3 border-3 border-yellow-500 p-3">Item 1</div>
          <div className="w-full md:w-1/3 border-3 border-yellow-500 p-3">Item 2</div>
          <div className="w-full md:w-1/3 border-3 border-yellow-500 p-3">Item 3</div>
        </div>

      </section>
      
      <section className="my-6">
        <h2 className="font-bold text-2xl">Flex tipo BS + Order</h2>
        <p className="mb-3">flex flex-col md:flex-row gap-3 &gt; order-1  md:w-7/12</p>

          <div className="flex flex-col md:flex-row gap-3">
            <div className="md:order-2 md:w-7/12 xl:w-8/12 border-4 border-sky-500 p-3">
              primera columna
            </div>
            <div className="md:order-1 md:w-5/12 xl:w-4/12 border-4 border-sky-500 p-3">
              segunda columna
            </div>
          </div>

      </section>

      <section className="my-6">
        <h2 className="font-bold text-2xl">Grid con columnas auto en elemento padre</h2>
        <p className="mb-3">grid-flow-col md:grid md:auto-cols-fr gap-3</p>

        <div className="grid-flow-col md:grid md:auto-cols-fr gap-3">
          <div className="border-4 border-sky-500 p-3 mb-3">001</div>
          <div className="border-4 border-sky-500 p-3 mb-3">002</div>
          <div className="border-4 border-sky-500 p-3 mb-3">003</div>
        </div>

      </section>

      <section className="my-6">
        <h2 className="font-bold text-2xl">Flex + Grid con columnas definidas + colspan</h2>
        <p className="mb-3">flex flex-col md:grid md:grid-cols-3 gap-4 &gt; md:col-span-2</p>
        <p className="text-xs text-orange-300 text-start mb-2">
          El gird-cols-1 no funciona y ponemos flex en movil para que el gap funcione
        </p>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
          <div className="p-3 border-3 border-yellow-500">01</div>
          <div className="p-3 border-3 border-yellow-500">02</div>
          <div className="p-3 border-3 border-yellow-500">03</div>
          <div className="md:col-span-2 xl:col-span-3 border-3 border-yellow-500 p-3">04</div>
          <div className="border-3 border-yellow-500 p-3">05</div>
          <div className="border-3 border-yellow-500 p-3">06</div>
          <div className="col-span-2 border-3 border-yellow-500 p-3">07</div>
          <div className="col-span-3 border-3 border-yellow-500 p-3">08</div>
        </div>

      </section>

    </>
  );
}
