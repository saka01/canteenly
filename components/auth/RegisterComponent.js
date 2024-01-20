import React, { useState } from "react";

const RegisterComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Registeration failed");
      }
      window.location.href = "/dashboard";

      // Handle successful login (e.g., redirect to dashboard)
    } catch (error) {
      console.error(error.message);
      console.log(error.message);
      // Handle login error
    }
  }
  return (
    <div>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
        {/* {error && <p>Error: {error}</p>} */}
      </form>
    </div>
  );
};

export default RegisterComponent;
