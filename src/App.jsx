import { useState } from "react"
import Header from "./components/Header/Header"
import Input from "./components/Input/Input"
import Results from "./components/Results/Results"
import { calculateInvestmentResults } from "./util/investment"




export default function App() {
  const[annualData, setAnnualData] = useState([]);
  function onInputChange(fields){
    setAnnualData(() => calculateInvestmentResults(fields));
  }

  return (<>
    <Header />
    <Input onChange={onInputChange} />
    <Results data={annualData} />
  </>
  )
}
