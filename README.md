# Cookie Clicker Task

Your task is to:

1. write a small Cookie Clicker web application, which follows the specs outlaid in
tests of this repository.

2. Ammend the tests (and your application code) in a way that every rerun of the tests
will reproduce same results without restarting the application.

## Tests setup

1. Install latest Node (at least Node v16)

2. Install packages with `yarn install`

## Running tests

On Linux

`PAGE_URL="YOUR_APPLICATION_URL_GOES_HERE" yarn test`

On Windows cmd (Command Prompt)

```cmd
setx PAGE_URL "YOUR_APPLICATION_URL_GOES_HERE"
yarn test
```

## Other notes

You are free to use whatever language/framework/technologies you want.

Along with code submit instructions how to start the application.

No backend is necessary, it is fine to hold the count as long as the application is
running.

Any extra functionality in the solution, which is not laid out in the spec should also
be tested
