import logo from '@/assets/logosaas.png';
import Image from 'next/image';
import SocialX from '@/assets/social-x.svg';
import SocialInsta from '@/assets/social-insta.svg';
import SocialLinkedIn from '@/assets/social-linkedin.svg';
import SocialPin from '@/assets/social-pin.svg';
import SocialYoutube from '@/assets/social-youtube.svg';

export const Footer = () => {
  return (
    <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
      <div className="container">
        <div className="inline-flex relative">
            <Image src={logo} alt='logo image' height={40} className='relative'/>  
        </div>
        
        <nav className='flex flex-col gap-6 mt-6 md:flex-row md:justify-center'>
          <a href="">About</a>
          <a href="">Features</a>
          <a href="">Customer</a>
          <a href="">Pricing</a>
          <a href="">Help</a>
          <a href="">Careers</a>
        </nav>
        <div className='flex justify-center gap-6 mt-6'>
        <SocialX />
        <SocialInsta />
        <SocialLinkedIn />
        <SocialPin />
        <SocialYoutube />
        </div>
        <p className='mt-6'>
          &copy; 2024 Saas Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
