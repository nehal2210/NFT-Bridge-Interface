


export default function Button({text,isEnabled,clickFunction}:any){


return(
    <button onClick={clickFunction} className={isEnabled ? 'p-3 text-xl bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-full' :  'p-3  text-xl border-2 border-blue-600 text-blue-600/100  rounded-full'}>
    {text}</button>
)

}