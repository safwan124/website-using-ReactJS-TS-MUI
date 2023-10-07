import React from "react";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import HeadLines from "./components/HeadLines";
import ContentCard from "./components/card";
import { Typography } from "@mui/material";
import AboutUS from "./components/AboutUs";
import GitHubIcon from '@mui/icons-material/GitHub';
import Footer from "./components/footer";
import Sidebar from "./components/Ads";
import Album from "./components/Blogs";
import Pricing from "./components/services";

function App() {
  const sidebar = {
    title: 'About',
    description:
      'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    archives: [
      { title: 'March 2020', url: '#' },
      { title: 'February 2020', url: '#' },
      { title: 'January 2020', url: '#' },
      { title: 'November 1999', url: '#' },
      { title: 'October 1999', url: '#' },
      { title: 'September 1999', url: '#' },
      { title: 'August 1999', url: '#' },
      { title: 'July 1999', url: '#' },
      { title: 'June 1999', url: '#' },
      { title: 'May 1999', url: '#' },
      { title: 'April 1999', url: '#' },
    ],
    social: [
      { name: 'GitHub', icon: GitHubIcon },
    ],
  };
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={
        <>
          <div className="mt-5">
          <HeadLines /> 
          </div>
          <div className="container header mt-5">
            <Typography variant="h3" gutterBottom>
              Latest Topics
            </Typography>
          </div>
          <div className="container mb-5">
            <div className="row">
             <div className="col-8 col-sm-4">
                  <ContentCard />
                  <ContentCard />
              </div>
              <div className="col-8 col-sm-4">
                  <ContentCard />
                  <ContentCard />
              </div>
              <div className="col-sm-4">
                <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                archives={sidebar.archives}
                social={sidebar.social} 
                />
              </div>
            </div>
          </div>
          <div>
            <Footer
             title="Xplorea"
             description="Something here to give the footer a purpose!" />
          </div>
        </>
      }>Home</Route>
      <Route path="/blogs" element={<Album />}>Blogs</Route>
      <Route path="/advertise" element={<Pricing />}>Advertise with Us</Route>
      <Route path="/about" element={<AboutUS />}>About US</Route>
    </Routes>
    </>
  );
}

export default App;
