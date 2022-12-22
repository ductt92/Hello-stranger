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
            I know we haven’t known much about each other, but I want to give a
            small present which I had to struggle to do it. And I know it’s not
            really impressive to you, but I hope you like it. Merry Christmas,
            my new friend. Hope to know you more ^^ LOL if you like this small
            gift.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NextStep;
