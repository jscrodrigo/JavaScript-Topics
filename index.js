const employee1 = 'Amanda';
const salaryemployee1 = 2000;

const employee2 = 'Billy';
const salaryemployee2 = 4000;

const employee3 = 'Rooney';
const salaryemployee3 = 1500;

const avg = (salaryemployee1 + salaryemployee2 + salaryemployee3) / 3;

if(avg > 3500 ){
  console.log(`Congratulations, ${avg} is higher than the average payment! `);
} else{
  console.log(`${avg} is lower than the average payment. You need to work more.`);
}