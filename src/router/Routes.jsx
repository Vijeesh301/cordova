import { Route, Routes as RouterRoutes } from "react-router-dom";
import Landing from "../features/LandingPage/Landing";
import HomePage from "../features/HomePage/HomePage";
import DashboardLayout from "../Dashboard/DashboardLayout";
import WeatherPage from "../features/WeatherPage/WeatherPage";
import TodoPage from "../features/TodoPage/TodoPage";
import ManiLayout from "../Dashboard/ManiLayout";

const Routes = () => {
  return (
    <>
      <RouterRoutes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/home"
          element={
            <DashboardLayout>
              <HomePage />
            </DashboardLayout>
          }
        />
        <Route
          path="/weather"
          element={
            <ManiLayout>
              <DashboardLayout>
                <WeatherPage />
              </DashboardLayout>
            </ManiLayout>
          }
        />
        <Route
          path="/todo"
          element={
            <DashboardLayout>
              <TodoPage />
            </DashboardLayout>
          }
        />
      </RouterRoutes>
    </>
  );
};

export default Routes;
