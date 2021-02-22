/**
 * This hook centralizes and streamlines handling of HTTP calls
 *
 * More examples:
 * https://www.bitnative.com/2020/07/06/four-ways-to-fetch-data-in-react/
 */
import { useState, useEffect, useRef } from "react";

export default function getArticles(items, init) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const prevInit = useRef();
  const prevUrl = useRef();
  console.log('items 2', items);
  const articleId = items[0].id;
  const url = `${process.env.OCC_UI_URL}/api/v1/publications/journals/articles/${articleId}/getArticle`;

  useEffect(() => {
  // Only refetch if url or init params change.
    if (prevUrl.current === url && prevInit.current === init) return;
    prevUrl.current = url;
    prevInit.current = init;
    fetch(url, init)
      .then(response => {
        if (response.ok) return response.json();
        // setError(response);
      })
      .then(data => setData([data]))
      .catch(err => {
        console.error(err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [init, items]);

  return { data, loading, error };
}
