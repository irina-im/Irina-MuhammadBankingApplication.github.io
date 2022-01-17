
function Deposit(){
  const ctx = React.useContext(UserContext); 
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [balance, setBalance]   = React.useState(ctx.users[0].balance);
  const [amount, setAmount]     = React.useState('');
  
  function clearForm(){
    setAmount('');
    setShow(true);
  }

  function validate(amount){
    if (amount <0) {
      setStatus('Error: Please enter a positive amount');
      return false;
    }
    return true;
  }

  function validateNan(amount){
    if (isNaN(amount)) { 
     setStatus('Error: Please enter a number');
     setTimeout(() => setStatus(''),5000);
     return "Enter a number";
    }
    return true;

  }
  
  function handleDeposit(){
    if (!validate(amount, 'amount')) return;
    ctx.users[0].balance += Number(amount);
 

    ctx.users.push({balance, amount});
    setShow(false);
    setBalance(ctx.users[0].balance)
    setStatus(''); // clear errors
    console.log(ctx.users[0].balance, amount);
  }

  return (
    <Card
      bgcolor="primary"
      header={(<h4>Deposit</h4>)}
      status={status}
      body={show ? (  
              <>
              Account Balance: ${balance}
              <label readOnly={false} onChange={e => setBalance()}> </label> <br/><br/>
              
              Deposit amount<br/>
              <div className="input-group">
                <span className="input-group-addon" >$</span>
                <input type="input" className="form-control" id="amount" placeholder="Enter amount" value={amount} onChange={e => {
                  validate(e.currentTarget.value);
                  validateNan(e.currentTarget.value);
                  setAmount(e.currentTarget.value);}} /><br/>
              </div> <br/>
              <button type="submit" className="btn btn-light" disabled={amount.length<1} onClick={handleDeposit}>Deposit</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              Deposited: ${amount}<br/>
              Current balance: ${ctx.users[0].balance} <br/><br/>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another amount</button>
              </>
            )}
    />
  )
}
