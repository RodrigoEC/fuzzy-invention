import { ChangeEvent, useState } from "react";
import "./FileInput.scss";
import { shortenFilename } from "../../util/util";

function FileInput({
  id,
  label,
  onChange,
  ...registerProps
}: {
  id: string;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  const [filename, setFilename] = useState<string | undefined>(undefined);

  const onFileChange = (
    event: ChangeEvent<HTMLInputElement>,
    onChange: Function
  ) => {
    if (event.target.files) {
      const file = event.target.files[0];

      setFilename(file?.name);
      onChange(file);
    }
  };

  return (
    <fieldset className="file-input-wrapper">
      <label className="file-input-label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        hidden
        name={id}
        type="file"
        accept=".csv"
        onChange={(e) => onFileChange(e, onChange)}
        {...registerProps}
      />
      <span
        title={filename}
        className={filename ? "file-input-uploaded" : "file-input-no-file"}
      >
        {filename ? shortenFilename(filename) : "No file uploaded yet"}
      </span>
    </fieldset>
  );
}

export default FileInput;
