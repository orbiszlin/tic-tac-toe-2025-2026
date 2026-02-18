document.addEventListener('DOMContentLoaded', () => {
    const endGame = document.getElementById('end-game')
    const currentPlayerElement = document.getElementById('current-player')

    // vyberu boxy
    const boxes = document.querySelectorAll('.box')
    // Právě táhnoucí hráč (X nebo O)
    let currentPlayer = 'X';
    currentPlayerElement.innerText = currentPlayer;

    // projdu každý boc
    boxes.forEach(box => {
        // každému boxu nastavím clickevent
        box.addEventListener('click', () => {
            // kontrola před opětovným přepsáním
            if (box.classList.contains('cross') || box.classList.contains('circle')) return;

            // nastavuji class
            box.classList.add(currentPlayer === 'X' ? 'cross' : 'circle')
            // měním hráče
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            currentPlayerElement.innerText = currentPlayer;
        })
    })

    // ukončení hry / zahájení nové
    endGame.addEventListener('click', () => {
        currentPlayer = 'X';
        boxes.forEach(box => {
            box.classList.remove('cross', 'circle');
        })
    })
})