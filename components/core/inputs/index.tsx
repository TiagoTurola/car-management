import React, { ChangeEvent } from "react";
import { InputComponent } from "./styles";

const Input = ({
  type = "text",
  onChange,
  value,
  disabled,
}: {
  type: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  disabled?: boolean;
}) => {
  return (
    <InputComponent type={type} onChange={onChange} value={value} disabled={disabled ?? false} />
  );
};

export default Input;
