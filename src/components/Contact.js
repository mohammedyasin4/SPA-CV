import React, { useState } from 'react'; // Importerar React och useState-hooken
import Confetti from 'react-confetti'; // Importerar Confetti-komponenten för att skapa 

function Contact() {
  const [formData, setFormData] = useState({ // Använder useState för att hantera formulärdata
    name: '',
    email: '',
    message: ''
  });

  const [showConfetti, setShowConfetti] = useState(false); // Hanterar visning av konfetti
  const [isFadingOut, setIsFadingOut] = useState(false); // Hanterar uttoning av konfetti

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value // Uppdaterar formData med nya värden
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfetti(true);  // Visar konfetti när formuläret skickas
    alert(`Thank you, ${formData.name}! Your message has been sent.`);

    
    setTimeout(() => {
      setIsFadingOut(true); 
    }, 3000); 


    setTimeout(() => {
      setShowConfetti(false);
      setIsFadingOut(false); 
    }, 5000);
  };

  return (
    <section>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button> 
      </form>

      {showConfetti && (
        <div className={`confetti-container ${isFadingOut ? 'fade-out' : ''}`}>
          <Confetti recycle={false} numberOfPieces={200} />
        </div>
      )}

      <style>
        {`
          .confetti-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            opacity: 1;
            transition: opacity 2s ease-out;
          }

          .confetti-container.fade-out {
            opacity: 0;
          }
        `}
      </style>
    </section>
  );
}

export default Contact;