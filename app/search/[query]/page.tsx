"use client"
import SearchResulte from '@/components/SearchResulte';
import { useSuperbase } from '@/lib/superbase/Hooks/useSuperbase';
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const SearchPage = () => {
  const { query } = useParams();
  const { filterData,
    getFilterData, } = useSuperbase();

  useEffect(() => {
    getFilterData(query.toString())
  }, [query,getFilterData])



  return (
    <div>
      <SearchResulte filterData={filterData} />
    </div>
  )
}

export default SearchPage
