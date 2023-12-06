# Jest Testing Fundamentals

Introduction to the basics of Test Driven Development in Javascript utilizing Jest, as part of the Odin Project curriculum.

## Assignment

This assignment involved writing tests for specific JavaScript functions and subsequently developing these functions to pass the test criteria.

The methodology was straightforward yet methodical: I started by writing individual unit tests and then iteratively refined each function until it passed its corresponding test. This strategy adhered to the core testing principles of Test-Driven Development (TDD), where the creation of tests precedes the actual coding process.

## Tasks and Test Scenarios

- **Capitalize()** - Implement and test a capitalize function that takes a string and returns it with the first character capitalized.
- **ReverseString()** - Create and test a reverseString function that takes a string and returns it reversed.
- **Calculator Object** - Develop and test a calculator object containing basic operations: add, subtract, divide, and multiply. Each operation takes two numbers and returns the correct calculation.
- **CaesarsCipher()** - Build and test a caesarCipher function that shifts characters in a string based on a shift factor. The tests include checking character wrapping (from z to a), case sensitivity, and punctuation handling.
- **AnalyzeArray()** - Write and test an analyzeArray function that processes an array of numbers and returns an object with properties: average, min, max, and length. The focus is on testing the overall function rather than individual helper functions.

## Key Take Aways

Through this project, I learned the importance of Test Driven Development. Writing tests first helped me think more critically about the requirements of the functions. Being introduced to the fundamentals of the Jest Framework allowed me to appreciate this approach and how it can assist with building more robust software. Although TDD initially felt slower and cumbersome, I can appreciate the long-term payoff in creating reliable code.

Using TDD we can:

- Be confident that our code works as intended.
- Edit the code knowing we haven’t broken previously established core functionality.
- Account for edge cases allowing us to focus on specific circumstances rather than trying to mentally account for multiple scenarios in our heads.
- Replace manual testing which quickly becomes cumbersome and repetitive as the program grows in complexity.

Through my own research on the topic I became aware of opposing views which argued that TDD isn't always desirable and can even have negative effects on projects. Generally appeared to revolve around concerns that the initial development can be slowed, especially among teams new to TDD or in projects with rapidly evolving requirements.

Awareness of these contrasting views has helped me develop a more balanced perspective towards TDD. While I recognize its (potential) pitfalls, I can also appreciate the benefits it brings to the table in appropriate scenarios. The discipline of writing tests first, the confidence in making changes without breaking existing functionality, and the focus it brings to covering edge cases are invaluable in many contexts.
