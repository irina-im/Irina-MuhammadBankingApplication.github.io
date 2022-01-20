function AllData(){
  const ctx = React.useContext(UserContext);  
  const [show, setShow]         = React.useState(true);
  console.log(ctx.users);
  const all = <pre>{JSON.stringify(ctx.users, null, 2)}</pre>;
  

  
  return (
    <>
   
    <div className="card" style={{ backgroundColor: "royalblue", color: "white", width: '30rem'}}>
 
      <div className="card-body">
        <h4 className="card-title">All Data</h4>
        <label className="card-text">{all}</label>
      </div>
    </div>
    </>
  );

}
