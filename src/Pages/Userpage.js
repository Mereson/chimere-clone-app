import React from "react"
import "../input.css"
import { Link } from "react-router-dom"
import Homepage from "./Homepage"

export const Profiles = ({ username, userImg }) => {
  return (
    <figure>
      <img
        className="size-28 rounded-lg md:size-40 "
        src={userImg}
        alt="userImage"
      />
      <p className="text-white text-center pt-3 text-sm md:text-base">
        {username}
      </p>
    </figure>
  )
}

const Userpage = () => {
  return (
    <section className="bg-black h-screen">
      <nav className="h-12 md:pt-5 w-screen grid place-content-center">
        <img
          className="md:h-8 h-6"
          src={require("../Images/logos_netflix.png")}
          alt="netflix logo"
        />
      </nav>
      <section className="grid h-[92vh] place-content-center">
        <h3 className="text-white text-lg md:text-xl text-center md:pb-12 pb-7">
          Who's Watching?
        </h3>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
          <Link to={"./Homepage.js"}>
            <Profiles
              username={"Boyce"}
              userImg={require("../Images/profiles/Boyce.png")}
            />
          </Link>

          <Profiles
            username={"Ebube"}
            userImg={require("../Images/profiles/Ebube.png")}
          />
          <Profiles
            username={"Chimere"}
            userImg={require("../Images/profiles/chimere.png")}
          />
          <Profiles
            username={"Baby girl"}
            userImg={require("../Images/profiles/babygirl.png")}
          />
          <Profiles
            username={"kids"}
            userImg={require("../Images/profiles/undefined - Imgur (1).png")}
          />
        </div>
      </section>
    </section>
  )
}

export default Userpage
