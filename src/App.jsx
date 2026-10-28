import Header from "./components/Header/Header"
import Input from "./components/Input/Input"
import Results from "./components/Results/Results"
import { calculateInvestmentResults } from "./util/investment"

function App() {
  const annualData = [];
  return (<>
    <Header />
    <Input />
    <Results rows={annualData} />
  </>
  )
}

export default App
