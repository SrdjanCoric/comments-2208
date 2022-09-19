import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
  <div>
    <div className="comments">
      <h2>Comments (2)</h2>
      <div className="parent-comment">
        <div className="comment">
          <hr />
          <div className="image">
            <img src="https://i.postimg.cc/Y0RcrdHp/no-user-image.gif" alt="" />
          </div>
          <div className="header">
            <h3 className="author">Louisa Leuschke</h3>
            <span>2 hours ago</span>
          </div>
          <p>Odit eligendi quasi deleniti ipsa cumque iusto ullam.</p>
        </div>
        <div className="replies">
          <div className="comment">
            <hr />
            <div className="image">
              <img
                src="https://i.postimg.cc/Y0RcrdHp/no-user-image.gif"
                alt=""
              />
            </div>
            <div className="header">
              <h3 className="author">Cydney Robel</h3>
              <span>2 hours ago</span>
            </div>
            <p>
              Ratione quibusdam sed doloremque expedita fugit similique et aut.
            </p>
          </div>
          <a href="#" className="show_more">
            Show More Replies (2)
          </a>
        </div>
      </div>
      <div className="parent-comment">
        <div className="comment">
          <hr />
          <div className="image">
            <img src="https://i.postimg.cc/Y0RcrdHp/no-user-image.gif" alt="" />
          </div>
          <div className="header">
            <h3 className="author">Rahul Fisher</h3>
            <span>1 hour ago</span>
          </div>
          <p>
            Et esse possimus temporibus. Repudiandae omnis error ab magnam
            repudiandae maxime aspernatur consequatur. Possimus qui id non esse
            illo ad. Temporibus sit blanditiis recusandae sunt rerum eos
            voluptatem ducimus ullam. Cupiditate asperiores facere magnam
            explicabo voluptatem dolores et. Numquam ex aspernatur assumenda
            nihil sequi optio quis.
          </p>
        </div>
        <div className="replies">
          <div className="comment">
            <hr />
            <div className="image">
              <img
                src="https://i.postimg.cc/Y0RcrdHp/no-user-image.gif"
                alt=""
              />
            </div>
            <div className="header">
              <h3 className="author">Bernice Kautzer</h3>
              <span>2 hours ago</span>
            </div>
            <p>
              Ratione quibusdam sed doloremque expedita fugit similique et aut.
            </p>
          </div>
          <div className="comment">
            <hr />
            <div className="image">
              <img
                src="https://i.postimg.cc/Y0RcrdHp/no-user-image.gif"
                alt=""
              />
            </div>
            <div className="header">
              <h3 className="author">Bernice Kautzer</h3>
              <span>2 hours ago</span>
            </div>
            <p>
              Ratione quibusdam sed doloremque expedita fugit similique et aut.
            </p>
          </div>
          <div className="comment">
            <hr />
            <div className="image">
              <img
                src="https://i.postimg.cc/Y0RcrdHp/no-user-image.gif"
                alt=""
              />
            </div>
            <div className="header">
              <h3 className="author">Bernice Kautzer</h3>
              <span>2 hours ago</span>
            </div>
            <p>
              Ratione quibusdam sed doloremque expedita fugit similique et aut.
            </p>
          </div>
        </div>
      </div>
    </div>

    <form action="">
      <h2>Post a Comment</h2>
      <div className="input-group">
        <label>Your Name</label>
        <input type="text" name="author" />
      </div>

      <div className="input-group">
        <label>Your Comment</label>
        <textarea name="body" cols="30" rows="10"></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(App());
