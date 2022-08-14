import React from "react";

export default function About(){
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="1g:flex-grow md:w-1/2 1g:pr-24 md:pr-16 flex flex-col md:items-start mb-16 md:mb-0 items-center text-center">
                    <div>
                    <h1 className="title-font sm:text-4xl text-4xl mb-2px font-medium text-white font-mono">
              
                    </h1>
                 
                    <h1  className="title-font sm:text-4xl text-3xl mb-4 font-normal text-white font-mono">
                     Student, Programmer & Graphic designer
                    </h1>
                    </div>
                   

                    <p className="mb-8 self-center text-white ">
                        I code and design things, And I love what I do.
                     </p>
                     <div className="flex justify-center ml-8">
                        <a href="#contact"
                        className="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-1g">
                        Work with me
                        </a>
                   
                      <a
                      href="#projects"
                      className="ml-4 inline-flex text-gray-200 bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 hover:text-white rounded text-1g">
                        Check out my projects!
                      </a>

                    
                     </div>
                </div>
                <div className="1g:max-w-1g 1g:w-full md:w-1/2 w-5/6">
                    <img
                    className="object-cover object-center rounded"
                    alt="hero"
                    src="./logo.png"/>
                </div>
            </div>
        </section>
    )
}   