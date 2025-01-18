//What it does: This file contains functions to apply filters and sort options to the data based on user input

export const applyFilter = (allData, toggleFilter, displayPakages) => {
    let filteredData = allData;

    // Apply L1 Classification filter first (always applied)
    filteredData = filteredData.filter(pakage => pakage.L1_Classification === 'CAT/OMETS');

    // Get other filters
    const selectedCoachingType = document.querySelector('input[name="coachingType"]:checked')?.value;
    const selectedExamFilter = document.querySelector('input[name="examFilter"]:checked')?.value;

    console.log('Selected Filters:', {
        selectedCoachingType,
        selectedExamFilter,
        
        
    });
    // Filter by coaching type
    if (selectedCoachingType) {
        filteredData = filteredData.filter(pakage => pakage.Coaching_type === selectedCoachingType);
    }

    // Skip L2 check if coaching type is "WAT / GDPI prep"
    if (selectedCoachingType !== "WAT / GDPI prep") {
        // Filter by L2 Classification (exam filter) if selected
        if (selectedExamFilter) {
            filteredData = filteredData.filter(pakage => pakage.L2_Classification === selectedExamFilter);
        }

        // Filter by subject if coaching type is not "Test series"
        if (selectedCoachingType !== "Test series") {
            const selectedSubjectFilter = document.querySelector('input[name="subjectFilter"]:checked')?.value || "All";
            if (selectedSubjectFilter) {
                filteredData = filteredData.filter(pakage => pakage.Subjects === selectedSubjectFilter);
            }
        }
    }

    // Apply sorting after filtering
    let sortedData = filteredData;
    applySort(sortedData, displayPakages);
};



export const applySort = (sortedData, displayPakages) => {
    const selectedSortOption = document.querySelector('input[name="sortPrice"]:checked');

    if (!selectedSortOption) {
        displayPakages(sortedData);
        return;
    }

    const sortValue = selectedSortOption.value;

    if (sortValue === "lowToHigh") {
        sortedData.sort((a, b) => a.Fees - b.Fees);
    } else if (sortValue === "highToLow") {
        sortedData.sort((a, b) => b.Fees - a.Fees);
    }

    displayPakages(sortedData);
};

export const resetFilters = (toggleFilter, applyFilter) => {
    document.getElementById('FullCourse').checked = true;
    document.getElementById('All').checked = true;
    document.getElementById('CAT').checked = true;
    document.getElementById('sortLowToHigh').checked = false;
    document.getElementById('sortHighToLow').checked = false;

    toggleFilter(); // Reset filters UI

    // Apply filters and update the display to show all packages
    applyFilter();
};

