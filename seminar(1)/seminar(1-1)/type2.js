const name = '최승빈';
console.log(typeof name);

let age = 24;
console.log(typeof age);

let server = true;
console.log(typeof server);

//안녕하세요 제 이름은 최승빈입니다. 제 나이는 24살 입니다.
console.log('안녕하세요 제 이름은 ' + name + ' 입니다. 제 나이는 ' + age + '살 입니다.');

console.log(`안녕하세요 제 이름은 ${name} 입니다. 제 나이는 ${age}살 입니다.`);

console.log(typeof null);
console.log(typeof undefined);

let arr = ["안녕", 1, "나는", true];

let num = [1, 2, 3, 4];
const newNumArr = num.map(x => x * 2);
console.log(newNumArr);

newNumArr.map(x => {
    console.log(x);
});

for (const x of newNumArr) {
    console.log(x);
}