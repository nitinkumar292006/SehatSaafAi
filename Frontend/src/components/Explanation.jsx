export default function Explanation({text}){

if(!text) return null

return(

<div className="bg-green-300 border-2 border-green-600 p-6 rounded-lg">

<h2 className="font-semibold text-black mb-2">
AI Explanation
</h2>

<p className="text-gray-600 text-sm">
{text}
</p>

</div>

)

}