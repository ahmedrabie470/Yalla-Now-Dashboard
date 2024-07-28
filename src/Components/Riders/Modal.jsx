import React, { useState } from "react";
import styles from "./Riders.module.css";
import { RiCloseLine } from "react-icons/ri";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
export default function Modal() {
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  async function submitForm(values) {
    console.log(values);
  }
  async function closeInfo() {
    setIsClosed(true);
  }
  const validationSchema = yup.object({
    NewPrice: yup.string().required("NewPrice is required"),
  });

  const formik = useFormik({
    initialValues: {
      NewPrice: "",
    },
    validationSchema,
    onSubmit: submitForm,
  });
  return (
    <>
    {!isClosed?<>
        <div className={styles.darkBG} />
      <div className={styles.centered}>
        <div className="p-5  bg-white rounded-3 shadow-sm">
          <h5 className={styles.heading}> Change km price </h5>

          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="NewPrice">New Price</label>
            <input
              id="NewPrice"
              value={formik.values.NewPrice}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="NewPrice"
              type="NewPrice"
              className="form-control w-100"
            />
            <button onClick={()=>closeInfo()} className="btn mt-2">Cancel</button>
            <button type="submit" className="btn btn-danger main mt-2 ">
              Save
            </button>
          </form>
        </div>
      </div>
    </>:' '  }
      
    </>
  );
}
