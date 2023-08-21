import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import HeadphonesLayout from "./layout/HeadphonesLayout";

//pages

import Home from "./pages/home/Home";
import Speakers from "./pages/speakers/Speakers";
import Earphones from "./pages/earphones/Earphones";
import Headphones from "./pages/headphones/Headphones";
import Headphones1 from "./product-detail/headphones1";

//layout 
import HomeLayout from "./layout/HomeLayout";


function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route element={<HomeLayout/>}>
        <Route index element={ <Home/>}/>
            <Route path='headphones1' element={ <Headphones1/>}/>
        </Route>
        <Route index element={<Home />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />

        <Route path="headphones" element={<HeadphonesLayout />}>
          <Route index element={<Headphones />} />
          <Route path="headphones1" element={<Headphones1 />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={routes} />;
}

export default App;
