var FishTable = () => (
  <table>
    <tbody>
      <FishTableRow />
      <FishTableRow />
      <FishTableRow />
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


//this is a pseudocode to explain the idea but i couldn't write it because I got confused
// with those 3 frameworks and I'm mixing ideas between them 
// var fishes=props;
// 	var TableRow=fishes.map((fish)
// 		var a='<li>'+fish.attributes+'</li>'
// 			return a
// 		);

//   <table>
//     <tbody>
//      <TableRow/>
      
//     </tbody>
//   </table>