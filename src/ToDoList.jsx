import { Component } from "react"
import basket from './delete.png';

export class ToDoList extends Component {
    state = {
        userInput: '',
        toList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem (input) {
        if (input === '') {
            alert ("Please enter an item")
        }
        else {
            let listArray = this.state.toList;
            listArray.push(input)
            this.setState ({toList: listArray, userInput: ""})
        }
    }

     deleteItem (){
        let listArray = this.state.toList;
        listArray = [];
        this.setState({toList: listArray})
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle("crossed");
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render (){

        return (
         <div className="container">
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text" placeholder="" 
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput} className="inputPress"/>
            </div>
            <div className="container">
               <button onClick={() => this.addItem(this.state.userInput)} className="btn add">Добавить!</button>
            </div>
            <ul >
               {this.state.toList.map((item, index) =>
                (<li onClick={this.crossedWord} key={index} className="todoAdded">{item}</li>
                ))}
            </ul>
             <div className="container">
                  <button onClick={()=> this.deleteItem()} className="btn delete">
                    <img src={basket} width="35px"/>
                  </button>
             </div>
             </form>
         </div>
        )

    }
    
}