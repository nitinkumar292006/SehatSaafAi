export default function BillPreview({image}){

if(!image) return null

return(

<div className="bg-white border rounded-lg p-6">

<h2 className="font-semibold text-gray-900 mb-4">
Bill Preview
</h2>

<img
 src={image}
 className="max-h-64 w-full object-contain rounded"
/>

</div>

)

}