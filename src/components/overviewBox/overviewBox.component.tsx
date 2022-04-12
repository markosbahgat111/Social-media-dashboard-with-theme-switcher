import { ICardData } from 'components/socialBox/socialBox.component'
import React from 'react'
import './style.scss';
interface Props{
    card: ICardData,
    theme:boolean
}

const OverviewBox:React.FC<Props> = ({card, theme}) => {
  return (
      <div className='w-full md:w-auto flex flex-col md:flex-row items-center justify-between flex-wrap gap-6 m-auto'>
          <div className='overviewbox_container flex flex-col justify-between items-center' id={theme? "dark" : "light"}>
            <p className='w-full flex flex-row justify-between items-start'>
                Page Views <img src={card.icon} alt={card.name} />
            </p>
            <div className='flex justify-between items-center flex-row w-full'>
                <h1 className='font-bold text-3xl'>{card.pageViews}</h1>
                <p className='flex items-center flex-row gap-2 green'>
                    <img src="/images/icon-up.svg" alt="iconUp" />
                    {card.overviewPercentage.likes}%
                </p>
            </div>
          </div>
          <div className='overviewbox_container flex flex-col justify-between items-center' id={theme? "dark" : "light"}>
          <p className='w-full flex flex-row justify-between items-start'>
                Likes <img src={card.icon} alt={card.name} />
            </p>
              <div className='flex justify-between items-center flex-row w-full'>
                  <h1 className='font-bold text-3xl'>{card.likes}</h1>
                    <p className='flex items-center flex-row gap-2 green'>
                        <img src="/images/icon-up.svg" alt="iconUp" />
                        {card.overviewPercentage.likes}%
                    </p>
            </div>
        </div>
    </div>
  )
}

export default OverviewBox