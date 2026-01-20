import { createBrowserRouter } from "react-router-dom";
import Frame from "./components/admin/frame/Frame.jsx";
import MemberManage from "./components/admin/mebermanage/MeberManage.jsx";
import Create_post from "./components/admin/post/create/Createpost.jsx";
import Mangepost from "./components/admin/post/mange/Mangepost.jsx";
import VolunteerManagement from "./components/admin/volunteermanagement/VolunteerManagement.jsx";
import Mainpage from "./components/user/main/Mainpage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />,
  },
  {
    path: "/admin",
    element: <Frame />,
    children: [
      {
        path: "createpost",
        element: <Create_post />,
      },
      { path: "mangepost", element: <Mangepost /> },
      {
        path: "MemberManage",
        element: <MemberManage />,
      },
      {
        path: "VolunteerManagement",
        element: <VolunteerManagement />,
      },
    ],
  },
]);

export default router;
