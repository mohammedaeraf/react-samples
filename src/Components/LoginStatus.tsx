function LoginStatus() {
  const isLoggedIn = true; // Change this manually to see different outputs

  return (
    <div>
      <h2>{isLoggedIn ? "Welcome, User!" : "Please log in."}</h2>
    </div>
  );
}

export default LoginStatus;
