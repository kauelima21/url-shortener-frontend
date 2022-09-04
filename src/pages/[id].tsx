import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

export default function UrlRedirect() {
  const router = useRouter();
  const [link, setLink] = useState('');
  const { id } = router.query;
  const { get } = useFetch();

  useEffect(() => {
    if (id) {
      get(`get/${id}`).then(res => {
        setLink(res.data.url.props.originalUrl);
      });
    }
    if (link) {
      window.location.href = link;
    }
  }, [id, link]);

  return <h1>Redirecting...</h1>
}
