const fs = require("fs");
const getNotes = require("./notes-util");

// fs.writeFileSync("notes.txt", "This is data for notes 2");
// fs.appendFileSync("notes.txt", "\nWe are  taking notes from node js");
// fs.appendFileSync("notes.txt", "\nChecking the notes");

fs.appendFileSync("notes.txt", getNotes('Chetan'))

console.log("notes saved ...")

