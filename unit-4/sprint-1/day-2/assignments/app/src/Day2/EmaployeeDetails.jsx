
import Card from './Day2/Card';



const data=
{
    name:"Prabhu",
    qualification:"BSC",
    gender:"MAle"
}


const EmaployeeDetails=()=>
{
    return (
        <>
        <Card {...data}/>
        
        </>
    )
}
export default EmaployeeDetails;