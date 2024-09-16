import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const wineSchema = z.object({
  name: z.string().min(3).max(10, "Trop long"),
  year: z.number().min(1900).max(2023),
  degree: z.number().min(0).max(25),
});

type Wine = z.infer<typeof wineSchema>;

const CreateWine = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Wine>({
    resolver: zodResolver(wineSchema),
  });

  const onSubmit = (values: Wine) => {
    console.log(values);
  };

  return (
    <div>
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
        <input placeholder="degree" {...register("degree")} />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateWine;
