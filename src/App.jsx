import { SiteLoadLoader } from "./interface/ui/SiteLoadLoader";
import { AllRoutes } from "./routes/AllRoutes";
import { Cursor } from "./interface/ui/Cursor";

function App() {
  return (
    <>
      <AllRoutes />
      <Cursor />
      <SiteLoadLoader />
    </>
  );
}

export default App;
