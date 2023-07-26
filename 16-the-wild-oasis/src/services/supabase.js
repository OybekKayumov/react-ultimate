/* eslint-disable no-undef */
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ffglytqkuxpsyimghhhi.supabase.co'

// const supabaseKey = import.meta.env.SUPABASE_KEY
const supabaseKey = ''
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
