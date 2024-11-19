document.getElementById("portfolioForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // User data melvva mate
  const name = document.getElementById("name").value;
  const bio = document.getElementById("bio").value;
  const projects = document.getElementById("projects").value.split(",");

  // show karrava mate
  document.getElementById("portfolioName").textContent = name;
  document.getElementById("portfolioBio").textContent = bio;

  const projectsList = document.getElementById("portfolioProjects");
  projectsList.innerHTML = ""; 
  projects.forEach((project) => {
    const li = document.createElement("li");
    li.textContent = project.trim(); // project name
    projectsList.appendChild(li);
  });

  document.getElementById("portfolio").classList.remove("hidden");
});