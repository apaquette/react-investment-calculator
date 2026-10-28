import { useState } from "react"
import './Input.css'

const FIELDS = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0
};

export default function Input({onChange}){
    const [fields, setFields] = useState(FIELDS);
    function handleChange(type, newValue){
        let newFields = {
            ...fields,
            [type]: +newValue
        };
        setFields(newFields);
        onChange(newFields);
    }

    return <form id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input 
                    type="number" 
                    required 
                    min='0'
                    value={fields.initialInvestment} 
                    onChange={event => handleChange("initialInvestment", event.target.value)} 
                />
            </p>
            <p>
                <label>Annual Investment</label>
                <input 
                    type="number" 
                    required 
                    min='0'
                    value={fields.annualInvestment} 
                    onChange={event => handleChange("annualInvestment", event.target.value)} 
                />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input 
                    type="number" 
                    required 
                    min='0'
                    value={fields.expectedReturn} 
                    onChange={event => handleChange("expectedReturn", event.target.value)} 
                />
            </p>
            <p>
                <label>Duration</label>
                <input 
                    type='number' 
                    required 
                    min='0'
                    value={fields.duration} 
                    onChange={event => handleChange("duration", event.target.value)} 
                />
            </p>
        </div>
    </form>
}