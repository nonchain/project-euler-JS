let multiples_3 = [];
let multiples_5 = [];
let sum_of_multiples = 0;

let index = 1000;

// Caculate the multiples of number 3
function calc_multiples_3(n)
{
    for(let i = 1; i < n; i++)
    {
        if (i%3==0) {
            multiples_3.push(i);
            sum_of_multiples += i;
        }
    }

    return multiples_3;
}

// Caculate the multiples of number 3
function calc_multiples_5(n)
{
    for(let i = 1; i < n; i++)
    {
        if (i%5==0) {
            multiples_5.push(i);
            sum_of_multiples += i;
        }
    }

    return multiples_5;
}


calc_multiples_3(index);
calc_multiples_5(index);

console.log(sum_of_multiples);

