import gql from "graphql-tag";
import apolloClient from "./apollo-client";

type BlogProps = {
  title: string;
  slug: string;
  tags: string[];
  category: string;
  publishDate: string;
  heroImage: {
    url: string;
  };
  body: string;
  description: string;
};

export async function getAllPosts(): Promise<BlogProps[]> {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        blogPostCollection(
          where: { slug_exists: true }
          order: publishDate_DESC
          preview: false
        ) {
          items {
            heroImage {
              url(
                transform: {
                  width: 300
                  height: 150
                  resizeStrategy: FILL
                  resizeFocus: CENTER
                  backgroundColor: "rgb:321032"
                  format: JPG
                  quality: 90
                }
              )
            }
            slug
            title
            tags
            category
            publishDate
            body
            description
          }
        }
      }
    `,
  });
  return data.blogPostCollection.items;
}

export async function getPostBySlug(slug: string): Promise<BlogProps> {
  const { data } = await apolloClient.query({
    query: gql`
      query PageBySlug($slug: String!) {
        blogPostCollection(where: { slug: $slug }) {
          items {
            heroImage {
              url(
                transform: {
                  width: 600
                  height: 300
                  resizeStrategy: FILL
                  resizeFocus: CENTER
                  format: JPG
                  quality: 90
                }
              )
            }
            slug
            title
            tags
            category
            publishDate
            body
          }
        }
      }
    `,
    variables: {
      slug,
    },
  });
  return data.blogPostCollection.items[0];
}
