import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { FaDumbbell } from 'react-icons/fa';

const Header = () => {
  return (
    <header className='bg-primary text-light'>
      <div className='container mx-auto px-8 flex justify-between items-center h-20'>
        <div className='text-bold text-3xl flex gap-2 items-center'>
          <FaDumbbell className='text-secondary text-5xl' />
          <span className='uppercase'>Gymo</span>
        </div>
        <nav className='flex gap-8 items-center text-lg uppercase'>
          <CustomLink to='/'>Home</CustomLink>
          <CustomLink to='/blogs'>Blogs</CustomLink>
          <CustomLink to='/manageitems'>Manage Items</CustomLink>
          <CustomLink to='/additem'>Add Item</CustomLink>
          <CustomLink to='/myitems'>My Items</CustomLink>
          <CustomLink to='/signin'>Sign In</CustomLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
