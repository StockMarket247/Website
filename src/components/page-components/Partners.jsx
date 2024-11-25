import React from 'react';
import client1 from '../../assets/images/clients/clients-1.png';
import client2 from '../../assets/images/clients/clients-2.png';
import client3 from '../../assets/images/clients/clients-3.png';
import client4 from '../../assets/images/clients/clients-4.png';
import client5 from '../../assets/images/clients/clients-5.png';

const Partners = () => {
    return (
        <section
            class="elementor-section elementor-top-section elementor-element elementor-element-031ab4d elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="031ab4d" data-element_type="section">
            <div class="elementor-container elementor-column-gap-default">
                <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c799764"
                    data-id="c799764" data-element_type="column">
                    <div class="elementor-widget-wrap elementor-element-populated">
                        <div class="elementor-element elementor-element-1448fcd elementor-widget elementor-widget-bullion_bullion_partners"
                            data-id="1448fcd" data-element_type="widget"
                            data-settings="{&quot;bullion_layout_margin&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;bullion_layout_margin_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;bullion_layout_margin_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;bullion_layout_padding&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;bullion_layout_padding_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;bullion_layout_padding_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true}}"
                            data-widget_type="bullion_bullion_partners.default">
                            <div class="elementor-widget-container">
                                {/* <!-- clients-section --> */}
                                <section class="clients-section">
                                    <div class="auto-container">
                                        <div class="inner-container">
                                            <div class="title-box">
                                                <div class="sec-title">
                                                    <span class="sub-title">Our Partners</span>
                                                    <h2><span>Partners</span> Around the World </h2>
                                                </div>
                                                <div class="title-text">
                                                    <p>Place at facere possimus omnis volupta assum <br />enda est
                                                        omnis dolor repellendus.</p>
                                                </div>
                                            </div>
                                            <div class="clients-box">
                                                <figure class="clients-logo">
                                                    <a href="#">
                                                        <img decoding="async" src={client1} alt="Awesome Image" />
                                                    </a>
                                                </figure>
                                                <figure class="clients-logo">
                                                    <a href="#">
                                                        <img decoding="async" src={client2} alt="Awesome Image" />
                                                    </a>
                                                </figure>
                                                <figure class="clients-logo">
                                                    <a href="#">
                                                        <img decoding="async" src={client3} alt="Awesome Image" />
                                                    </a>
                                                </figure>
                                                <figure class="clients-logo">
                                                    <a href="#">
                                                        <img decoding="async" src={client4} alt="Awesome Image" />
                                                    </a>
                                                </figure>
                                                <figure class="clients-logo">
                                                    <a href="#">
                                                        <img decoding="async" src={client5} alt="Awesome Image" />
                                                    </a>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* <!-- clients-section end --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;