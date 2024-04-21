import {useState} from 'react';
import {motion} from 'framer-motion';

import {EarthCanvas} from '../canvas';
import {SectionWrapper} from '../../hoc';
import {slideIn} from '../../utils/motion';
import {config} from '../../constants/config';
import {Header} from '../atoms/Header';
import {GrLinkedin} from "react-icons/gr";
import {BsInstagram, BsTelegram} from "react-icons/bs";
import {HiMailOpen} from "react-icons/hi";

// const INITIAL_STATE = Object.fromEntries(
//     Object.keys(config.contact.form).map(input => [input, ''])
// );

// const emailjsConfig = {
//     serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
//     templateId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
//     accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
// };

const Contact = () => {
    // const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
    // const [form, setForm] = useState(INITIAL_STATE);
    const [socialText] = useState(config.contact.social);
    // const [loading, setLoading] = useState(false);

    // const handleChange = (
    //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
    // ) => {
    //   if (e === undefined) return;
    //   const { name, value } = e.target;
    //   setForm({ ...form, [name]: value });
    // };

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    //     if (e === undefined) return;
    //     e.preventDefault();
    //     // setLoading(true);
    //
    //     emailjs
    //         .send(
    //             emailjsConfig.serviceId,
    //             emailjsConfig.templateId,
    //             {
    //                 form_name: form.name,
    //                 to_name: config.html.fullName,
    //                 from_email: form.email,
    //                 to_email: config.html.email,
    //                 message: form.message,
    //             },
    //             emailjsConfig.accessToken
    //         )
    //         .then(
    //             () => {
    //                 // setLoading(false);
    //                 alert('Thank you. I will get back to you as soon as possible.');
    //
    //                 setForm(INITIAL_STATE);
    //             },
    //             error => {
    //                 // setLoading(false);
    //
    //                 console.log(error);
    //                 alert('Something went wrong.');
    //             }
    //         );
    // };

    return (
        <div className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row `}>
            <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
                className="bg-black-100 flex-[0.75] rounded-2xl p-8"
            >
                <Header useMotion={false} {...config.contact} />

                <div className="mt-4 flex flex-col gap-2">
                    <a target="_blank" href={socialText.telegram.link} className="flex flex-row  items-center gap-5">
                        <BsTelegram
                            size={30}
                            style={{
                                color: "#0088cc",
                            }}
                        />
                        <span
                            className={"transition-all text-gray-400 hover:text-white"}>{socialText.telegram.placeholder}</span>
                    </a>
                    <a target="_blank" href={socialText.linkedin.link} className={"flex flex-row items-center gap-5"}>
                        <GrLinkedin
                            size={30}
                            style={{
                                color: "#0C63BC",
                            }}
                        />
                        <span
                            className={"transition-all text-gray-400 hover:text-white"}>{socialText.linkedin.placeholder}</span>
                    </a>
                    <a target="_blank" href={socialText.instagram.link} className="flex flex-row  items-center gap-5">
                        <div className="rounded-xl overflow-hidden flex justify-center align-center w-[30px] h-[30px] items-center">
                            <BsInstagram
                                size={32}
                                style={{
                                    color: "rgb(16 13 37 / var(--tw-bg-opacity))",
                                    background: "linear-gradient(115deg, #f9ce34, #ee2a7b, #6228d7)",
                                    minWidth: "35px"
                                }}
                            />
                        </div>
                        <span
                            className={"transition-all text-gray-400 hover:text-white"}>{socialText.instagram.placeholder}</span>
                    </a>
                    <a href={`mailto:${config.contact.form.email.placeholder}`}
                       className="flex flex-row  items-center gap-5">
                        <div>
                            <HiMailOpen
                                size={30}
                            />
                        </div>
                        <span
                            className={"transition-all text-gray-400 hover:text-white"}>{config.contact.form.email.span} ({config.contact.form.email.placeholder})</span>
                    </a>
                </div>

                {/*      <form*/}
                {/*          // @ts-expect-error*/}
                {/*          ref={formRef}*/}
                {/*          onSubmit={handleSubmit}*/}
                {/*          className="mt-6 flex flex-col gap-8"*/}
                {/*      >*/}
                {/*          {Object.keys(config.contact.form).map(input => {*/}
                {/*              const {span, placeholder} =*/}
                {/*                  config.contact.form[input as keyof typeof config.contact.form];*/}
                {/*              // const Component = input === 'message' ? 'textarea' : 'input';*/}

                {/*              return (*/}
                {/*                  <label key={input} className="flex flex-col">*/}
                {/*      <span className="font-medium text-white">*/}
                {/*        {span} : {placeholder}*/}
                {/*      </span>*/}
                {/*                      /!* <Component*/}
                {/*        type={input === "email" ? "email" : "text"}*/}
                {/*        name={input}*/}
                {/*        value={form[`${input}`]}*/}
                {/*        onChange={handleChange}*/}
                {/*        placeholder={placeholder}*/}
                {/*        className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"*/}
                {/*        {...(input === "message" && { rows: 7 })}*/}
                {/*      /> *!/*/}
                {/*                  </label>*/}
                {/*              );*/}
                {/*          })}*/}
                {/*          /!* <button*/}
                {/*  type="submit"*/}
                {/*  className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none"*/}
                {/*>*/}
                {/*  {loading ? "Sending..." : "Send"}*/}
                {/*</button> *!/*/}
                {/*      </form>*/}
            </motion.div>

            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
            >
                <EarthCanvas/>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, 'contact');
