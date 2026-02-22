document.getElementById('start-simulation').addEventListener('click', function() {
    const textElement = document.getElementById('text-simulated');

    // Texto sobre Alex
    const personalText = 
        "Eu sou Alex, um jovem português que enfrenta desafios na vida. " +
        "Crescendo em um ambiente com pais homofóbicos, " +
        "sofro bullying na escola, o que torna tudo mais difícil. " +
        "Apesar disso, encontro conforto em VTubers e Kpop, " +
        "gosto especialmente de Stray Kids (SKZ) e NewJeans (NJZ). " +
        "Os streamers portugueses como Wuant, DarkFrame e RicFazeres " +
        "me trazem alegrias. " +
        "Amo a Casa dos Youtubers, pois me faz sentir parte de algo. " +
        "O que realmente me anima é assistir animações no YouTube, " +
        "como aqueles feitos por Cueio [antigo], Brubs, AnimaLima, " +
        "hu3cat, Drawn Mask e Mundo Torajo.";

    textElement.textContent = personalText; // Exibe o texto original

    // Altera lentamente as letras p, b, q, d
    let index = 0;

    const swapLetters = () => {
        if (index >= personalText.length) return; // Para quando chegar ao fim

        let currentChar = personalText[index];
        // Troca as letras p, b, q, d
        switch (currentChar) {
            case 'p':
                currentChar = 'q';
                break;
            case 'b':
                currentChar = 'd';
                break;
            case 'q':
                currentChar = 'p';
                break;
            case 'd':
                currentChar = 'b';
                break;
        }

        // Atualiza o texto com a nova letra
        const newText = textElement.textContent.split('');
        newText[index] = currentChar;
        textElement.textContent = newText.join('');

        index++; // Avança para o próximo índice
        setTimeout(swapLetters, 500); // Chama novamente após meio segundo
    };

    // Inicia a simulação
    swapLetters();
    
    // Simulação de ansiedade (foco e distração)
    setTimeout(() => {
        textElement.style.color = "red";
        textElement.style.fontSize = "30px";
    }, 3000);

    // Simulação de atenção seletiva (dificuldade em focar)
    setTimeout(() => {
        textElement.style.color = "black";
        textElement.textContent = "Tente se concentrar neste texto.";
    }, 6000);
});
