import { startTransition, useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button'; 
const InputRange=()=>
{
   const[Start,setStart]=useState([]) 
   const[End,setEnd]=useState([]) 
   const [flag,setFlag]=useState(false) 
   const navigate=useNavigate()
   
let arr=[]
      const send=()=>
      {
          arr[0]=Start
          arr[1]=End
          arr[2]=flag
          navigate('/myCalender',{state:[Start,End,flag]})
      }
    //   const changeFlag=()=>
    //   {
    //     flag=!flag
    //     console.log((flag));
    //   }
    return(
        <>
          <div>
            <input placeholder="start date" onChange={event => setStart(event.target.value)}></input>
            <input placeholder="end date" onChange={event => setEnd(event.target.value)}></input>
            <input type="checkbox" onChange={()=>setFlag(!flag)}></input>
            <button onClick={()=>send(Start,End)}>הצג ארועים</button>
          </div>
        </>
    )
}
export default InputRange;