import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import CreateTemplate from "../../../components/AddTemplate";
import { blogStateType, getBlogItem } from "../../../store/blogs/reducer";
import { RootState } from "../../../store/types";

const Blog = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { blogItem } = useSelector<RootState>(
    (state) => state.blog
  ) as blogStateType;

  useEffect(() => {
    if (router.query.id) {
      dispatch(getBlogItem({ id: router.query.id }));
    }
  }, [router.query.id]);
  return (
    <>
      {blogItem && (
        <CreateTemplate
          blogItem={blogItem}
          title={"Edit Content"}
          isProject={false}
        />
      )}
    </>
  );
};
export default Blog;
