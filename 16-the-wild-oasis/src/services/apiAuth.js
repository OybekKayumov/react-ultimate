import supabase from "./supabase";

export async function Login({email, password}) {
  
  const { data, error } = await supabase.auth.signInWithPassword({
    // email: 'someone@email.com',
    // password: 'nxpsZwxYaiCrJXMaZVCM'
    email,
    password
  });

  if(error) throw new Error(error.message);

  console.log(': ', data);
  return data;
}
