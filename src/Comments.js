import React, { Component } from 'react';
import fire from './fire';

function SelectRating(props) {
    let ratings = ["1","2","3","4","5"];
    return (
        <ul className="ratings">
            {ratings.map((rating,index)=>{
                return (<li key={index} style={rating === props.selectedRating ? { color:'#d0021b'} : null} onClick={props.onSelect.bind(null,rating)}>{rating}</li>)
            })}
        </ul>
    )
}

function CommentsGrid(props) {
    return (
        <ul className='popular-list'>
        {props.comments.filter((comment)=>{
            return comment.rating === props.selectedRating;
        }).map((comment,index)=>{
            return (
                <li className='popular-item' key={index}>
                    <ul className='space-list-item'>
                        <li><img className='avatar' src={'https://api.adorable.io/avatars/150/'+comment.name} alt={'Avatar for '+comment.name} /></li>
                        <li>@{comment.name}</li>
                        <div className="comment">{comment.comment}</div>
                    </ul>
                </li>
            )
        })}
        </ul>
    )
}

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRating : "1",
            comments : []
        }
        this.updateRating = this.updateRating.bind(this);
    }

    componentWillMount(){
        let commentsRef = fire.database().ref('comments').orderByKey().limitToLast(100);
        commentsRef.on('child_added', snapshot => {
            let comment = snapshot.val();
            this.setState((prevState)=>{
                return {
                    comments : [comment].concat(prevState.comments)
                }
            })
        })
    }

    updateRating(rating) {
        this.setState(()=>{
            return {
                selectedRating : rating
            }
        })
    }

    render() {
        return (
            <div>
                <SelectRating selectedRating={this.state.selectedRating} onSelect={this.updateRating}></SelectRating>
                <CommentsGrid comments={this.state.comments} selectedRating={this.state.selectedRating}></CommentsGrid>
            </div>
        )
    }
}

export default Comments;