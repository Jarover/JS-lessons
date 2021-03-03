"use strict";

function Post(author, text, date) {
    this.autor = autor;
    this.text = text;
    this.date = date;
    
}

Post.prototype.edit = function (text) {   
     this.text = text;
}


function AttachedPost(author, text, date) {
    Post.call(this,author, text, date);
    this.highlighted = false;
    
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;       

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

