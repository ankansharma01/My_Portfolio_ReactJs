import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeader from '../../components/pageHeader/Index'

const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio'>
    <PageHeader headerText='My Portfolio' icon={<BsInfoCircleFill size={40}/>}/>
        </section>
  )
}

export default Portfolio
