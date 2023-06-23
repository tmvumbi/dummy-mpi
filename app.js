const express = require('express');
const app = express();
app.use(express.json());

let patients = [];

function populateDummyData() {
  patients.push(
      {nationalId: "9508101234081", firstName: "Sipho", familyName: "Mahlangu", age: 28, sex: "Male", phoneNumber: "0721234567", allergies: ["Peanuts"], conditions: ["Asthma"]},
      {nationalId: "9403205234082", firstName: "Thabo", familyName: "Smith", age: 29, sex: "Male", phoneNumber: "0712345678", allergies: ["None"], conditions: ["None"]},
      {nationalId: "9312316234083", firstName: "Lerato", familyName: "Pillay", age: 30, sex: "Female", phoneNumber: "0798765432", allergies: ["Penicillin"], conditions: ["Diabetes"]},
      {nationalId: "9005157234084", firstName: "Nthabiseng", familyName: "Mokoena", age: 33, sex: "Female", phoneNumber: "0781234567", allergies: ["None"], conditions: ["None"]},
      {nationalId: "8812148234085", firstName: "Bongani", familyName: "Van Wyk", age: 35, sex: "Male", phoneNumber: "0745678910", allergies: ["Shellfish"], conditions: ["Hypertension"]},
      {nationalId: "8611079234086", firstName: "Mbali", familyName: "Nkosi", age: 37, sex: "Female", phoneNumber: "0731234567", allergies: ["None"], conditions: ["None"]},
      {nationalId: "8205100234087", firstName: "Thabiso", familyName: "Botha", age: 41, sex: "Male", phoneNumber: "0723456789", allergies: ["Latex"], conditions: ["Epilepsy"]},
      {nationalId: "7902121234088", firstName: "Lindiwe", familyName: "Jacobs", age: 44, sex: "Female", phoneNumber: "0712345678", allergies: ["None"], conditions: ["None"]},
      {nationalId: "7610152234089", firstName: "Themba", familyName: "Ndlovu", age: 47, sex: "Male", phoneNumber: "0767891234", allergies: ["Eggs"], conditions: ["Asthma"]},
      {nationalId: "7204063234090", firstName: "Nomvula", familyName: "Meyer", age: 51, sex: "Female", phoneNumber: "0741234567", allergies: ["None"], conditions: ["None"]}
  );
}

populateDummyData();

app.get('/patients', (req, res) => {
    res.json(patients);
});

app.post('/patients', (req, res) => {
    const { nationalId, firstName, familyName, age, sex, phoneNumber, allergies, conditions } = req.body;

    // Check if patient already exists
    let patient = patients.find(p => p.nationalId === nationalId);

    if (patient) {
        // Update the patient
        patient.firstName = firstName;
        patient.familyName = familyName;
        patient.age = age;
        patient.sex = sex;
        patient.phoneNumber = phoneNumber;
        patient.allergies = allergies;
        patient.conditions = conditions;
    } else {
        // Add new patient
        patients.push({
            nationalId, 
            firstName, 
            familyName, 
            age, 
            sex, 
            phoneNumber, 
            allergies, 
            conditions
        });
    }

    res.json({ message: 'Patient information has been updated/added successfully.' });
});

app.get('/patientsUI', (req, res) => {
  let html = `
  <html>
      <head>
          <style>
              body {
                  font-family: Arial, sans-serif;
              }
              table {
                  width: 100%;
                  border-collapse: collapse;
                  margin-top: 15px;
              }
              th, td {
                  border: 1px solid #ddd;
                  padding: 8px;
              }
              th {
                  background-color: #4CAF50;
                  color: white;
              }
              tr:nth-child(even) {
                  background-color: #f2f2f2;
              }
              tr:hover {
                  background-color: #ddd;
              }
          </style>
      </head>
      <body>
          <h1>Dummy MPI 🥸 - Patients</h1>
          <table>
              <tr>
                  <th>National ID</th>
                  <th>First Name</th>
                  <th>Family Name</th>
                  <th>Age</th>
                  <th>Sex</th>
                  <th>Phone Number</th>
                  <th>Allergies</th>
                  <th>Conditions</th>
              </tr>`;

  patients.forEach(patient => {
      html += `
      <tr>
          <td>${patient.nationalId}</td>
          <td>${patient.firstName}</td>
          <td>${patient.familyName}</td>
          <td>${patient.age}</td>
          <td>${patient.sex}</td>
          <td>${patient.phoneNumber}</td>
          <td>${patient.allergies.join(", ")}</td>
          <td>${patient.conditions.join(", ")}</td>
      </tr>`;
  });

  html += `
          </table>
      </body>
  </html>`;

  res.send(html);
});


const port = process.env.PORT || 5555;
app.listen(port, () => console.log(`Server is running on port ${port}`));
