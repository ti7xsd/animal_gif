const foodAnimations = {
    pizza: '<img src="https://media.giphy.com/media/1n5crccXLR3bGKukuj/giphy.gif" class="food-gif" alt="Pizza">',
    salad: '<img src="https://media.giphy.com/media/3ohhwpv2lHU9L7AqZK/giphy.gif" class="food-gif" alt="Salad">',
    burger: '<img src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif" class="food-gif" alt="Burger">'
};

function showFood() {
    const food = document.getElementById('foodInput').value.trim().toLowerCase();
    const resultDiv = document.getElementById('result');

    if (food in foodAnimations) {
        resultDiv.innerHTML = `<p>Намерена храна: ${food}</p>` + foodAnimations[food];
    } else {
        resultDiv.innerHTML = `<p>Храната не е намерена.</p>`;
    }
}
