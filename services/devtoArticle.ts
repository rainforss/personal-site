import axios from "axios";
import { BatchArticle, SingleArticle } from "../types/devto";

export const devtoService = (apiKey: string) => {
  return {
    getAllMyArticles: async (size: number) => {
      const result = await axios.get(
        `https://dev.to/api/articles/me?page=1&per_page=${size}`,
        {
          headers: { "api-key": apiKey },
        }
      );
      return result.data as BatchArticle[];
    },
    getMyArticlesByPage: async (pageNumber: number, pageLimit: number) => {
      const result = await axios.get(
        `https://dev.to/api/articles/me/published?page=${pageNumber}&per_page=${pageLimit}`,
        {
          headers: { "api-key": apiKey },
        }
      );
      return result.data as BatchArticle[];
    },
    getArticleById: async (id: string) => {
      const result = await axios.get(`https://dev.to/api/articles/${id}`, {
        headers: { "api-key": apiKey },
      });
      return result.data;
    },
    getArticleBySlug: async (slug: string) => {
      const result = await axios.get(
        `https://dev.to/api/articles/rainforss/${slug}`,
        {
          headers: { "api-key": apiKey },
        }
      );
      return result.data as SingleArticle;
    },
  };
};
