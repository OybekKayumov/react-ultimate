import supabase from "./supabase";

export async function login({email, password}) {
  
  const { data, error } = await supabase.auth.signInWithPassword({
    // email: 'someone@email.com',
    // password: 'nxpsZwxYaiCrJXMaZVCM'
    email,
    password
  });

  if (error) throw new Error(error.message);

  // console.log(': ', data);
  return data;
}

export async function getCurrentUser() {
  const {data: session} = await supabase.auth.getSession()

  if (!session.session) return null; 

  const {data, error} = await supabase.auth.getUser()

  console.log('user: ', data);
  
  if (error) throw new Error(error.message);
  
  return data?.user;
}