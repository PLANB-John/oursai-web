import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uolumqyfittrjeczwjas.supabase.co'; 
const supabaseAnonKey = 'sb_publishable_ChU6aQ9dvtvympL_cyF5Mg_QacFQ25d'; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
