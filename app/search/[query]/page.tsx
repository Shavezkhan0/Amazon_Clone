"use client"
import SearchResulte from '@/components/SearchResulte';
import { useSuperbase } from '@/lib/superbase/Hooks/useSuperbase';
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {
  const { query } = useParams();
  const { filterData,
    getFilterData, } = useSuperbase();

  useEffect(() => {
    getFilterData(query.toString())
  }, [])



  return (
    <div>
      <SearchResulte filterData={filterData} />
    </div>
  )
}

export default page