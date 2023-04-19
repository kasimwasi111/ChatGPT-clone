import { useState } from "react";
import send from "./assets/send.svg";
import user from "./assets/user.png";
import bot from "./assets/bot.png";
import loadingIcon from "./assets/loader.svg";

function App() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  // let arr = [
  //   { type: "user", post: "fjdfbjhdbhjdf" },
  //   { type: "bot", post: "fjdfbjhdbhjdf" },
  // ];
  return (
    <main className="chatGPT-app">
      <section className="chat-container">
        <div className="layout">
          {posts.map((post, index) => (
            <div
              key={index}
              className={`chat-bubble ${
                post.type === "bot" || post.type === "loading" ? "bot" : ""
              }`}
            >
              <div className="avatar">
                <img
                  src={
                    post.type === "bot" || post.type === "loading" ? bot : user
                  }
                  alt=""
                />
              </div>
              {post.type === "loading" ? (
                <div className="loader">
                  <img src={loadingIcon} alt="" />
                </div>
              ) : (
                <div className="post">{post.post}</div>
              )}
            </div>
          ))}

          {/* <div className="chat-bubble bot">
            <div className="avatar">
              <img src={bot} alt="" />
            </div>
            <div className="post">lorem ipsum gdht jfhdf</div>
          </div> */}
        </div>
      </section>
      <footer>
        <input
          type="text"
          className="composebar"
          autoFocus
          placeholder="Ask anything..."
          onChange={() => {}}
        />
        <div className="send-button">
          <img src={send} alt="" />
        </div>
      </footer>
    </main>
  );
}

export default App;
