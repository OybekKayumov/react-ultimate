/* eslint-disable no-undef */
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ffglytqkuxpsyimghhhi.supabase.co'
// const supabaseUrl = import.meta.env.VITE_REACT_API_SUPABASE_URL

const supabaseKey = import.meta.env.VITE_REACT_API_SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
