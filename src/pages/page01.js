import React, { useEffect, useState } from 'react'
import DataJson from '../source/data.json'
import './mainpage.css'


function Select({jewtp,setJewtp,jewData,setjewData}){

function jewChange(e){
  const typeValue = e.target.value
  const changeValue = ()=>{
    if(typeValue === "all" ){
      return DataJson.map((item) => {return item})
    }
   return DataJson.filter((item) => {return item.type === typeValue})
}
setjewData(changeValue)
setJewtp(typeValue)
}


function priceFilter(e){
  const defaultPrice = jewData
  const prValue = e.target.value
  console.log(defaultPrice)
console.log(prValue)
const changePrice = ()=>{
  if(prValue === 'sortByLowPrice'){
    return jewData.sort((a,b) => a.price - b.price)
  }
  return jewData.sort((a,b) => b.price - a.price)
}
 setjewData(changePrice)
 setJewtp(prValue)

  // list


}
  return(
    <>
  <select defaultValue={jewtp} onChange={jewChange}>
     <option value="all">all</option> 
    <option value="bracelet">bracelet</option> 
     <option value="ring">ring</option>
    <option value="pendant">pendant</option>
    </select>


    <select defaultValue="sortByLowPrice" onChange={priceFilter}>
      <option value="sortByLowPrice">낮은가격순</option>
      <option value="sortByHighPrice">높은가격순</option> 
    </select>
    </>
  )
}


function Figure({items}){

  return (
    <div>
      {
        items.map((items,index)=>{
          return (
            <figure key={index}>
            <img src={items.pic} alt={items.name}/>
            <dl>
              <dt>{items.name}</dt>
            
              <dd>{Number(items.price).toLocaleString('ko')}원</dd>
            </dl>
        </figure>
          )
        })
      }
        
    </div>
  )
}

function Page01(){
const  [jewData, setjewData] = useState(DataJson)
// 변경될 값을 넣는 state 만들기
const [jewtp, setJewtp] = useState('bracelet')



// 함수-> target value 함수 만들기
// function typeOptionValue(selectType){
// console.log(selectType)
// }

  return(
    <>
    <article id="box03">
      <h3><span>Whatever Shining <b>style</b></span></h3>

      <div>
      <Select 
        jewtp={jewtp}
        setJewtp = {setJewtp}
        jewData ={jewData}
        setjewData={setjewData}
        // typeOptionValue ={typeOptionValue} 
        />
      </div>

      <div>
        <Figure items={jewData}  />
        
      </div>
    </article>
    </>
  )
}

export default Page01