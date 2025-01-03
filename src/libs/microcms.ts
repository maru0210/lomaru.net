import {
  createClient,
  type MicroCMSListContent,
  type MicroCMSQueries,
} from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export type Blog = {
  slug: string;
  title: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  body: string;
} & MicroCMSListContent;

export const getBlogs = async (queries?: MicroCMSQueries) => {
  return await client.getList<Blog>({ endpoint: "blog", queries });
};

export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  return await client.getListDetail<Blog>({
    endpoint: "blog",
    contentId,
    queries,
  });
};
