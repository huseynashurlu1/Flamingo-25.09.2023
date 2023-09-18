import { useEffect, useState } from "react"
import axios from 'axios'
import './category.css'
import { Link } from "react-router-dom";

const Category = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getDatas = async () => {
            axios.get('http://localhost:5000/api/category/all-categories')
            .then(res => setData(res.data.categories))
            .catch(err => console.log(err))
        }

        getDatas()
    }, [])

  return (
    <div className="category-list">
        <ul>
            {
                data && data.map(item => {
                    return(
                        <li key={item._id}>
                            <Link to={`/category/${item._id}`}>{item.name}</Link>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}
export default Category