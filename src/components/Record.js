function Record(props){
	const limit = ()=>{
		let data = props.getData();
		if(data.length===0){
			return [<tr><th scope="row">0</th><td>0</td></tr>];
		}
		else{
			let i=0;
			data = data.map((element)=>{return <tr  key={i}><th scope="row">{i++}</th><td>{element}</td></tr>})
			return data
		}
	}
return (
	<table className="text-white table table-hover table-border">
  <thead>
    <tr>
      <th scope="col">Index</th>
      <th scope="col">Limit</th>
    </tr>
  </thead>
  <tbody>
		{limit().map((element)=>{return element})}
  </tbody>
</table>
);
}

export default Record;