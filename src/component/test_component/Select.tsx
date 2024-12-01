import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import SelectInput from "../SelectInput";

type FormValues = {
  city: string;
  ageGroup: number;
  movies: string[];
  movies1: string[];
};

const Select = () => {
  const { control, reset, setValue, watch, trigger, handleSubmit } =
    useForm<FormValues>({
      reValidateMode: "onChange",
      defaultValues: {
        city: "",
        ageGroup: "" as unknown as number,
        movies: [],
        movies1: [],
      },
    });
  const submitHandler = (data: FormValues) => {
    console.log("data", data);
  };
  const ageGroupChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("Value", typeof e.target.value);
    setValue("ageGroup", parseInt(e.target.value));
    trigger("ageGroup");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <SelectInput
          name="city"
          control={control}
          rules={{ required: "Please select" }}
          options={["Ahmedabad", "Mehsana", "Pune"]}
        />
        <SelectInput
          name="ageGroup"
          control={control}
          rules={{ required: "Please select" }}
          // myOnChange={ageGroupChange}
          options={[
            {
              uuid: "b00de077-51c8-4b27-b35d-c6ef39c9f0ee",
              name: "Dummy role",
            },
            { uuid: "b00de077-51c8-4b27-b35d-cf234vfgt", name: "System Admin" },
          ]}
        />

        {/* <SelectInput
          multiSelect={true}
          name="movies"
          control={control}
          rules={{}}
          options={["Ford Vs Ferrari", "Martian", "Oppenheimer","Dune","Prestige","Alone","Barbie"]}
        /> */}
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Select;
