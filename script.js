const container = document.getElementById('container');

// Boucle pour créer et ajouter les 24 divs
for (let i = 1; i <= 24; i++) {
    const div = document.createElement('div');
    div.className = 'box';
    div.textContent = `Div ${i}`;
    container.appendChild(div);
}

// Liste des messages pour chaque jour du calendrier de l'Avent.
const messages = [
    // Ici, je définis un tableau contenant les messages.
    "Allez, on attaque cette journée avec une nouvelle ligne de code !",
    "Et si on ajoutait un peu de JavaScript pour pimenter tout ça ?",
    "Aujourd'hui, on met un peu de style… vive le CSS !",
    "Garde le sourire, même si le débogage fait des siennes !",
    "Un café, du code… ça sent une belle journée !",
    "Chaque bug corrigé, c'est comme un cadeau de Noël en avance !",
    "Pas à pas, ton projet se construit, bravo !",
    "Petit conseil du jour : n'oublie pas de commit !",
    "Un jour de plus, un fichier de moins à débugger !",
    "Allez, un peu de PHP pour bien démarrer la journée !",
    "Et si on améliorait un petit truc dans le frontend ?",
    "Prends une pause, ton cerveau te remerciera !",
    "Courage, tu as déjà fait la moitié du chemin !",
    "Un clic, un miracle : ça marche enfin !",
    "Pense à toi… et à ton code bien organisé !",
    "Plus que quelques jours avant de lâcher clavier pour le sapin !",
    "Ton projet avance bien, ne lâche rien !",
    "Les tests c'est pas marrant, mais tu gères !",
    "Une petite optimisation avant la fin de la journée ?",
    "Encore un bug récalcitrant ? Respire, ça va aller !",
    "Check ton backlog, on y est presque !",
    "Plus qu’un petit effort pour voir tout ça prendre forme !",
    "Ton code est aussi prêt que les cadeaux sous le sapin !",
    "Oubliez pas l'objectif du jour :) : Joyeux Noël !",

];

// Liste des couleurs pour chaque case du calendrier.
const colors = [
    // Ce tableau contient des codes couleur hexadécimaux pour que chaque jour ait une couleur unique.
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4',
    '#FFEEAD', '#D4A5A5', '#9B5DE5', '#F15BB5',
    '#FEE440', '#00BBF9', '#00F5D4', '#B8F2E6',
    '#FF99C8', '#FCF6BD', '#D0F4DE', '#A9DEF9',
    '#E4C1F9', '#FF9F1C', '#2EC4B6', '#CBF3F0',
    '#FFBF69', '#FF99C8', '#A9DEF9', '#D0F4DE'
];

