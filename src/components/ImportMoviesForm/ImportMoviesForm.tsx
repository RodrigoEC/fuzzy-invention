import { useForm, SubmitHandler, Controller, useWatch } from "react-hook-form";
import "./ImportMoviesForm.scss";
import FileInput from "../FileInput/FileInput";
import { Button } from "@progress/kendo-react-buttons";

type FormTypes = {
  file: FileList;
};

const ImportMoviesForm = () => {
  const { handleSubmit, control } = useForm<FormTypes>();

  const formState = useWatch({ control });
  const onSubmit: SubmitHandler<FormTypes> = (data) => {
    console.log(data);
  };

  return (
    <form className="file-form" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name={"file"}
        render={({ field: { value, onChange, ref, ...field } }) => {
          return (
            <FileInput
              {...field}
              id="file"
              label="Upload file"
              onChange={onChange}
            />
          );
        }}
      />

      <Button
        disabled={formState.file === undefined}
        className="file-form-button"
        themeColor={"primary"}
        type={"submit"}
      >
        Send
      </Button>
    </form>
  );
};

export default ImportMoviesForm;
