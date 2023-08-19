import Link from "next/link";

export default function Signin() {
  return (
    <>
      <header>
        <nav>
          <h1>Personal Blogging App</h1>
          <button>
            <Link href={"signup"}>Signup</Link>
          </button>
        </nav>
        <div>
          <h2>Login</h2>
        </div>
      </header>
      <div>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </form>
      </div>
    </>
  );
}
