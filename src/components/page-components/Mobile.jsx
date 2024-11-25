import React from 'react';
import apps1 from "../../assets/images/apps-1.jpg";
import shape7 from '../../assets/images/shape/shape-7.png';
import icon25 from '../../assets/images/icons/icon-25.png';
import icon26 from '../../assets/images/icons/icon-26.png';

const Mobile = () => {
    return (
        <section
            class="elementor-section elementor-top-section elementor-element elementor-element-c58829b elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="c58829b" data-element_type="section">
            <div class="elementor-container elementor-column-gap-default">
                <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-826558f"
                    data-id="826558f" data-element_type="column">
                    <div class="elementor-widget-wrap elementor-element-populated">
                        <div class="elementor-element elementor-element-cfa3618 elementor-widget elementor-widget-bullion_mobile_app"
                            data-id="cfa3618" data-element_type="widget"
                            data-settings="{&quot;bullion_layout_margin&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;bullion_layout_margin_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;bullion_layout_margin_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;bullion_layout_padding&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;bullion_layout_padding_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;bullion_layout_padding_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true}}"
                            data-widget_type="bullion_mobile_app.default">
                            <div class="elementor-widget-container">
                                {/* <!-- apps-section --> */}
                                <section class="apps-section bg-color-1">
                                    <div class="pattern-layer" style={{ backgroundImage: `url(${shape7})` }} />
                                    <div class="auto-container">
                                        <div class="row clearfix">
                                            <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                                <div class="image-box">
                                                    <figure class="image">
                                                        <img decoding="async" src={apps1} alt="Awesome Image" />
                                                    </figure>
                                                    <div class="image-content">
                                                        <div class="text-box">
                                                            <h2>4.7<span>Million +</span></h2>
                                                            <p>Installation</p>
                                                        </div>
                                                        <ul class="rating clearfix">
                                                            <li><i class="flaticon-star"></i></li>
                                                            <li><i class="flaticon-star"></i></li>
                                                            <li><i class="flaticon-star"></i></li>
                                                            <li><i class="flaticon-star"></i></li>
                                                            <li><i class="flaticon-star"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                                <div class="content-box">
                                                    <div class="sec-title">
                                                        <span class="sub-title">Mobile App</span>
                                                        <h2>Gives a Platform to <br />Trade from
                                                            <span>Anywhere</span> <br />in The World</h2>
                                                    </div>
                                                    <div class="text-box">
                                                        <p>Minus id quod maxime place at facere possimus, omnis
                                                            voluptas assu- menda omnis dolors repellendus tempor.
                                                        </p>
                                                    </div>
                                                    <div class="inner-box">
                                                        <div class="single-item">
                                                            <div class="icon-box">
                                                                <img decoding="async" src={icon25} alt="Awesome Image" />
                                                            </div>
                                                            <h3>Market updates</h3>
                                                            <p>Natus error sit voluptatem accusantium laudantium.
                                                            </p>
                                                        </div>
                                                        <div class="single-item">
                                                            <div class="icon-box">
                                                                <img decoding="async" src={icon26} alt="Awesome Image" />
                                                            </div>
                                                            <h3>Notification feature</h3>
                                                            <p>Rem aperiam eaque ipsa quae ab illo inventore
                                                                veritatis.</p>
                                                        </div>
                                                    </div>
                                                    <div class="btn-box">
                                                        <a href="company/index.html"
                                                            class="theme-btn btn-three"><span>Official
                                                                App</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* <!-- apps-section end --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mobile;