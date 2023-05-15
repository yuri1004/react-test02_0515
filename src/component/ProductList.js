import './ProductList.css'

function ProductItem({allitem,onDelete}){
    // console.log(allitem)
    return(
        <figure>
            <img src={allitem.image} alt={allitem.name}/>
            <figcaption>
                <dl>
                    <dt>{allitem.name}</dt>
                    <dd>{allitem.price}</dd>
                    <dd>{allitem.rating}</dd>
                    <dd>{allitem.kind}</dd>
                    <dd>{allitem.date}</dd>
                    <dd>
                        <button type="button" onClick={()=>onDelete(allitem.id)}>delete</button>
                    </dd>
                </dl>
            </figcaption>
        </figure>
    )
}





export default function ProductList({items,onDelete}){
    return(
      <ul>
        {items.map((item)=>(
        <li key={item.id}>
            <ProductItem allitem={item} onDelete={onDelete}/>
        </li>
        ))
        }
      </ul>
    )
}