class FishTable extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		var rows =[];
		console.log(this.props.fishes)
		this.props.fishes.forEach(function(fish){ 
	  		rows.push(<FishTableRow fish={fish}/>)
		return(
	<table>
    <tbody>
      {rows}
    </tbody>
  </table>
  );
  

  })
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
FishTable.propTypes = {
  fishes: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.FishTable = FishTable;
