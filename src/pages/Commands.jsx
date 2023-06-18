import React from "react";
import { useNavigate } from "react-router-dom";
const Commands = () => {
    const navigate = useNavigate()
  return (
    <div>
      <div className="navbar navbar-expand-md bg-dark navbar-dark">
        <div className="container">
          <a href="../index.html" className="navbar-brand text-info">
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
                <a onClick={() => navigate('/')} className="nav-link">
                  Home
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
                <ul className="dropdown-menu bg-dark" aria-labelledby="linksdrop">
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
          </div>
        </div>
      </div>

      <div className="container">
        <section className="mt-[9%]">
          <div className="row">
            <div className="col-sm-6 my-1">
              <h2 className="fw-bold">UwU Commands</h2>
              <p className="command-descreption">
                Find all UwU bot commands and information you need fast and easy
              </p>
            </div>

          </div>
          <hr />
        </section>
        <div className="mt-4"></div>
        <div className="row">
          <div className="col-md-4 my-2">
            <div className="card p-3">
              <h5>Select Commands Category</h5>
              <hr />
              
            </div>
          </div>
          <div className="col-md-8 my-2">
            <input
              type="text"
              className="w-100 search-box"
              placeholder="Search for commands"
            />

            <div className="mt-4"></div>

            <div className="commands-section" id="Category0">
              <div className="accordion accordion-flush mt-2" id="ban">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#fban"
                    >
                      /ban&nbsp;{" "}
                      <span className="command-descreption">- ban a member</span>
                    </button>
                  </h2>
                  <div
                    id="fban"
                    className="accordion-collapse collapse"
                    data-bs-parent="#ban"
                  >
                    <div className="accordion-body">
                      <span>Usage Examples:</span> <br />
                      <span className="examples">
                        /ban @memebr
                        <br />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion accordion-flush mt-2" id="kick">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#fkick"
                    >
                      /kick&nbsp;{" "}
                      <span className="command-descreption">- kick a member</span>
                    </button>
                  </h2>
                  <div
                    id="fkick"
                    className="accordion-collapse collapse"
                    data-bs-parent="#kick"
                  >
                    <div className="accordion-body">
                      <span>Usage Examples:</span> <br />
                      <span className="examples">/kick @memebr</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion accordion-flush mt-2" id="mute">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#fmute"
                    >
                      /mute&nbsp;{" "}
                      <span className="command-descreption">- mute a member</span>
                    </button>
                  </h2>
                  <div
                    id="fmute"
                    className="accordion-collapse collapse"
                    data-bs-parent="#mute"
                  >
                    <div className="accordion-body">
                      <span>Usage Examples:</span> <br />
                      <span className="examples">/mute @member</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="commands-section" id="Category1">
              <div className="accordion accordion-flush mt-2" id="help">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#fhelp"
                    >
                      /help&nbsp;{" "}
                      <span className="command-descreption">
                        - Bot&#39;s help menu
                      </span>
                    </button>
                  </h2>
                  <div
                    id="fhelp"
                    className="accordion-collapse collapse"
                    data-bs-parent="#help"
                  >
                    <div className="accordion-body">
                      <span>Usage Examples:</span> <br />
                      <span className="examples">
                        /help
                        <br />
                        /help command:ban
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion accordion-flush mt-2" id="ping">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#fping"
                    >
                      /ping&nbsp;{" "}
                      <span className="command-descreption">
                        - Get bot&#39;s host server status &amp; latency
                      </span>
                    </button>
                  </h2>
                  <div
                    id="fping"
                    className="accordion-collapse collapse"
                    data-bs-parent="#ping"
                  >
                    <div className="accordion-body">
                      <span>Usage Examples:</span> <br />
                      <span className="examples">/ping</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion accordion-flush mt-2" id="invite">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#finvite"
                    >
                      /invite&nbsp;{" "}
                      <span className="command-descreption">
                        - Invite bot to your server
                      </span>
                    </button>
                  </h2>
                  <div
                    id="finvite"
                    className="accordion-collapse collapse"
                    data-bs-parent="#invite"
                  >
                    <div className="accordion-body">
                      <span>Usage Examples:</span> <br />
                      <span className="examples">/invite</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="commands-section" id="Category2">
              <div className="accordion accordion-flush mt-2" id="leaderboard">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#fleaderboard"
                    >
                      /leaderboard&nbsp;{" "}
                      <span className="command-descreption">
                        - Get your servers leaderboards{" "}
                      </span>
                    </button>
                  </h2>
                  <div
                    id="fleaderboard"
                    className="accordion-collapse collapse"
                    data-bs-parent="#leaderboard"
                  >
                    <div className="accordion-body">
                      <span>Usage Examples:</span> <br />
                      <span className="examples">/leaderboard</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="commands-section" id="Category3">
              <div className="accordion accordion-flush mt-2" id="reactionrole">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#freactionrole"
                    >
                      <span className="badge badge-vip rounded-pill">
                        <i className="far fa-crown"></i>
                      </span>
                      &nbsp; /reactionrole&nbsp;{" "}
                      <span className="command-descreption">
                        - start the setup process for creating a reaction role
                      </span>
                    </button>
                  </h2>
                  <div
                    id="freactionrole"
                    className="accordion-collapse collapse"
                    data-bs-parent="#reactionrole"
                  >
                    <div className="accordion-body">
                      <span>Usage Examples:</span> <br />
                      <span className="examples">/reactionrole</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion accordion-flush mt-2" id="slowmode">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#fslowmode"
                    >
                      <span className="badge badge-vip rounded-pill">
                        <i className="far fa-crown"></i>
                      </span>
                      &nbsp; /slowmode&nbsp;{" "}
                      <span className="command-descreption">
                        - add slowmode for a channel
                      </span>
                    </button>
                  </h2>
                  <div
                    id="fslowmode"
                    className="accordion-collapse collapse"
                    data-bs-parent="#slowmode"
                  >
                    <div className="accordion-body">
                      <span>Usage Examples:</span> <br />
                      <span className="examples">/slowmode :time</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commands;
