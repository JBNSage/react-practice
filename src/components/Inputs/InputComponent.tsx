import { FormikProps } from "formik";
import React, { FC } from "react";
interface Props {
  formik: FormikProps<object>;
}

const InputComponent: FC<Props> = ({ formik }) => {
  return (
    <div className="input-item">
      <input
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      {formik.errors.name && formik.errors.name}
    </div>
  );
};

export default InputComponent;
