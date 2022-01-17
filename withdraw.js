function Withdraw(){
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

    let a = Math.abs(amount);
    let b = Math.abs(ctx.users[0].balance);
    if (a > b) {
      setStatus('Error: Withdrawal amount exceeds your current balance. Please enter a different amount');
      return false;
    }

    if (isNaN(amount)) { 
     setTimeout(setStatus('Error: Please enter a number',5000));
     return "Enter a number";
    }

    return true;

  }
  
  function handleDeposit(){
    if (!validate(amount, 'amount')) return;
    ctx.users[0].balance -= Number(amount);
 

    ctx.users.push({balance, amount});
    setShow(false);
    setBalance(ctx.users[0].balance)
    setStatus(''); // clear errors
    console.log(ctx.users[0].balance, amount);
  }

  return (
    <Card
      bgcolor="primary"
      header={(<h4>Withdraw</h4>)}
      status={status}
      body={show ? (  
              <>
              Account Balance: ${balance}
              <label readOnly={false} onChange={e => setBalance()}> </label> <br/><br/>
              
              Withdrawal amount<br/>
              <div className="input-group">
                <span className="input-group-addon" >$</span>
                <input type="text" className="form-control" id="amount" placeholder="Enter amount" value={amount} onChange={e => {
                  validate(e.currentTarget.value);
                  setAmount(e.currentTarget.value);}} /><br/>
              </div> <br/>
              <button type="submit" className="btn btn-light" disabled={amount.length<1 || isNaN(amount)} onClick={handleDeposit}>Withdraw</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              Withdrawn: ${amount}<br/>
              Current balance: ${ctx.users[0].balance} <br/><br/>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Withdraw another amount</button>
              </>
            )}
    />
  )
}
