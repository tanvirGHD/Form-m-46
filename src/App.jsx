
import './App.css'
import Grandpa from './Components/Grandpa/Grandpa'
// import HookForm from './Components/HookForm/HookForm'
// import ReuseableFrom from './Components/ReuseableForm/ReuseableFrom'
// import RefFrom from './Components/RefForm/RefFrom'
// import StatefulForm from './Components/StatefulForm/StatefulForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'

function App() {

  // const handleSignUpSubmit = data => {
  //   console.log('Sign Up  data', data);
    
  //   }
  // const handleUpdateProfile = data => {
  //   console.log('Update Profile', data);
    
  //   }

  return (
    <>
      <h1>Form Master</h1>

      <Grandpa></Grandpa>

      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefFrom></RefFrom> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableFrom 
      formTitle={'Sign UP'} 
      handleSubmit={handleSignUpSubmit}> 
      <div>
        <h2>Sign Up</h2>
        <p>Please Sign Up right Now</p>
      </div> 
      </ReuseableFrom>


      <ReuseableFrom 
      formTitle={'Profile Update'} 
      handleSubmit={handleUpdateProfile} 
      submitBtnText= 'Update'>
      </ReuseableFrom> */}

    </>
  )
}

export default App
