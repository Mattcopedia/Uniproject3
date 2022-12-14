
       import React from "react"; 
       import { NavLink } from 'react-router-dom';
       import styled from "styled-components";
       import Sidebar from "components/Sidebar";
      //  import welcomeone from "../assets/img/welcome.PNG"; 
      //  import welcometwo from "../assets/img/secondwelcome.PNG";
      import "../components/br.css"

   

       

export default function Dashboard() {  
       
   

    return (   
        <>
        <Sidebar />  

        <div className="bg-white py-5">  

        <div class="max-w-7xl ml-7 heropattern py-11 px-3 mr-7  grid grid-cols-12 ">
              <div class="col-span-12 mt-0.4   md:col-span-12 object-fill lg:col-span-6">

              {/* <img width={700} src={welcomeone} alt="welcome" /> */}
                
              <FlexColumn>
                <FlexRow>
                  <Text10>Welcome Back</Text10>
                  <Text20>🚀</Text20>
                </FlexRow>
                <Text30>Ayomide <br className="responsivemodal"></br> Akinyemi</Text30>
              </FlexColumn>  


              </div>

              <div class="col-span-12 pb-0.5   md:col-span-12 object-fill lg:col-span-6 "> 
              {/* <img width={500} src={welcometwo} alt="welcome" /> */}

              <Paragraph>
            Develop a passion for learning. If you do, you will never cease to grow.
            – <Text40>Anthony J. D’Angelo</Text40>  
          </Paragraph>

              </div>
              </div>


           <div className="flex flex-col mx-10 my-4 lg:flex-row bg-red-50"> 
                    <div> 
                       <p className=" py-3 px-3 not-italic font-normal   text-sm text-gray-900">
                        Got Any Registration issues? can't find a course? Need unblocking for reselection? course form amendment issue? etc. <br></br>
                        The Registration Officer is there for you. 
                        <br></br> 
                        Your department Registration Officer is  
                        <span className="not-italic  ml-2 font-bold text-lg text-purple-900">Engr.B.A.Iyamolere</span> 
                       </p> 
                    </div>


                    <div className="ml-10">
                    <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M0.817871 17.3279C0.817871 7.67305 8.71424 -0.137595 18.4011 0.00183825C27.7844 0.13676 35.4142 7.83203 35.4735 17.216C35.5068 22.4713 33.1998 27.1877 29.5341 30.387C29.1472 30.7245 29.203 31.3407 29.645 31.6021L32.9099 33.534C33.4378 33.8464 33.2163 34.6555 32.6029 34.6555L17.8178 34.6518C8.39928 34.4767 0.817871 26.7881 0.817871 17.3279Z" fill="#7ACAA6"/>
                <path d="M32.9099 33.5341L29.6447 31.6022C29.2051 31.3423 29.1441 30.727 29.5289 30.3914C33.2365 27.1582 35.5555 22.373 35.4715 17.0479C35.326 7.83686 27.871 0.275865 18.6625 0.0075252C17.3567 -0.0305021 16.0823 0.0762752 14.854 0.312388C22.8133 1.83821 28.8792 8.85393 28.9321 17.2159C28.9576 21.2655 27.5936 24.9951 25.2892 27.9572C23.8976 29.7458 24.3499 32.3394 26.3002 33.4935L26.3686 33.5339C26.8906 33.8428 26.6788 34.6365 26.0809 34.6537L32.6027 34.6552C33.2161 34.6556 33.4378 33.8463 32.9099 33.5341Z" fill="#57BE92"/>
                <path d="M85.248 62.8966H45.9389C36.1209 62.8966 30.7481 51.4549 37.0188 43.9001L37.3675 43.4799C40.1299 40.1517 41.642 35.9625 41.642 31.6372V24.0569C41.6422 10.7705 52.4128 0 65.6991 0C78.9855 0 89.756 10.7705 89.756 24.0569V31.8931C89.756 36.2637 91.2999 40.4937 94.1152 43.8369C100.464 51.3762 95.1046 62.8966 85.248 62.8966Z" fill="#C59191"/>
               <path d="M105.911 82.3776V108.365H25.2759V82.5731C25.2759 76.7337 28.7757 71.4636 34.1554 69.1991L47.1728 63.5401L51.5556 61.6345C54.8813 60.1886 57.0319 56.9079 57.0319 53.2813V51.5991H74.1528V53.1954C74.1528 56.837 76.3249 60.1306 79.6743 61.5657L97.2808 69.1132C102.527 71.4378 105.911 76.637 105.911 82.3776Z" fill="white"/>
               <path d="M47.1714 69.736C51.6142 71.0636 58.1534 72.4794 66.1243 72.34C73.6032 72.2093 79.7426 70.755 84.0145 69.3906L86.1372 64.3359L79.6734 61.5655C76.3249 60.1302 74.1537 56.8377 74.1537 53.1944V51.5994H57.0328V53.2812C57.0328 56.9073 54.8817 60.1877 51.5566 61.6336L46.3213 63.9099L47.1714 69.736Z" fill="#FFCEBF"/>
               <path d="M97.2797 69.112L84.017 63.4275L84.0146 63.4277V108.365H105.911V82.3778C105.911 76.6378 102.528 71.4375 97.2797 69.112Z" fill="#8795DE"/>
                <path d="M47.1728 63.541V108.366H25.2759V82.574C25.2759 76.7346 28.7757 71.4645 34.1554 69.2L47.1728 63.541Z" fill="#8795DE"/>
                <path d="M71.5281 60.9967C73.4978 60.9967 75.3747 60.6011 77.0855 59.8874C75.2503 58.1934 74.1537 55.7828 74.1537 53.1946V51.5996H57.0328V53.2812C57.0328 54.5911 56.7508 55.8554 56.2354 57.0049C58.8279 59.4762 62.3352 60.9964 66.1996 60.9964H71.5281V60.9967Z" fill="#FFB09E"/>
                <path d="M82.705 25.8443V40.0079C82.705 47.9872 76.2365 54.4555 68.2574 54.4555H62.929C54.9497 54.4555 48.4814 47.987 48.4814 40.0079V25.8443C48.4814 20.6535 52.6894 16.4453 57.8804 16.4453H73.3062C78.497 16.4455 82.705 20.6535 82.705 25.8443Z" fill="#FFCEBF"/>
                <path d="M82.7051 33.2134C82.6986 33.2329 82.6907 33.2518 82.6849 33.2718C82.1626 35.0754 80.7919 38.4824 77.4794 41.0367C75.9371 42.2263 74.1777 43.0857 72.2505 43.5914C71.377 43.8206 70.8545 44.7146 71.0837 45.5882C71.2767 46.3227 71.939 46.8089 72.6645 46.8089C72.8018 46.8089 72.9415 46.7915 73.0807 46.755C75.4337 46.1375 77.5855 45.085 79.4768 43.6269C80.7829 42.6197 81.8399 41.5072 82.6956 40.3887C82.6988 40.262 82.7053 40.1359 82.7053 40.0082V33.2134H82.7051Z" fill="#7A6D79"/>
                <path d="M70.4569 48.1118H66.6247C64.8804 48.1118 63.4663 46.6977 63.4663 44.9533C63.4663 43.209 64.8804 41.7949 66.6247 41.7949H70.4569C72.2012 41.7949 73.6153 43.209 73.6153 44.9533C73.6151 46.6979 72.2012 48.1118 70.4569 48.1118Z" fill="#685E68"/>
                <path d="M69.0075 12.6966C69.3744 8.06888 73.8049 4.99769 78.0453 3.40698C85.0597 7.60997 89.7558 15.2844 89.7558 24.0567V25.7106C89.368 25.792 88.9821 25.8633 88.6006 25.9202C86.2646 26.2691 84.2753 26.1181 82.9162 25.9202C74.1586 24.7536 68.5642 18.2858 69.0075 12.6966Z" fill="#B98080"/>
                <path d="M65.6988 0C71.1318 0 76.1436 1.80168 80.1709 4.83936C78.1619 8.33508 73.5487 15.2466 64.8985 20.3633C58.4768 24.162 52.4217 25.4384 48.6928 25.9203H41.6421V24.0567C41.6419 10.7705 52.4124 0 65.6988 0V0Z" fill="#C59191"/>
                <path d="M92.5918 108.365H40.2442L37.3569 81.1278C37.1522 79.196 38.6666 77.5125 40.6093 77.5125H92.227C94.1696 77.5125 95.684 79.196 95.4793 81.1278L92.5918 108.365Z" fill="#EFEDEF"/>
                <path d="M92.2262 77.5125H85.6851C87.6277 77.5125 89.1421 79.196 88.9374 81.1278L86.0501 108.365H92.5912L95.4785 81.1278C95.6835 79.196 94.169 77.5125 92.2262 77.5125Z" fill="#E5E1E5"/>
                <path d="M108.389 110H1.61133C0.72123 110 0 109.279 0 108.389C0 107.499 0.72123 106.777 1.61133 106.777H108.389C109.279 106.777 110 107.499 110 108.389C110 109.279 109.279 110 108.389 110Z" fill="#C9BFC8"/>
                <path d="M66.4176 97.5174C68.9464 97.5174 70.9964 95.4674 70.9964 92.9386C70.9964 90.4098 68.9464 88.3599 66.4176 88.3599C63.8888 88.3599 61.8389 90.4098 61.8389 92.9386C61.8389 95.4674 63.8888 97.5174 66.4176 97.5174Z" fill="#C9BFC8"/>
                <path d="M11.6044 18.9635C12.5075 18.9635 13.2396 18.2314 13.2396 17.3283C13.2396 16.4252 12.5075 15.6931 11.6044 15.6931C10.7013 15.6931 9.96924 16.4252 9.96924 17.3283C9.96924 18.2314 10.7013 18.9635 11.6044 18.9635Z" fill="white"/>
                <path d="M18.1459 18.963C19.049 18.963 19.7811 18.2309 19.7811 17.3278C19.7811 16.4247 19.049 15.6926 18.1459 15.6926C17.2428 15.6926 16.5107 16.4247 16.5107 17.3278C16.5107 18.2309 17.2428 18.963 18.1459 18.963Z" fill="white"/>
                <path d="M24.6869 18.963C25.59 18.963 26.3221 18.2309 26.3221 17.3278C26.3221 16.4247 25.59 15.6926 24.6869 15.6926C23.7839 15.6926 23.0518 16.4247 23.0518 17.3278C23.0518 18.2309 23.7839 18.963 24.6869 18.963Z" fill="white"/>
                </svg>  

                    </div>

           </div>

           
           <h1 className="text-left mx-7 text-indigo-900 font-black text-lg">Quick Access</h1>     

           <div className="mx-7 my-4 ">
            <div className="container  mx-auto mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="flex justify-center text-6xl border-2   p-6 bg-gray-100   ">  

                      <WhiteFlexColumnRoot>
                         <Image1 src={`https://file.rendit.io/n/U94vpn9K2cugiCpBJ4sa.svg`} />
                      <Text1>Email</Text1>
                      </WhiteFlexColumnRoot>
                  
                    </div> 



                    <div className="flex justify-center text-6xl border-2 bg-gray-100  p-6 ">
                    <NavLink to="/coursetimetable"> 
                    <WhiteFlexColumnRoot1>
                      <Image2 src={`https://file.rendit.io/n/vPTNTi23BI7Weyw3AYfj.svg`} />
                      <Text2>Time Table</Text2>  
                    </WhiteFlexColumnRoot1>
                    </NavLink>  
                      
                    </div> 

                    <div className="flex  justify-center text-6xl border-2 bg-gray-100 p-6 ">
                        
                        
                        <WhiteFlexColumnRoot1> 
                       <Image2 src={'https://file.rendit.io/n/9dZKME3XfMkXzoPkFzaf.svg'} />
                        <Text2>Library</Text2>
                        </WhiteFlexColumnRoot1>      
                        
       
                        </div>
                            

                    <div className="flex justify-center text-6xl border-2 bg-gray-100   p-6 ">

                    <NavLink to="/social-media"> 
                    <WhiteFlexColumnRoot1>
                        <Image2 src={`https://file.rendit.io/n/5Czvsb1XIcPU9znDOlUB.svg`} />
                        <Text2>Social Media</Text2>
                        </WhiteFlexColumnRoot1>   
                        </NavLink> 

                    </div> 

                </div>
                  </div> 
                   
                   <div className="container mx-auto mb-4"> 
                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                           <div className="flex justify-center text-6xl border-2 -300 bg-gray-100  p-6 ">
                            
                           <WhiteFlexColumnRoot1>
                      <Image2 src={`https://file.rendit.io/n/XrMCEQFfNfjPjtACrJP3.svg`} />
                      <Text2>News</Text2> 
                        </WhiteFlexColumnRoot1>  
                           
                           </div>
                            
                                 
                                
                           <div className="flex justify-center text-6xl border-2  bg-gray-100 p-6 ">
                           <NavLink to="/studentunionaffairs"> 
                           <WhiteFlexColumnRoot1>
                            <Image2 src={`https://file.rendit.io/n/hhb74kb3ZYAINssOSGLv.svg`} />
                            <Text2>Student Union</Text2>
                            </WhiteFlexColumnRoot1>   
                            </NavLink>
                           </div>
                         



                           <div className="flex flex-row justify-center text-6xl border-2 bg-gray-100   p-6 ">
                           <NavLink to="/maps"> 
                           <WhiteFlexColumnRoot1>
                    <Image2 src={`https://file.rendit.io/n/X89tQZt5pZ1g6k8dmuch.svg`} />
                    <Text2>Campus Map</Text2>
                    </WhiteFlexColumnRoot1> 
                    </NavLink> 


                               </div>
       
       
                           <div className="flex justify-center text-6xl border-2 bg-gray-100 p-6 "> 
                           <NavLink to="/help"> 
                           <WhiteFlexColumnRoot1>
                    <Image2 src={`https://file.rendit.io/n/2ktOqIlFZT1TwEQCnevV.svg`} />
                    <Text2>Help</Text2>
                    </WhiteFlexColumnRoot1>    
                    </NavLink> 
                           </div>
                            
                       </div>
                         </div>
                         </div>  

                         <div>

                         </div>
                         </div> 
                  
        </>
    );
}

