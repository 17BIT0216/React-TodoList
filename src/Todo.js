import React ,{Component} from 'react';
import TodoItems from './TodoItems';
import './TodoList.css';
class Todo extends React.Component
{   
    constructor(props)
    {
        super(props);
        this.state={items: []};
        this.addItem=this.addItem.bind(this); //we are going to use this inside addItem so we need to bind it
        this.deleteItem=this.deleteItem.bind(this);
    }


    addItem(e)
    {
        if(this._inputElement.value!==" ")  //_inputElement is binded to the input tag of the html pagee using the references
        {
            var new_item={
                text:this._inputElement.value,          //we wre accessing that refernce here
                key:Date.now()
            };

            this.setState((prevState)=>{
                return{
                    items:prevState.items.concat(new_item)   //we dont muatate the prev item but create a new one always
                };
            });
            
        this._inputElement.value="";
        console.log(this.state.items);

        }
        e.preventDefault(); //so the whole page is not reloaded
    }

    deleteItem(key) //delete was the function which passed the value over here
    {
        console.log(key);
        var filterItems=this.state.items.filter(function(item){
             return(item.key!==key)
        });

        this.setState({
            items:filterItems
        });   
    }


    render()
    {
        return(
            <div className='todoListMain'>
                <div className='header'>
                    <form onSubmit={this.addItem}>
                    <input ref={(a)=>this._inputElement=a}
                     placeholder='Enter the Tasks'>
                    </input>
                        <button type='submit'> Add Task
                         </button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}
                           delete={this.deleteItem}
                ></TodoItems>
            </div>
 
        );
    }
}
export default Todo;