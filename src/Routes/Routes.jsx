import { Component } from "react";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../Pages/Homepage/Homepage";
import Books from "../Pages/Books/Books";
import { createBrowserRouter } from "react-router";


export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: MainLayout,
      children: [
        {
          index: true,
          Component: Homepage
        },
        {
          path: "/books",
          element: <Books></Books>
        }
      ]
    },
    
  ]
)