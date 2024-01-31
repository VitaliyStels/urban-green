import Image from 'next/image';
import MovingText from './components/MovingText';

export default function Home() {
  return (
    <main className="">
      <div className="greetings flex flex-col lg:flex-row">
        <div className="urban_green pl-5 pt-20">
            <Image
              className='w-11 rounded-full'
              src="/images/leaf.png"
              width={100}
              height={100}
              alt="leaf"
            /> 
          <div className="title pr-36 pt-1 font-light text-nowrap">
            UrbanGreen Tech
          </div>
        </div>
        <div className="texts font-normal text-5xl lg:text-7xl pl-5">
          <div className="line">Reimagining Ubran Spaces</div>
          <div className="flex flex-row pt-3">
            <div className='bg-accent-color rounded-full pb-2 lg:pb-3  px-3'>
              <p>
              Greening
              </p>
            </div>
            <div className="line">the World</div>
          </div>
        </div>
      </div>



      <div className="flex flex-col lg:flex-row w-full lg:w-11/12 justify-between pt-10 pb-10">
        <div className="our_team bg-accent-color w-100 lg:w-40 lg:rounded-r-[62px]">
          <div className="team_photos flex flex-row relative px-2 py-4 sm:pb-8 items-center justify-center">
            <Image
              className='rounded-full h-12 w-12'
              src="/images/people/person1.png"
              width={100}
              height={100}
              alt='person1'
            />
            <Image
              className='rounded-full top-10 h-14 w-14 -mx-4'
              src="/images/people/person2.png"
              width={50}
              height={50}
              alt='person1'
            />
            <Image
              className='rounded-full h-16 w-16'
              src="/images/people/person3.png"
              width={70}
              height={70}
              alt='person1'
            />
          </div>
          <div className="link text-center font-medium pb-7">
            Our team
          </div>
        </div>
        
        <div className="image1 w-full lg:w-[80%] bg-slate-500  lg:rounded-[62px]">
          <Image
            className='lg:max-h-[280px] object-fill lg:rounded-[62px] '
            src="/images/gh2.png"
            width={1600}
            height={300}
            alt='green_house'
          />
        </div>


      </div>

      <MovingText direction={-1} textOne='Green Design' textTwo='Smart Irrigation systems' bottomBorder={false}/>
      <MovingText direction={1} textOne='Agriculture Consul' textTwo='Urban Farm Autonomy' bottomBorder={true}/>


    </main>
  );
}
