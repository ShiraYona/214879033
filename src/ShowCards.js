import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
const ShowCards=(props)=>
{
   return(
    <>
    <div style={{borderStyle:'double',borderWidth:"10px",borderColor:"black"}}>
        <h1>{props.event.title}</h1>
        <h2>{props.event.description}</h2>
        <h1>{props.event.start}</h1>
    </div>
    </>
   )
}
export default ShowCards;
//את ספריות העיצוב לצערי לא הספקתי...:(((