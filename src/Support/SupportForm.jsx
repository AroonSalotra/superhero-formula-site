const SupportForm = (props) => {
    return (
        <div>
            <h3>
                {props.title}
            </h3>
            <form action="" className="supportForm">
                <select name="" id="supportSelect">
                    <option value="" disabled>Type of Problem</option>
                    <option value="">Account</option>
                    <option value="">Product</option>
                    <option value="">Query</option>
                </select>
                <textarea name="" id="supportText" cols="30" rows="10" placeholder="Describe your Issue" required/>
                <input type="email" name="email" id="supportEmail" placeholder="Email" required />
                <input type="file" name="file" id="supportFile" />
                <button type="submit" id="supportSubmit">Submit</button>
            </form>
        </div>
    )
}

export default SupportForm