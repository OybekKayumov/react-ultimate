import supabase from "./supabase";

export async function getCabins() {
  
  const { data, error } = await supabase
    .from('cabins')
    .select('*')

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded!')
  }

  // if everything is well, return data
  return data;
}