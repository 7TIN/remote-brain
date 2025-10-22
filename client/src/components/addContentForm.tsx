
import { Card } from "./ui/Card";

const AddContentForm = () => {
    
    return (
        <Card>
            <div>
                <div>
                    Add Content form 
                </div>
                <div>
                    <p>Enter the link</p>
                    <input type="text" placeholder="Link" />
                    <p>Enter the Type</p>
                    <input type="text" placeholder="type" />
                    <p>add the tags</p>
                    <input type="text" placeholder="tags" />
                </div>
            </div>
        </Card>
    )
}

export default AddContentForm;