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

      <div
        onClick={() => {
          router.push('/nextStep');
        }}
        dangerouslySetInnerHTML={{ __html: stringHtml }}
        className='h-[70vh] w-screen text-center'
      />
      <div className='h-[30vh]'>
        <TypeAnimation
          sequence={[`Knock! Knock! I'm Santa Baby 🫶🫶🫶`, DURATION]}
          speed={70}
          wrapper='h2'
          className='snowCss text-center text-xl text-[#f5576c]'
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default HomePage;
