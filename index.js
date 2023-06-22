   const quotes = [
      "Toma mucha aguita.",
      "Agradezco cada dia a DIOSITO por tenerte.",
      "Soy tu fan numero uno.",
      "Estoy muy agradecido por todo este tiempo.",
      "Espero que nunca te canses de mi.",
      "No veo el dia de convertirte en mi ESPOSA.",
      "Eres Maravillosa.",
      "Cada dia que pasa te amo mas.",
      "Das color a mi vida gris.",
      "Te amo mas que el primer dia.",
      "Tienes los ojitos mas hermosos.",
      "Amo cada parte de ti.",
      "Eres ese secreto que por egoismo no quiero compartir con nadie.",
    ];

    function generateQuote() {
      const quoteElement = document.getElementById("quote-of-the-day");
      const randomIndex = Math.floor(Math.random() * quotes.length);
      quoteElement.textContent = quotes[randomIndex];
    }
