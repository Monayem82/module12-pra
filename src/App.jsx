import './App.css'
import Body from './component/Body'
import CustomHook from './component/CustomHook'
import Featch from './component/Featch'
import GiveCard from './component/GiveCard'
import SetGols from './component/SetGols'
import UseEffectPractices from './component/UseEffectPractices'
import UseReducer from './component/UseReducer'

function App() {
  

  return (
    <>
      <div>

        <CustomHook></CustomHook>

        <UseReducer></UseReducer>
        
        <Featch style={{border: '2px solid black', padding: '20px', marginTop: '20px'}}></Featch>
        <Body></Body>
        <SetGols></SetGols>
        <br />
        <section style={{border: '2px solid black', padding: '20px', marginTop: '20px'}}>
          <GiveCard></GiveCard>
        </section>
        <div style={{border: '2px solid black', padding: '20px', marginTop: '20px'}}>
          <UseEffectPractices></UseEffectPractices>
        </div>
      </div>
    </>
  )
}

export default App
