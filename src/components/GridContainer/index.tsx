import { ReactNode } from "react"

interface GridContainerProps{
    children: ReactNode,
    className?: string
}

export function GridContainer({ children, className }: GridContainerProps){
    const defaultClassName = "w-full max-w-grid mx-auto px-3";
    return(
        <div className={defaultClassName}>
            {children}
        </div>
    )
}