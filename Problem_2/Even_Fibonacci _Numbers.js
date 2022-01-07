let max_number = 4000000;
let a = 0, b = 1, c = a + b; // a : first number , b : second number , c : next number

let sum_even_numbers = 0;

function sum_numbers()
{
    // print first number and second number
    console.log(a);
    console.log(b);

    while (c < max_number)
    {
        console.log(c);
        if(c%2==0){ sum_even_numbers+=c; }

        c = a + b;
        a = b;
        b = c;
        
    }
} 

sum_numbers();
console.log('Sum : ' + sum_even_numbers);