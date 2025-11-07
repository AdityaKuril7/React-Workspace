import {useLocation} from "react-router-dom";
function ContactPage() {
    const location = useLocation();
    const {item} = location.state || {};
    return(
        <div>
            <h1>{item ? `${item.firstName} ${item.secondName}` : "No contact data"}</h1>
        </div>
    )
}
export default ContactPage;