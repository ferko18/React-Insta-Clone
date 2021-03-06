import "./Comment.css";
import React, { Component } from "react";
import PropTypes from 'prop-types';
import Comment from './Comment'
import styled from "styled-components";
// import CommentInput from'./CommentInput'

const CommentBox = styled.div`

    input{
     border: white; 
    border-top: solid gray 1px;
    //border-right: solid gray 1px;
    margin-top: 10px;
    width: 100%;
    height: 50px;
    padding-left: 2%;
    padding-top:
    }
  `;

class CommentSection extends Component {
  constructor(props) {
    super();
    this.state = {
      //set initial comment state to empty string 
      comments: props.comments, comment: ''
    };
  }
  //bind input to state on change

  commentHandler = e => {
    this.setState({ comment: e.target.value });
  };

  AddComment = e => {
    e.preventDefault();

   const newComment = { text: this.state.comment, username: "Firealem Erko" }
   
    this.setState({
      comments: [...this.state.comments, newComment], comment:''
    }
    
    )
   
  };

  

  render() {

    return (
      <CommentBox>
       {this.state.comments.map((e, index) => <Comment key={index} comment={e} />)}
       <form onSubmit= {this.AddComment}>
        <input type="text" placeholder="Add comment... " value={this.state.comment} onChange={this.commentHandler}/>
        {/* <CommentInput comment={this.state.comment} submitComment={this.AddComment} changeComment={this.commentHandler}/> */}
       </form>
      </CommentBox>
    );
  }

}


CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};


export default CommentSection;


// I deleted this component to make my life easier 

// import React from 'react';

// const CommentInput = props => {
//   return (
//     <form onSubmit= {props.submitComment}>
//       <input type="text" placeholder="Add comment... " value={props.comment} onChange={props.changeComment}/>
//     </form>
//   );
// };

// export default CommentInput;