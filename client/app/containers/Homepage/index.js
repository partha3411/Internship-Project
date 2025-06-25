import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import actions from '../../actions';
import banners from './banners.json';
import CarouselSlider from '../../components/Common/CarouselSlider';
import { responsiveOneItemCarousel } from '../../components/Common/CarouselSlider/utils';
import React from 'react';

class Homepage extends React.PureComponent {
  render() {
    return (
        <div className='homepage'>
          {/* Full-width carousel */}
          <div className='home-carousel mb-4'>
            <CarouselSlider
                swipeable={true}
                showDots={true}
                infinite={true}
                autoPlay={false}
                slides={banners}
                responsive={responsiveOneItemCarousel}
            >
              {banners.map((item, index) => (
                  <img key={index} src={item.imageUrl} className='w-100' />
              ))}
            </CarouselSlider>
          </div>

          {/* 3-column image row below the slider */}
          {/*<Row className='px-3'>*/}
          {/*  <Col xs='12' md='4' className='mb-3'>*/}
          {/*    <div className='d-flex flex-column h-100 justify-content-between'>*/}
          {/*      <img src='/images/banners/banner-2.jpg' className='mb-3 img-fluid' />*/}
          {/*      <img src='/images/banners/banner-5.jpg' className='img-fluid' />*/}
          {/*    </div>*/}
          {/*  </Col>*/}
          {/*  <Col xs='12' md='4' className='mb-3 d-flex align-items-center justify-content-center'>*/}
          {/*    <img src='/images/banners/banner-2.jpg' className='img-fluid' />*/}
          {/*  </Col>*/}
          {/*  <Col xs='12' md='4' className='mb-3 d-flex align-items-center justify-content-center'>*/}
          {/*    <img src='/images/banners/banner-6.jpg' className='img-fluid' />*/}
          {/*  </Col>*/}
          {/*</Row>*/}

          {/* ==== Top Brands Section ==== */}
          <div className='top-brands-section px-3 mb-5'>
            <div className='d-flex justify-content-between align-items-center mb-3'>
              <h5 className='mb-0'>Top Brands</h5>
              {/*<a href='/brands' className='text-primary'>View All</a>*/}
            </div>
            <Row className='gx-3'>
              {[1, 2, 3, 4, 5,6].map((id) => (
                  <Col xs='6' md='2' key={id} className='mb-3'>
                    <div className='text-center border rounded p-2 h-100'>
                      <img src={`/images/brands/brand-${id}.png`} className='img-fluid' alt={`brand-${id}`} />
                    </div>
                  </Col>
              ))}
            </Row>
          </div>

          {/* ==== Top Sales Section (2 rows of 5 products) ==== */}
            {/* ==== Top Sales Section (5 static products) ==== */}
            <div className='top-sales-section px-3 mb-5'>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <h5 className='mb-0'>Top Sales</h5>
                    {/*<a href='/sales' className='text-primary'>View All</a>*/}
                </div>
                <Row className='gx-3'>

                    {/* Product 1 */}
                    <Col xs='6' md='2' className='mb-4'>
                        <div className='border p-3 text-center h-100'>
                            <img src='https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg' className='img-fluid mb-2' alt='Product 1' />
                            <h6 className='mb-1'>Pexels Electronics</h6>
                            <p className='text-muted small mb-0'>$99.99</p>
                        </div>
                    </Col>

                    {/* Product 2 */}
                    <Col xs='6' md='2' className='mb-4'>
                        <div className='border p-3 text-center h-100'>
                            <img src='https://singerbd.com/media/catalog/product/cache/482df9e5219860e2561c4ec99993e0ed/s/l/sle43u5000gotv_1.jpg' className='img-fluid mb-2' alt='Product 2' />
                            <h6 className='mb-1'>SINGER Sleek TV</h6>
                            <p className='text-muted small mb-0'>$249.99</p>
                        </div>
                    </Col>

                    {/* Product 3 */}
                    <Col xs='6' md='2' className='mb-4'>
                        <div className='border p-3 text-center h-100'>
                            <img src='https://singerbd.com/media/catalog/product/cache/482df9e5219860e2561c4ec99993e0ed/p/i/picture1_1_.jpg' className='img-fluid mb-2' alt='Product 3' />
                            <h6 className='mb-1'>SINGER Fridge X1</h6>
                            <p className='text-muted small mb-0'>$319.99</p>
                        </div>
                    </Col>

                    {/* Product 4 - Hair Dryer */}
                    <Col xs='6' md='2' className='mb-4'>
                        <div className='border p-3 text-center h-100'>
                            <img src='https://singerbd.com/media/catalog/product/cache/482df9e5219860e2561c4ec99993e0ed/p/e/personal-care_1400-x-1400-px-1.jpg' className='img-fluid mb-2' alt='Hair Dryer' />
                            <h6 className='mb-1'>Hair Dryer | NaturoGlow</h6>
                            <p className='text-muted small mb-0'>$29.99</p>
                        </div>
                    </Col>

                    {/* Product 5 - Kieslect Actor */}
                    <Col xs='6' md='2' className='mb-4'>
                        <div className='border p-3 text-center h-100'>
                            <img src='https://transcomdigital.com/_next/image?url=https%3A%2F%2Ftranscom-storage.s3.amazonaws.com%2F2eb459e3-036e-4c2f-ac2a-2a2039c4a351%2Fddd04b35-531a-4fe0-bc10-d4103d6bf2a6%2Fimages%2Fe905110a-180b-470d-8cb3-2382a81fe205&w=1500&q=100' className='img-fluid mb-2' alt='Kieslect Actor' />
                            <h6 className='mb-1'>Kieslect Actor 1.6"</h6>
                            <p className='text-muted small mb-0'>$49.99</p>
                        </div>
                    </Col>

                    <Col xs='6' md='2' className='mb-4'>
                        <div className='border p-3 text-center h-100'>
                            <img src='https://transcomdigital.com/_next/image?url=https%3A%2F%2Ftranscom-storage.s3.amazonaws.com%2F2eb459e3-036e-4c2f-ac2a-2a2039c4a351%2Fddd04b35-531a-4fe0-bc10-d4103d6bf2a6%2Fimages%2Fe9040f0a-3b08-43e6-9a3a-4728ecfdbda1&w=1500&q=100' className='img-fluid mb-2' alt='Kieslect Actor' />
                            <h6 className='mb-1'>FONENG BL34 Neckband"</h6>
                            <p className='text-muted small mb-0'>$49.99</p>
                        </div>
                    </Col>

                </Row>
            </div>


        </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, actions)(Homepage);
