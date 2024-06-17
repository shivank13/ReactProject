import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { useEffect } from "react";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/cart";


const App = () => {

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3001');

    socket.onopen = () => {
        console.log('WebSocket connection established');
    };

    socket.onmessage = (event) => {
        console.log('Received message type:', typeof event.data); // Verify the data type received
        if (event.data instanceof Blob) {
            event.data.text().then((data) => {
                try {
                    const message = JSON.parse(data);
                    console.log('Received message:', message);

                    if (message.properties) {
                        console.log('UI element properties:', message.properties);
                        // Process UI element properties received from the WebSocket
                    }
                } catch (error) {
                    console.error('Error parsing JSON data:', error);
                }
            });
        }
    };

    return () => {
        socket.close();
        console.log('WebSocket connection closed');
    };
}, []);

  return (
    <Provider store={appStore}>
    <div className="App">
      <Header />
      <Outlet />
    </div>
    </Provider>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
