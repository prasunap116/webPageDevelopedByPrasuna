import React from 'react'

import './MainPage.css'
import { MdHome } from "react-icons/md";
import { BsFileBarGraph } from "react-icons/bs";
import { BsBagCheck } from "react-icons/bs";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaCartPlus } from "react-icons/fa6";
import { IoBagCheckSharp } from "react-icons/io5";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import { TbCurrentLocation } from "react-icons/tb";
import { CiBurger } from "react-icons/ci";
import { RiShutDownLine } from "react-icons/ri";
import { LiaConciergeBellSolid } from "react-icons/lia";
import { FaAngleRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { TbShoppingBagX } from "react-icons/tb";
import goal from './images/goal.png';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';


const mainPage = () => {
  return (
    <main style={{'display':'flex'}}>
        <section className='verticalMenu'>
          <Table hover>
            <tbody>
              <tr>
                
                <td className='tab1'>
                  <MdHome style={{'width':'50px'}}/>
                </td>
                
              </tr>
              <tr>
                <td className='tab1'>
                <BsFileBarGraph />
                </td>
                
              </tr>
              <tr>
                <td className='tab1'>
                <MdOutlineAccountBalanceWallet />
                </td>
                
              </tr>
              <tr>
                <td className='tab1'>
                <BsBagCheck />
                </td>
                
              </tr>
            </tbody>
          </Table>
          <Table hover>
            <tbody>
              
              <tr>
                <td className='tab1'>
                <RiShutDownLine />
                </td>
                
              </tr>
            </tbody>
          </Table>
        </section>
        <section style={{'width':'90%','backgroundColor':'#000'}}>
          <Container>
      
            {/* first Row */}
              <Row className='heading'>
                <Col>
                  DashBoard
                </Col>
                
              </Row>
              <Row>
                  <Col  xs={12} md={4} lg={4}>
                    <Row>
                      <Col sm={6} md={6} className='col1'>
                      
                        <Table className='subTable1'>
                            <tbody>
                                <tr>

                                  <td className='tab2'><FaCartPlus style={{'backgroundColor':'rgb(14 143 193)','color':'rgb(10 31 178)','border':'2px solid rgb(14 143 193)','borderRadius':'2px'}}/></td>

                                </tr>
                                <tr>
                                  <td className='tab2'>Total orders</td>
                                </tr>
                                <tr>
                                  <td className='tab2'>75 
                                    <span className='text' style={{'textAlign':'right','marginLeft':'auto'}}>
                                        
                                        <BiSolidUpArrow/>
                                        3%
                                    </span>
                                    

                                  </td>
                                  
                                </tr>
                              </tbody>
                          </Table>
                      
                                                            
                      </Col>
    
                      <Col sm={6} md={6} className='col1'>
                        <Table className='subTable1' >
                            <tbody>
                              <tr>
                                <td className='tab2'><IoBagCheckSharp style={{'backgroundColor':'#cbe2cb','color':'#11a911','border':'2px solid #cbe2cb','borderRadius':'2px'}}/></td>
                              </tr>
                              <tr>
                                <td className='tab2'>Total Delivered</td>
                              </tr>
                              <tr>
                                <td className='tab2'>70
                                <span  className='text1'>
                                  <BiSolidDownArrow/>
                                    3%
                                </span>
                                </td>
                                
                              </tr>
                            </tbody>
                        </Table>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} md={4} lg={4}>
                    <Row>
                      <Col sm={6} md={6} className='col1'>
                      <Table className='subTable1'>
                          <tbody>
                            <tr>

                              <td className='tab2'><TbShoppingBagX style={{'backgroundColor':'rgb(231 143 169)','color':'rgb(169 45 17)','border':'2px solid rgb(231 143 169)','borderRadius':'2px'}}/></td>

                            </tr>
                            <tr>
                              <td className='tab2'>Total Cancelled</td>
                            </tr>
                            <tr>
                              <td className='tab2'>05
                                <span className='text'>

                                  <BiSolidUpArrow/>
                                  3%
                                </span>
                              </td>
                              
                            </tr>
                          </tbody>
                        </Table>
                      </Col>
      
                      <Col sm={6} md={6} className='col1'>
                        <Table className='subTable1' >
                          <tbody>
                            <tr>
                              <td className='tab2'><AiFillDollarCircle style={{'backgroundColor':'rgb(205 137 207)','color':'rgb(170 4 167)','border':'2px solid rgb(205 137 207)','borderRadius':'2px'}}/></td>
                            </tr>
                            <tr>
                              <td className='tab2'>Total Revenue</td>
                            </tr>
                            <tr>
                              <td className='tab2'>$12K
                              <span className='text1'>
                              <BiSolidDownArrow/>
                              3%
                              </span>
                              </td>
                              
                            </tr>
                          </tbody>
                        </Table>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm={12} md={4} lg={4}>
                    <Row>
                        <Col style={{'display':'flex'}}>
                          <Table className='subTable2' >
                            <tbody>
                              <tr>
                                <td className='tab2'>Net Profit</td>
                                
                                
                              </tr>
                              <tr>
                                <td className='tab2'>$6759.25</td>
                                
                              </tr>
                              <tr>
                                
                                <td style={{'display':'flex','color':'green'}} className='tab2'>
                                <BiSolidUpArrow style={{'paddingTop':'5px'}}/>
                                3%
                                </td>
                                
                              </tr>
                            </tbody>
                          </Table>
                        
                          <Table className='subTable2'>
                            <tbody>
                              <tr>
                                <td className='tab2'>
                                    <img src={goal} style={{'width':'100%'}}/>
                                </td>
                              </tr>
                              <tr>
                                <td className='tab2' style={{'fontSize':'6px','textAlign':'center'}}>
                                    The values here hasbeen rounded off
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                          
                        </Col>
                    </Row>
                  </Col>
              </Row>
            {/* Second Row */}  

              <Row>
                <Col sm={12} md={8}>
                  <img src={img1} style={{'width':'100%'}}/>
                </Col>
                <Col sm={12} md={4}>
                <Table className='subTable1' style={{'marginTop':'5px'}}>
                  <tbody>
                    <tr>
                      
                      <td className='tab3'>
                        
                        <TbCurrentLocation  style={{'border':'0px solid #da9d9d','borderRadius':'24px', 'backgroundColor':'#da9d9d','color':'#cf3838','width':'100%'}}/>
                         
                      </td>
                      
                      <td className='tab3'>Goals</td>
                      <td className='tab3'><FaAngleRight className='rightArrow'/></td>
                    </tr>
                    <tr>
                      
                        <td className='tab3'>
                          <CiBurger  style={{'border':'2px solid #8383e6','borderRadius':'24px', 'backgroundColor':'#8383e6','width':'100%','color':'#111160'}}/>
                        </td>
                      
                      <td className='tab3'>Popular Dishes</td>
                      <td className='tab3'><FaAngleRight className='rightArrow'/></td>
                    </tr>
                    <tr>
                    
                      <td className='tab3'><LiaConciergeBellSolid style={{'border':'2px solid #add9ad','borderRadius':'24px', 'backgroundColor':'#add9ad','color':'green','width':'100%'}}/></td>
                    
                      <td className='tab3'>Menus</td>
                      <td className='tab3'><FaAngleRight className='rightArrow'/></td>
                      
                      
                    </tr>
                  </tbody>
                </Table>
                </Col>
              </Row>

            {/* Third Row */}
            <Row className='heading1'>
              <Col>Recent Orders</Col>
            </Row>
            <Row style={{'paddingTop':'10px'}}>
                <Col sm={12} md={8}>
                
                  <Table striped hover>
                  
                    <thead>
                      
                      <tr className='dataRow'>
                        <th className='data1'>Custmer</th>
                        <th className='data1'>Order No.</th>
                        <th className='data1'>Amount</th>
                        <th className='data1'>Status</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='dataRow'>
                        <td data-label="Custmer" className='data'>
                          <img src={img2} style={{"width":'20%'}}/>Wadw
                        </td>
                        <td data-label="Order No." className='data'>1453678</td>
                        <td data-label="Amount"className='data'>$124.00</td>
                        <td data-label="Status" className='data data2'>
                          <span style={{'border':'2px solid #add9ad','borderRadius':'24px', 'backgroundColor':'#add9ad','color':'green','width':'100%'}}>
                            
                            Delivered
                          </span>
                        </td>
                      </tr>
                      <tr className='dataRow'>
                        <td data-label="Custmer" className='data'> <img src={img4} style={{"width":'20%'}}/> Jane</td>
                        <td data-label="Order No." className='data'>15632738</td>
                        <td data-label="Amount" className='data'>$365.02</td>
                        <td data-label="Status" className='data data2'>
                          <span style={{'border':'2px solid #add9ad','borderRadius':'24px', 'backgroundColor':'#add9ad','color':'green','width':'100%'}}>
                            
                            Delivered
                          </span>
                        </td>
                      </tr>
                      <tr className='dataRow'>
                        <td data-label="Custmer" className='data'> <img src={img3} style={{"width":'20%'}}/>Hakvi</td>
                        <td data-label="Order No." className='data'>7639324</td>
                        <td data-label="Amount" className='data'>$45.88</td>
                        <td data-label="Status" className='data data2'>
                          <span style={{'border':'0px solid #da9d9d','borderRadius':'24px', 'backgroundColor':'#da9d9d','color':'#cf3838','width':'100%'}}>
                            Cancelled
                          </span>
                        </td>
                      </tr>
                      <tr className='dataRow'>
                        <td data-label="Custmer" className='data'> <img src={img2} style={{"width":'20%'}}/> Kristin</td>
                        <td data-label="Order No." className='data'>67768798</td>
                        <td data-label="Amount" className='data'>65.00</td>
                        <td data-label="Status" className='data data2'>
                          <span style={{'border':'0px solid #da9d9d','borderRadius':'24px', 'backgroundColor':'#da9d9d','color':'#cf3838','width':'100%'}}>
                            Pending
                          </span>
                        </td>
                      </tr>
                      <tr className='dataRow'>
                        <td data-label="Custmer" className='data'> <img src={img4} style={{"width":'20%'}}/>Cody</td>
                        <td data-label="Order No." className='data'>7665679788</td>
                        <td data-label="Amount" className='data'>545.00</td>
                        <td data-label="Status" className='data data2'>
                          <span style={{'border':'2px solid #add9ad','borderRadius':'24px', 'backgroundColor':'#add9ad','color':'green','width':'100%'}}>
                            
                            Delivered
                          </span>
                        </td>
                      </tr>
                      <tr className='dataRow'>
                        <td data-label="Custmer" className='data'> <img src={img5} style={{"width":'20%'}}/> Savah</td>
                        <td data-label="Order No." className='data'>384729</td>
                        <td data-label="Amount" className='data'>128.20</td>
                        <td data-label="Status" className='data data2'>
                          <span style={{'border':'2px solid #add9ad','borderRadius':'24px', 'backgroundColor':'#add9ad','color':'green','width':'100%'}}>
                            
                            Delivered
                          </span>
                        </td>
                      </tr>
                      
                    </tbody>
                  </Table>
                </Col>
                <Col sm={12} md={4}>
                  <Table style={{'textAlign':'left'}}>
                      <tbody>
                      <tr>
                            <td className='data'>
                              
                              <span className='name'>Custmer's Feedack</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='data'>
                              <img src={img2} style={{'width':'15%'}}/>
                              <span className='name'>Jenny Wilson</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='data' style={{"color":'#dada0f'}}>
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar style={{'color':'grey'}}/>
                            </td>
                        </tr>
                        <tr>
                            <td className='feedback data'>
                              The food was Excellent and so was the service .i have chicke which is awesome.
                            </td>
                        </tr>
                        
                        <tr>
                            <td className='data'>
                              <img src={img3} style={{'width':'15%'}}/>
                              <span className='name'>Dianne Russel</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='data' style={{"color":'#dada0f'}}>
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                            </td>
                        </tr>
                        <tr>
                            <td className='feedback data'>
                              We enjoyed the eggs Benedit served on Home made foccacia bread and hot coffee.Perfect Service
                            </td>
                        </tr>
                        <tr>
                            <td className='data'>
                              <img src={img4} style={{'width':'15%'}}/>
                              <span className='name'>Devan Lane</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='data' style={{"color":'#dada0f'}}>
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar style={{'color':'grey'}}/>
                            </td>
                        </tr>
                        <tr>
                            <td className='feedback data'>
                              We enjoyed the eggs Benedit served on Home made foccacia bread and hot coffee.Perfect Service
                            </td>
                        </tr>
                      </tbody>
                  </Table>
                </Col>
            </Row>
            
          </Container>
        </section>
    </main>
  )
}

export default mainPage
