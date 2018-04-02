var FishTable = () => (
  <table>
    <tbody>
//      <FishTableRow />
//      <FishTableRow />
//      <FishTableRow />
// to make dynamically render the passed in `fishData` i need to make map
		{fishes.map((fish)=>{
          return(
           <FishTableRow fish={fish}/>
          )
        })}
    </tbody>
  </table>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
FishTable.propTypes = {
  fishes: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.FishTable = FishTable;
