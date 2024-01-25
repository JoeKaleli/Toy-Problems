  // Challenge 3: Net Salary Calculator
  function calculateNetSalary() {
    // Get user input
    let basicSalary = parseFloat(document.getElementById("basicSalary").value);
    let benefits = parseFloat(document.getElementById("benefits").value);

    // Calculate PAYE
    let paye = calculatePAYE(basicSalary);

    // Calculate NHIF
    let nhif = calculateNHIF(basicSalary);

    // Calculate NSSF
    let nssf = calculateNSSF(basicSalary);

    // Calculate Housing Levy
    let housingLevy = calculateHousingLevy();

    // Calculate Net Salary
    let netSalary = basicSalary + benefits - paye - nhif - nssf - housingLevy;

    // Display the result
    document.getElementById("result").innerHTML = `
        <h2>Net Salary Calculation Result</h2>
        <p>Basic Salary: ${basicSalary} Ksh</p>
        <p>Benefits: ${benefits} Ksh</p>
        <p>PAYE: ${paye} Ksh</p>
        <p>NHIF: ${nhif} Ksh</p>
        <p>NSSF: ${nssf} Ksh</p>
        <p>Housing Levy: ${housingLevy} Ksh</p>
        <p>Net Salary: ${netSalary} Ksh</p>
    `;
}

// Function to calculate PAYE
function calculatePAYE(salary) {
    // Implement PAYE calculation logic here
    // ...

    // For example, let's assume a fixed value for demonstration purposes
    return 1000;
}

// Function to calculate NHIF
function calculateNHIF(salary) {
    // Implement NHIF calculation logic here
    // ...

    // For example, let's assume a fixed value for demonstration purposes
    return 500;
}

// Function to calculate NSSF
function calculateNSSF(salary) {
    // Implement NSSF calculation logic here
    // ...

    // For example, let's assume a fixed value for demonstration purposes
    return 600;
}

// Function to calculate Housing Levy
function calculateHousingLevy() {
    // Implement Housing Levy calculation logic here
    // ...

    // For example, let's assume a fixed value for demonstration purposes
    return 200;
}