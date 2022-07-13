const { readFileSync, writeFileSync } = require('fs');
const {v4: uuidv4} = require('uuid');
const path = require('path');
const stringify = require('json-beautify');
const DATA_FILE_PATH = path.join(__dirname, 'comments.json');

const data = {
  getCommentsWithOneReply: () => {
    const comments = JSON.parse(readFileSync(DATA_FILE_PATH));
    return comments.map((c) => Object.assign({}, c, {replies: c.replies.slice(0, 1)}));
  },

  getRepliesForComment: (id) => {
    const comments = JSON.parse(readFileSync(DATA_FILE_PATH));
    return comments.find((c) => c.id === id).replies.slice(1);
  },

  saveComment: (commentFields) => {
    const newComment = Object.assign(
                        {},
                        commentFields,
                        {
                          id: uuidv4(),
                          postedAt: +Date.now(),
                          replies_count: 0,
                          replies: []
                        }
    );

    let comments = JSON.parse(readFileSync(DATA_FILE_PATH));
    comments = comments.concat(newComment);
    writeFileSync(DATA_FILE_PATH, stringify(comments, null, 2, 100));
    return newComment;
  }
}

module.exports = data;