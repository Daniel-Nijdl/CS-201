import { Route, Switch } from "react-router-dom";
import { links } from "./util/consts";
import ModalButton from "./Components/ModalButton";
import SidebarButton from "./Components/SidebarButton";
import Home from "./Pages/Home";
import Sidebar from "./Components/Sidebar";
import Modal from "./Components/Modal";

const filterList = ["home", "calendar"];

function App() {
  return (
    <main>
      <SidebarButton />
      <ModalButton />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {links
          .filter((link) => !filterList.includes(link.text))
          .map((link) => {
            const { page, id, url } = link;
            return (
              <Route key={id} path={url}>
                {page}
              </Route>
            );
          })}
      </Switch>
      <Sidebar />
      <Modal />
    </main>
  );
}

export default App;
