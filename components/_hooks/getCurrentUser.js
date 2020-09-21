/**
 * This hook centralizes and streamlines handling of HTTP calls
 *
 * More examples:
 * https://www.bitnative.com/2020/07/06/four-ways-to-fetch-data-in-react/
 */
import { useState, useEffect, useRef } from "react";

export default function getCurrentUser(init) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const prevInit = useRef();
  const prevUrl = useRef();

  const url = 'http://localhost:3000/api/v1/users/getCurrentUser';

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
      .then(data => setData(data))
      .catch(err => {
        console.error(err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [init]);

  return { data, loading, error };
}
