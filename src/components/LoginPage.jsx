function Header(){
  return (
    <div className='header'>
      <p className='first'>Personal private banking</p>
      <p className='second'>My Bank</p>
    </div>
  )
}

function LargeImage(){
  return (
    <div>
      <img src='./src/assets/fjord-image.jpg' className='login-pg-img'></img>
    </div>
  )
}

function LoginSection(props){
  return (
    <div className='whole-login-sect'>
      <p>Welcome to personal private banking</p>
      <div className='card-like-div-login'>
        <p>How would you like to log in?</p>
        <button className='login-button bankid' onClick={props.onLogin}>BankID</button>
        <p>Or</p>
        <button className='login-button digipass'>Digipass</button> 
        <p>Register</p>
      </div>
    </div>
  )
}

export default function LoginPage(props) {
    return (
        <>
            <Header />
            <div className='login-pg-div'>
                <LargeImage />
                <LoginSection onLogin={props.onLogin} />
            </div>
        </>
    )
}
