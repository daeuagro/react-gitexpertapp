export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/stickers/search?q=${ encodeURI( category ) }&limit=10&api_key=0V9JlNa4NUMrVNq6aAY6V5LieAtqiJMa`;

    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id : img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

   return gifs;

}