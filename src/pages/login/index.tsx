import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import Router from "next/router";
import { FormEvent, useContext, useState } from "react";
import { login } from "../../utils/apiUrlShortner";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // const user = await axios.post("https://localhost:7128/v1/users/login", {
    //     email,
    //     password,
    // }, {withCredentials: true});

    const user = await login(email, password);

    if(user.status === 200){
        console.log("logado com succeso!");
        router.push("/");
    } else {
        setEmail("");
        setPassword("");
    }
  }

  return (
    <>
      <div>
        <h1 className="text-center">Formulário para login</h1>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="flex flex-col items-center py-6"
        >
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="border-2 border-rose-600"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Senha</label>
          <input
            className="border-2 border-rose-600"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="border-2 border-green-600 m-4 bg-green-600">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}
