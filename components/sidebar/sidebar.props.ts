import { BlogsType } from "@/interfaces/blogs.interface";
import { CategoryType } from "@/interfaces/category.interface";

export interface SidebarProps {
    lastBlogs: BlogsType[],
    category: CategoryType[]
}