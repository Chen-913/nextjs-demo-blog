import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import dayjs from 'dayjs';
import utilStyles from '../../styles/utils.module.css';
import style from './[id].module.css';
import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  const result = {
    props: {
      postData,
    },
  };
  return result;
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
    // fallback: true,
  };
};

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <time className={style.time} dateTime={postData.created}>
            {postData.created}
          </time>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
