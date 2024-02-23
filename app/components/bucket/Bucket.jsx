"use client"
import React, { useState, useEffect , useRef} from 'react'
import Draggable from 'react-draggable';

const DraggableElement = ({name,index,initialPosition ,parentRef}) => {



    const [activeDrags, setActiveDrags] = useState(0);

    const [controlledPosition, setControlledPosition] = useState(initialPosition);

    const onControlledDrag = (e, position) => {
        const { x, y } = position;
    
        setControlledPosition({ x , y });
    };

    const onStart = () => {
        setActiveDrags((prevActiveDrags) => prevActiveDrags + 1);
    };

    const onStop = () => {
        setActiveDrags((prevActiveDrags) => prevActiveDrags - 1);
    };

    const dragHandlers = { onStart, onStop };


    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setControlledPosition((prevPosition) => ({ x: prevPosition.x + 1, y: prevPosition.y + 1}));
    //     }, 1000);

    //     return () => clearInterval(interval);

    // }, []);



    return (
        <Draggable bounds="parent" position={controlledPosition} onDrag={onControlledDrag}>
            <div className="w-fit ">
                <div className="handle cursor-grab"> <div className='w-fit h-auto border-[1px] py-[4px] px-[12px] rounded-[99px] hero-top-button '>
                    <span className='font-normal text-[13px] text-[#fff]'>{name}</span>
                </div></div>
            </div>
        </Draggable>
    )
}

const Bucket = () => {

    const parentRef = useRef();

    const ButtonList = [
        { id: '1', name: 'Freelancers', x: 5, y: 5 },
        { id: '2', name: 'Brand Designers', x: 150, y: 10 },
        { id: '3', name: 'YouTubers', x: 200, y: 20 },
        { id: '4', name: 'Software Engineers', x: 350, y: 25 },
        { id: '5', name: 'Videographers', x: 300, y: 30 },
        { id: '6', name: 'Risk Takers', x: 220, y: 40 },
        { id: '7', name: 'UX/UI Engineers', x: 705, y: 25 },
        { id: '8', name: 'Photographers', x: 850, y: -150 },
        { id: '9', name: 'Founders', x: 605, y: -100 },
        { id: '10', name: 'Cyber Security Experts', x: 900, y: -60 },
        { id: '11', name: 'Inventors', x: 730, y: -180 },
        { id: '12', name: 'Content Writers', x: 1000, y: -250 },
        { id: '13', name: 'Social Media Influencers', x: 600, y: -300 },
        { id: '14', name: 'Architectures', x: 580, y: -400 },
        { id: '15', name: 'Content Creators', x: 100, y: -320},
        { id: '16', name: 'Digital Media consultants', x: 600, y: -200 },
        { id: '17', name: 'Digital Marketers', x: 950, y: -520 },
        { id: '18', name: 'Graphic Designers', x: 420, y: -550 },
        { id: '19', name: 'Brand Designers', x: 350, y: -400 },
      ];
      

    return (
      <div className="relative h-[380px]" ref={parentRef}>
        {ButtonList.map((data, index) => (
          <DraggableElement key={index} parentRef={parentRef} name={data.name} index={index} initialPosition={{ x: data.x , y: data.y   }}/>
        ))}
      </div>
    );

}

export default Bucket