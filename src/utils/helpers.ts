import { Database } from '@/types_db';

type Price = Database['public']['Tables']['prices']['Row'];

export const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    'http://localhost:3000/';
  // Make sure to include `https://` when not localhost.
  url = url.includes('http') ? url : `https://${url}`;
  // Make sure to including trailing `/`.
  url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;
  return url;
};

export const postData = async ({
  url,
  data
}: {
  url: string;
  data?: { price: Price };
}) => {
  console.log('posting,', url, data);

  const res = await fetch(url, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    credentials: 'same-origin',
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    console.log('Error in postData', { url, data, res });

    throw Error(res.statusText);
  }

  return res.json();
};

export const toDateTime = (secs: number) => {
  var t = new Date('1970-01-01T00:30:00Z'); // Unix epoch start.
  t.setSeconds(secs);
  return t;
};

export const validateURL = (url) => {
  // Regular expression to validate URL format
  const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  
  // Check if URL format is valid
  if (!urlPattern.test(url)) {
    return 'Invalid URL format';
  }
  
  // Check if URL starts with http:// or https://
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return 'URL must start with http:// or https://';
  }
  
  // Additional validation checks if needed
  // ...
  
  // URL is valid
  return null;
}

interface UrlProps {
  urls: string[] | string;
}

export const parseUrls = (urls: string[]) => {
  // get type of the urls, if string, add it to an array,
  // if array, make sure its an array of strings
  // if not, throw error
  


  const parsedUrls = urls.map((url:any) => {
    const parsedUrl = new URL(url);
    return parsedUrl;
  });
  debugger
  return parsedUrls;
}