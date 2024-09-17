import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Wine } from "../types/wine.type";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { WineContext } from "../contexts/WineContextProvider";
import useWine from "../store/useWineStore";

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
  const { createWine } = useWine();

  const onSubmit = async (values: Omit<Wine, "_id">) => {
    await createWine(values);
    navigate("/list-wine");
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
