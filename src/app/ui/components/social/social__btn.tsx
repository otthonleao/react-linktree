import { SocialProps } from "@/data/@types/socialProps";

export function Social__btn({ url, children }: SocialProps) {

    return (
        <a href={url}
            rel="noopener noreferrer" // O react requer a informação que será um link externo
        >{children}</a>
    )
}
