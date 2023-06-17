import React from "react";
import "../../src/assets/css/home.css";
import SignOut from "../components/button/signout_button/SignOut";
import $ from "jquery";
import { useNavigate } from "react-router-dom";
import "../../src/assets/bootstrap.js";
import "../../src/assets/css/home.css";
import { firebaseAuth } from "../../zustand/FirebaseAuth";
const Home = () => {
  const {loginStatus} = firebaseAuth()
  const navigate = useNavigate()
  return (
    <div>
      <div className="navbar navbar-expand-md bg-dark navbar-dark">
        <div className="container">
          <a href="" className="navbar-brand text-info">
            UwU Bot
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainmenu">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a href="#Features" className="nav-link">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a href="#Statics" className="nav-link">
                  Statics
                </a>
              </li>
              <li className="nav-item">
                <a onClick={() => navigate("/chat")} className="nav-link">
                  Chat
                </a>
              </li>
              <li className="nav-item">
                <a onClick={() => navigate("/commands")} className="nav-link">
                  Commands
                </a>
              </li>
              <li className="nav-item">
                <a onClick={() => navigate("/weather")} className="nav-link">
                  Weather
                </a>
              </li>
              <li className="nav-item">
                <a onClick={() => navigate("/quote")} className="nav-link">
                  Quote
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="linksdrop"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Links
                </a>
                <ul
                  className="dropdown-menu bg-dark"
                  aria-labelledby="linksdrop"
                >
                  <li>
                    <a className="dropdown-item text-muted" href="">
                      Invite
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-muted" href="">
                      Github
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-muted" href="">
                      Support Server
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <li className="navbar-nav nav-item">
              <a className="btn btn-outline-info ml-5">
                <SignOut />
              </a>
            </li>
          </div>
        </div>
      </div>
      <section className="bg-dark text-light text-center py-5">
        <div className="container">
          <div className="d-flex">
            <div>
              <h1>
                <span className="text-info">UwU</span> Bot
              </h1>
              <p>
                Uwu Bot is an integrated bot that separates you from the rest of
                the bots and everything you need is in it.
              </p>
              <a
                className="btn btn-info"
                href="https://discord.com/api/oauth2/authorize?client_id=996777600775098428&permissions=8&scope=bot%20applications.commands"
              >
                Invite Bot
              </a>
              <a
                className="m-2 btn btn-light"
                href="https://discord.gg/6PWstcCrKr"
              >
                Support Server
              </a>
            </div>
            <img
              className=" mx-[50px]"
              src="../../src/assets/image/uwu.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section id="Features" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Features</h2>
          <div className="row text-center">
            <div className="col-sm">
              <div className="card bg-dark text-light mb-3">
                <div className="h1 mt-3">
                  <i className="bi bi-clock-history"></i>
                </div>
                <div className="card-body text-center">
                  <h4 className="card-title text-info">Easy to Use</h4>
                  <p className="card-text">
                    Easy to use, user-friendly, full instructions for each
                    command
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card bg-dark text-light mb-3">
                <div className="h1 mt-3">
                  <i className="bi bi-capslock-fill"></i>
                </div>
                <div className="card-body text-center">
                  <h4 className="card-title text-info">24/7 Online</h4>
                  <p className="card-text">
                    Online all the time. Sure, because is a bot, host by
                    Railway.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card bg-dark text-light mb-3">
                <div className="h1 mt-3">
                  <i className="bi bi-folder2-open"></i>
                </div>
                <div className="card-body text-center">
                  <h4 className="card-title text-info">Fun Command</h4>
                  <p className="card-text">
                    Roll a dice, Tic-tac-toe, Upsidedown world and many thing
                    you can try
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card bg-dark text-light mb-3">
                <div className="h1 mt-3">
                  <i className="bi bi-folder2-open"></i>
                </div>
                <div className="card-body text-center">
                  <h4 className="card-title text-info">Mod Command</h4>
                  <p className="card-text">
                    Moderation command for admin server and owner to manage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Statics" className="py-5 bg-dark text-light">
        <div className="container">
          <div className="py-2 text-center">
            <h2>Statics:</h2>
          </div>
          <div className="row align-items-center justify-content-center text-center -5">
            <div className="col">
              <img
                src="../../src/assets/image/statics.svg"
                alt=""
                className="img-fluid d-none d-md-block"
              />
            </div>
            <div className="col-sm p-5 h1">
              <i className="bi bi-hdd-stack text-primary"></i>
              <h5>100</h5>
              <h5>Server</h5>
            </div>
            <div className="col-sm p-5 h1">
              <i className="bi bi bi-people-fill text-primary"></i>
              <h5>100</h5>
              <h5>Users</h5>
            </div>
            <div className="col-sm p-5 h1">
              <i className="bi bi bi-hash text-primary"></i>
              <h5>100</h5>
              <h5>Channels</h5>
            </div>
          </div>
        </div>
      </section>
      <div className="footer-clean bg-black">
        <footer>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-4 col-md-3 item">
                <h3>Quick access</h3>
                <ul>
                  <li>
                    <a href="#Features">Features</a>
                  </li>
                  <li>
                    <a href="#Statics">Statics</a>
                  </li>
                  <li>
                    <h1> Ask me</h1>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="./pages/commands.html">Commands</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">License</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-3 item">
                <h3>Links</h3>
                <ul>
                  <li>
                    <a href="#">Support server</a>
                  </li>
                  <li>
                    <a href="#">Invite bot</a>
                  </li>
                  <li>
                    <a href="#">Github</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 item social">
                <a href="#">
                  <ion-icon name="logo-discord"></ion-icon>
                </a>
                <a href="#">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a href="#">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
                <a href="#">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <p className="copyright">Uwu Bot © 2021</p>
              </div>
            </div>
          </div>
          <div className="page-footer font-small text-light mt-5">
            <div className="footer-copyright text-center">
              Made with 💖 by
              <a href="https://github.com/ChungNotWibu">
                ChungNotWibu
              </a> and{" "}
              <a href="https://github.com/thanhhafmcvn">Thanhhafmcvn</a>©
              17/6/2023 Copyright
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
