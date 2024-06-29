import {createClient} from "@supabase/supabase-js"

// const supabaseUrl = 'https://napmvbtaxiyqnmhekoto.supabase.co'
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hcG12YnRheGl5cW5taGVrb3RvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxOTQwODEzNywiZXhwIjoyMDM0OTg0MTM3fQ.SEb6yxez3kanWIuK96AxMi3xkZU6vb56xGkWcDu0O3s'

// export const superbase = createClient(supabaseUrl, supabaseKey)

export const superbase=createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
)