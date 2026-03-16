export default function Suspicious({ data = [] }) {

 if (!data || data.length === 0) {
  return (
   <div className="bg-green-400 text-white font-bold p-6 rounded-xl">
    No suspicious charges detected
   </div>
  )
 }

 return (

  <div className="bg-green-400 text-white font-bold p-6 rounded-xl w-full">

   <h2 className="mb-4 font-semibold">
    Suspicious Charges ({data.length})
   </h2>

   {data.map((item, i) => (

    <div key={i} className="mb-3 border-b border-red-300/30 pb-2">

     <div className="font-medium">
      {item.name}
     </div>

     <div className="text-sm mt-1">

      <span className="mr-4">
       Hospital: ₹{item.hospitalPrice}
      </span>

      <span className="mr-4">
       Market: ₹{item.marketPrice}
      </span>

      <span className="font-semibold text-red-950">
       Over-Price ₹{item.hospitalPrice - item.marketPrice}
      </span>

     </div>

    </div>

   ))}

  </div>

 )

}