const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

const WhiteFlexColumnRoot = styled.div`
  
  border-style: solid;
  height: 170px;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 26.78px;
  align-items: center;
  border-radius: 6px;
  padding: 34px 96.78px 34px 97px;
  border-width: 1px; 
`;
const Image1 = styled.img`
 
  width: 55.22px;
  height: 55.22px;
`;
const Text1 = styled.div`
  text-align: center;
  font-size: 18px;
  font-family: Roboto;
  line-height: 27.09px;
  color: #df8909;
`;

const WhiteFlexColumnRoot1 = styled.div`

  border-style: solid;
  height: 170px;
  color: #fafafa; 
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 26.78px;
  align-items: center;
  border-radius: 6px;
  padding: 34px 96.78px 34px 97px;

  margin-left: 10px;  
  margin-right: 10px;  
`;
const Image2 = styled.img`

width: 55.22px;
height: 55.22px;
`;
const Text2 = styled.div`
white-space: nowrap;
display: inline-block;
text-align: left;
font-size: 18px;
font-family: Roboto;
line-height: 27.09px;
color: #2d0353; 
`;




const FlexColumn = styled.div`
  align-self: stretch;
  width: 318px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  justify-content: center;
  align-items: center;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 6px;
  min-width: 318px;
  align-items: center;
`;
const Text10 = styled.div`
  mix-blend-mode: normal;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #ffffff;
`;
const Text20 = styled.div`
  mix-blend-mode: normal;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
`;
const Text30 = styled.div`
  mix-blend-mode: normal;
  font-size: 36px;
  font-family: Product Sans Black;
  line-height: 34.92px;
  color: #ffffff;

  @media ${devices.mobileL} { 
    margin-right: 100px; 
  } 
`;
const Paragraph = styled.div`
  mix-blend-mode: normal;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #ffffff;
  margin: 3px 0px 0px 0px;
  white-space: pre-wrap;
  
`;
const Text40 = styled.div`
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #f2994a;
  display: contents;
`;
