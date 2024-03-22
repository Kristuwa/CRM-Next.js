"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import getQueryClient from '@/lib/utils/getQueryClient';

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearchClick?: (value: string) => void;
}

export default function SearchInput({
  onSearchClick,
  ...rest
}: SearchInputProps) {
	const [inputValue, setInputValue] = useState('');
	const queryClient = getQueryClient();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	  setInputValue(event.target.value.trim());
	};
 
	const handleClick = () => {
		console.log(inputValue);
		 queryClient.setQueryData(['filterValue'], inputValue );
	};

  return (
    <div className="relative w-96">
      <input
        {...rest}
        type="text"
		  value={inputValue}
        onChange={handleChange}
        className="text-sm flex-1 py-3 pl-3 pr-11 w-full h-11 rounded border border-gray-300 bg-gray-50"
      />
      <button
        type="button"
        className="absolute top-0	right-0 p-3"
        onClick={handleClick}
      >
        <Image
          width={20}
          height={20}
          src="/icons/magnifying-glass.svg"
          alt="search icon"
        />
      </button>
    </div>
  );
}