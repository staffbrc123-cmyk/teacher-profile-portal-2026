const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzEfnRFQ39mWBPJmqwsatq8RjVOuVZxlT-nOwbHDKVUxXt5ceGQHqVeUE55oVEBRN8/exec";
document.getElementById("teacherForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = {
        code: document.getElementById("code").value.trim(),
        name: document.getElementById("name").value.trim(),
        school: document.getElementById("school").value,
        sex: document.getElementById("gender").value,
        category: document.getElementById("category").value,
        divyang: document.getElementById("divyang").value,
        phone: document.getElementById("phone").value.trim(),
        whatsapp: document.getElementById("whatsapp").value.trim(),
        dob: document.getElementById("dob").value,
        address: "",
        email: document.getElementById("email").value.trim(),
        firstJoining: "",
        currentJoining: "",
        transferJoining: "",
        subject: document.getElementById("subject").value,
        fullAddress: document.getElementById("address").value.trim()
    };

    try {
        const response = await fetch(SCRIPT_URL, {
            method: "POST",
                        body: JSON.stringify(data),
                        redirect: "follow",
        });

        const result = await response.json();

        if (result.status === "success") {
            alert("✅ आपका डेटा सफलतापूर्वक सेव हो गया।");
            document.getElementById("teacherForm").reset();
        } else if (result.status === "duplicate") {
            alert("⚠️ इस मानव सम्पदा कोड का डेटा पहले से मौजूद है।");
        } else {
            alert("❌ डेटा सेव नहीं हो सका।");
        }

    } catch (error) {
        console.error(error);
        alert("❌ Server से कनेक्ट नहीं हो सका।");
    }
});
async function searchTeacher() {

    const code = document.getElementById("code").value.trim();

    if (!code) {
        alert("Please enter Manav Sampada Code");
        return;
    }

    try {

        const response = await fetch(SCRIPT_URL + "?code=" + encodeURIComponent(code));

        const result = await response.json();

        if (result.status === "found") {

            const t = result.teacher;

            document.getElementById("name").value = t.name || "";
            document.getElementById("school").value = t.school || "";
            document.getElementById("gender").value = t.sex || "";
            document.getElementById("category").value = t.category || "";
            document.getElementById("divyang").value = t.divyang || "";
            document.getElementById("phone").value = t.phone || "";
            document.getElementById("whatsapp").value = t.whatsapp || "";
            document.getElementById("dob").value = t.dob || "";
            document.getElementById("email").value = t.email || "";
            document.getElementById("subject").value = t.subject || "";
            document.getElementById("address").value = t.fullAddress || "";

            alert("Teacher Found");

        } else {

            alert("Teacher not found.");

        }

    } catch (err) {

        console.error(err);
        alert("Search failed.");

    }

}