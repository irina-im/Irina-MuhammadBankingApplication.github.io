function AllData(){
  const ctx = React.useContext(UserContext);  
  const [show, setShow]         = React.useState(true);

  
  return (
    <Card
      bgcolor="primary"
      header={(<h4>All Data</h4>)}

      body={show ? (  
              <>
              Name<br/>
              <label  className="form-control" id="name" value={ctx.users.name} /><br/>
              Email address<br/>
              <label  className="form-control" id="email" value={ctx.users.email} /><br/>
              Password<br/>
              <label  className="form-control" id="password" value={ctx.users.password}/><br/>
              Deposit<br/>
              <label  className="form-control" id="amount" value={ctx.users[0].amount}/><br/>
              </>
            ):(
              <>
              <h5>Success</h5>
              
              </>
            )}
    />
  )
}
