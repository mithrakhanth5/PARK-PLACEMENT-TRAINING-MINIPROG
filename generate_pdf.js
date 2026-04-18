const PDFDocument = require("pdfkit");
const fs = require("fs");

const doc = new PDFDocument({ margin: 50, size: "A4" });
doc.pipe(fs.createWriteStream("api_explanation.pdf"));

// ── Colour palette ──────────────────────────────────────────────────
const ACCENT   = "#4F46E5"; // indigo
const DARK     = "#1E1B4B"; // deep navy
const GREY     = "#6B7280"; // muted grey
const CODE_BG  = "#F3F4F6"; // light grey for code blocks
const WHITE    = "#FFFFFF";
const STEP_BG  = "#EEF2FF"; // very light indigo

// ── Helpers ──────────────────────────────────────────────────────────
function drawRect(x, y, w, h, color, radius = 6) {
  doc.roundedRect(x, y, w, h, radius).fill(color);
}

function sectionTitle(text) {
  doc.moveDown(0.6);
  drawRect(50, doc.y, doc.page.width - 100, 28, ACCENT, 4);
  doc
    .fillColor(WHITE)
    .font("Helvetica-Bold")
    .fontSize(13)
    .text(text, 58, doc.y - 23);
  doc.moveDown(1.1);
}

function stepBox(number, title, body) {
  const startY = doc.y;
  const boxW   = doc.page.width - 100;

  // measure approximate height
  const approxH = 78 + Math.ceil(body.length / 85) * 14;

  // page-break safety
  if (startY + approxH > doc.page.height - 60) {
    doc.addPage();
  }

  const y = doc.y;
  drawRect(50, y, boxW, approxH, STEP_BG, 6);

  // circle badge
  doc.circle(72, y + 20, 14).fill(ACCENT);
  doc.fillColor(WHITE).font("Helvetica-Bold").fontSize(13).text(number, 65, y + 13);

  // step title
  doc.fillColor(DARK).font("Helvetica-Bold").fontSize(12).text(title, 95, y + 10);

  // step body
  doc
    .fillColor(GREY)
    .font("Helvetica")
    .fontSize(10)
    .text(body, 95, y + 28, { width: boxW - 55, lineGap: 2 });

  doc.y = y + approxH + 8;
  doc.moveDown(0.4);
}

function codeBlock(code) {
  const lines  = code.split("\n");
  const lineH  = 13;
  const padV   = 10;
  const boxH   = lines.length * lineH + padV * 2;
  const boxW   = doc.page.width - 100;

  if (doc.y + boxH > doc.page.height - 60) doc.addPage();

  const y = doc.y;
  drawRect(50, y, boxW, boxH, CODE_BG, 6);

  // left accent bar
  drawRect(50, y, 5, boxH, ACCENT, 0);

  doc.fillColor("#374151").font("Courier").fontSize(9);
  lines.forEach((line, i) => {
    doc.text(line, 63, y + padV + i * lineH, { lineBreak: false });
  });

  doc.y = y + boxH + 4;
  doc.moveDown(0.6);
}

// ════════════════════════════════════════════════════════════════════
// PAGE 1 — HEADER
// ════════════════════════════════════════════════════════════════════
drawRect(0, 0, doc.page.width, 110, DARK, 0);

doc
  .fillColor(WHITE)
  .font("Helvetica-Bold")
  .fontSize(26)
  .text("How api.js Works", 50, 30);

doc
  .fillColor("#A5B4FC")
  .font("Helvetica")
  .fontSize(12)
  .text("A step-by-step explanation of the async fetch program", 50, 65);

doc
  .fillColor(GREY)
  .fontSize(9)
  .text("JavaScript • Node.js • Fetch API • Async/Await", 50, 90);

doc.y = 130;

// ── THE CODE ────────────────────────────────────────────────────────
sectionTitle("  The Code");
codeBlock(
`async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error("Error fetching data: ", error);
    }
}

fetchData();`
);

// ── STEP-BY-STEP ────────────────────────────────────────────────────
sectionTitle("  Step-by-Step Explanation");

