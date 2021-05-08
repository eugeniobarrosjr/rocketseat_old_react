import React from "react";

function Comment({ comment }) {
  return (
    <section className="comment__container">
      <img src={comment.author.avatar} alt={comment.author.name} />
      <div className="comment__content">
        <p className="comment">
          <span className="comment__author">{comment.author.name}</span>
          {comment.content}
        </p>
      </div>
    </section>
  );
}

export default Comment;
