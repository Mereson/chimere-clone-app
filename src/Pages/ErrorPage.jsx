import React from "react"
import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <figure className="grid place-items-center place-content-center h-[92vh]">
      <img
        className="size-80 md:size-96 object-fill"
        src={require("../Images/error.png")}
        alt="error"
      />
      <figcaption className="w-[90%] md:w-[57%]">
        <h1 className="text-xl md:text-3xl text-center font-extrabold py-4">This Page is Lost in Space </h1>
        <p className="text-center ">
          You thought this mission to the moon would
          be a quick six month thing. Your neighbor offered to look after your
          dog. Your high school math teacher was impressed. He once said you
          wouldn't amount to anything. You sure showed him. But now here you are,
          fifty feet from your spaceship with no way to get back. Your dog will
          be so sad. Your math teacher will be so smug. Pretty devastating.
        </p>
      </figcaption>

      <button className="py-4 px-5 mt-4 rounded-lg hover:bg-slate-800 bg-slate-900 text-white "> <Link to={"/"}>Back to Home</Link> </button>
    </figure>
  )
}

export default ErrorPage
