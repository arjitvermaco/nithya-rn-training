import BooksContext from "./BooksContext";

export const BooksProvider = ({ children }) => {
  const bookData = [
    {
      name: "Dune",
      author: "Frank Herbert",
      year: 1965,
    },
    {
      name: "Neuromancer",
      author: "William Gibson",
      year: 1984,
    },
    {
      name: "Ender's Game",
      author: "Orson Scott Card",
      year: 1985,
    },
    {
      name: "Snow Crash",
      author: "Neal Stephenson",
      year: 1992,
    },
    {
      name: "Hyperion",
      author: "Dan Simmons",
      year: 1989,
    },
    {
      name: "Foundation",
      author: "Isaac Asimov",
      year: 1951,
    },
    {
      name: "Brave New World",
      author: "Aldous Huxley",
      year: 1932,
    },
    {
      name: "1984",
      author: "George Orwell",
      year: 1949,
    },
    {
      name: "The Martian",
      author: "Andy Weir",
      year: 2011,
    },
    {
      name: "Ready Player One",
      author: "Ernest Cline",
      year: 2011,
    },
  ];

  const appName = "myApp";

    function handleButtonClick(){
    console.log("Button Was CLicked;")
  }

  return (
    <BooksContext.Provider value={{ bookData, appName,handleButtonClick }}>
      {children}
    </BooksContext.Provider>
  );
};
