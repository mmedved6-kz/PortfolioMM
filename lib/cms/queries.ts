export const CMS_QUERIES = {
    blogList: "[_type == 'blogPost' && status == 'published'] | order(_updatedAt desc)",
    blogBySlug: "[_type == 'blogPost' && slug.current == $slug][0]",
} as const;