import { Outlet, Link } from "react-router";

export default function Component() {
    return (
    <div>
        <nav style={{ padding: 12 }}>
        <Link to="/">Home</Link> · <Link to="/chat">Chat</Link> · <Link to="/checkout">Checkout</Link>
      </nav>
      <Outlet />   {" "}
    </div>
    );
}