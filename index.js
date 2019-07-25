#!/usr/bin/env node

const prompts = require('prompts');

(async () => {

  const response = await prompts({
    type: 'text',
    name: 'value',
    message: 'Timecode (HH:MM:SS:mmmm) : ',
    validate: value => !/\d\d:\d\d:\d\d:\d\d\d\d/.test(value) ? `Wrong timecode format, try again.` : true
  });

  const timeCode = response.value
  
  const timeData = {
    hh: parseInt(timeCode.split(':')[0]), 
    MM: parseInt(timeCode.split(':')[1]),
    ss: parseInt(timeCode.split(':')[2]), 
    mm: parseInt(timeCode.split(':')[3])
  }
  const {hh, MM, ss, mm} = timeData; 
  
  const seconds = (hh * 3600) +  (MM * 60) + ss + (mm / 1000); 
  
  console.table(timeData)
  console.log(`⏱  seconds = ${seconds}`)

})();

