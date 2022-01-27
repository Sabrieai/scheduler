# Scheduler

Scheduler is a single-page React application that allows students to book interviews with a mentor. Students can create, edit, and delete their appointment. The data is being retrieved from an [API](https://github.com/lighthouse-labs/scheduler-api), and when there are changes to a booking that data is sent to the API to persist using a PostgreSQL database. It has included Jest unit tests, Storybook visual tests, and Cypress end-to-end-tests. 

## Final Product

<img width="1120" alt="Screen Shot 2022-01-26 at 11 50 35 PM" src="https://user-images.githubusercontent.com/93690436/151294143-d41d0fa8-4f8b-4b0b-bf2a-068b049b3353.png">

<img width="1117" alt="Screen Shot 2022-01-26 at 11 51 08 PM" src="https://user-images.githubusercontent.com/93690436/151294155-0b74f1ec-325f-41dc-add6-cb4a947dfa6b.png">

### Scheduler is prepared for user input (and the lack of user input)

![chrome-capture (4)](https://user-images.githubusercontent.com/93690436/151284862-351e1ee4-9f8e-47a5-9aeb-9f7d42735226.gif)

### Scheduler is also prepared for when *we* make a mistake

<img width="1426" alt="Screen Shot 2022-01-26 at 9 33 09 PM" src="https://user-images.githubusercontent.com/93690436/151285079-35db9294-db1f-4981-b0ad-613bb8618826.png">

![chrome-capture (5)](https://user-images.githubusercontent.com/93690436/151284972-9c4071da-5df8-4cf6-a2d0-665b2bf0fe50.gif)

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Cypress Test Framework

```sh
npm run cypress
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
