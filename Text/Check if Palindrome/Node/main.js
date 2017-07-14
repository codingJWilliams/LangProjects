return process.argv[2].toLowerCase().split("").reverse().join("") === process.argv[2].toLowerCase() ? console.log("It's a palindrome!") : console.log("That's not a palindrome, silly.")
