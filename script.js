const container = document.getElementById('container');

// Boucle pour créer et ajouter les 24 divs
for (let i = 1; i <= 24; i++) {
    const div = document.createElement('div');
    div.className = 'box';
    div.textContent = `Div ${i}`;
    container.appendChild(div);
}