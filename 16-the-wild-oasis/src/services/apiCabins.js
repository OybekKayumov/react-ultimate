import supabase, {supabaseUrl} from "./supabase";

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

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
      ? newCabin.image
      : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. create cabin
  let query = supabase.from('cabins')
  // const { data, error } = await supabase
  // .from('cabins')
  // .insert([newCabin])
  // A) CREATE
  if(!id) query = query.insert([{...newCabin, image: imagePath}])
    // .select()
    // .single();

  // B) EDIT
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const {data, error} = await query.select().single();
  
  if (error) {
    console.error(error);
    throw new Error('Cabins could not be created!')
  }

  // 2. upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-omages")
    .upload(imageName, newCabin.image);

    // 3. Delete the cabin IF there was an error uplaoding image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase
    .from('cabins')
    .delete()
    .eq('id', id)

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be deleted!')
  }

  return data;
}
