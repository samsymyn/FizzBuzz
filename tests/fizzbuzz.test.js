const app = require("../server");
const supertest = require("supertest");

// Test cases

const test1 = {
    array: [1,2,3,5,10,11,15,30,45,99]
}

const test2 = {
    array: [15,45,90]
}

const test3 = {
    array: []
}

const test4 = {
    array: ["A", "B", "C"]
}

const test5 = {
    array: ["213dsmka", "8235nfjv", "45jmc"]
}

// Expected results

const ans1 = {
    "message": "Divided 1 by 3. Divided 1 by 5,Divided 2 by 3. Divided 2 by 5,Fizz,Buzz,Buzz,Divided 11 by 3. Divided 11 by 5,FizzBuzz,FizzBuzz,FizzBuzz,Fizz"
}
const ans2 = {
    "message": "FizzBuzz,FizzBuzz,FizzBuzz"
}
const ans3 = {
    "message": "Undefined"
}
const ans4 = {
    "message": "Undefined,Undefined,Undefined"
}

const ans5 = {
    "message": "Undefined,Undefined,Undefined"
}

// Tests

describe('Test POST', () => {
    test('Test valid integer values', () => {
        return supertest(app).post("/fizzbuzz").send(test1).expect(response => {
            expect(response.status).toBe(200)
            expect(response.body).toEqual(ans1)
        })
    }),
    test('Test valid FizzBuzz array', () => {
        return supertest(app).post("/fizzbuzz").send(test2).expect(response => {
            expect(response.status).toBe(200)
            expect(response.body).toEqual(ans2)
        })
    }),
    test('Test empty array', () => {
        return supertest(app).post("/fizzbuzz").send(test3).expect(response => {
            expect(response.status).toBe(200)
            expect(response.body).toEqual(ans3)
        })
    }),
    test('Test invalid character array', () => {
        return supertest(app).post("/fizzbuzz").send(test4).expect(response => {
            expect(response.status).toBe(200)
            expect(response.body).toEqual(ans4)
        })
    }),
    test('Test invalid number + character array', () => {
        return supertest(app).post("/fizzbuzz").send(test4).expect(response => {
            expect(response.status).toBe(200)
            expect(response.body).toEqual(ans5)
        })
    })     
});




