import React from "react";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { RiDiscordLine } from "react-icons/ri";

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <h5 className="mb-4">Contact with Me</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://www.linkedin.com/in/furkan-f%C4%B1rat-058195161/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  LinkedIn
                  <span className="ms-2">
                    <AiOutlineLinkedin />
                  </span>
                </a>
              </li>
              <li className="d-flex align-items-center justify-content-center">
                <a
                  href="https://github.com/furkan-firat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none b"
                >
                  GitHub
                  <span className="ms-2 ">
                    <AiFillGithub />
                  </span>
                </a>
              </li>
              <li>
                <span
                  href="https://discord.com/furkan.firat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  Discord
                </span>
                <span className="ms-2">
                  <RiDiscordLine />
                  /furkan.firat
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
