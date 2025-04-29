import React, { useState } from 'react';

const ChatButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [chatResponse, setChatResponse] = useState(''); // Estado para almacenar la respuesta de la API
  const [loading, setLoading] = useState(false); // Estado para manejar el estado de carga

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setChatResponse(''); // Limpia la respuesta cuando se cierra el modal
  };

  const handleChatRequest = async () => {
    setLoading(true); // Inicia el estado de carga
    try {
      const response = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyC3vEX8lyM4wuk-a4vpzB2MdWiWdI3eB1A', // Reemplaza GEMINI_API_KEY con tu clave API
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: 'Explain how AI works' }], // Cambia el texto según lo que quieras preguntar
              },
            ],
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        // Extrae la respuesta del modelo
        const generatedText = data.contents[0]?.parts[0]?.text || 'No response received.';
        setChatResponse(generatedText);
      } else {
        setChatResponse('Error: Unable to fetch response from the API.');
      }
    } catch (error) {
      console.error('Error fetching chat response:', error);
      setChatResponse('Error: Something went wrong.');
    } finally {
      setLoading(false); // Finaliza el estado de carga
    }
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: 'red',
          color: 'yellow',
          padding: '10px',
          borderRadius: '5px',
        }}
        onClick={openModal}
      >
        Chat With IA
      </button>

      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            color: 'black',
          }}
        >
          <button
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              border: 'none',
              backgroundColor: 'transparent',
              fontSize: '20px',
              cursor: 'pointer',
              color: 'black',
            }}
            onClick={closeModal}
          >
            &times;
          </button>

          <div>
            <button
              style={{
                backgroundColor: 'blue',
                color: 'white',
                padding: '10px',
                borderRadius: '5px',
                marginBottom: '10px',
              }}
              onClick={handleChatRequest}
              disabled={loading} // Deshabilita el botón mientras se carga
            >
              {loading ? 'Loading...' : 'Ask AI'}
            </button>
          </div>

          <div>
            <p><strong>Response:</strong></p>
            <p>{chatResponse || 'No response yet.'}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatButton;