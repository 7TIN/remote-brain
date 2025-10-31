import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/Button";
import { Card, CardHeader } from "./ui/Card";
import { Controller, useForm } from "react-hook-form";
import api from "../lib/api";
import { useState } from "react";
import { Icons } from "./ui/Icons";

const FormSchema = z.object({
  link: z.url(),
  title: z.string(),
  type: z.enum(["document", "tweet", "link", "youtube"]),
  tags: z.array(z.string()).optional(),
});

type Formvalues = z.infer<typeof FormSchema>;

async function onSubmit(values: Formvalues) {
  try {
    const payload = {
      ...values,
    };
    console.log(payload);
    const response = await api.post("/api/v1/content", payload);

    if (response.status === 201) {
      console.log(response.data.message);
    }
  } catch (err) {
    console.log(err);
  }
}

export const AddContentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Formvalues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      link: "",
      title: "",
      type: "link",
    },
  });
  return (
    <Card className="p-1 border border-neutral-500 max-w-70 bg-neutral-50">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-center items-center gap-4 px-8 p-2 bg-neutral-100/50 rounded-sm shadow-ace ">
          <div className="flex flex-col gap-1 text-md w-full">
            <p>Enter Url</p>
            <input
              {...register("link")}
              className="text-center border text-xs placeholder:text-neutral-500 p-1 border-neutral-500 rounded-lg bg-neutral-200/50"
              type="text"
              placeholder="link"
            />
            {errors.link?.message && <p>{errors.link.message}</p>}
          </div>
          <div className="flex flex-col gap-1 text-md w-full">
            <p>Enter Title</p>
            <input
              {...register("title")}
              className="text-center border text-xs placeholder:text-neutral-500 p-1 border-neutral-500 rounded-lg bg-neutral-200/50"
              type="text"
              placeholder="title"
            />
            {errors.title?.message && <p>{errors.title.message}</p>}
          </div>
          <div className="flex flex-col gap-1 text-md w-full">
            <p>Select Type</p>
            {/* <input className="text-center border text-xs placeholder:text-neutral-500 p-1 border-neutral-500 rounded-lg bg-neutral-200/50" type="text" placeholder="type" /> */}
            <Controller
              name="type"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  title="Type of content"
                  className="text-center border text-xs placeholder:text-neutral-500 p-1 border-neutral-500 rounded-lg bg-neutral-200/50"
                >
                  <option value="link">Link</option>
                  <option value="document">Document</option>
                  <option value="youtube">Youtube</option>
                  <option value="tweet">tweet</option>
                </select>
              )}
            />

            {errors.type?.message && <p>{errors.type.message}</p>}
          </div>
          <div className="m-1">
            <Button
              className="rounded-sm bg-neutral-700 cursor-pointer hover:bg-neutral-900 text-xs"
              text="Submit"
              type="submit"
            />
          </div>
        </div>
      </form>
    </Card>
  );
};

export const AddContentFormButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div className="relative">
        <Button
          text="Add Content"
          className="rounded-md items-center text-center gap-x-2 hover:bg-neutral-950 bg-neutral-700 px-4 py-2 flex cursor-pointer ring-1 hover:ring-neutral-300"
          icon={<Icons.plus className="w-5 h-5" />}
          onClick={() => setIsOpen((o) => !o)}
        />
      </div>
      {isOpen && (
        <Card className="absolute z-20 p-1 top-14 left-10 border border-neutral-500 max-w-70 bg-white flex flex-col">
          <CardHeader className="mb-2 border-b py-1 border-neutral-300 flex justify-between">
            <span className="px-1">Add Content Form</span>
            <div
            className="cursor-pointer"
            onClick={() => setIsOpen((o) => !o)}>
            <Icons.cross />
          </div>
          </CardHeader>
          <AddContentForm />
        </Card>
      )}
    </div>
  );
};
