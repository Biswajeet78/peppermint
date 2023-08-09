document.addEventListener("DOMContentLoaded", function() {
    const jobListings = document.querySelectorAll(".job-listing");

    jobListings.forEach(listing => {
        const jobTitle = listing.querySelector("h3");
        const jobDetails = listing.querySelector("p");
        const applyButton = listing.querySelector(".apply-button");

        jobTitle.addEventListener("click", function() {
            jobDetails.classList.toggle("show-details");
            applyButton.classList.toggle("show-button");
        });

        applyButton.addEventListener("click", function(event) {
            event.stopPropagation(); // Prevent job details from toggling when clicking the "Apply Now" button
        });
    });
});
