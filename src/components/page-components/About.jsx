import React from 'react';
import about1 from '../../assets/images/about/about-1.jpg';

const About = () => {
    return (
        <section
            class="elementor-section elementor-top-section elementor-element elementor-element-9fa1e53 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="9fa1e53" data-element_type="section">
            <div class="elementor-container elementor-column-gap-default">
                <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0ed134a"
                    data-id="0ed134a" data-element_type="column">
                    <div class="elementor-widget-wrap elementor-element-populated">
                        <div class="elementor-element elementor-element-5ee891e elementor-widget elementor-widget-bullion_bullion_about_us"
                            data-id="5ee891e" data-element_type="widget"
                            data-settings="{&quot;bullion_layout_margin&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;bullion_layout_margin_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;bullion_layout_margin_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;bullion_layout_padding&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;bullion_layout_padding_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;bullion_layout_padding_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true}}"
                            data-widget_type="bullion_bullion_about_us.default">
                            <div class="elementor-widget-container">

                                {/* <!-- about-section --> */}
                                <section class="about-section">
                                    <div class="auto-container">
                                        <div class="row clearfix">
                                            <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                                <figure class="image-box">
                                                    <img decoding="async"
                                                        src={about1}
                                                        alt="Awesome Image" />
                                                </figure>
                                            </div>
                                            <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                                <div class="content-box">
                                                    <div class="sec-title">
                                                        <span class="sub-title">About Bullion</span>
                                                        <h2>In a Fast Moving <br />Market Choose a <span>Stable
                                                            Broker</span></h2>
                                                    </div>
                                                    <div class="inner-box">
                                                        <p>Minus id quod maxime place at facere possimus, omnis
                                                            voluptas assu- menda omnis dolors repellendus tempor.
                                                        </p>
                                                        <div class="quote-box">
                                                            <h4>Everything you need to trade Forex in one place</h4>
                                                        </div>
                                                        <p>Placeat facere possimus omnis voluptas assumenda,</p>
                                                        <ul class="list-item clearfix">
                                                            <li>Scalper</li>
                                                            <li>Day Trader</li>
                                                            <li>Position Trader</li>
                                                            <li>The Swing Trader</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* <!-- about-section end --> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;