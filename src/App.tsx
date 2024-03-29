import { useState } from 'react'
import './App.css'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdowntext, setmarkdowntext] = useState()

  return (
    <>
      <div>
        <h1>Markdown Previewer</h1>
        <div className="boxes-container">
          <textarea name="editor" id="editor" value={markdowntext} onChange={(e) => setmarkdowntext(e.target.value)}></textarea>
          <div id="preview">
            <ReactMarkdown>{markdowntext}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
