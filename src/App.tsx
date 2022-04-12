import OverviewBox from 'components/overviewBox/overviewBox.component';
import SocialBox from 'components/socialBox/socialBox.component';
import { useState } from 'react';
import './App.scss';
import data from './data.json';

function App() {
  console.log(data)
  const [theme, setTheme] = useState<boolean>(true);
  return (
    <div className="App" id={`${theme? "dark" : "light"}`}>
      <div className="main_container">
        <section className="first h-1/2 py-9 flex flex-col justify-between">
          <div className='flex flex-col md:flex-row  items-start md:items-center justify-between mb-9'>
            <section className='border-b-[1px] md:border-none border-gray-500 w-11/12 m-auto md:m-0 md:w-auto pb-5'>
                <h1 className='md:text-3xl font-bold text-2xl'>Social Media Dashboard</h1>
                <span>Total Followers: 22,004</span>
            </section>
            <section className='w-11/12 pt-5 m-auto md:m-0 md:pt-0 md:w-auto flex flex-row items-center justify-between gap-9'>
                <h1>{theme ? "Light" : "Dark"} Mode</h1>
                <div className="w-[45px] h-[22px] rounded-full toggle relative" id={`${theme? "dark" : "light"}`}>
                    <i
                        className="transition-all duration-300 ease-in-out delay-150 fa-solid fa-circle text-sm cursor-pointer absolute top-[4px]"
                        onClick={() => setTheme(theme => !theme)}></i>
                </div>
            </section>
          </div>
          <div className='flex flex-col md:flex-row justify-between items-center flex-wrap gap-5'>
            {data.map(card => (
              <SocialBox card={card} theme={theme}/>
            ))}
          </div>
        </section>
        <section className="second h-1/2 my-5 flex flex-col justify-between gap-5">
          <h1 className='text-2xl font-bold mb-3'>Overview - Today</h1>
          <div className='flex flex-col md:flex-row items-center justify-between flex-wrap gap-5'>
            {data.map(card => (
              <OverviewBox card={card} theme={theme}/>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
