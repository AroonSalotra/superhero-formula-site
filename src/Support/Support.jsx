import SupportForm from "./SupportForm";
import SupportBlock from "./SupportBlock";

const Support = () => {
    return (<div>
            <h1>Support Page</h1>
        <div className="supportContainer">
            <SupportBlock title="Product" description="Contact [9am to 6pm]" link="[Phone Number]" />
            <SupportBlock title="Account" description="Contact [24/7]" link="[Phone Number]" />
            <SupportBlock title="Query" description="Contact [24/7]" link="[Phone Number]" />
        </div>
        <SupportForm title="Alternatively, Contact Us Directly" />
    </div>);
}

export default Support;