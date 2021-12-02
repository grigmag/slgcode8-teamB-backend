const mongoose = require('mongoose');
const Hospital = require('../models/hospital');

// const departments = ['Cardiology', 'Neurology', 'Orthopaedics'];

// const randomDates = () => {
//   const start = new Date();
//   const end = new Date(2021, 11, 31);
//   let dates = [];
//   for (let i = 0; i < 3; i++) {
//     const date = new Date(
//       start.getTime() + Math.random() * (end.getTime() - start.getTime())
//     );
//     dates[i] = date;
//   }
//   return dates;
// };

const createHospitalData = async (testHospitalsAmount = 10) => {
  await mongoose.connection.dropCollection('hospitals');

  const testHospitals = await Hospital.find({ code: 'General Hospital' });
  if (testHospitals.length !== testHospitalsAmount) {
    for (let i = 0; i < testHospitalsAmount; i++) {
      await Hospital.create({
        code: 'General Hospital',
        name: `Hospital ${i}`,
        departments: ['Cardiology', 'Neurology', 'Orthopaedics'],
        phoneNumber: '0900696969',
        address: `Tsimiski ${i + 1}`,
        city: 'Thessaloniki',
      });
    }
  }
  const hospitals = await Hospital.find();
};

module.exports = createHospitalData;
