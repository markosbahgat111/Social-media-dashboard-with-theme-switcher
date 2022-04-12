import { Card } from '@material-ui/core';
import React from 'react'
import './style.scss';

export interface ICardData{
    name:string,
    username:string,
    followers:string,
    todaysFollowers:string,
    pageViews:string,
    likes: string,
    icon: string,
    overviewPercentage:{
        pageViews:string,
        likes:string
    }
}

interface Props{
    card: ICardData,
    theme:boolean
    
}
const SocialBox: React.FC<Props> = ({ card, theme }) => {
    return (
        <div className={`box_container flex flex-col justify-evenly items-center m-auto ${theme ? "dark" : "light"}`} id={card.name}>
            <p className='flex flex-row justify-center items-center gap-3'>
                <img src={card.icon} alt={card.name} />{card.username}
            </p>
            <p className='flex flex-col items-center gap-0'>
              <h1 className='text-6xl font-bold'>{card.followers}</h1>
              <span className='tracking-[5px] font-[12px]'>{card.name === "Youtube"? "SUBSCRIBERS" : "FOLLOWERS"}</span>
            </p>
            <p className='flex items-center gap-2 green'>
              <img src="/images/icon-up.svg" alt="iconUp" />
              {card.todaysFollowers} Today
            </p>
        </div>
  )
}

export default SocialBox