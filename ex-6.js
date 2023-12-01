// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

for (let i = 0; i < companyName.length; i++) {
  reversedCompanyName = companyName[i] + reversedCompanyName;
}

console.log(reversedCompanyName);
