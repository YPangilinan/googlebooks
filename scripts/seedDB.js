const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
  {
    title: "In The Time of Butterflies",
    author: "Julia Alvarez",
    thumbnail: "https://www.arts.gov/sites/default/files/styles/large-620/public/In-the-time-of-butterflies-cover.jpg?itok=iw6oyIBC",
    href: "https://books.google.com/books?id=viZZNUV8-GgC&printsec=frontcover&dq=in+the+time+of+butterflies&hl=&cd=2&source=gbs_api",
    description:"The 25th Anniversary Edition of the Classic Novel With a New Postscript by Julia Alvarez It is November 25, 1960, and three beautiful sisters have been found near their wrecked Jeep at the bottom of a 150-foot cliff on the north coast of the Dominican Republic. The official state newspaper reports their deaths as accidental. It does not mention that a fourth sister lives. Nor does it explain that the sisters were among the leading opponents of Gen. Rafael Leonidas Trujillo’s dictatorship. It doesn’t have to. Everybody knows of Las Mariposas—“The Butterflies.” In this extraordinary novel, the voices of all four sisters—Minerva, Patria, María Teresa, and the survivor, Dedé—speak across the decades to tell their own stories, from hair ribbons and secret crushes to gunrunning and prison torture, and to describe the everyday horrors of life under Trujillo’s rule. Through the art and magic of Julia Alvarez’s imagination, the martyred Butterflies live again in this novel of courage and love, and the human cost of political oppression.",
    date: new Date(Date.now())
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });