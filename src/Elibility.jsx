const Elibility = () => {
    return (
        <div>
            <h1>
                Eligibility Form
            </h1>
            <p>in order to ensure your safety, please fill out this mandatory
                questionnaire (you will not be able to purchase our services without completion)
            </p>

            <form action="">

                <p>Specify your age</p>

                <select name="" id="" defaultValue={"default"}>
                    
                    <option value="default" disabled>Choose your age</option>
                    <option value="block">I am under 18</option>
                    <option value="allow">I am over 18</option>
                </select>

                <p>Do you have any medical conditions?</p>

                <input type="radio" name="1" />
                <label htmlFor="yesA">Yes</label>

                <input type="radio" name="1" />
                <label htmlFor="noA">No</label>

                <p>Yearly Salary? (choose closest option) </p>
                <select name="" id="">
                    <option value="">£19,000</option>
                    <option value="">£24,000</option>
                    <option value="">£58,000</option>
                    <option value="">£98,000</option>
                </select>

            </form>
        </div>
    );
}

export default Elibility;