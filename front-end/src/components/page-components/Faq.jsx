import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './style.css';

const Faq = () => {
    const [openAccordion, setOpenAccordion] = useState(0);

    const faq = [
        { title: 'How can I start trading Forex?', subtext: 'Molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas Temporibus autem quibusdam et aut officiis debitis.', content: 'Here is the content of this faq, lets see how it renders yeah.' },
        { title: 'How much money do I need to start?', subtext: 'Voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur commodo Nunc tempor amet massa diam mauris Risus sodales interdum.', content: 'Here is the content of this faq, lets see how it renders yeah.' },
        { title: 'What is margin?', subtext: 'Laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem mattis commodo Nunc tempor amet massa diam mauris Risus sodales interdum.', content: 'Here is the content of this faq, lets see how it renders yeah.' },
        { title: 'Can I lose more than I invest in Forex?', subtext: 'Optio cumque nihil impedit quo minus id quod maxime placeat facere commodo Nunc tempor amet massa diam mauris Risus sodales interdum.', content: 'Here is the content of this faq, lets see how it renders yeah.' },
    ];

    return (
        <div className='faq-box'>

            <span className='title'>Faq's</span>

            {/* Subtitle */}
            <h2 className='subtitle'>
                Find <span style={{ color: '#fe5924' }}>Answers</span> to Common Questions
            </h2>

            <div className='faqs'>
                <ul className='faq-list'>
                    {faq.map(({ title, subtext, content }, sn) => (
                        <li className='accordion'>
                            <span className='sn'>0{sn + 1}</span>
                            <div className='accordion-title-content'>
                                <h4>{title}</h4>
                                <p className='subtext'> {subtext} </p>
                                {openAccordion === sn && <p className='content'> {content} </p>}
                            </div>
                            <div className='open-close-accordion'>
                                <IconButton onClick={() => setOpenAccordion(sn)}>
                                    {openAccordion === sn ? <CloseIcon fontSize='large' /> : <AddIcon fontSize='large' />}
                                </IconButton>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className='read-more'>
                    <span className='chat-button highlight pointer' >
                        Read More <ArrowForwardIcon className='chatIndicate highlight' />
                    </span>
                </div>

            </div>

        </div>
    );
};

export default Faq;