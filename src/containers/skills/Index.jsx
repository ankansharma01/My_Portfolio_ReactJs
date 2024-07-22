import React from 'react'
import PageHeader from '../../components/pageHeader/Index'
import { BsInfoCircleFill } from 'react-icons/bs'
import { skillsData } from './utils'
import {Animate, AnimateKeyframes} from "react-simple-animate"
import {Line} from 'rc-progress'
import "./styles.scss"

const Skills = () => {
  return (
    <section id='skills' className='skills'>
    <PageHeader headerText='My Skills' icon={<BsInfoCircleFill size={40}/>}/>
       <div className='skills__content-wrapper'>
           {
            skillsData.map((item,index)=>
            (<div key={index} className='skills__content-wrapper__inner-content'>
              <Animate
              play
              duration={1}
              delay={0.3}
              start={{transform:"translateX(-200px)"}}
              end={{transform:"translateX(0px)"}}
              >
                  
               <h3 className='skills__content-wrapper__inner-content__category-text'>
              {item.label}
               </h3>

               <div>
                {
                  item.data.map((skills,j)=>(
                    <AnimateKeyframes 
                    play
                    duration={1}
                    keyframes={["opacity : 1", "opacity: 0"]}
                    iterationCount="1">
                      <div className='progressbar-wrapper' key={j}>
                        <p>{skills.skillName}</p>
                        <Line
                          percent={skills.percentage}
                          strokeWidth="4"
                          strokeColor="#70C247"
                          trailWidth="4"
                          strokeLinecap="square"
                        />
                      </div>
                    </AnimateKeyframes>
                  ))
                }
               </div>
              </Animate>
            </div>))   }
       </div>
        </section>
  )
}

export default Skills
