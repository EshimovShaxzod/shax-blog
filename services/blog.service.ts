import { BlogsType } from "@/interfaces/blogs.interface";
import { CategoryType } from "@/interfaces/category.interface";
import { request, gql } from "graphql-request";

const graphqlApi = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

export const BlogService = {
  async getAllPosts() {
    const  query = gql`
    query MyQuery {
      blogs {
        id
        slug
        title
        excerpt
        createdAt
        image {
          url
        }
        category {
          label
          slug
        }
        description {
          text
          html
        }
        author {
          name
          avatar {
            url
          }
        }
      }
    }
    `;
    
    const results = await request<{blogs: BlogsType[]}>(graphqlApi, query);
    
    return results.blogs;
  },
  
  async getLatestBlog() {
    const  query = gql`
    query MyQuery {
      blogs(last: 2) {
        id
        slug
        title
        createdAt
        image {
          url
        }
        description {
          text
        }
        author {
          name
          avatar {
            url
          }
        }
      }
    }
    `;
    
    const results = await request<{blogs: BlogsType[]}>(graphqlApi, query);  
    return results.blogs;
  },
  
  async getCategories() {
    const  query = gql`
    query MyQuery {
      categories {
        label
        slug
      }
    }
    `
    
    const results = await request<{categories: CategoryType[]}>(graphqlApi, query);
    return results.categories
  },
  
  async getDetailBlog(slug: string){
    const query = gql`
    query getDetailBlog($slug: String!) {
      blog(where: { slug: $slug }) {
        id
        slug
        title
        excerpt
        createdAt
        image {
          url
        }
        description {
          text
        }
        category {
          label
          slug
        }
        author {
          name
          avatar {
            url
          }
        }
      }
    }
    `
    
    const results = await request<{blog: BlogsType}>(graphqlApi, query, {slug});
    return results.blog
  },

  async getCategoryBlog(slug: string){
    const query = gql`
    query getCategoryBlog($slug: String!) {
      blogs(where: { category: { slug: $slug } }) {
        id
        slug
        title
        excerpt
        createdAt
        image {
          url
        }
        description {
          text
        }
        category {
          label
          slug
        }
        author {
          name
          avatar {
            url
          }
        }
      }
    }
    `
    
    const results = await request<{blogs: BlogsType[]}>(graphqlApi, query, {slug});
    return results.blogs
  },
}