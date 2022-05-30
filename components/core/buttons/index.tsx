import Link from "next/link";
import React from "react";
import { ButtonComponent } from "./styles";

const Button = ({
  texto,
  onClick,
  type = "submit",
  path,
}: {
  texto: string;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
  path?: string;
}) => {
  return (
    <>
      {!path ? (
        <ButtonComponent type={type} onClick={onClick}>
          {texto}
        </ButtonComponent>
      ) : (
        <Link href={path}>
          <a>
            <ButtonComponent type={type} onClick={onClick}>
              {texto}
            </ButtonComponent>
          </a>
        </Link>
      )}
    </>
  );
};

export default Button;
