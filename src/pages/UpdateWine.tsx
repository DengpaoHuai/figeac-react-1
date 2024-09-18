import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Wine } from "../types/wine.type";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getWineById, postWine, updateWine } from "../services/wines.service";

const wineSchema = z.object({
  name: z.string().min(3).max(10, "Trop long"),
  year: z.coerce.number().min(1900).max(2023),
  degree: z.coerce.number().min(0).max(25),
});

const UpdateWine = () => {
  const params = useParams();
  const id = params.id as string;
  const { data: wine } = useQuery<Wine>({
    queryKey: ["wine", id],
    queryFn: () => getWineById(id),
  });
  console.log(wine);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<Wine, "_id">>({
    resolver: zodResolver(wineSchema),
    defaultValues: {
      name: wine?.name,
      year: wine?.year,
      degree: wine?.degree,
    },
  });
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (payload: Omit<Wine, "_id">) => updateWine(id, payload),
    mutationKey: ["wines"],
    onSuccess: (data: Wine) => {
      queryClient.invalidateQueries({
        queryKey: ["wines"],
      });
      const wines = queryClient.getQueryData<Wine[]>(["wines"]);
      if (wines) {
        queryClient.setQueryData(
          ["wines"],
          wines.map((w) => (w._id === id ? data : w))
        );
      }
      navigate("/list-wine");
    },
  });

  const onSubmit = async (values: Omit<Wine, "_id">) => {
    mutation.mutate(values);
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

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateWine;
