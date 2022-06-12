# JavaScript workshop for Systems Testing

## The task

1. Write code (`index.js`) to pass the tests
2. Analyze tests (`index.test.js`)

> When you first run the tests they **should** all fail. By adding the code to the functions in `index.js` you will be fixing the tests one by one. The tasks are comments in `index.js`

## Running the code locally

1. Clone the repository:

```sh
git clone https://github.com/EDGENortheastern/JS-workshop.git
```

or:

```sh
git clone git@github.com:EDGENortheastern/JS-workshop.git
```

The two commands above differ as the first one uses `https` and the second one assumes you have an SSH key set up. The difference is important only if you want to push code back to a remote repository.

2. Install the preset:

```sh
npm install
```

3. Run default tests continuously:

```sh
npm run test -- --watch
```

4. Run tests once:

```sh
npm test
```

5. Shorthand to run tests:

```sh
npm t
```
