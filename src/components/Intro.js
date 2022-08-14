import React from "react";

export default function Intro(){
    return (
        <section id="#intro" className="text-green-500 bg-white body-font">
            <div className="container px-5 pt-10 pb-0 mx-auto text-center 1g:px-40">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
                    Hi, I'm Malavika.
                </h1>

                <p className="1g:w-2/3 leading-relaxed text-center text-black mb-20 ml-25 mr-auto">
                
           I'm a student who loves programming👩‍💻, Books📚 and Space🚀 <br/>I have about 2 years of experience in programming, And currently <br/>I'm trying to improve my front-end skills and to learn some Python.
                </p>

                <img className="block mr-auto ml-auto" src={require('../img.png')}/>
            </div>
        </section>
    )
}