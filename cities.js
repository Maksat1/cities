let field   = document.querySelector('#field');
let message = document.querySelector('#message');
let cities = [];
/*
1. создать массив введенных городов.
2. Первый ход. город записывается в массив.
3. В инпут надо вводить город,
4. Проверить, чтобы первая буква города из п.3 совпадала с последней буквой предыдущего города.
5. Проверяется, есть ли этот город в массиве
6. Если его нет, то город добавляется в массив.
7. Если город уже был, то выводится сообщение
*/
field.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if (cities.length == 0) {
            cities.push(field.value)
        } else {
            let last_city = cities[cities.length - 1];
            let last_letter = last_city[last_city.length - 1];
            let first_letter = field.value[0].toLowerCase();

            if (last_letter != first_letter) {
                message.innerHTML = 'Первая буква города не совпадает с последней буквой предыдущего города.'
            } else if (cities.includes(field.value)) {
                message.innerHTML = 'Было'
            } else {
                cities.push(field.value)
            }           
        }
        console.log(cities)
    }
    
});