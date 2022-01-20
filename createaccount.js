function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  var ctx = React.useContext(UserContext);  

  function validate(field, label){
    if (!field) {
      setStatus('Error: Enter ' + label);
      setTimeout(() => setStatus(''),4000);
      return false;
    }

    if (label="password" && field.length<8) {
      setStatus('Error: Password must be at least 8 characters');
      setTimeout(() => setStatus(''),4000);
      return false;
    }
    return true;
  }

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    ctx.users.push({name,email,password,balance:0,deposit:[],withdrawal:[]});
    console.log(UserContext);
    setShow(false);
    setStatus(''); // clear errors
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);

  }

  return (
    <Card
      bgcolor="primary"
      header={(<h4>Create Account</h4>)}
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password (min 8 characters)<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={!name && !email && !password}>Create Account</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}