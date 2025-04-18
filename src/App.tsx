import { Route, Routes, Navigate } from "react-router-dom";
import { AppRoutes } from "./routing/routes";
import "./styles/global.scss";

const AppContent = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to={'/overview'} replace />} />
        {AppRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />}>
            {route.children &&
              route.children.map((childRoute, childIndex) => (
                <Route
                  key={childIndex}
                  path={childRoute.path}
                  element={<childRoute.element />}
                  index={childRoute.index}
                />
              ))}
          </Route>
        ))}
      </Routes>
    </div>
  );
}

const App = () => {
  return (
      <AppContent />
  );
};

export default App;
