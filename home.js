function Home(){
  return (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header={(<h4>BadBank</h4>)}
      title="Welcome to BadBank!"
      text="Serving our customers since 2022"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    /> 
  );  
}
