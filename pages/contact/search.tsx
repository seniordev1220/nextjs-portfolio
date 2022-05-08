import React, { useRef } from 'react'
import Button from '../../components/UI/button/button'

export interface SearchPropType{
    onSearch:(selectedMonth:string,selectedYear:string)=>{}
}
function Search({onSearch }:SearchPropType) {
const yearInputRef=useRef<any>();
const monthInputRef=useRef<any>();

    const onSubmit=(event:React.MouseEvent<HTMLButtonElement>)=>{
           event?.preventDefault();
           const selectedYear = yearInputRef.current.value;
           const selectedMonth = monthInputRef.current.value;
           onSearch(selectedMonth,selectedYear)
    }
    return (
        <form>
            <div>
                <div>
                    <label htmlFor='year'>Year</label>
                    <select ref={yearInputRef} id='year'>
                        <option value="2021">2021</option>
                        <option value="2021"> 2022</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='month'>Month</label>
                    <select ref={monthInputRef} id='month'>
                        {[{ month: 1, label: "jan" },
                        { month: 2, label: "feb" },
                        { month: 3, label: "mar" },
                        { month: 4, label: "april" },
                        { month: 5, label: "may" },
                        { month: 6, label: "jun" },
                        { month: 7, label: "july" },
                        { month: 8, label: "Aug" },
                        { month: 9, label: "sep" },
                        { month: 10, label: "oct" },
                        { month: 11, label: "nov" },
                        { month: 12, label: "dec" }
                        ].map((item) => < option key={item.month} value={item.month}>{item.label}</option>)
                        }
                    </select>
                </div>
                <Button onClick={()=>onSubmit}>Click cheyy</Button>
            </div>
        </form >
    )
}



export default Search

