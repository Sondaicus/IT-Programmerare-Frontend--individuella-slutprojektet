"use client"

import { usePathname, useSearchParams , useRouter } from "next/navigation";
import React from "react";
import { getCorrectUrlPushPath } from "@/app/ts/variable-modifying-functions";
 
/*
export function ExampleClientComponent() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
 

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )
 
  return (
    <>
      <p>Sort By</p>
 
      {}
      <button
        onClick={() => {

          router.push(pathname + '?' + createQueryString('sort', 'asc'))
        }}
      >
        ASC
      </button>
 
      {}
      <Link
        href={

          pathname + '?' + createQueryString('sort', 'desc')
        }
      >
        DESC
      </Link>
    </>
  )
}
*/

export default function PositionName()
{
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    let paramName = "placeholderTitle";

    function postPositionName(event)
    {
        event.preventDefault();

        let eventTarget = event.target;

        for(let i_0 = 0; i_0 < eventTarget.length; i_0++)
        {
            let currentChild = eventTarget[i_0];

            if(currentChild.localName == "input")
            {
                if(currentChild.type == "text")
                {
                    let currentChildValue = currentChild.value;
                    router.push(getCorrectUrlPushPath(searchParams, pathname, paramName, currentChildValue));
                }
            }
        }
    }

    return (
        <div className="user-input-field">
            <form 
                onSubmit={() => postPositionName(event)}
            >
                <input 
                    type="text" 
                    placeholder="gggggg" 
                    required 
                />
                <input type="submit" />
            </form>
        </div>
    );
}