import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { ALPHABETS_WITHOUT_SPACES_RULE } from "../../utils/validations";
import TextInput from "../TextInput";

type FormValues = {
  name: string;
};

const Input = () => {
  const { control, reset, setValue, watch, trigger, handleSubmit } =
    useForm<FormValues>({
      reValidateMode: "onChange",
      defaultValues: { name: "" },
    });
  const submitHandler = (data: FormValues) => {
    console.log("data", data);
  };
  const validateName = (value: string) => {
    // Custom validation logic
    if (value !== 'admin') {
      return 'Invalid name';
    }
    return true;
  };
  const nameChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setValue("name",e.target.value)
    trigger("name")
  }
  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <TextInput
          // multiline
          name="name"
          control={control}
          // myOnChange={nameChangeHandler}
          rules={{...ALPHABETS_WITHOUT_SPACES_RULE}}
        />
        <TextInput
         multiline
          name="email"
        //   isDisabled
          control={control}
          rules={{
            required: "Email is Required",
            minLength: {
              value: 3,
              message: "Atleast 3 char required",
            },
            maxLength:{
                value: 10,
                message: "Max 10 chars allowed"
            },
            pattern: {
                value: /^[A-Za-z]+$/,
                message: 'Name should only contain alphabetic characters',
              },
              validate: validateName
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Input;
