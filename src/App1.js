import React from "react";
import {RoboList} from "./RoboList";
import DisplayCardList from "./DisplayCardList";
import Search from "./Search";

class App1 extends  React.Component{

    constructor(){
        super()
        this.state={
            robot: RoboList,
            searchfield : ''
        }
    }
    
    searchBox= (event)=>{
        this.setState({searchfield:event.target.value})
    }
    render(){

        const filteredRobots = this.state.robot.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
          })
        return (
            <div className="tc">
                <h1>Robo Fans</h1>
                <Search searchtext={this.searchBox}/>
                <DisplayCardList robots={filteredRobots}/>
            </div>
        )
    }
}

export default App1;