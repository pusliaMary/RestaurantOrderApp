import { Filter } from "./Filter"

export const AllCategories = () => {
    return (<div className="columnCenter categories">
                {['SEAFOOD', 'ITALIAN', 'APPETIZERS', 'SALADS', 'ALL'].
        map((category, index) => <Filter category={category} key={index}/>)
        }
        </div>
        )
}