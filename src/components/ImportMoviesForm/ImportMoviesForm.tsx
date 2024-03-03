import React, { ChangeEvent, useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Label } from "@progress/kendo-react-labels";
import { Input, InputChangeEvent } from "@progress/kendo-react-inputs";
import "./ImportMoviesForm.scss";
import FileInput from "../FileInput/FileInput";
import { Button } from "@progress/kendo-react-buttons";

type FormTypes = {
  file: FileList;
};

const ImportMoviesForm = () => {
  const { handleSubmit, control } = useForm<FormTypes>();

  const onSubmit: SubmitHandler<FormTypes> = (data) => {
    console.log(data);
    console.log(typeof data.file);
  };


  

  return (
    <form className="file-form" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name={"file"}
        render={({ field: { value, onChange, ...field } }) => {
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

      <Button themeColor={"primary"} type={"submit"}>
        Send
      </Button>
    </form>
  );
};

export default ImportMoviesForm;
