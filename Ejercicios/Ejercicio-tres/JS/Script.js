function palindromeChecker(str) {
    const strReversed = str.split("").reverse().join("")
  
    return strReversed === str ? "es palindromo" : "no es palindromo"
  }
  console.log(palindromeChecker("anita lava la tina")) // es palindromo
  console.log(palindromeChecker("amor a roma")) // es palindromo
  console.log(palindromeChecker("ligar es ser ágil")) // no es palindromo
