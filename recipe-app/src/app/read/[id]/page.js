const dbURL = process.env.NEXT_PUBLIC_DB_URL;

export default async function Read(props) {
    const recipeId = props.params.id;
    const resp = await fetch(dbURL+`recipe/${recipeId}`);
    const recipe = await resp.json();
    return (
      <div>
        <p>
          Recipe ID: {recipeId}
        </p>
        <p>
            레시피 이름: {recipe.title}
        </p>
        <p>
            레시피 설명: {recipe.body}
        </p>
      </div>  
    );
}