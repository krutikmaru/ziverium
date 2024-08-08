import { supabaseClient } from "../supabase/supabase";

export const useSupabase = () => {
  const getSession = async () => {
    const {
      data: { session },
    } = await supabaseClient.auth.getSession();
    const { access_token, refresh_token }: any = session;
    await setSession(access_token, refresh_token);
    return session;
  };
  const refreshSession = async () => {
    const {
      data: { session },
    } = await supabaseClient.auth.refreshSession();
    return session;
  };
  const setSession = async (access_token: string, refresh_token: string) => {
    const { data, error } = await supabaseClient.auth.setSession({
      access_token,
      refresh_token,
    });
    return true;
  };
  return {
    setSession,
    refreshSession,
    getSession,
  };
};
