import Link from "next/link";

export default function Signin() {
  return (
    <>
      <header>
        <nav>
          <h1>Personal Blogging App</h1>
          <button>
            <Link href={"./signin"}>Login</Link>
          </button>
        </nav>
        <div>
          <h2>Signup</h2>
        </div>
      </header>
      <div>
        <form>
          <input type="name" placeholder="First Name" />
          <input type="name" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Repeat Password" />
          <button>Signup</button>
        </form>
      </div>
    </>
  );
}
