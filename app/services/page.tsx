"use client";

import React from 'react'
import { Header, ServicesDisplay } from '../components'
import ServicesPages from '../components/ServicesPages';
import Footer from '../components/Footer';
import ServicesInfo from '../components/ServiceInfo';



const page = () => {
  return (
    <>
    <Header searchValue={''} setSearchValue={function (value: React.SetStateAction<string>): void {
              throw new Error('Function not implemented.')
          } }/>
         <ServicesInfo searchValue={''}/>
          <Footer/>
    </>
  )
}

export default page