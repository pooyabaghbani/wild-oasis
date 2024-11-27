import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lszyyatpqprmkscbwvwl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxzenl5YXRwcXBybWtzY2J3dndsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzNDQwMDYsImV4cCI6MjA0NzkyMDAwNn0.-3hJJwPm4pFrNOetgemE3l13ngRI5Am27aEgkPILrcc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
