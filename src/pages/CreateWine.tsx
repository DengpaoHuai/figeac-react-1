import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Wine } from "../types/wine.type";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { WineContext } from "../contexts/WineContextProvider";

const wineSchema = z.object({
  name: z.string().min(3).max(10, "Trop long"),
  year: z.coerce.number().min(1900).max(2023),
  degree: z.coerce.number().min(0).max(25),
});

const CreateWine = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<Wine, "_id">>({
    resolver: zodResolver(wineSchema),
  });
  const navigate = useNavigate();
  const { createWine } = useContext(WineContext);

  const onSubmit = (values: Omit<Wine, "_id">) => {
    console.log(values);
    fetch("https://crudcrud.com/api/7f061ddf3d1548d6aea97b41cd358664/wines", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((response) => {
      response.json().then((data: Wine) => {
        createWine(data);
        navigate("/list-wine");
      });
    });
  };

  return (
    <div
      style={{
        height: "300vh",
      }}
    >
      <h1>Create Wine</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Name"
          {...register("name", {
            required: true,
            maxLength: 5,
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <input placeholder="Year" {...register("year")} />

        {errors.year && <p>{errors.year.message}</p>}

        <input placeholder="degree" {...register("degree")} />
        {errors.degree && <p>{errors.degree.message}</p>}

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateWine;
