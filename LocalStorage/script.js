document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.getElementById("submitBtn");

    if (submitBtn) {
        submitBtn.addEventListener("click", () => {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();

            if (name === "" || email === "") {
                alert("Please fill in all fields");
                return;
            }

            localStorage.setItem("userName", name);
            localStorage.setItem("userEmail", email);


            window.location.href = "table.html";
        });
    }


    const tbody = document.getElementById("tbody");


        const name = localStorage.getItem("userName");
        const email = localStorage.getItem("userEmail");


            tbody.innerHTML = `
                <tr>
                    <td>${name}</td>
                    <td>${email}</td>
                </tr>
            `;
        

});