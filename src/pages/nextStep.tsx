import { stringHtml } from '@/utils/ultils';
import React from 'react';

const NextStep = () => {
  return (
    <div className='snowflakes' aria-hidden='true'>
      <div className='snowflake'>❅</div>
      <div className='snowflake'>❅</div>
      <div className='snowflake'>❆</div>
      <div className='snowflake'>❄</div>
      <div className='snowflake'>❅</div>
      <div className='snowflake'>❆</div>
      <div className='snowflake'>❄</div>
      <div className='snowflake'>❅</div>
      <div className='snowflake'>❆</div>
      <div className='snowflake'>❄</div>
      <div className='snowflake'>❆</div>
      <div className='snowflake'>❄</div>
      <div className='snowflake'>❆</div>
      <div className='snowflake'>❄</div>
      <div
        dangerouslySetInnerHTML={{ __html: stringHtml }}
        className='hidden'
      />
      <div className='abc h-[640px] w-[360px] '>
        <div className='snowCss w-full text-center'>
          <p className='bg-[#41bdf4] text-[#fff]'>
            Merry Christmas, my new friend.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NextStep;
