// emoji.tsx
import React, { useState } from 'react';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import './emoji.css';

const Emoji = () => {
  const [currentEmoji, setCurrentEmoji] = useState(null);

  return (
    <div className='emoji'>
      <div className='aabbbb'>
        <h1 className='nbr'>{currentEmoji || 'Ruh halinizi seçin'}</h1>
        
        <button className='btn btn-primary' onClick={() => setCurrentEmoji('')}>
          Emoji seçici
        </button>

        <div className='d-block custom-picker'>
          <Picker
            data={data}
            previewPosition='none'
            onEmojiSelect={(e) => setCurrentEmoji(e.native)}
          />
        </div>
      </div>
    </div>
  );
};

export default Emoji;
