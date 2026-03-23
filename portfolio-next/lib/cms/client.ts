export function getCmsConfig() {
    return {
        projectId: process.env.CMS_PROJECT_ID ?? "",
        dataset: process.env.CMS_DATASET ?? "production",
        apiVersion: process.env.CMS_API_VERSION ?? "2026-03-23",
    };
}