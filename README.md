# Dummy MPI

This is a simple Node.js application that uses Express to provide a RESTful API for managing patient data. The application allows you to add patient information, update it, and list all patients. It also includes a basic HTML interface to view the patient data.

The patient information includes:

- National ID
- First name
- Family Name
- Age
- Sex
- Phone number
- Allergies
- Conditions

## Setup

To set up the application on your local machine:

1. Install Node.js and npm if you haven't already. You can download them from [here](https://nodejs.org/en/download/).
2. Clone this repository to your local machine.
3. Run `npm install` in the root directory of the project to install the necessary dependencies.
4. Run `npm start` to start the server.

## API

Here are the available API endpoints:

- `GET /patients`: List all patients.
- `POST /patients`: Add a patient. If a patient with the provided national ID already exists, the existing patient record will be updated. The patient data should be included in the request body in JSON format.
- `GET /patientsUI`: View the patient data in an HTML table.

You can use a tool like [Postman](https://www.postman.com/) or [curl](https://curl.se/) to interact with the API.

Please note that all data is stored in memory, so it will be lost when the server restarts.

## License

Apache License v2.0
