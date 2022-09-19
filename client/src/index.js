import React from "react";
import ReactDOM from "react-dom/client";

const Comment = ({ author, body, postedAt, children }) => {
  return React.createElement("div", { className: "comment" }, [
    React.createElement("hr"),
    React.createElement("img", {
      src: "https://i.postimg.cc/Y0RcrdHp/no-user-image.gif",
    }),
    React.createElement("div", { className: "header" }, [
      React.createElement("h3", { className: "author" }, author),
      React.createElement("span", null, postedAt),
    ]),
    React.createElement("p", null, body),
    children,
  ]);
};

const App = () => {
  return React.createElement("div", { className: "comments" }, [
    React.createElement("h2", null, "Comments(2)"),
    React.createElement("div", { className: "parent-comment" }, [
      React.createElement(
        Comment,
        { author: "Srdjan", postedAt: "2minutes", body: "Kind a boring now" },
        React.createElement("h1", null, "Pretty interesting")
      ),
      React.createElement(Comment, {
        author: "Max",
        postedAt: "1 minute ago",
        body: "Handling a chat",
      }),
      React.createElement(Comment, {
        author: "Rodney",
        postedAt: "2 minutes ago",
        body: "Srdjan is the best",
      }),
    ]),
  ]);
};

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(App());
