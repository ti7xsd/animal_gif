const foodAnimations = {
    pizza: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXMxeXVlZzRwN3RjOWpuMmdmbDV6N2ZsN21mYzdscXFnZWNjZ2ZweSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9fuvOqZ8tbZOU/giphy.gif',
    salad: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnFxcDB2MWIwd2xjOHlscXgwNHkzc3h5NzJwdjM2bDR2d3JhbTc0MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/y4yJaxSPmxgEo/giphy.gif',
    burger: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTI0Mm5iYW1tdHExNWQxcDE0cnJtNGc2a3p5aXdvZzBiZnhmeDR3dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1zkrF3l0RfgapqdySj/giphy.gif',
    sushi: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXVlbTdicjZsZWt0cHJubHNrZTljd2w4ZzJ2eXpqcHRnaW0wcW5hbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sn9HA6bwiyB2w/giphy.gif',
    duner:'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDloM2cyYWQwMmpldm43Yzd4dXU3OWlnbWJ0N3U5Z3B4MDIzZ2pmdyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/W6R4OGT4kYKstEkfG6/giphy.gif',
    ice_cream:'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXVlbm9vOWY1dzZtMzJhNWdjbHA5eDFsMmw0Z3lsY25nbGNscng3MyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o6Zt7qChPzoAUAmpW/giphy.gif',
    pancakes:'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnMxYzQ5N3l0cDg5MzdrN2RxaHh5ZzlzOGl2ZnFsbjU4cjg4ZXFsZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5zu5JovduWFBS/giphy.gif',
    waffle:'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXllMm01MTV0cmY5N2EzYThocWxkY3MxNnZtYm12bTk5bHU3NGV4byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2IdlRNZZKFRD2/giphy.gif',
    eggs:'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExejVsMjM5aHlzand6emp6ZDg0YW5kdDRnMDNoaGZoNjJ0YmV2b2gwdCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MgqfpGFvuXkGs/giphy.gif',
    coke:'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGFkcHllbWFqajdiMm42MHJ3bXc2MjVqcW5jNXFuYjVzcXpwcDVpdiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lqXufsLhDykJBawHHY/giphy.gif',
    kfc:'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bjEya24xdnV5eWgxejBuaDI2Z3ZkNG50YmYxYW93NzQxanZ0YmdzeSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/jHdWKa0KtOWqXukVRl/giphy.gif',
    beef:'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzBpN2kxbXF5MWI5YWhvanZ0cXF6djR0dmRyZTYwODRtbXpsYnk2dSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/gw3NpMPvrN64YrC0/giphy.gif'
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
