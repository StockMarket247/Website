import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Faq = () => {
    const [openAccordion, setOpenAccordion] = useState(0);

    const faq = [
        { title: 'How can I start trading Forex?', subtext: 'Molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas Temporibus autem quibusdam et aut officiis debitis.', content: 'Here is the content of this faq, lets see how it renders yeah.' },
        { title: 'How much money do I need to start?', subtext: 'Voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur commodo Nunc tempor amet massa diam mauris Risus sodales interdum.', content: 'Here is the content of this faq, lets see how it renders yeah.' },
        { title: 'What is margin?', subtext: 'Laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem mattis commodo Nunc tempor amet massa diam mauris Risus sodales interdum.', content: 'Here is the content of this faq, lets see how it renders yeah.' },
        { title: 'Can I lose more than I invest in Forex?', subtext: 'Optio cumque nihil impedit quo minus id quod maxime placeat facere commodo Nunc tempor amet massa diam mauris Risus sodales interdum.', content: 'Here is the content of this faq, lets see how it renders yeah.' },
    ];

    return (
        <section
            class="elementor-section elementor-top-section elementor-element elementor-element-db85c19 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="db85c19" data-element_type="section">
            <div class="elementor-container elementor-column-gap-default">
                <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-cca4bb8"
                    data-id="cca4bb8" data-element_type="column">
                    <div class="elementor-widget-wrap elementor-element-populated">
                        <div class="elementor-element elementor-element-6545be7 elementor-widget elementor-widget-bullion_bullion_faqs"
                            data-id="6545be7" data-element_type="widget"
                            data-settings="{&quot;bullion_layout_margin&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;bullion_layout_margin_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;bullion_layout_margin_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;bullion_layout_padding&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;bullion_layout_padding_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;bullion_layout_padding_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true}}"
                            data-widget_type="bullion_bullion_faqs.default">
                            <div class="elementor-widget-container">
                                {/* <!-- faq-section --> */}
                                <section class="faq-section sec-pad">
                                    <div class="auto-container">
                                        <div class="sec-title centred">
                                            <span class="sub-title">Faq’s</span>
                                            <h2>Find <span>Answers</span> to Common <br />Questions</h2>
                                        </div>

                                        <div class="inner-box">
                                            <ul class="accordion-box">
                                                <li class="accordion block active-block">
                                                    <div class="acc-btn active">
                                                        <div class="icon-box"><i class="flaticon-plus"></i></div>
                                                        <span>01</span>
                                                        <h4>How can I start trading Forex?</h4>
                                                        <p>Molestiae consequatur, vel illum qui dolorem eum fugiat
                                                            quo voluptas Temporibus autem quibusdam et aut officiis
                                                            debitis.</p>
                                                    </div>
                                                    <div class="acc-content current">
                                                        <div class="text">
                                                            <p>Molestiae consequatur, vel illum qui dolorem eum
                                                                fugiat quo voluptas Temporibus autem quibusdam et
                                                                aut officiis debitis.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="accordion block ">
                                                    <div class="acc-btn ">
                                                        <div class="icon-box"><i class="flaticon-plus"></i></div>
                                                        <span>02</span>
                                                        <h4>How much money do I need to start?</h4>
                                                        <p>Voluptas sit aspernatur aut odit aut fugit, sed quia
                                                            consequuntur commodo Nunc tempor amet massa diam mauris
                                                            Risus sodales interdum.</p>
                                                    </div>
                                                    <div class="acc-content ">
                                                        <div class="text">
                                                            <p>Voluptas sit aspernatur aut odit aut fugit, sed quia
                                                                consequuntur commodo Nunc tempor amet massa diam
                                                                mauris Risus sodales interdum.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="accordion block ">
                                                    <div class="acc-btn ">
                                                        <div class="icon-box"><i class="flaticon-plus"></i></div>
                                                        <span>03</span>
                                                        <h4>What is margin?</h4>
                                                        <p>Laboriosam, nisi ut aliquid ex ea commodi consequatur?
                                                            Quis autem mattis commodo Nunc tempor amet massa diam
                                                            mauris Risus sodales interdum.</p>
                                                    </div>
                                                    <div class="acc-content ">
                                                        <div class="text">
                                                            <p>Laboriosam, nisi ut aliquid ex ea commodi
                                                                consequatur? Quis autem mattis commodo Nunc tempor
                                                                amet massa diam mauris Risus sodales interdum.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="accordion block ">
                                                    <div class="acc-btn ">
                                                        <div class="icon-box"><i class="flaticon-plus"></i></div>
                                                        <span>04</span>
                                                        <h4>Can I lose more than I invest in Forex?</h4>
                                                        <p>Optio cumque nihil impedit quo minus id quod maxime
                                                            placeat facere commodo Nunc tempor amet massa diam
                                                            mauris Risus sodales interdum.</p>
                                                    </div>
                                                    <div class="acc-content ">
                                                        <div class="text">
                                                            <p>Optio cumque nihil impedit quo minus id quod maxime
                                                                placeat facere commodo Nunc tempor amet massa diam
                                                                mauris Risus sodales interdum.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="link-box centred">
                                            <a href="faqs/index.html"><span>Read More</span></a>
                                        </div>
                                    </div>
                                </section>
                                {/* <!-- faq-section end --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;