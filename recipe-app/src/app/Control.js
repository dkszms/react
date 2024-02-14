"use client";

import { useParams, useRouter } from "next/navigation";

export function Control() {
  const router = useRouter();
  const params = useParams();
  const recipeId = params.id;
  const option = {
    method: "DELETE"
  }
  const deleteRecipe = ()=>{
    return(
      fetch(process.env.NEXT_PUBLIC_DB_URL+`recipe/${recipeId}`,option)
      .then()
      .then(()=>{
        router.push("/");
        router.refresh();
      })
    )
  }
  

  return (
    <div>
      <ul>
        <li><input type="button" value="레시피 등록" onClick={
          ()=>router.push("/create")
          }></input></li>
          
        {recipeId?
          <div>
            <li><input type="button" value="레시피 수정" onClick={
              ()=>router.push(`/update/${recipeId}`)
              }></input></li>
            <li><input type="button" value="레시피 삭제" onClick={deleteRecipe}></input></li>
          </div>
        :null}
      </ul>
    </div>
  );
}
