import React, { useState } from 'react'
import { BeatLoader } from 'react-spinners';
import openai from '../vendor/Openai';

const TranslateLang = () => {
  const[formData, setFormData] = useState({language: "Chinese", message: ""})
  const [error, setError] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [translation, setTranslation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const translate = async () => {
      const { language, message } = formData;
      const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Translate this into ${language}: ${message}`,
      temperature: 0.3,
      max_tokens: 100,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      });
    const translatedText = response.data.choices[0].text.trim();
    setIsLoading(false);
    setTranslation(translatedText);
  };
  
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!formData.message) {
      setError("Please enter the message");
      return;
    }
    setIsLoading(true);
    translate();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(translation)
      .then(() => displayNotification())
      .catch((err) => console.error("failed to copy:", err))
  };

  const displayNotification = () => {
    setShowNotification(true); 
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };  

  return (
    <div className='container-one'>
      <h1>Translator App</h1><br/>
      <form onSubmit={handleOnSubmit}>
        <div className="choices">
          <input
            type="radio"
            id="chinese"
            name='language'
            value="Chinese"
            defaultChecked={formData.language}
            onChange={handleInputChange}
          />
          <label htmlFor="chinese">Chinese</label>

          <input
            type="radio"
            id="igbo"
            name='language'
            value="Igbo"
            onChange={handleInputChange}
          />
          <label htmlFor="igbo">Igbo</label>

          <input
            type="radio"
            id="hausa"
            name='language'
            value="Hausa"
            onChange={handleInputChange}
          />
          <label htmlFor="hausa">Hausa</label>

          <input
            type="radio"
            id="spanish"
            name='language'
            value="Spanish"
            onChange={handleInputChange}
          />
          <label htmlFor="spanish">Spanish</label> 
        </div> 

        <textarea
          name="message"
          placeholder="Type your message here.."
          onChange={handleInputChange}
        >
        </textarea>

        {error && <div className="error">{error}</div>} 

        <button type="submit">Translate</button>
      </form>
      <div className="translation">
        <div className="copy-btn" onClick={handleCopy}>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 
              0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332
              0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25
               2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
          </svg>
  
        </div>
        {isLoading ? <BeatLoader size={12} color={"red"} /> : translation}
        {showNotification && 
          <div className= "notification">
          Copied to Clipboard!  
          </div>
        }
      </div>
    </div>
  )
}

export default TranslateLang