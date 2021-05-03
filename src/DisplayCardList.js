import DisplayCard from "./DisplayCard";

const DisplayCardList=({robots})=>{

    return (
        <div>
            {
                robots.map((robot,i)=>{
                   // console.log(robot.name, robot.city)
                    return <DisplayCard id={robot.id} name={robot.name} city={robot.city} key={i} />
                })
            }
        </div>
    )
}

export default DisplayCardList;