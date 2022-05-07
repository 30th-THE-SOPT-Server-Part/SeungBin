// 과제 조건
// 1. Member, Dinner interface 만들고 타입 지정하기
// 2. organize 내부 로직 채우기


interface Member {
    name: string;
    group: string;
}

interface Dinner {
    member: Member[];
    shuffle(array: Member[]): Member[];
    organize(array: Member[]): void;
}

const dinner: Dinner = {

    member: [
        {
            name: '채정아',
            group: 'ob'
        },
        {
            name: '최승빈',
            group: 'yb'
        },
        {
            name: '박정훈',
            group: 'ob'
        },
        {
            name: '김희빈',
            group: 'ob'
        },
        {
            name: '박진수',
            group: 'yb'
        },
        {
            name: '임승하',
            group: 'yb'
        }
    ],

    shuffle(array){
        array.sort(() => Math.random() - 0.5);
        return array;
    },

    organize(array) {
        this.shuffle(array);
        const ob: Member = array.filter((member: Member) => (member.group === 'ob'))[0];
        const yb: Member = array.filter((member: Member) => (member.group ==='yb'))[0];
        const dinnerMember: string[] = [ob.name, yb.name];
       
        console.log(`오늘의 저녁 식사 멤버는 ${dinnerMember[0]}, ${dinnerMember[1]}입니다.`);
    }
};

dinner.organize(dinner.member);