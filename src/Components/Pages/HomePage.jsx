import React from 'react'
import Hero from '../Hero'
import Models from '../Models'
import FormSection from '../FormSection'
import WeeklyHighlight from '../WeeklyHighlight'
import LatestSales from '../LatestSales'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Models />
      <FormSection />
      <WeeklyHighlight />
      <LatestSales />
    </>
  )
}

export default HomePage