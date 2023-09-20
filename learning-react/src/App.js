function App() {
  // const win = false;
  // // if(win){
  // //     return(<h1>You Won </h1>)
  // // }else{
  // //     return(<h1>You Lost</h1>)
  // // }

  // return(
  //     <>
  //     {win ? "You Won":"You Lost"}
  //     </>
  // )

//   const cars = ["Ford", "BMW", "Audi"];
    const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];

  return (
    <>
      {cars.map((car,index) => {
        return <p> My {car.id} car is  {car.brand}</p>;
      })}
    </>
  );
}

export default App;
