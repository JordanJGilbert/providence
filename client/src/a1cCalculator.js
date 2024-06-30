export function determineIdealA1c(age, healthStatus, durationOfDiabetes, historyHypoglycemia,
    advancedMicrovascularComplications, extensiveComorbidConditions,
    lifeExpectancy, frailty, hypoglycemicMeds, patientAttitude, supportResources) {
    let idealA1c = 7.0;

    // Adjust ideal A1c based on age
    if (age >= 76) {
        if (healthStatus === "Healthy") {
            idealA1c = 7.5;
        } else if (healthStatus === "Complex/Intermediate") {
            idealA1c = 8.0;
        } else {
            idealA1c = 8.5;
        }
    } else if (age >= 65) {
        if (healthStatus === "Healthy") {
            idealA1c = 7.5;
        } else if (healthStatus === "Complex/Intermediate") {
            idealA1c = 8.0;
        }
    } else if (age <= 40) {
        if (healthStatus === "Healthy") {
            idealA1c = 6.5;
        }
    }

    // Adjust based on duration of diabetes
    if (durationOfDiabetes >= 15) {
        idealA1c = Math.max(idealA1c, 8.0);
    } else if (durationOfDiabetes >= 10) {
        idealA1c = Math.max(idealA1c, 7.5);
    } else if (durationOfDiabetes < 5) {
        idealA1c = Math.min(idealA1c, 6.5);
    }

    // Adjustments based on other factors
    if (historyHypoglycemia || advancedMicrovascularComplications || extensiveComorbidConditions || frailty) {
        idealA1c = Math.min(idealA1c + 0.5, 8.5);
    }

    if (lifeExpectancy === "Short") {
        idealA1c = Math.min(idealA1c + 0.5, 8.5);
    }

    // Adjust based on hypoglycemic medications
    if (!hypoglycemicMeds) {
        idealA1c = Math.max(idealA1c - 0.5, 6.5);
    }

    // Adjust based on patient attitude and support resources
    const positive_attitude = patientAttitude === "highly motivated, adherent, excellent self-care capabilities";
    const resources = supportResources === "readily available";

    // Ensure the A1c does not go below a minimum threshold of 6.5 unless positive attitude and resources are true
    if (positive_attitude && resources) {
        idealA1c = Math.max(idealA1c, 6.0);
    } else {
        idealA1c = Math.max(idealA1c, 6.5);
    }

    return idealA1c;
}
