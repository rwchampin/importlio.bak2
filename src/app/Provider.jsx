import { createServerSupabaseClient } from '@/app/supabase-server';

export default function Provider({ children }) {
  const supabase = createServerSupabaseClient();

  return (
    <SupabaseContext.Provider value={supabase}>
      {children}
    </SupabaseContext.Provider>
  );
};
