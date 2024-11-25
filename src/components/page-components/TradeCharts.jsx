import React from 'react';
import shape3 from '../../assets/images/shape/shape-3.png';
import chart1 from '../../assets/images/chart/chart-1.png';
import chart2 from '../../assets/images/chart/chart-2.png';
import chart3 from '../../assets/images/chart/chart-3.png';
import chart4 from '../../assets/images/chart/chart-4.png';
import chart5 from '../../assets/images/chart/chart-5.png';
import chart6 from '../../assets/images/chart/chart-6.png';

const TradeCharts = () => {
    return (
        <section
            class="elementor-section elementor-top-section elementor-element elementor-element-b91b669 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="b91b669" data-element_type="section">
            <div class="elementor-container elementor-column-gap-default">
                <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-81d4d8b"
                    data-id="81d4d8b" data-element_type="column">
                    <div class="elementor-widget-wrap elementor-element-populated">
                        <div class="elementor-element elementor-element-9ccdd07 elementor-widget elementor-widget-bullion_bullion_pricing_plan"
                            data-id="9ccdd07" data-element_type="widget"
                            data-settings="{&quot;bullion_layout_margin&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;bullion_layout_margin_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;bullion_layout_margin_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;bullion_layout_padding&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;bullion_layout_padding_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;bullion_layout_padding_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true}}"
                            data-widget_type="bullion_bullion_pricing_plan.default">
                            <div class="elementor-widget-container">
                                {/* <!-- pricing-section --> */}
                                <section class="pricing-section sec-pad">
                                    <div class="pattern-layer"
                                        style={{
                                            backgroundImage: `url(${shape3})`
                                        }}>
                                    </div>
                                    <div class="auto-container">
                                        <div class="sec-title centred">
                                            <span class="sub-title">Forex Trading</span>
                                            <h2>Top <span>Pricing</span> List in Market</h2>
                                        </div>
                                        <div class="tabs-box">
                                            <div class="tab-btn-box">
                                                <ul class="tab-btns tab-buttons clearfix">
                                                    <li class="tab-btn active-btn" data-tab="#tab-1">
                                                        <h5>Option 01</h5>
                                                    </li>
                                                    <li class="tab-btn " data-tab="#tab-2">
                                                        <h5>Option 02</h5>
                                                    </li>
                                                </ul>
                                                <div class="search-inner">
                                                    <form
                                                        method="post">
                                                        <div class="form-group">
                                                            <input type="search" name="s" value="" placeholder="Search the instruments..." required />
                                                            <button type="submit">
                                                                <i class="flaticon-loupe"></i>
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>

                                            </div>
                                            <div class="tabs-content">
                                                <div class="tab active-tab" id="tab-1">
                                                    <div class="table-outer">
                                                        <table class="pricing-table">
                                                            <thead class="table-header">
                                                                <tr>
                                                                    <th>Name</th>
                                                                    <th>&nbsp;</th>
                                                                    <th>Sell</th>
                                                                    <th>Buy</th>
                                                                    <th>Spread</th>
                                                                    <th>Chart</th>
                                                                    <th>&nbsp;</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div class="name-box">
                                                                            <p>eur<i
                                                                                class="flaticon-exchange"></i>usd
                                                                            </p>
                                                                        </div>
                                                                    </td>
                                                                    <td>&nbsp;

                                                                    </td>
                                                                    <td>
                                                                        $1.06199 </td>
                                                                    <td>
                                                                        $1.06185 </td>
                                                                    <td>
                                                                        <span class="red">-0.14%</span>
                                                                    </td>
                                                                    <td>
                                                                        <div class="chart">
                                                                            <img decoding="async" src={chart1} alt="Awesome Image" />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="platform/index.html"><i
                                                                            class="flaticon-right-down"></i></a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div class="name-box">
                                                                            <p>usd<i
                                                                                class="flaticon-exchange"></i>jpy
                                                                            </p>
                                                                        </div>
                                                                    </td>
                                                                    <td>&nbsp;

                                                                    </td>
                                                                    <td>
                                                                        $1.22195 </td>
                                                                    <td>
                                                                        $1.22199 </td>
                                                                    <td>
                                                                        <span class="green">+0.04%</span>
                                                                    </td>
                                                                    <td>
                                                                        <div class="chart">
                                                                            <img decoding="async" src={chart2} alt="Awesome Image" />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#"><i
                                                                            class="flaticon-right-down"></i></a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div class="name-box">
                                                                            <p>gbp<i
                                                                                class="flaticon-exchange"></i>usd
                                                                            </p>
                                                                        </div>
                                                                    </td>
                                                                    <td>&nbsp;

                                                                    </td>
                                                                    <td>
                                                                        $0.65982 </td>
                                                                    <td>
                                                                        $0.65994 </td>
                                                                    <td>
                                                                        <span class="green">+0.12%</span>
                                                                    </td>
                                                                    <td>
                                                                        <div class="chart">
                                                                            <img decoding="async" src={chart3} alt="Awesome Image" />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="platform/index.html"><i
                                                                            class="flaticon-right-down"></i></a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div class="name-box">
                                                                            <p>aud<i
                                                                                class="flaticon-exchange"></i>usd
                                                                            </p>
                                                                        </div>
                                                                    </td>
                                                                    <td>&nbsp;

                                                                    </td>
                                                                    <td>
                                                                        $0.89652 </td>
                                                                    <td>
                                                                        $0.89665 </td>
                                                                    <td>
                                                                        <span class="green">+0.13%</span>
                                                                    </td>
                                                                    <td>
                                                                        <div class="chart">
                                                                            <img decoding="async" src={chart4} alt="Awesome Image" />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="platform/index.html"><i
                                                                            class="flaticon-right-down"></i></a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div class="name-box">
                                                                            <p>eur<i
                                                                                class="flaticon-exchange"></i>gbp
                                                                            </p>
                                                                        </div>
                                                                    </td>
                                                                    <td>&nbsp;

                                                                    </td>
                                                                    <td>
                                                                        $25.458 </td>
                                                                    <td>
                                                                        $22.398 </td>
                                                                    <td>
                                                                        <span class="red">-3.06%</span>
                                                                    </td>
                                                                    <td>
                                                                        <div class="chart">
                                                                            <img decoding="async" src={chart5} alt="Awesome Image" />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="platform/index.html"><i
                                                                            class="flaticon-right-down"></i></a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div class="name-box">
                                                                            <p>aud<i
                                                                                class="flaticon-exchange"></i>cad
                                                                            </p>
                                                                        </div>
                                                                    </td>
                                                                    <td>&nbsp;

                                                                    </td>
                                                                    <td>
                                                                        $14.785 </td>
                                                                    <td>
                                                                        $13.625 </td>
                                                                    <td>
                                                                        <span class="red">-1.16%</span>
                                                                    </td>
                                                                    <td>
                                                                        <div class="chart">
                                                                            <img decoding="async" src={chart6} alt="Awesome Image" />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="platform/index.html"><i
                                                                            class="flaticon-right-down"></i></a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div class="tab " id="tab-2">
                                                    <div class="table-outer">
                                                        <table class="pricing-table">
                                                            <thead class="table-header">
                                                                <tr>
                                                                    <th>Name</th>
                                                                    <th>&nbsp;</th>
                                                                    <th>Sell</th>
                                                                    <th>Buy</th>
                                                                    <th>Spread</th>
                                                                    <th>Chart</th>
                                                                    <th>&nbsp;</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div class="name-box">
                                                                            <p>eur<i
                                                                                class="flaticon-exchange"></i>usd
                                                                            </p>
                                                                        </div>
                                                                    </td>
                                                                    <td>&nbsp;

                                                                    </td>
                                                                    <td>
                                                                        $1.06199 </td>
                                                                    <td>
                                                                        $1.06185 </td>
                                                                    <td>
                                                                        <span class="red">-0.14%</span>
                                                                    </td>
                                                                    <td>
                                                                        <div class="chart">
                                                                            <img decoding="async" src={chart1} alt="Awesome Image" />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="platform/index.html"><i
                                                                            class="flaticon-right-down"></i></a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div class="name-box">
                                                                            <p>usd<i
                                                                                class="flaticon-exchange"></i>jpy
                                                                            </p>
                                                                        </div>
                                                                    </td>
                                                                    <td>&nbsp;

                                                                    </td>
                                                                    <td>
                                                                        $1.22195 </td>
                                                                    <td>
                                                                        $1.22199 </td>
                                                                    <td>
                                                                        <span class="green">+0.04%</span>
                                                                    </td>
                                                                    <td>
                                                                        <div class="chart">
                                                                            <img decoding="async" src={chart2} alt="Awesome Image" />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#"><i
                                                                            class="flaticon-right-down"></i></a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div class="name-box">
                                                                            <p>gbp<i
                                                                                class="flaticon-exchange"></i>usd
                                                                            </p>
                                                                        </div>
                                                                    </td>
                                                                    <td>&nbsp;

                                                                    </td>
                                                                    <td>
                                                                        $0.65982 </td>
                                                                    <td>
                                                                        $0.65994 </td>
                                                                    <td>
                                                                        <span class="green">+0.12%</span>
                                                                    </td>
                                                                    <td>
                                                                        <div class="chart">
                                                                            <img decoding="async" src={chart3} alt="Awesome Image" />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="platform/index.html"><i
                                                                            class="flaticon-right-down"></i></a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div class="name-box">
                                                                            <p>aud<i
                                                                                class="flaticon-exchange"></i>usd
                                                                            </p>
                                                                        </div>
                                                                    </td>
                                                                    <td>&nbsp;

                                                                    </td>
                                                                    <td>
                                                                        $0.89652 </td>
                                                                    <td>
                                                                        $0.89665 </td>
                                                                    <td>
                                                                        <span class="green">+0.13%</span>
                                                                    </td>
                                                                    <td>
                                                                        <div class="chart">
                                                                            <img decoding="async" src={chart4} alt="Awesome Image" />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="platform/index.html"><i
                                                                            class="flaticon-right-down"></i></a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div class="name-box">
                                                                            <p>eur<i
                                                                                class="flaticon-exchange"></i>gbp
                                                                            </p>
                                                                        </div>
                                                                    </td>
                                                                    <td>&nbsp;

                                                                    </td>
                                                                    <td>
                                                                        $25.458 </td>
                                                                    <td>
                                                                        $22.398 </td>
                                                                    <td>
                                                                        <span class="red">-3.06%</span>
                                                                    </td>
                                                                    <td>
                                                                        <div class="chart">
                                                                            <img decoding="async" src={chart5} alt="Awesome Image" />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="platform/index.html"><i
                                                                            class="flaticon-right-down"></i></a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div class="name-box">
                                                                            <p>aud<i
                                                                                class="flaticon-exchange"></i>cad
                                                                            </p>
                                                                        </div>
                                                                    </td>
                                                                    <td>&nbsp;

                                                                    </td>
                                                                    <td>
                                                                        $14.785 </td>
                                                                    <td>
                                                                        $13.625 </td>
                                                                    <td>
                                                                        <span class="red">-1.16%</span>
                                                                    </td>
                                                                    <td>
                                                                        <div class="chart">
                                                                            <img decoding="async" src={chart6} alt="Awesome Image" /></div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="platform/index.html"><i
                                                                            class="flaticon-right-down"></i></a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="link-box centred">
                                            <a href="markets/index.html"><span>See More</span></a>
                                        </div>
                                    </div>
                                </section>
                                {/* <!-- pricing-section end --> */}


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TradeCharts;