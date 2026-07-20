const subjects = [
  "भाषा (हिन्दी) अध्यापक ",
  "गणित/विज्ञान अध्यापक ",
  "सामाजिक विषय अध्यापक ",
  "उर्दू अध्यापक ",
  "भाषा (अंग्रेजी) अध्यापक ",
  "खेल अनुदेशक ",
  "कला अनुदेशक ",
  "कंप्युटर अनुदेशक ",
  "शिक्षामित्र (सभी विषय)",
    "प्राथमिक शिक्षक (सभी विषय)",
  ];

function loadSubjects() {
    const select = document.getElementById("subject");

    subjects.forEach(subject => {
        const option = document.createElement("option");
        option.value = subject;
        option.textContent = subject;
        select.appendChild(option);
    });
}

window.addEventListener("DOMContentLoaded", loadSubjects);