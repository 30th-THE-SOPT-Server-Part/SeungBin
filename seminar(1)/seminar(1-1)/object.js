const sopt = {
    season: 30,
    group: ['YB', 'OB'],
    part: ['서버', '기획', '디자인', '안드로이드', '웹', 'ios'],
    preident: '김규민',
    introduce: function () {
        this.part.map(name => {
            console.log(`솝트 내 파트는 ${name} 파트가 있어요!`)
        });
    }
}

console.log(sopt.group);
sopt.introduce();

console.log(sopt.season);

let array = [1, true, "string"];
console.log(array);

let array2 = [
    {
        name: '최승빈',
        age: 5
    },
    {
        name: '박정무',
        age: 15
    }
];

console.log(array2);
console.log(typeof array2);

//함수 선언식
// function menu(dinner) {
//     return `오늘 메뉴는 ${dinner} 입니다.`;
// }


// const str2 = menu('삼겹살');
// console.log(str2);

const menu = (dinner) => {
    return `오늘 메뉴는 ${dinner} 입니다.`;
}

const str2 = menu('곱창');
console.log(str2);

const func = (num) => {
    return num * num;
}

const multiple = (func, num) => {
    console.log(func(num));
}

multiple(func, 3);

// let a = 2;
// let b = a++;
// let b = a++; -> b = a+1
// let b = ++a; // b = a+1

// console.log(b);

let a = 2 + 3;
let x = 5;
let b = 2 * 3;
let c = 3 - 2;
let d = 4 / 2;

console.log(a, b, c, d);

if(a != c){
    console.log('a != c');
}

let y = '5';

if(a !== y) {
    console.log('a !== y');
}
// 6 / 2 나머지
if (b % d == 0){
    console.log(b % d);
    console.log('나머지 0');
}
// and or
if (a === 5 && d === 2){
    console.log('hi');
}

if (a === 4 || d === 2){
    console.log('or');
}

console.log(typeof a);
const n = null;

console.log(typeof (typeof a));

if (typeof a == 'number'){
    console.log(a);
}