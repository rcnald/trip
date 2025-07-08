import { useEffect, useState } from "react";
import type { Article } from "../types/article";

import axios from 'axios'

export const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get<Article[]>('https://dev.to/api/articles?tag=travel&per_page=12');
        
        setArticles(response.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else {
          setError('Erro desconhecido ao buscar artigos.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return { articles, loading, error };
}