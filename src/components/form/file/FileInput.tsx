import { useRef, useState, type ChangeEvent } from "react";

interface FileInputProps {
  id: string;
  name: string;
  value: FileList | string | null;
  accept?: string;
  onChange: (event: {
    target: { name: string; value: FileList | null };
  }) => void;
  prepend?: string | number;
  append?: string | number;
  placeholder?: string;
  outerClassName?: string;
  inputClassName?: string;
}

const FileInput = ({
  id,
  name,
  accept,
  onChange,
  prepend,
  append,
  placeholder = "Browse a file...",
  outerClassName,
  inputClassName,
}: FileInputProps) => {
  const [fileName, setFileName] = useState("");
  const refInputFile = useRef<HTMLInputElement | null>(null);

  const onChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    setFileName(files?.[0]?.name ?? "");

    onChange({
      target: {
        name: event.target.name,
        value: files,
      },
    });
  };

  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input
          id={id}
          accept={accept}
          ref={refInputFile}
          name={name}
          className="d-none"
          type="file"
          onChange={onChangeEvent}
        />
        <input
          id={id}
          type="text"
          readOnly
          onClick={() => refInputFile.current?.click()}
          value={fileName}
          placeholder={placeholder}
          className={["form-control", inputClassName].filter(Boolean).join(" ")}
        />
        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileInput;
