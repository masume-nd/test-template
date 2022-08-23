import React from "react";
import Btn, { ButtonProps } from "@mui/material/Button";

interface IButtonProps extends ButtonProps {
   variant: "contained" | "outlined";
   children: React.ReactNode;
}

const Button = ({ variant, children, sx, ...rest }: IButtonProps) => {
   return (
      <Btn sx={{ ...sx, fontSize: 15, borderRadius:"8px" }} {...rest} variant={variant}>
         {children}
      </Btn>
   );
};

export default Button;
