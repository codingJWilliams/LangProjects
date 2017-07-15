const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your total mortgage term, in months >', (answer) => {
  var months = Number(answer);
  rl.question("Please enter the interest rate (eg '10' for 10%) > ", function(answer){
    var interestRate = Number(answer);
    rl.question("Please enter total loan value, with no currency symbol > ", function (answer){
      var loan = Number(answer);
      var monthly_rate = interestRate / 100 / 12;
      // TODO: I stole the below code and it doesn't seem to work. Will try to figure out the maths later
      var payment = (
        monthly_rate /
          (1 -
            (1 + monthly_rate)
            *(-months)
          )
        ) * loan;
      console.log(`Monthly payment for a ${months / 12} year mortgage at ${monthly_rate * 1200}% interest rate is: ${payment}`)
      rl.close()
    })
  })
});
