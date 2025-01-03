import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeBlogFields {
  slug: EntryFieldTypes.Symbol;
  title: EntryFieldTypes.Symbol;
  date: EntryFieldTypes.Date;
  eyecatch: EntryFieldTypes.AssetLink;
  body: EntryFieldTypes.RichText;
}

export type TypeBlogSkeleton = EntrySkeletonType<TypeBlogFields, "blog">;
export type TypeBlog<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeBlogSkeleton, Modifiers, Locales>;
