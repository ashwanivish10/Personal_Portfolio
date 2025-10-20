// api/counter.js
import { kv } from '@vercel/kv';

export default async function handler(request, response) {
  try {
    // Increment the 'views' key in the KV store by 1
   
    const views = await kv.incr('views');

    // Allow requests from your website for CORS
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET');

    // Send the new count back as a JSON response
    return response.status(200).json({ views });

  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}