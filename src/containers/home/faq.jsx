"use client";
import { useState } from 'react';
import Heading from "@/components/heading";
import { LiaTimesSolid } from "react-icons/lia";
import { FaPlus } from "react-icons/fa6";



const Faq = () => {
    const questions = [
        {
            question: "How can I make use of Slart for my swapping?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        },
        {
            question: "Do you provide services for all network chains?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        },
        {
            question: "Is Slart secure for transactions?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        },
        {
            question: "What is the fee structure for using Slart?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        },
    ];

    const [expanded, setExpanded] = useState(Array(questions.length).fill(false));

    const toggleExpand = (index) => {
        setExpanded(expanded.map((state, i) => (i === index ? !state : state)));
    };

    return (
        <div className="flex flex-col items-center gap-10 relative">
            <Heading text="Answers to your questions" />
            <div className="w-full md:w-[80%] lg:w-[70%] flex flex-col gap-6 z-10">
                {questions.map((q, index) => (
                    <div key={index} className="flex items-start gap-6 rounded-[24px] md:rounded-[30px] bg-[#FFFFFF1A] border-[1px] border-[#BCBCBC] px-[20px] py-[30px]">
                        <div className="flex-1 flex flex-col gap-4">
                            <span className="text-[18px] md:text-[20px] leading-[22px] font-machina">{q.question}</span>
                            {expanded[index] && (
                                <span className=" whitespace-pre-line text-[14px] leading-[22px] font-[350] text-[#FFFFFFBF] font-poppins">
                                    {q.answer}
                                </span>
                            )}
                        </div>
                        <button
                            className="text-[14px]"
                            onClick={() => toggleExpand(index)}
                        >
                            {expanded[index] ? <LiaTimesSolid/> : <FaPlus/>}
                        </button>
                    </div>
                ))}
            </div>
            <div className=" absolute w-[320px] h-[300px] bg-[#7304C2] right-0 top-40  blur-[200px]">
            </div>
        </div>
    );
};

export default Faq;
