// app/routes.ts
import { type RouteConfig, layout, index, route } from "@react-router/dev/routes";

export default [
  layout("routes/index.tsx", [
    index("routes/home.tsx"),          // => /
    route("chat", "routes/chat.tsx"),    // => /chat
    route("checkout", "routes/checkout.tsx"), // => /checkout
  ]),
] satisfies RouteConfig;
