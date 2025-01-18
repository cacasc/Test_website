const exams = [
    { name: "IIT JEE Mains", link: "Test7.html?exam=EEE" },
    { name: "IIT JEE Advanced", link: "Test7.html?exam=EEE" },
    { name: "CAT", link: "Filterspage.html?exam=CAT" },
    { name: "XAT", link: "Filterspage.html?exam=CAT" },
    { name: "NMAT", link: "Filterspage.html?exam=CAT" },
    { name: "MAH MBA CET", link: "Filterspage.html?exam=CAT" },
    { name: "MBA", link: "Filterspage.html?exam=CAT" },
  
    { name: "NEET", link: "Test7.html?exam=MED" },
    { name: "UPSC CSE", link: "Filterspage.html?exam=UPSC" },
    { name: "Civil services exam", link: "Filterspage.html?exam=UPSC" },
    { name: "GMAT", link: "Test7.html?exam=Studyabroad" },
    { name: "GRE", link: "Test7.html?exam=Studyabroad" },
    { name: "TOEFL", link: "Test7.html?exam=Studyabroad" },
    { name: "IELTS", link: "Test7.html?exam=Studyabroad" },
    { name: "BITSAT", link: "Test7.html?exam=EEE" },
    { name: "VITEEE", link: "Test7.html?exam=EEE" },
  ];
  
  function performSearch() {
      const query = document.getElementById("searchInput").value.trim().toLowerCase();
      const dropdownResults = document.getElementById("dropdownResults");
  
      dropdownResults.innerHTML = "";
  
      if (!query) {
          dropdownResults.style.display = "none";
          return;
      }
  
      const filteredExams = exams.filter((exam) =>
          exam.name.toLowerCase().includes(query)
      );
  
      if (filteredExams.length === 0) {
          dropdownResults.innerHTML = "<div class='dropdown-item'>No results found</div>";
      } else {
          filteredExams.forEach((exam) => {
              const div = document.createElement("div");
              div.className = "dropdown-item";
              div.textContent = exam.name;
              div.onclick = () => window.location.href = exam.link;
              dropdownResults.appendChild(div);
          });
      }
      dropdownResults.style.display = "block";
  }
  