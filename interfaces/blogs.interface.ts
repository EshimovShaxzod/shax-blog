export interface BlogsType {
        id: string
        slug: string
        title: string
        excerpt: string
        createdAt: Date
        image: {
          url: string
        }
        description: {
          text: string
          html:TrustedHTML | string
        }
        category?: {
          label: string
          slug: string
        }
        author: {
          name: string
          avatar: {
            url: string
          }
        }
}