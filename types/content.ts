export type PublishState = "draft" | "published" | "archived";

export interface BlogEntry {
    id: string;
    title: string;
    slug: string;
    topic: string;
    body: string;
    status: PublishState;
    createdAt: string;
    updatedAt: string;
}