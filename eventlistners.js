// eventlistners.js

export const attachEventListeners = (allData, toggleFilter, applyFilter, resetFilters, displayPakages) => {
    
    // Attach event listeners to the filter inputs
    document.querySelectorAll('input[name="coachingType"]').forEach(radio => {
        radio.addEventListener('change', () => {
            toggleFilter(); // Call the imported toggleFilter
            applyFilter(allData, toggleFilter, displayPakages);
        });
    });

    document.querySelectorAll('input[name="subjectFilter"]').forEach(radio => {
        radio.addEventListener('change', () => {
            applyFilter(allData, toggleFilter, displayPakages);
        });
    });

    document.querySelectorAll('input[name="examFilter"]').forEach(radio => {
        radio.addEventListener('change', () => {
            applyFilter(allData, toggleFilter, displayPakages);
        });
    });

    document.querySelectorAll('input[name="sortPrice"]').forEach(radio => {
        radio.addEventListener('change', () => {
            applyFilter(allData, toggleFilter, displayPakages);
        });
    });

    document.getElementById('resetFilters').addEventListener('click', () => {
        resetFilters(toggleFilter, () => applyFilter(allData, toggleFilter, displayPakages));
    });
    
};
