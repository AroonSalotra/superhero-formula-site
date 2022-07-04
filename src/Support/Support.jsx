import SupportForm from "./SupportForm";
import SupportBlock from "./SupportBlock";

const Support = () => {
    return (<div>
        <div className="supportContainer">
            <SupportBlock title="Product" description="Contact (from 9am to 6pm)" link="[Phone Number]" />
            <SupportBlock title="Account" description="for accounts" link="[Phone Number]" />
            <SupportBlock title="Query" description="for queries" link="[Phone Number]" />
        </div>
        <SupportForm title="Alternatively, Contact Us Directly" />
    </div>);
}

export default Support;