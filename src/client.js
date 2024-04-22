import { createClient } from '@supabase/supabase-js'

const URL = 'https://rrcqeohtcxnzsalbtszm.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyY3Flb2h0Y3huenNhbGJ0c3ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3MzkxNjgsImV4cCI6MjAyOTMxNTE2OH0.Kv212OS_re2MoWJxHX6beNLyBFErdXhVlgkqsQToAEw';

export const supabase = createClient(URL, API_KEY);