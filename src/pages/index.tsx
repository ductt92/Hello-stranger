import { TypeAnimation } from 'react-type-animation';

import { stringHtml } from '@/utils/ultils';
import { useRouter } from 'next/router';

const HomePage = () => {
  const DURATION = 1000;
  const router = useRouter();
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

      <div className='snowflake'>❄</div>

      <div className='snowflake'>❄</div>

      <div className='snowflake'>❄</div>

      <div className='snowflake'>❄</div>

      <div className='snowflake'>❅</div>

      <div
        dangerouslySetInnerHTML={{ __html: stringHtml }}
        className='h-[70vh] w-screen text-center'
      />
      <div className='h-[30vh]'>
        <TypeAnimation
          sequence={[
            `Knock! Knock! I'm Santa Baby 🎅😝🎅 `,
            DURATION,
            'I know we haven’t known much about each other',
            DURATION,
            'but I want to give a small present which I had to struggle to do it.',
            DURATION,
            'And I know this may not really impressive to you, but I hope you like it.',
            DURATION,
            'Merry Christmas, my new friend.',
            DURATION,
            'Hope to know you more ^^ LOL if you like this small gift.',
            DURATION,
          ]}
          speed={65}
          wrapper='h2'
          className='snowCss text-center text-xl text-[#f5576c]'
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default HomePage;
