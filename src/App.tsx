import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./routing/routes";
import "./styles/global.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        {AppRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />}>
            {route.children &&
              route.children.map((childRoute, childIndex) => (
                <Route
                  key={childIndex}
                  path={childRoute.path}
                  element={<childRoute.element />}
                />
              ))}
          </Route>
        ))}
      </Routes>
    </div>
  );
}

export default App;
