interface ServerPart {
    name: string;
    age: number;
    group: string;
    mbti: string[];
}

const serverPart: ServerPart = {
    name: '최승빈',
    age: 24,
    group: 'YB',
    mbti: ['ENFJ', 'ANGEL']
}

const serverMembers: Array<ServerPart> = [
    {
        name: '최승빈',
        age: 24,
        group: 'YB',
        mbti: ['ENFJ', 'ANGEL'],
    },
    {
        name: '최승빈',
        age: 24,
        group: 'YB',
        mbti: ['ENFJ', 'ANGEL']
    }
]

console.log(serverPart);

interface Closet {
    name: string;
    shirt: number;
    pants: number;
    hat?: number;
    sunglass?: number;
}

const closet: Closet[] = [
    {
        name: '최승빈',
        shirt: 1,
        pants: 2,
        hat: 4,
        sunglass: 2
    }
]