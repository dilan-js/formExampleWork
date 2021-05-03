/*eslint-disable*/
import * as React from "react";
import MuiSlider from "@material-ui/core/Slider";

// export const fieldToSlider = ({ field, form: { isSubmitting }, disabled = false, ...props }) => {
//   return {
//     disabled: isSubmitting || disabled,
//     ...props,
//     ...field,
//     name: field.name,
//     value: field.value
//   };
// };

export const Slider = (props) => {
  const [field] = useField(props);
  return (
    <MuiSlider
      //   {...fieldToSlider({ field, ...props })}
      onChange={(e, value) => props.form.setFieldValue(props.name, value)}
    />
  );
};

Slider.displayName = "Slider";