stepBox(
  "1",
  "async function fetchData() { ... }",
  "Defines an asynchronous function. The 'async' keyword tells JavaScript that this function will " +
  "perform tasks that take time (like a network call), so it can run in the background without " +
  "freezing the rest of the program. Inside an async function, the 'await' keyword is unlocked."
);

stepBox(
  "2",
  "try { ... } catch (error) { ... }",
  "An error-handling block. The code inside 'try' is the happy path — it runs when everything works " +
  "correctly. If anything inside 'try' fails (bad URL, no internet, server error), JavaScript " +
  "immediately jumps to 'catch' so the app does not crash."
);

stepBox(
  "3",
  "await fetch(\"https://jsonplaceholder.typicode.com/posts\")",
  "Sends an HTTP GET request to the given URL over the internet. Because reaching a remote server " +
  "takes time, 'await' pauses the function here until the server responds. Once the response " +
  "arrives, it is stored in the 'response' constant."
);

stepBox(
  "4",
  "await response.json()",
  "The server sends raw text/binary data over the wire. The .json() method parses that raw data " +
  "into a real JavaScript object or array that our code can read and use. This parsing also takes " +
  "a moment, so 'await' is used again. The result is stored in 'data'."
);

stepBox(
  "5",
  "console.log(data)",
  "Once the data is fetched and parsed, this line prints the complete list of posts (an array of " +
  "100 objects) to your terminal or console so you can inspect it."
);

stepBox(
  "6",
  "catch (error) { console.error(...) }",
  "If any step in the 'try' block throws an error — such as a network timeout or DNS failure — " +
  "JavaScript passes that error to this block. console.error prints the error details so you know " +
  "exactly what went wrong and where."
);

stepBox(
  "7",
  "fetchData()  — The trigger",
  "Everything above is just a function definition; no code runs until the function is called. " +
  "This final line sits outside the function and fires the entire process when you run 'node api.js' " +
  "in the terminal."
);

// ── KEY CONCEPTS ────────────────────────────────────────────────────
sectionTitle("  Key Concepts at a Glance");

const concepts = [
  ["async / await",  "Simplifies working with Promises — lets you write asynchronous code that reads like synchronous code."],
  ["fetch()",        "Built-in browser & Node.js function to make HTTP requests and retrieve data from APIs."],
  ["response.json()","Converts the raw HTTP response body into a usable JavaScript object/array."],
  ["try / catch",    "Gracefully handles runtime errors without crashing the application."],
  ["Promises",       "The underlying mechanism behind async/await — represents a value that will be available in the future."],
];

const tableX  = 50;
const tableW  = doc.page.width - 100;
const col1W   = 145;
let tableY    = doc.y;

if (tableY + concepts.length * 26 + 30 > doc.page.height - 60) doc.addPage();
tableY = doc.y;

// header row
drawRect(tableX, tableY, tableW, 22, DARK, 4);
doc.fillColor(WHITE).font("Helvetica-Bold").fontSize(10)
   .text("Concept", tableX + 8, tableY + 6)
   .text("Description", tableX + col1W + 8, tableY + 6);
tableY += 22;

concepts.forEach(([concept, desc], i) => {
  const rowH = 24;
  drawRect(tableX, tableY, tableW, rowH, i % 2 === 0 ? WHITE : STEP_BG, 0);
  doc.rect(tableX, tableY, tableW, rowH).stroke("#E5E7EB");

  doc.fillColor(ACCENT).font("Helvetica-Bold").fontSize(9)
     .text(concept, tableX + 8, tableY + 7, { width: col1W - 10, lineBreak: false });
  doc.fillColor(DARK).font("Helvetica").fontSize(9)
     .text(desc, tableX + col1W + 8, tableY + 7, { width: tableW - col1W - 16, lineBreak: false });

  tableY += rowH;
});

doc.y = tableY + 12;

// ── FOOTER ──────────────────────────────────────────────────────────
const footerY = doc.page.height - 40;
drawRect(0, footerY, doc.page.width, 40, DARK, 0);
doc
  .fillColor("#A5B4FC")
  .font("Helvetica")
  .fontSize(9)
  .text("Generated on " + new Date().toDateString() + "  •  api.js — JavaScript Fetch API Tutorial", 50, footerY + 13);

doc.end();
console.log("✅  PDF saved as api_explanation.pdf");
