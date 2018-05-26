import React, { Component } from 'react';
import Card from '../Card/Card.js'
import cleanTenData from '../../dataCleaner/cleanTenData.js'

const TenDay = () => {
  render() {
    return (
      
      <div>
      <Card 
        dayName = {cleanTenData()[1].day}
        image= {cleanTenData()[1].img}
        high = {cleanTenData()[1].high}
        low = {cleanTenData()[1].low}
      />
      </div>
      )
  }
}

export default TenDay;