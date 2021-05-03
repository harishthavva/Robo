
const DisplayCard= ({id,name,city})=>{

    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow  bw2 shadow-5">
            <img src={`https://robohash.org/${name}?200x200`} alt="RoboIamge"/>
            <h1>{`My name is ${name}`}</h1>
            <h3>{`I'm from ${city}.`}</h3>
        </div>
    )
}

export default DisplayCard;