import { formatter } from "../../util/investment"
import './Results.css'

export default function Results({data}){
    const rows = [];
    const initialInvestment = data.length > 0 ? 
        (data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment):0;
    return<>
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {data.map(yearData => {
                    let totalInterest = yearData.valueEndOfYear - initialInvestment - (yearData.year * yearData.annualInvestment);
                    let investedCapital = yearData.valueEndOfYear - totalInterest;
                    return <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(investedCapital)}</td>
                    </tr>
                }
            )}
            </tbody>
        </table>
    </> 
}