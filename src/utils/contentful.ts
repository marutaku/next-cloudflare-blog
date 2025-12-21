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

type BlogMetaDataProps = {
  title: string;
  slug: string;
  publishDate: string;
  heroImage: {
    url: string;
  };
  description: string;
};

export async function getAllPosts(): Promise<BlogProps[]> {
  const { data } = await apolloClient.query<{
    blogPostCollection: { items: BlogProps[] };
  }>({
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
                  format: WEBP
                  quality: 90
                }
              )
            }
            slug
            title
            tags
            category
            publishDate
            description
          }
        }
      }
    `,
  });
  return data?.blogPostCollection.items || [];
}

export async function getPostBySlug(slug: string): Promise<BlogProps> {
  const { data } = await apolloClient.query<{
    blogPostCollection: { items: BlogProps[] };
  }>({
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
                  format: WEBP
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
  if (!data?.blogPostCollection.items.length) {
    throw new Error(`Post with slug "${slug}" not found`);
  }
  return data.blogPostCollection.items[0];
}

export async function getPostMetadataBySlug(
  slug: string,
): Promise<BlogMetaDataProps> {
  const { data } = await apolloClient.query<{
    blogPostCollection: { items: BlogMetaDataProps[] };
  }>({
    query: gql`
      query PageBySlug($slug: String!) {
        blogPostCollection(where: { slug: $slug }) {
          items {
            heroImage {
              url(
                transform: {
                  width: 1200
                  height: 630
                  resizeStrategy: FILL
                  resizeFocus: CENTER
                  format: WEBP
                  quality: 90
                }
              )
            }
            slug
            title
            publishDate
            description
          }
        }
      }
    `,
    variables: {
      slug,
    },
  });
  if (!data?.blogPostCollection.items.length) {
    throw new Error(`Post with slug "${slug}" not found`);
  }
  return data.blogPostCollection.items[0];
}
