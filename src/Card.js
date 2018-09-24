import React from 'react';

const Card = ({name, jobTitle, id}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 dim bw2 shadow-5'>
            <img className='br-100 ba bw3 b--light-blue bg-washed-blue grow'  src={`https://robohash.org/${id}?200x200`} alt='robots'/>
            <div className='sans-serif'>
                <h2 className='fw6 b--black-50'>{name}</h2>
                <p className='fw3 b--black-50'>{jobTitle}</p>
            </div>
        </div>
    );

}

export default Card;