// import z from "zod";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";

// const FormSchema = z.object( {
//     link: z.url(),
//     title: z.string(),
//     type: z.enum(["document", "tweet", "link", "youtube"]),
//     tags: z.array(z.string()),
// })

const AddContentForm = () => {
  return (
    <Card className="p-2 border border-neutral-500 max-w-70 bg-neutral-50">
      <form >
        <div className="flex flex-col justify-center items-center gap-4 px-4 p-2 bg-neutral-100/50 rounded-sm shadow-ace ">
          <div className="flex flex-col gap-1 text-md w-full">
            <p>Enter Url</p>
            <input className="text-center border text-xs placeholder:text-neutral-500 p-1 border-neutral-500 rounded-lg bg-neutral-200/50" type="text" placeholder="link" />
          </div>
          <div className="flex flex-col gap-1 text-md w-full">
            <p>Enter Title</p>
            <input className="text-center border text-xs placeholder:text-neutral-500 p-1 border-neutral-500 rounded-lg bg-neutral-200/50" type="text" placeholder="title" />
          </div>
          <div className="flex flex-col gap-1 text-md w-full">
            <p>Select Type</p>
            {/* <input className="text-center border text-xs placeholder:text-neutral-500 p-1 border-neutral-500 rounded-lg bg-neutral-200/50" type="text" placeholder="type" /> */}
            <select title="type of content" name="Type of Content" className="text-center border text-xs placeholder:text-neutral-500 p-1 border-neutral-500 rounded-lg bg-neutral-200/50">
                <option value="link">Link</option>
                <option value="document">Document</option>
                <option value="youtube">Youtube</option>
                <option value="tweet">tweet</option>

            </select>
          </div>
          <div className="mt-4">
            <Button className="rounded-sm bg-neutral-700 cursor-pointer hover:bg-neutral-900 " text="Submit"/>
          </div>
        </div>
      </form>
      {/* <div>
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
            </div> */}
    </Card>
  );
};

export default AddContentForm;
