# Twig Education Coding Challenge

React app that uses [randomuser api](https://randomuser.me/) to generate random names and separate them into multiple list items.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Usage

Install dependencies: `npm install`

Run app: `npm start`

Build app: `npm run build`

Preview app: https://jakoob89.github.io/twig-coding-challenge/build/

# Comments

#### Coding Style / Practices
Perhaps there is a more sophisticated solution to this task but from my experience often simples one is easiest to understand by everyone working with the code.

Of course, the style of code often depends on the person / workplace so without knowing Twig team's coding styles I did my best to write universally clean and understandable code.

#### Solution
The required solution is a `splitToChunks()` function within `Helpers.js` file.

My logic behind the code is quite simple:
1. The function first checks if N (chunkSize) is a positive integer (using helper function).
2. If N doesn't pass the check it returns an original array, if it does the code continues.
3. Three variables are created. A clone of original array, an empty array that will store the result, and a calculated number of items that should be allocated in each sub-array.
4. The function loops N number of times creating sub-array with each iteration.
5. Each iteration is removing (previously calculated) number of items from the array and placing them in sub-arrays.
6. With the last iteration only the remaining items are placed in the last sub-array.

#### UI
Even though it was not a requirement, I decided to refresh my React a bit and add a simple user interface to the application. It populates the array with random names from an API and displays them as N number of list items where number of both elements is controllable with input fields.

#### Testing
Here are some example of test cases:
```
splitToChunks([1, 2, 3, 4, 5], 3)
// RETURNS: [ [1, 2], [3, 4], [5] ]
```

```
splitToChunks([1, true, 3, 4, 5, 6, 7, 8, 9, 10, 11, 'foo', 13], 5)
// RETURNS: [ [1, true, 3], [4, 5, 6], [7, 8, 9], [10, 11, 'foo'], [13] ]
```

```
splitToChunks([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], false)
// RETURNS: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

```
splitToChunks([1, 2, 3, 4], 0)
// RETURNS: [1, 2, 3, 4]
```