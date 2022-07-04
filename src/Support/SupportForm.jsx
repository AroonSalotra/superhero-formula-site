import { useState } from "react"

const SupportForm = (props) => {

    const [display, setDisplay] = useState("none")

    return (
        <div>
            <h3>
                {props.title}
            </h3>
            <form action="" className="supportForm">
                <select name="" id="supportSelect" onChange={() => setDisplay("block")} defaultValue={"default"}>
                    <option value="default" disabled>Type of Problem</option>
                    <option value="1">Account</option>
                    <option value="2">Product</option>
                    <option value="3">Query</option>
                </select>
                <textarea style={{ display: display }} name="" id="supportText" cols="30" rows="10" placeholder="Describe your Issue" required />
                <input style={{ display: display }} type="email" name="email" id="supportEmail" placeholder="Email" required />
                <input style={{ display: display }} type="file" name="file" id="supportFile" />
                <button style={{ display: display }} type="submit" id="supportSubmit">Submit</button>
            </form>
        </div>
    )
}

export default SupportForm