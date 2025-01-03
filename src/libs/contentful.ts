import { createClient } from "contentful";

export const contentfulClient = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken:
    import.meta.env.DEV && false
      ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
      : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host:
    import.meta.env.DEV && false
      ? "preview.contentful.com"
      : "cdn.contentful.com",
});
