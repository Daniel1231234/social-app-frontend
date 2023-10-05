import { Fragment } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Feed from "./pages/Feeds/Feed";
import Register from "./pages/Register/Register"
import Groups from "./pages/Groups/Groups"
// demoData.js
const users = [
  {
    id: 1,
    username: 'john_doe',
    password: 'password123',
    name: 'John Doe'
  },
  {
    id: 2,
    username: 'jane_doe',
    password: 'password123',
    name: 'Jane Doe'
  }
];

const groups = [
  {
    id: 1,
    name: 'Group 1',
    members: [1, 2] // user ids
  },
  {
    id: 2,
    name: 'Group 2',
    members: [2] // user ids
  }
];

const feeds = [
  {
    id: 1,
    title: 'Feed 1',
    content: 'This is the content of feed 1',
    authorId: 1,  // user id
    groupId: 1  // group id
  },
  {
    id: 2,
    title: 'Feed 2',
    content: 'This is the content of feed 2',
    authorId: 2,  // user id
    groupId: 2  // group id
  }
];

export { users, groups, feeds };
const router = createBrowserRouter([
  {
    path: "/",
    element: <Feed/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/groups/:groupId",
    element: <Groups/>,
  },
]);
function App (){

  return(
    <>
    <RouterProvider router={router} />
    </>
  )
}
export default App;
