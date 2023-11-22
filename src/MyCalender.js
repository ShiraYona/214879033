import { parsePath, useLocation} from "react-router-dom"; 
import InputRange from "./InputRange";
import { startTransition, useState ,useEffect} from "react";
import ShowCards from './ShowCards'
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
const MyCalender=()=>
{
  const [data,setData]=useState([])
  const location = useLocation();
  console.log(location.state[0]);
  const start=location.state[0]
  const end=location.state[1]
  var arr=[]

        const fetchData = () => {
            fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${start}&end=${end}`)
              .then(response => {
                return response.json()
              })
              .then(data => {
                setData(data)
              })
          }
    useEffect(() => {
        fetchData()
      },[]);
      console.log(location.state[2]);
      if(!location.state[2])
         arr=data &&  data?.map((item)=><ShowCards key={item.title} event={item}></ShowCards>)
      if(location.state[2])
         arr=data && data.filter( event=> {return event.className==="parashat"}).map((item)=><ShowCards key={item.title} event={item}></ShowCards>)
    return(
        <>
         <div>
           {arr}
         </div>
        </>
    )

}
export default MyCalender;