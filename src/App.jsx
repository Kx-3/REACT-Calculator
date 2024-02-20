import { useState } from "react"
import "./index.css"



export default function App() {
    const [value, setValue] = useState("")

    return(
        <>
            <div className="w-full h-screen flex justify-center items-center font-primary">
                <form className = "w-auto h-auto flex gap-5 flex-col justify-center items-center py-20 border px-6 rounded-2xl bg-indigo-400/40" action="">
                    <div>
                        <input className="w-80 h-20 border text-4xl border-indigo-800 rounded-md p-3 bg-gray-800 text-white" type="text" value={value} readOnly/>
                    </div>
                    <div className="flex w-80 flex-wrap gap-3 items-center justify-center">
                        <input className="transition duration-150 ease-in-out hover:scale-105 text-xl w-16 h-14 shadow-lg shadow-slate-300 border border-gray-800 rounded-lg bg-gray-800 text-sky-300 hover:bg-gray-500 cursor-pointer" type="button" value="C" onClick={(e) => {setValue("")}} />
                        <input className="transition duration-150 ease-in-out hover:scale-105 text-xl w-16 h-14 shadow-lg shadow-slate-300 border border-gray-800 rounded-lg bg-gray-800 text-sky-300 hover:bg-gray-500 cursor-pointer" type="button" value="CE" onClick={(e) => {setValue(value.slice(0, -1))}} />
                        <input className="transition duration-150 ease-in-out hover:scale-105 text-xl w-16 h-14 shadow-lg shadow-slate-300 border border-gray-800 rounded-lg bg-gray-800 text-sky-300 hover:bg-gray-500 cursor-pointer" type="button" value="+" onClick={(e) => {setValue(value + e.target.value)}} />
                        <input className="transition duration-150 ease-in-out hover:scale-105 text-xl w-16 h-14 shadow-lg shadow-slate-300 border border-gray-800 rounded-lg bg-gray-800 text-sky-300 hover:bg-gray-500 cursor-pointer" type="button" value="-" onClick={(e) => {setValue(value + e.target.value)}} />
                        <input className="transition duration-150 ease-in-out hover:scale-105 text-xl w-16 h-14 shadow-lg shadow-slate-300 border border-gray-800 rounded-lg bg-gray-800 text-slate-50 hover:bg-gray-500 cursor-pointer" type="button" value="9" onClick={(e) => {setValue(value + e.target.value)}} />
                        <input className="transition duration-150 ease-in-out hover:scale-105 text-xl w-16 h-14 shadow-lg shadow-slate-300 border border-gray-800 rounded-lg bg-gray-800 text-slate-50 hover:bg-gray-500 cursor-pointer" type="button" value="8" onClick={(e) => {setValue(value + e.target.value)}} />
                        <input className="transition duration-150 ease-in-out hover:scale-105 text-xl w-16 h-14 shadow-lg shadow-slate-300 border border-gray-800 rounded-lg bg-gray-800 text-slate-50 hover:bg-gray-500 cursor-pointer" type="button" value="7" onClick={(e) => {setValue(value + e.target.value)}} />
                        <input className="transition duration-150 ease-in-out hover:scale-105 text-xl w-16 h-14 shadow-lg shadow-slate-300 border border-gray-800 rounded-lg bg-gray-800 text-sky-300 hover:bg-gray-500 cursor-pointer" type="button" value="*" onClick={(e) => {setValue(value + e.target.value)}} />
                        <input className="transition duration-150 ease-in-out hover:scale-105 text-xl w-16 h-14 shadow-lg shadow-slate-300 border border-gray-800 rounded-lg bg-gray-800 text-slate-50 hover:bg-gray-500 cursor-pointer" type="button" value="6" onClick={(e) => {setValue(value + e.target.value)}} />
                        <input className="transition duration-150 ease-in-out hover:scale-105 text-xl w-16 h-14 shadow-lg shadow-slate-300 border border-gray-800 rounded-lg bg-gray-800 text-slate-50 hover:bg-gray-500 cursor-pointer" type="button" value="5" onClick={(e) => {setValue(value + e.target.value)}} />
                        <input className="transition duration-150 ease-in-out hover:scale-105 text-xl w-16 h-14 shadow-lg shadow-slate-300 border border-gray-800 rounded-lg bg-gray-800 text-slate-50 hover:bg-gray-500 cursor-pointer" type="button" value="4" onClick={(e) => {setValue(value + e.target.value)}} />
                        <input className="transition duration-150 ease-in-out hover:scale-105 text-xl w-16 h-14 shadow-lg shadow-slate-300 border border-gray-800 rounded-lg bg-gray-800 text-sky-300 hover:bg-gray-500 cursor-pointer" type="button" value="/" onClick={(e) => {setValue(value + e.target.value)}} />
                        <input className="transition duration-150 ease-in-out hover:scale-105 text-xl w-16 h-14 shadow-lg shadow-slate-300 border border-gray-800 rounded-lg bg-gray-800 text-slate-50 hover:bg-gray-500 cursor-pointer" type="button" value="3" onClick={(e) => {setValue(value + e.target.value)}} />
                        <input className="transition duration-150 ease-in-out hover:scale-105 text-xl w-16 h-14 shadow-lg shadow-slate-300 border border-gray-800 rounded-lg bg-gray-800 text-slate-50 hover:bg-gray-500 cursor-pointer" type="button" value="2" onClick={(e) => {setValue(value + e.target.value)}} />
                        <input className="transition duration-150 ease-in-out hover:scale-105 text-xl w-16 h-14 shadow-lg shadow-slate-300 border border-gray-800 rounded-lg bg-gray-800 text-slate-50 hover:bg-gray-500 cursor-pointer" type="button" value="1" onClick={(e) => {setValue(value + e.target.value)}} />
                        <input className="transition duration-150 ease-in-out hover:scale-105 text-xl w-16 h-14 shadow-lg shadow-slate-300 border border-gray-800 rounded-lg bg-sky-800 text-slate-50 hover:bg-sky-500 cursor-pointer" type="button" value="=" onClick={() => {setValue(eval(value))}} />
                    </div>
                </form>
            </div>
        </>
    )
}