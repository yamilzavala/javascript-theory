class Student {
    constructor(name, age) {
        this.name = name;
        this.lastName = age;
        this.tardies = 0;
        this.scores = [];
    }

    fullName() {
        return `full name: ${this.name} ${this.lastName}`
    }

    markLate() {
        this.tardies += 1;
        if(this.tardies >= 3) console.log('You are expolled')
    }

    addScore(score) {
        this.scores.push(score)
    }

    averageScore(){
        const sum = this.scores.reduce((a,b) => a+b)
        return sum / this.scores.length
    }

    static SayHello() {
        console.log('Hello there!!!')
    }
}

const s = new Student('jhon','Smaith');
console.log(s.fullName())

s.markLate()
s.markLate()
s.markLate()

s.addScore(4)
s.addScore(7)
s.addScore(8)
s.addScore(10)

console.log(s.averageScore())

Student.SayHello()
