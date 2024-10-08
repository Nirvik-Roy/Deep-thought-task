import React, { useState, useEffect } from 'react'
import './Home.css'
import data from '../file.json'
import Navbar from './Navbar'
import I from '../assets/Group 1736.png'
import bulb from "../assets/bulb.png"
import chat from '../assets/chat.png'
import message from '../assets/message.png'
import candle from '../assets/candle.png'
import left from '../assets/arrow-curve-left-down.png'
import right from '../assets/arrow-curve-left-right.png'
import ex from '../assets/arrow-expand-02.png'
import leftarrow from '../assets/Screenshot from 2024-06-19 11-58-44 1.png'
import rightarrow from '../assets/Screenshot from 2024-06-19 11-58-44 1 (1).png'
import one from '../assets/1.png'
import x from '../assets/x-01.png'
import question from '../assets/question-mark (2) 1.png'
import meeting from '../assets/meeting 1.png'
import schedule from '../assets/schedule (1) 1.png'

const Home = () => {
  const [display,setdisplay]=useState('none')
  const [display1,setdisplay1]=useState('')
  const [transform,settransform]=useState(-65)
  const setdisplayfunc =()=>{
    setdisplay('none')
    setdisplay1('')
    settransform(-65)
  }
  const setdisplay1func =()=>{
    setdisplay('')
    setdisplay1('none')
    settransform(0)
  }
  let text1='Notice'
  let text2="Board"
  // useEffect(()=>{
  //    let splittext1=text1.split('')
  //    settext(splittext1)
  //    let splittext2 =text2.split('')
  //    setsplit(splittext2)
  // },[])
  return (
    <>
    <Navbar/>
      <section className='home-section' >
         {/* <div className='description text-dark'>
         {data.tasks.map((e,index)=>{
             return <>
             <p key={index}>{e.task_description}</p>
             {e.assets.map((ele,index)=>(
    
                 index==0 ? <p>{ele.asset_description}{index}</p>:""
            ))}
             </> 

            
         })}
           <p></p>
         </div> */}

         <div className='container-div'>
            <div className='wrapper'>
              <div className='d-flex justify-content-between'>
                <div className='technical-management'>
                    <p className='technical-para poppins-regular'>Technical Project Management</p>
                </div>
                <div className='submit-div'>
                    <button className='submit-button'>Submit task</button>
                </div>
</div>

                <div className='explore-div'>
                  <p className='explore-title poppins-bold'>Explore the world of management</p>
                  
                  {data.tasks.map((e,index)=>{
             return <>
             <p className='poppins-regular' id='explore-para' key={index}>{e.task_description}</p>
             
             </> 

            
         })}
                </div>

            <div className='d-flex justify-content-center'>
              <div className='wrapper-2'>
                <div className='content-div'>
                  <div className='content-head'>

                    {data.tasks.map((e,index)=>{
                      return <>
                      <p className=''>{e.assets.map((ele,index)=>{
                        if(index==0){
                          return <>
                          <p className='poppins-regular content-head-para' key={index}>{ele.asset_title}</p>
                          </> 
                          
                        }
                      })}</p>
                      <div className='content-head3 d-flex justify-content-center'>
                      <img src={I}></img>
                    </div>
                    
                    
                  
                    


                   
                      </>
                    })}
                  </div>
                {data.tasks.map((e)=>{
                  return <>

                  <div className='mt-3 description-div'> 
                  <p>{e.assets.map((element,index)=>{
                        if(index==0){
                          return <>
                          <span className='description-span'>Description: </span><p className='poppins-regular d-inline description-para' key={index}>{element.asset_description}</p>
                          </>
                        }
                      })}</p>

</div>

                  <div className='video-div'>
                      <iframe className='video' src= {e.assets.map((elee,index)=>{
                          if(index==0){
                           
                             return elee.asset_content
                          } 
})}>
                      </iframe>
                    </div>
                  </>
                })}
      


                </div>
                <div className='content-div'>
                <div className='content-head'>

{data.tasks.map((e,)=>{
  return <>
  <p className=''>{e.assets.map((ele,index)=>{
    if(index==1){
      return <p className='poppins-regular content-head-para' key={index}>{ele.asset_title}</p>;
    }
  })}</p>
  </>
})}



<div className='content-head2 d-flex justify-content-center'>
  <img src={I}></img>
</div>
</div>

{data.tasks.map((e)=>{
  return <>
  <div className='mt-3 description-div1'> 
                  <p>{e.assets.map((element,index)=>{
                        if(index==1){
                          return <>
                          <span className='description-span'>Description: </span><p className='poppins-regular d-inline description-para' key={index}>{element.asset_description}</p>
                          </>
                        }
                      })}</p>

</div>
  </>
})}
<div className='thread-A-div'>
<i class="fa-solid fa-angle-up"></i>
  <p className='poppins-regular thread-A-para'>Thread A</p>
</div>




<div className='sub-div d-flex justify-content-between'>
<div>
  <div className='sub-thread'>
  <p className='poppins-regular sub-thread-para'>Sub thread 1</p>
  </div>
  <div className='sub-text'>
    <input type='text' className='sub-text-input' placeholder='Enter Text here'></input>
  </div>
  <div className='d-flex justify-content-end'>
    <div className='images-div'>
       <img className='me-3' src={bulb}></img>
       <img className='me-3' src={chat}></img>
       <img  className='me-3'src={message}></img>
       <img  src={candle}></img>
    </div>
  </div>
  <button className='btn'>+ Sub-thread</button>
</div>

<div>
  <div className='sub-thread'>
  <p className='poppins-regular sub-thread-para'>Sub interpretation 1</p>
  </div>
  <div className='sub-text'>
    <input type='text' className='sub-text-input' placeholder='Enter Text here'></input>
  </div>
  <div className='drop-down-divs w-100'>
    <select className='drop-down'>
      <option value='Select Categ'>Select Categ</option>
    </select>
    <select className='drop-down1'>
    <option value='Select Categ'>Select Proces</option>
    </select>
  </div>
 
  </div>
  
</div>


<div className=' sub-thread1'>
  <p className='poppins-regular sub-thread-para'>Summary for Thread A</p>
  </div>
  <div className='sub-text1'>
    <input type='text' className='sub-text-input1' placeholder='Enter Text here'></input>
  </div>

  


                </div>
                




               

                <div className='content-div'>
                <div className='content-head'>

{data.tasks.map((e,)=>{
  return <>
  <p className=''>{e.assets.map((ele,index)=>{
    if(index==2){
      return <p className='poppins-regular content-head-para' key={index}>{ele.asset_title}</p>;
    }
  })}</p>
  </>
})}



<div className='content-head2 d-flex justify-content-center'>
  <img src={I}></img>
</div>
</div>

{data.tasks.map((e)=>{
  return <>
  <div className='mt-4 description-div2'> 
                  <p>{e.assets.map((element,index)=>{
                        if(index==2){
                          return <>
                          <span className='description-span'>Description: </span><p className='poppins-regular d-inline description-para' key={index}>{element.asset_description}</p>
                          </>
                        }
                      })}</p>

</div>
  </>
})}

<div className='title-main'>
  <p className='title-head'>Title</p>
  <div className='title-div'>
  
  </div>
</div>
<div className='content-main'>
  <p className='content-div-head'>Content</p>
  <div className='content-head-div'>
  <div className='d-flex content-details'>
    <a>File</a>
    <a>Edit</a>
    <a>View</a>
    <a>Insert</a>
    <a>Format</a>
    <a>Tools</a>
    <a>Table</a>
    <a>Help</a>
    </div>
    <div className=' content-details1'>
      <div className='arrow-left'>
        <img src={right}></img>
      </div>
      <div className='arrow-right'>
      <img src={left}></img>
      </div>
      <div className='ex'>
      <img src={ex}></img>
      </div>
      <div className='paragraph mt-2'>Paragraph</div>
      <div className='dots d-inline'>
      <i class="fa-solid fa-ellipsis fa-1"></i>
      </div>
    </div>
  </div>
  <div className='content-div-body'></div>
</div>

                </div>







                <div className='content-div'>
                <div className='content-head'>

{data.tasks.map((e,)=>{
  return <>
  <p className=''>{e.assets.map((ele,index)=>{
    if(index==3){
      return <p className='poppins-regular content-head-para' key={index}>{ele.asset_title}</p>;
    }
  })}</p>
  </>
})}



<div className='content-head2 d-flex justify-content-center'>
  <img src={I}></img>
</div>
</div>

{data.tasks.map((e)=>{
  return <>
  <div className='mt-5 description-div3'> 
                  <p>{e.assets.map((element,index)=>{
                        if(index==3){
                          return <>
                          <span className='description-span'>Description: </span><p className='poppins-regular d-inline description-para' key={index}>{element.asset_description}</p>
                          </>
                        }
                      })}</p>

</div>
  </>
})}
<div className='introduction-div'>
<i class="fa-solid fa-angle-up fa-2"></i>
<p className='introduction-para d-inline'>Introduction</p>
</div>

<div className='sa-div'>
  <p className='sa-para'>The 4SA Method , How to bring a idea into progress ?</p>
</div>
<div className='see-more-div d-flex justify-content-end'>
  <p className='see-more-para'>See More</p>
</div>
<div className='thread-a-div'>
<i class="fa-solid fa-angle-up fa-2"></i>
<p className='introduction-para d-inline'>Thread A</p>
</div>
<div className='sa-div1'>
  <p className='sa-para'>How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</p>
</div>
<div className='see-more-div d-flex justify-content-end'>
  <p className='see-more-para'>See More</p>
</div>

<div className='example-div'>
<p className=' example-para'>Example 1</p>
</div>
<p className='last-para'>You have a concept , How will you put into progress?</p>
                </div>










              </div>
            </div>
            </div>
           
            <div className='journey-board-div' style={{translate:`${transform}%`}}>
              <div className='journey-board-head'>
                <p className='journey-board-para'>Journey Board</p>
                <img style={{display:`${display}`}} onClick={(()=>{setdisplayfunc()})} src={rightarrow}></img>
                <img style={{display:`${display1}`}} onClick={(()=>{setdisplay1func()})} src={leftarrow}></img>
              </div>
              <div>
                {data.tasks.map((e)=>{
                     return <>
                      <ul>
                      <li className='li-bold' style={{display:`${display}`}}>{e.task_title}</li>
                      {e.assets.map((ele)=>{
                         return <li className='li' style={{
                          fontFamily:"Poppins",
                          fontSize:"16px",
                           fontWeight:"400",
                           lineHeight:"24px",
                           letterSpacing:"0.02em",
                           textAlign:'left',
                           display:`${display}`,
                           paddingLeft:'20px',
                           marginLeft:'25px'
                        }}>{ele.asset_title}</li> 
                        })}
                      
                      </ul>
                     </>
                })}
                <div className='d-flex justify-content-end'>
                  <div className='one-div' style={{display:`${display1}`}}>
                    <img src={one}></img>
                  </div>
                </div> 
              </div>
            </div>



            <div className='notice-board-main'>
              <div className='notice-board-side'>
                <div>
                  <img className='img-x' src={x}></img>
                </div>
                <div className='text-light mt-4'>
                  {text1.split('').map((e)=>{
                    return <p className='notice-para'>{e}</p>
                  })}
                </div>
                <div className='text-light mt-4'>
                    {text2.split('').map((e)=>{
                      return <p className='board-para'>{e}</p>
                    })}
                </div>
              </div>
            </div>
            <div className='blue-div'>
            <img src={question} className='blue-img'></img>
            </div>
            <div className='blue-div1'>
            <img src={meeting} className='blue-img'></img>
            </div>
            <div className='blue-div2'>
            <img src={schedule} className='blue-img'></img>
            </div>
         </div>
      </section>
    </>
  )
}

export default Home
