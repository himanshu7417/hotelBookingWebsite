
 
const API_URL = "https://travel-advisor.p.rapidapi.com/";
const travelAdvisorHost = "travel-advisor.p.rapidapi.com";
const travelAdvisorKey = "d34673b15fmsh628a2f42dfde0fap1594f8jsn3abac0586f15";



let viewMore = () => {
    let viewMoreButtonElement = document.getElementById("view-more-button");
    if (viewMoreButtonElement.innerText == "View More") {
        document.getElementById("view-more-cards").style.display = "block";
        viewMoreButtonElement.innerText = "View Less";
    }
    else {
        document.getElementById("view-more-cards").style.display = "none";
        viewMoreButtonElement.innerText = "View More";
    }
} 