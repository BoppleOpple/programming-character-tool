import "./index.css";

function App() {
  return (
    <div className="app">
      {/* LEFT SIDE */}
      <div className="left-panel">
        <div className="top-bar">
          <div className="left-top">
            <button className="icon-btn">⚙</button>
            <button className="tab active">file_name.py</button>
            <button className="tab">file_name_...</button>
            <button className="tab plus">+</button>
          </div>

          <div className="right-top">
            <button className="action-btn">Upload File...</button>
            <button className="action-btn dark">Run</button>
          </div>
        </div>

        <textarea
          className="code-editor"
          defaultValue={`import os\nimport argparse\nimport zipfile`}
        />

        <div className="bottom-section">
          <div className="output-box">output here</div>
          <div className="image-box">lion image later</div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-panel">
        <div className="persona-selector">
          <div className="persona lion">Lion</div>
          <div className="persona panda">Panda</div>
        </div>

        <div className="chat-wrapper">
          <div className="chat-messages">
            <div className="file-bubble">P1-COS135-26.pdf</div>

            <div className="message tutor">
              Super cool assignment! Lets talk about it...
            </div>

            <div className="message user small">
              earlier user message
            </div>

            <div className="message user small">
              user message
            </div>

            <div className="message tutor wide">
              long tutor response goes here...
            </div>
          </div>

          <div className="chat-input-row">
            <input placeholder="Type something..." />
            <button>➤</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;