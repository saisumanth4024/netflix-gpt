export const checkValidateData = (email, password) => {
  const isEmailValid = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email);
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
      password
    );
  if (!isEmailValid) return "Email is not Valid";
  if (!isPasswordValid) return "Password is not Valid";

  return null;
};
