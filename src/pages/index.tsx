import InputComponent from "@/components/InputComponent";
import Text from "@/components/Text";
import { useIndexContext } from "@/contexts/IndexContex";
import useUsersMutation from "@/hooks/mutations/useUsersMutation";
import useUsers from "@/hooks/queries/useUsers";
import User from "@/models/user.model";
import userService from "@/services/user.service";
import UserService from "@/services/user.service";
import { useQueryClient } from "@tanstack/react-query/build/lib/QueryClientProvider";
import { Form, Field, Formik, ErrorMessage } from "formik";
import { Inter, Montserrat_Alternates } from "next/font/google";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { object, string } from "yup";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  var { text, setText } = useIndexContext();
  const [user, setUser] = useLocalStorage<User>({
    email: "",
    name: "",
    phone: "",
  });
  const [create, setCreate] = useState<"user" | "building">("user");
  // const [users, setUsers] = useState<User[]>([]);
  const { data: users } = useUsers();
  const usersMutation = useUsersMutation();

  useEffect(() => {
    console.log(user);
  }, [user]);

  const toggleCreate = () => {
    if (create == "user") setCreate("building");

    setCreate("user");
  };

  // useEffect(() => {
  //   const getUsers = async () => {
  //     try {
  //       const usersServide = new UserService();
  //       const response = await usersServide.getAllUsers();
  //       setUsers(response);
  //     } catch (error) {
  //       console.log("🚀 ~ file: index.tsx:40 ~ getUsers ~ error:", error)

  //     }
  //   };

  //   getUsers();
  // }, []);

  // const inputRef = useRef<HTMLInputElement>();

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setTimeout(() => {
  //     setText(e.target.value);
  //   }, 2000);
  // };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target;

    setUser((actualState) => ({
      ...actualState,
      [input.name]: e.target.value,
    }));
  };

  return (
    <div>
      {/* <button onClick={toggleCreate}>Cambiar creacion</button> */}
      {/* <Text customText={text} /> */}
      {create == "user" ? (
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(value: User) => {
            usersMutation.mutate(value);
          }}
        >
          {(formik) => (
            <Form>
              {/* <InputComponent formik={formik} /> */}
              <Field name="name" placeholder="name" />
              <ErrorMessage name="name" />

              <Field name="email" type="email" placeholder="email" />
              <ErrorMessage name="email" />

              <Field name="phone" placeholder="phone" />
              <ErrorMessage name="phone" />

              <input type="submit" value={"hola"} />
            </Form>
          )}
        </Formik>
      ) : (
        <form>
          <input
            type="text"
            name="adddress"
            placeholder="address"
            onChange={handleChange}
            // value={user.name}
          />
          <input
            type="text"
            name="number"
            placeholder="number"
            onChange={handleChange}
            // value={user.email}
          />
          <input type="text" name="phone" placeholder="phone" />
        </form>
      )}

      {/* <InputComponent text={text} setText={setText} /> */}
    </div>
  );
}

const validationSchema = object({
  name: string().required(),
  email: string().email().required(),
  phone: string().required(),
});
