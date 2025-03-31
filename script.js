function showDetails(projectId) {
    const projectDetails = document.getElementById(projectId);
    
    if (projectDetails.style.display === "block") {
        projectDetails.style.display = "none";
    } else {
        projectDetails.style.display = "block";
    }
}
