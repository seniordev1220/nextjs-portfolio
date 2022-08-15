import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import CreateTemplate from '../../../components/AddTemplate'
import { useDispatch, useSelector } from 'react-redux';
import { blogStateType, getBlogItem } from '../../../store/blogs/reducer';
import { RootState } from '../../../store/types';

const Blog = (props: any) => {
  const router = useRouter()
  const dispatch = useDispatch();
  const { blogItem, isLoading } = useSelector<RootState>(state => state.blog) as blogStateType;
  console.log("blog", blogItem, router)
  useEffect(() => {
    if (router.query.id) {
      dispatch(getBlogItem({ id: router.query.id }))
    }
  }, [router.query.id])
  return (
    <>
      {blogItem && <CreateTemplate blogItem={blogItem} title={"Edit Content"} />}
    </>
  )
}
export default Blog
