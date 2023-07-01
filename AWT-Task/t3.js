// CSPIT object
const CSPIT = {
  yearOfEstablishment: 2000,
  location: 'Gujarat, India',
  departments: ['CE', 'IT', 'CS', 'EC', 'EE', 'CL', 'ME'],
  getAllDetails: function() {
    console.log('CSPIT Details:');
    console.log('Year of Establishment:', this.yearOfEstablishment);
    console.log('Location:', this.location);
    console.log('Departments:', this.departments);
  }
};

// Empty function for department CE as prototype of CSPIT
CSPIT.CE = function() {
  this.totalStudents = 250;
  this.totalFaculty = 30;
};

// Retrieve all details from CSPIT
console.log('Retrieving CSPIT Details:');
for (const property in CSPIT) {
  if (typeof CSPIT[property] !== 'function') {
    console.log(property + ':', CSPIT[property]);
  }
}

// Retrieve details of department CE
console.log('Retrieving Department CE Details:');
const departmentCE = new CSPIT.CE();
for (const property in departmentCE) {
  console.log(property + ':', departmentCE[property]);
}
