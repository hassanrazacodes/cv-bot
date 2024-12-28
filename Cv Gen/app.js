function generateCV() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const summary = document.getElementById("summary").value.trim();
    const skills = document.getElementById("skills").value.trim();
    const experience = document.getElementById("experience").value.trim();

    if (!name || !email || !phone || !summary || !skills || !experience) {
        alert("Please fill in all fields.");
        return;
    }

    document.getElementById("cv-name").textContent = name;
    document.getElementById("cv-email").textContent = email;
    document.getElementById("cv-phone").textContent = phone;
    document.getElementById("cv-summary").textContent = summary;
    document.getElementById("cv-skills").textContent = skills;
    document.getElementById("cv-experience").textContent = experience;

    const color = document.getElementById("color").value;
    document.getElementById("cv").style.backgroundColor = color;
    document.body.style.backgroundColor = color;

    const cvDiv = document.getElementById("cv");
    cvDiv.style.display = "block";
    window.scrollTo(0, cvDiv.offsetTop);
}