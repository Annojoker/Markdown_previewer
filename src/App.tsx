import { useState } from 'react'
import './App.css'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdowntext, setmarkdowntext] = useState()

  return (
    <>
      <div>
        <h1 style={{textAlign:'center'}}>Markdown Previewer</h1>
        <div className="boxes-container">
          <h2>Input Area:</h2>
          <textarea name="editor" id="editor" value={markdowntext} onChange={(e) => setmarkdowntext(e.target.value)}></textarea>
          <h2>Preview Area:</h2>
          <div id="preview">
            <ReactMarkdown>{markdowntext}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  )
}

export default App