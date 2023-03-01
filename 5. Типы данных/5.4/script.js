// task 1

let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles[(styles.length/2 - 0.5)] = 'Классика';
console.log(styles.shift());
styles.unshift('Рэп', 'Регги')
console.log(styles);

