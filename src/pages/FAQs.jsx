import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/FAQs.css";

function FAQs() {

    const faqData = [

        {
            question: "Who can join NCC?",
            answer: "Students studying in schools and colleges who satisfy the age criteria can join NCC."
        },

        {
            question: "Is there any fee to join NCC?",
            answer: "No. NCC training is provided free of cost."
        },

        {
            question: "Is NCC compulsory?",
            answer: "No. Joining NCC is completely voluntary."
        },

        {
            question: "What is the duration of NCC training?",
            answer: "Usually 2–3 years depending on Junior or Senior Division."
        },

        {
            question: "What is B Certificate?",
            answer: "The B Certificate is awarded after completing the required training and examinations."
        },

        {
            question: "What is C Certificate?",
            answer: "The C Certificate is the highest NCC certificate and provides benefits in Defence recruitment."
        },

        {
            question: "Does NCC help in Army recruitment?",
            answer: "Yes. NCC C Certificate holders receive additional benefits in Defence and CAPF recruitment."
        },

        {
            question: "What activities are conducted in NCC?",
            answer: "Parades, camps, firing, trekking, social service, blood donation, plantation, cultural events and adventure activities."
        }

    ];

    const [openIndex, setOpenIndex] = useState(null);

    return (

        <>
            <Navbar />

            <div className="faq-container">

                <h1>❓ Frequently Asked Questions</h1>

                {faqData.map((faq, index) => (

                    <div className="faq-card" key={index}>

                        <div
                            className="faq-question"
                            onClick={() =>
                                setOpenIndex(openIndex === index ? null : index)
                            }
                        >

                            <span>{faq.question}</span>

                            <span>
                                {openIndex === index ? "▲" : "▼"}
                            </span>

                        </div>

                        {openIndex === index && (

                            <div className="faq-answer">

                                {faq.answer}

                            </div>

                        )}

                    </div>

                ))}

            </div>

        </>

    );

}

export default FAQs;