import React, { Component } from 'react';
import fire from './fire';

class CommentsForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            rating : '0',
            comment : ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let comment = {
            'name' : this.state.name,
            'rating' : this.state.rating,
            'comment' : this.state.comment
        };

        fire.database().ref('comments').push(comment);
        this.setState(()=>{
            return {
                name : '',
                rating : '0',
                comment : ''
            }
        })
      }
    

    render() {
        return (
            <form className='column' onSubmit={this.handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input id='name' placeholder='Name' type='text' autoComplete='off' name="name" value={this.state.name} onChange={this.handleInputChange}/>
                <label htmlFor='rating'>Rating</label>
                <span>
                    <label><input type="radio" name="rating" value="1" checked={this.state.rating === '1'} onClick={this.handleInputChange}/> 1</label>
                    <label><input type="radio" name="rating" value="2" checked={this.state.rating === '2'} onClick={this.handleInputChange}/> 2</label>
                    <label><input type="radio" name="rating" value="3" checked={this.state.rating === '3'} onClick={this.handleInputChange}/> 3</label>
                    <label><input type="radio" name="rating" value="4" checked={this.state.rating === '4'} onClick={this.handleInputChange}/> 4</label>
                    <label><input type="radio" name="rating" value="5" checked={this.state.rating === '5'} onClick={this.handleInputChange}/> 5</label>
                </span>
                <label htmlFor='comment'>Comment</label>
                <textarea id='comment' placeholder='comment' autoComplete='off' name='comment' value={this.state.comment} onChange={this.handleInputChange}/>
                <button className='button' type='submit'>Submit</button>
            </form>
        )
    }
}

export default CommentsForm