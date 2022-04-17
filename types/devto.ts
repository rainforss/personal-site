export interface BatchArticle {
  id: number;
  title: string;
  description: string;
  published_at: string;
  slug: string;
  url: string;
  positive_reactions_count: number;
  page_views_count: number;
  comments_count: number;
  cover_image: string;
  tag_list: string[];
  reading_time_minutes: number;
  canonical_url: string;
  body_markdown: string;
  body_html: string;
}

export interface SingleArticle {
  id: number;
  title: string;
  description: string;
  published_at: string;
  slug: string;
  url: string;
  positive_reactions_count: number;
  page_views_count: number;
  comments_count: number;
  cover_image: string;
  tags: string[];
  reading_time_minutes: number;
  canonical_url: string;
  body_html: string;
}
