import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import CreateTemplate from '../../../components/AddTemplate'
import { useDispatch, useSelector } from 'react-redux';
import { projectStateType, getProjectItem } from '../../../store/projects/reducer';
import { RootState } from '../../../store/types';

const Project = (props: any) => {
  const router = useRouter()
  const dispatch = useDispatch();
  const { projectItem, isLoading } = useSelector<RootState>(state => state.project) as projectStateType;
  
  useEffect(() => {
    if (router.query.id) {
      dispatch(getProjectItem({ id: router.query.id }))
    }
  }, [router.query.id])
  return (
    <>
      {projectItem && <CreateTemplate blogItem={projectItem} title={"Edit Content"} isProject={true} />}
    </>
  )
}
export default Project
