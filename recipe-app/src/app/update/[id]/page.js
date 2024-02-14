"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Update(props) {
    const recipeId = props.params.id;
    const [title,setTitle] = useState(""); 
    const [body,setBody] = useState("");
    const router = useRouter();
    
    useEffect(() => {
        console.log("ddfdf");
        fetch(process.env.NEXT_PUBLIC_DB_URL+`recipe/${recipeId}`)
        .then(resp => resp.json())
        .then(result=>{
            setTitle(result.title);
            setBody(result.body);
        })
    },[]);

    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            const title = e.target.title.value;
            const body = e.target.body.value;
            const option = {
                method: "PATCH",
                Headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({title,body})   
            };
                fetch(process.env.NEXT_PUBLIC_DB_URL+`recipe/${recipeId}`,option)
                .then(resp=>resp.json())
                .then(result=>{
                    router.push("/");
                    router.refresh();
                })
            }
        }>
            {recipeId}
            <p>
            <input type="text" name="title"  placeholder="title" value={title} onChange={(e)=>{setTitle(e.target.value);}}></input>
            </p>
            <p>
            <textarea name="body"  placeholder="body" value={body} onChange={(e)=>{setBody(e.target.value);}}></textarea>
            </p>
            <p>
            <input type="submit" value="수정완료"></input> 
            </p>
        </form>
    )
}