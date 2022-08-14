import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import CreateTemplate from '../../../components/AddTemplate'
import { useDispatch, useSelector } from 'react-redux';
import { blogStateType, getBlogItem } from '../../../store/blogs/reducer';
import { RootState } from '../../../store/types';

const Blog = (props: any) => {
  const router = useRouter()
  const isEdit = !!router.query.id;
  const dispatch = useDispatch();
  const { blogItem, isLoading } = useSelector<RootState>(state => state.blog) as blogStateType;
  useEffect(() => {
    if (isEdit) {
      dispatch(getBlogItem({ id: router.query.id }))
    }
  }, [isEdit])
  return (
    <>
    <p>hi</p>
      {blogItem && <CreateTemplate blogItem={blogItem} title={isEdit ? "Edit Blog" : "Create Blog"} />}
    </>
  )
}
export default Blog
