document.addEventListener('DOMContentLoaded', () => {
    // vyberu boxy
    const boxes = document.querySelectorAll('.box')
    // Právě táhnoucí hráč (X nebo O)
    let currentPlayer = 'X';

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
        })
    })
})