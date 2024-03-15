import React, { MouseEventHandler } from 'react';
import Toolbar from '@/app/components/toolbar';
import SearchInput from '@/app/components/search-input';
import AddCompanyButton from '@/app/components/add-company-button';

export interface PageProps {}

export default function Page({}: PageProps) {
	const handleSearchClick: MouseEventHandler<HTMLButtonElement> = (e) => {
		const value: string = (e.target as HTMLButtonElement).value.trim();
		console.log(value)
  };
  return (
    <Toolbar action={<AddCompanyButton />}>
      <SearchInput onSearchClick={handleSearchClick}/>
    </Toolbar>
  );
}