import { createClient } from "@supabase/supabase-js";

// Set these in your .env file locally and in Vercel environment variables:
// VITE_SUPABASE_URL=https://your-project-id.supabase.co
// VITE_SUPABASE_ANON_KEY=your-anon-key

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Storage bucket name — create this in Supabase Dashboard > Storage
export const CV_BUCKET = "cv-files";
