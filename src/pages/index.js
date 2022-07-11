import React, {useRef, useState} from "react"
import {StaticImage} from "gatsby-plugin-image";
import {AnchorLink} from "gatsby-plugin-anchor-links";
import StarryNight from "../components/StarryNight";
import JobsAccordion from "../components/JobsAccordion";
import emailjs from '@emailjs/browser';
import Twitter from "../images/twitter.svg";
import Telegram from "../images/telegram.svg";

// bg-night-sky bg-no-repeat
const IndexPage = () => {
    const jobs = [
        {
            'title': 'Frontend Developer',
            'bgColour': 'purple',
            'description': "Are you handy with Javascript? Is CSS your canvas? This is the place for you. Our tech stack is yet to be decided based on community skills, but we can say now a key principle will be accessibility for the entire community, so anything we produce will be in the browser. We'd like you to join and help us bring as interactive an experience as possible."
        },
        {
            'title': 'Backend / Blockchain Developer',
            'bgColour': 'light-blue',
            'description': "The Moonrunners team have innovated by including the moon phases as part of the contract, and so in that same spirit we'd like to also keep as much interaction on-chain as possible."
        },
        {
            'title': 'Artist',
            'bgColour': 'pink',
            'description': "If you're an 8-bit wizard, we need your magic for creating experiences that stay within the artistic style of Primordia."
        },
        {
            'title': 'Lore Master',
            'bgColour': 'green',
            'description': "The most important part of anything we do is staying within the lore Moonrunners have set out. With a constantly evolving story it's critical we stay up-to-date which is a job in and of itself."
        },
        {
            'title': 'Community Manager / Marketer',
            'bgColour': 'grey',
            'description': "The Moonrunners Wolfpack has shown how powerful engaged communities can be, especially via Twitter Spaces and the conversations that have come out of those. Those that help support and run these are the cornerstone of the project, and need to be included in anything extra that comes out of Primordia."
        },
        {
            'title': 'General',
            'bgColour': 'yellow',
            'description': "If you have any other skills you want to contribute or simply are just enthusiastic about getting involved, apply under this one and we'll have a chat about how to fit you in."
        }
    ]

    const [formSent, setFormStatus] = useState(false);

    // const form = useRef();
    // function sendEmail(e) {
    //     e.preventDefault();
    //
    //     emailjs.sendForm('service_0ludavd', 'template_o2pmday', form.current, 'rxcog2eioKDu9lMcX')
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    //     // emailjs.sendForm('service_0ludavd', 'template_17hp6mg', form.current, 'juYRxtVyRMKhElqaf')
    //     //     .then((result) => {
    //     //         console.log(result.text);
    //     //     }, (error) => {
    //     //         console.log(error.text);
    //     //     });
    //     e.target.reset();
    //     setFormStatus(true);
    // }

    function handleForm(){
        setFormStatus(!formSent);
    }

  return (
      <>
      <section className="relative w-full h-screen py-12">
          <div className="absolute bg-night-sky top-0 left-0 w-screen h-screen z-0 overflow-hidden">
              <StarryNight />
          </div>
        <div className="flex flex-col items-center justify-center text-white space-y-2 z-20">
            <StaticImage src="../images/logo.png" alt="Primordia Ventures" className="h-20 w-20 mb-32" />
            <div className="flex flex-col items-center space-y-4 z-50">
                <h1 className="text-6xl font-bold">Primordia</h1>
                <h4 className="text-xl font-light text-center">𝕊𝕠𝕞𝕖 𝕠𝕗 𝕥𝕙𝕖 𝕎𝕠𝕝𝕗𝕡𝕒𝕔𝕜 𝕓𝕒𝕟𝕕𝕖𝕕 𝕥𝕠𝕘𝕖𝕥𝕙𝕖𝕣 𝕥𝕠 𝕦𝕟𝕝𝕖𝕒𝕤𝕙 𝕥𝕙𝕖 𝕡𝕠𝕨𝕖𝕣 𝕠𝕗 ℂℂ𝟘 <br/>
                    𝕎𝕚𝕝𝕝 𝕪𝕠𝕦 𝕓𝕖 𝕒 𝕡𝕒𝕣𝕥 𝕠𝕗 𝕥𝕙𝕖 𝕤𝕥𝕠𝕣𝕪?</h4>
            </div>

            <button className="py-2 px-4 bg-green rounded-lg hover:border-white hover:border-[1px] box-content z-50">
                <AnchorLink to="/#join">Join</AnchorLink>
            </button>
        </div>
      </section>
    <section className="flex flex-col py-12 space-y-4 items-center h-full text-white w-full md:w-2/3 lg:w-1/2 text-center mx-auto px-4" id="join">
        <h2 className="text-4xl">𝕆𝕦𝕣 𝕛𝕠𝕦𝕣𝕟𝕖𝕪 𝕙𝕒𝕤 𝕛𝕦𝕤𝕥 𝕓𝕖𝕘𝕦𝕟</h2>
        <p>Our goal is to take the rich storytelling and world building of Moonrunners and build interactive experiences that allow holders to further immerse themselves in Primordia.</p>
        <p className="text-xl">𝔽𝕠𝕣 𝕥𝕙𝕖 𝕡𝕒𝕔𝕜, 𝕓𝕪 𝕥𝕙𝕖 𝕡𝕒𝕔𝕜.</p>
        <div className="w-full rounded-lg flex flex-col space-y-4">
            {
                jobs.map(job => (
                    <JobsAccordion title={job.title} bgColour={job.bgColour} description={job.description} />
                ))
            }
            {/*<form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4 justify-center items-center w-full pt-6 mx-auto" method="POST">*/}
            {/*    <div className="flex items-center space-x-4">*/}
            {/*        <label htmlFor="contact" className="mb-2">Email:</label>*/}
            {/*        <input name="contact" className={`w-full text-white bg-grey/25 border border-white rounded px-4 py-2`} type="email" placeholder="e.g trippywolf@gmail.com" required />*/}
            {/*    </div>*/}
            {/*    <div className="flex items-center space-x-4">*/}
            {/*        <label htmlFor="role" className="mb-2">Role:</label>*/}
            {/*        <select name = "role" className="w-full text-center shadow appearance-none border rounded bg-grey placeholder-white text-black p-2 leading-tight focus:outline-none focus:shadow-outline" required>*/}
            {/*            <option value = "none" selected disabled>Select Role</option>*/}
            {/*            <option value = "frontend-dev" >Frontend Dev</option>*/}
            {/*            <option value = "backend-dev">Backend / Blockchain Dev</option>*/}
            {/*            <option value = "artist">Artist</option>*/}
            {/*            <option value = "lore">Lore Master</option>*/}
            {/*            <option value = "community">Community Manager</option>*/}
            {/*            <option value = "other">General</option>*/}
            {/*        </select>*/}
            {/*        <input type="submit" value="Send" className="bg-green rounded-lg px-4 p-2 hover:border-white" />*/}
            {/*    </div>*/}
            {/*</form>*/}
            {/*<div >*/}
                <a href="https://4a53f5mv5lf.typeform.com/to/OcgevLSD" className="flex items-center justify-center py-12" target="_blank">
                    <button className="py-2 px-4 w-1/4 bg-green rounded-lg hover:border-white hover:border-[1px] box-content z-50" onClick={handleForm}>
                    Join the Builder Tribe
                    </button>
                </a>
            {/*</div>*/}
            {formSent ? <p className="font-light text-xl text-white">𝕎𝕖𝕝𝕔𝕠𝕞𝕖 𝕥𝕠 𝕥𝕙𝕖 𝕡𝕒𝕔𝕜. 𝕎𝕖'𝕝𝕝 𝕓𝕖 𝕚𝕟 𝕥𝕠𝕦𝕔𝕙 𝕤𝕠𝕠𝕟.</p> : <></>}
        </div>
    </section>
    <section className="text-white flex flex-col space-y-6 items-center pb-8 text-center">
        <h2 className="text-4xl">𝕎𝕒𝕟𝕥 𝕥𝕠 𝕙𝕖𝕒𝕣 𝕞𝕠𝕣𝕖 𝕒𝕓𝕠𝕦𝕥 ℙ𝕣𝕚𝕞𝕠𝕣𝕕𝕚𝕒?</h2>
        <p>Follow us on Twitter or join our Community</p>
        <div className="flex space-x-8">
            <a href="https://www.twitter.com/primordia_io" target="_blank" className="flex items-center hover:bg-light-blue hover:rounded-lg p-2">
                <img src={Twitter} alt="Primordia Twitter" className="w-10 white-filter cursor-pointer"/>
                <p className="ml-2">Updates</p>
            </a>
            <a href="https://twitter.com/i/communities/1543991881020973057" target="_blank" className="flex items-center hover:bg-purple hover:rounded-lg p-2">
                <img src={Twitter} alt="Primordia Twitter community" className="w-10 white-filter cursor-pointer"/>
                <p className="ml-2">Community</p>
            </a>
        </div>
        <p className="pt-12 font-light text-sm">At this time we are not affiliated in any way, shape or form with the official Moonrunners team.</p>
    </section>
    </>
  )
}

export default IndexPage
