


function validateInput(num) {

    // returns true if number, false otherwise

    if (num % 1 == 0) {
        return true;
    } else {
        return false;
    }

}

const validateFizzBuzz = (req, res) => {
    const array = req.body.array;
    const list = [];

    if (array.length === 0) {
        // check empty array
        list.push("Undefined");
        return res.status(200).json({"message" : `${list}`});
    }

    array.forEach(num => {

        if (!validateInput(num)) {
            // checks if number
            console.log(`${num} is not a valid character: Undefined`);
            list.push("Undefined");
            return;
        }

        if (num != 0 && num % 3 == 0 && num % 5 == 0) {
            // valid fizzbuzz, divisable by 3 and 5
            console.log(`${num} is valid: FizzBuzz`);
            list.push("FizzBuzz");

        } else if (num != 0 && num % 3 == 0) {
            // valid fizz, divisable by 3
            console.log(`${num} is valid: Fizz`);
            list.push("Fizz");

        } else if (num != 0 && num % 5 == 0) {
            // valid buzz, divisable by 5
            console.log(`${num} is valid: Buzz`);
            list.push("Buzz");

        } else {
            // valid number, but not divisable by 3 or 5
            console.log(`${num} is not FizzBuzz: Divided ${num} by 3. Divided ${num} by 5`);
            list.push(`Divided ${num} by 3. Divided ${num} by 5`);
        }
    });

    // returns list with responses in order they were provided
    return res.status(200).json({"message" : `${list}`});

}

module.exports = {validateFizzBuzz};