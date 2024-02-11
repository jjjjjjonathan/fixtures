import {
  RouterProvider,
  createRouter,
  NotFoundRoute,
} from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { Route as rootRoute } from "./routes/__root.tsx";

const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: () => "404 not found",
});

// Create a new router instance
const router = createRouter({ routeTree, notFoundRoute });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const App = () => <RouterProvider router={router} />;

export default App;
