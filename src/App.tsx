import { useState } from 'react'
import './App.css'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdowntext, setmarkdowntext] = useState()

// Function to handle bold text
const handleBold = () => {
  const currentText = markdowntext || '';
  const currentTextarea = document.getElementById('editor');
  const start = currentTextarea.selectionStart;
  const end = currentTextarea.selectionEnd;
  const newText = `**${currentText.substring(start, end)}**`;
  setmarkdowntext(`${currentText.substring(0, start)}${newText}${currentText.substring(end)}`);
  currentTextarea.selectionStart = currentTextarea.selectionEnd = start + newText.length;
}

// Function to handle italic text
const handleItalic = () => {
  const currentText = markdowntext || '';
  const currentTextarea = document.getElementById('editor');
  const start = currentTextarea.selectionStart;
  const end = currentTextarea.selectionEnd;
  const newText = `*${currentText.substring(start, end)}*`;
  setmarkdowntext(`${currentText.substring(0, start)}${newText}${currentText.substring(end)}`);
  currentTextarea.selectionStart = currentTextarea.selectionEnd = start + newText.length;
}

// Function to handle headings
const handleHeading = () => {
  const currentText = markdowntext || '';
  const currentTextarea = document.getElementById('editor');
  const start = currentTextarea.selectionStart;
  const newText = `# ${currentText.substring(start)}\n\n`;
  setmarkdowntext(`${currentText.substring(0, start)}${newText}${currentText.substring(start)}`);
  currentTextarea.selectionStart = currentTextarea.selectionEnd = start + newText.length;
}

// Function to handle links
const handleLink = () => {
  const currentText = markdowntext || '';
  const currentTextarea = document.getElementById('editor');
  const start = currentTextarea.selectionStart;
  const end = currentTextarea.selectionEnd;
  const newText = `[${currentText.substring(start, end)}](http://)`;
  setmarkdowntext(`${currentText.substring(0, start)}${newText}${currentText.substring(end)}`);
  currentTextarea.selectionStart = currentTextarea.selectionEnd = start + newText.length;
}

// Function to handle images
const handleImage = () => {
  const currentText = markdowntext || '';
  const currentTextarea = document.getElementById('editor');
  const start = currentTextarea.selectionStart;
  const end = currentTextarea.selectionEnd;
  const newText = `![${currentText.substring(start, end)}](http://)`;
  setmarkdowntext(`${currentText.substring(0, start)}${newText}${currentText.substring(end)}`);
  currentTextarea.selectionStart = currentTextarea.selectionEnd = start + newText.length;
}

  return (
    <>
      <div>
        <h1 style={{textAlign:'center'}}>Markdown Previewer</h1>
        <div className="boxes-container">
          <h2>Input Area:</h2>
          <textarea name="editor" id="editor" value={markdowntext} onChange={(e) => setmarkdowntext(e.target.value)}></textarea>
          <div className='holder'>
            <div className="tool-container">
            <button onClick={handleBold}>Bold</button>
            <button onClick={handleItalic}>Italic</button>
            <button onClick={handleHeading}>Heading</button>
            <button onClick={handleLink}>Link</button>
            <button onClick={handleImage}>Image</button>
            </div>
          </div>
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