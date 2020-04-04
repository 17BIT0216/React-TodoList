import React,{Component} from 'react';
import FlipMove from 'react-flip-move';
class TodoItems extends Component
{ //each list item will has its own click event

    constructor(props)
    {
        super(props);
        this.createTasks=this.createTasks.bind(this); //as we are using this inside createTaks

    }
    createTasks(items)
    {
        return <li key={items.key} onClick={()=>this.delete(items.key)}>   
            {items.text} </li>
    }
    // we basically cannot delete the elemnts over here so we are passing it Todo
    delete(key)
    {
        this.props.delete(key); //passing the value to Todo 

    }

    render()
    {
        var todoEntries=this.props.entries;  //getting the element which is passed by from Todo
        var listItems=todoEntries.map(this.createTasks); //converting the entries to lsit
 
        return(
        <ul className='theList'>
            <FlipMove duration={300} easing="ease-out">
            {listItems}</FlipMove></ul>
        );   
    }
}
export default TodoItems;