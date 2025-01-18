// CATtogglefilter.js
export const toggleFilter = () => {
    const selectedCoachingType = document.querySelector('input[name="coachingType"]:checked').value;
    const subjectFilterSection = document.getElementById('subjectFilterSection');
    const examFilterSection = document.getElementById('examFilterSection'); // For the exam filter

    if (selectedCoachingType === "Test series") {
        subjectFilterSection.style.display = 'none'; // Hide subject filter when Test series is selected
        examFilterSection.style.display = 'block'; // Keep exam filter visible
    } else if (selectedCoachingType === "WAT / GDPI prep") {
        subjectFilterSection.style.display = 'none'; // Hide subject filter when WAT / GDPI prep is selected
        examFilterSection.style.display = 'none'; // Hide exam filter when WAT / GDPI prep is selected
    } else {
        subjectFilterSection.style.display = 'block'; // Show subject filter for other coaching types
        examFilterSection.style.display = 'block'; // Show exam filter for other coaching types
    }
};

