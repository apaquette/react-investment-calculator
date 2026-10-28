import './Input.css'

export default function Input(){
    return <form id="user-input">
        <div className="input-group">
            <div>
                <label>Initial Investment</label>
                <input />
            </div>
            <div>
                <label>Annual Investment</label>
                <input />
            </div>
        </div>
        <div className="input-group">
            <div>
                <label>Expected Return</label>
                <input />
            </div>
            <div>
                <label>Duration</label>
                <input type='number' min='1' />
            </div>
        </div>
    </form>
}