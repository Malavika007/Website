import React from "react";
import IonIcon from "@reacticons/ionicons";

export default function Contact(){
    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto">
                <div className="1g:w-5 md:w-10/12 self-center bg-black rounded-1g overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              

                    <div className="bg-black realtive flex flex-wrap py-6 roundedshadow-md">
                        <div className="1g:w-1/2 px-6 mt-4 1g:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-s font-mono">
                                SOCIALS
                            </h2>
                            <a className="text-indigo-400 leading-relaxed" rel="linkedinpage" href="https://www.linkedin.com/in/malavika-g-b76a20247/">
                          <IonIcon className="mr-5" name="logo-linkedin" size={20}></IonIcon>
                          </a>
                          <a className="text-indigo-400 leading-relaxed"  rel="githubpage" href="https://github.com/Malavika007">
                          <IonIcon name="logo-github" size={20}></IonIcon>
                          </a>
                            
                            
                        </div>
                        <div className="1g:w-1/2 px-6 mt-4 1g:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-s font-mono">
                                EMAIL
                            </h2>
                            <a className="text-indigo-400 leading-relaxed">
                                mg144@gmail.com
                            </a>
                            

                        </div>

                        <div className="1g:w-1/2 px-6 mt-4 1g:mt-0">
                        <h2 className="title-font font-semibold text-white tracking-widest text-s mt-5 font-mono">
                                Malavika G
                            </h2> 
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}
