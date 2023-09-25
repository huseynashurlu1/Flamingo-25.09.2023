import axios from 'axios'
import { useState, useEffect } from 'react'
 import { useParams } from 'react-router-dom'
import '../assets/css/category.css';
import AlertBox from '../components/AlertBox'
import ProductItem from '../components/Product/ProductItem'
import Spinner from '../components/Spinner';
import apiUrl from '../utils/api';

const CategoryPage = () => {
  const { id } = useParams();
  const [data, setData] = useState([])
  const [brands, setBrands] = useState([])
  const [subs, setSubs] = useState([])
  const [filteredData, setFilteredData] = useState([]);


  useEffect(() => {
    const getItems = async () => {
      await axios.get(`${apiUrl.productApi.getProductByCategory}/${id}`)
      .then(res => {
        setData(res.data)
        const all_brands = [];
        const all_subs = [];
        res.data.forEach((product) => {
          all_brands.push(product.brandId);
        });
        res.data.forEach((product) => {
          all_subs.push(product.subCategoryId);
        });
        setBrands(all_brands);
        setSubs(all_subs);
                
      })
      .catch(err => console.log(err))
    }

    getItems()
  }, [])

    const OptionHandler = (e) => {
        switch (e.target.value) {
          case "1":
            setData([...data].sort((a, b) => a.name.localeCompare(b.name)));
            break;
          case "2":
            setData([...data].sort((a, b) => b.name.localeCompare(a.name)));
            break;
          case "3":
              setData([...data].sort((a, b) => a.price - b.price));
              break;
          case "4":
              setData([...data].sort((a, b) => b.price - a.price));
              break;
          default:
              setData(data);
              break;
        }
      };

  if(data.length === 0) {
    return <AlertBox text='Bu kateqoriyaya uyğun məhsul yoxdur'/>
  }

  const filterHandler = () => {
    const selectedBrandId = document.getElementById('brandFilter').value;
    const selectedSubCategoryId = document.getElementById('subCategoryFilter').value;

    if (!selectedBrandId && !selectedSubCategoryId) {
        setFilteredData([]);
    } else {
        const filtered = data.filter(item => {
            const matchesBrand = !selectedBrandId || item.brandId._id === selectedBrandId;
            const matchesSubCategory = !selectedSubCategoryId || item.subCategoryId._id === selectedSubCategoryId;
            return matchesBrand && matchesSubCategory;
        });
        setFilteredData(filtered);
    }
  }

  return (
    <>
      {
       data ?  <section id="Category">
       <div className="container">
         <div className="cat-top gy-4 d-flex justify-content-between align-items-center">
             <h3>{data.length} məhsul</h3>
             <select onChange={OptionHandler}>
               <option value="">Sırala</option>
               <option value="1">A-Z</option>
               <option value="2">Z-A</option>
               <option value="3">Ucuzdan bahaya</option>
               <option value="4">Bahadan ucuza</option>
             </select>
         </div>
         <div className="row mt-3 gy-4">
           <div className="col-lg-3">
             <div className="cat-filter-left">
                 <div className="for-brand mb-4">
                   <span>Alt kateqoriyalar</span>

                     <select id='subCategoryFilter'>
                       <option value=''>Hamısı</option>
                       {
                           subs && subs.map(item => {
                             return(
                               <option value={item._id} key={item._id}>{item.name}</option>
                             )
                           })
                         }
                     </select>
                   </div>
                 <div className="for-brand">
                   <span>Brendə görə</span>
                   <select id='brandFilter' >
                   <option value=''>Hamısı</option>
                   {
                       brands && brands.map(item => {
                         return(
                           <option value={item._id} key={item._id}>{item.name}</option>
                         )
                       })
                     }
                   </select>
                 </div>
                 <div className="filter-button">
                   <button onClick={filterHandler}>Axtar</button>
                 </div>
             </div>
           </div>
           <div className="col-lg-9">
           <div className="cat-filter">
           <div className="row gy-4">
             {
               filteredData.length > 0 ? (
                 filteredData.map(item => {
                   return(
                     <ProductItem key={item._id} col='col-lg-4' item={item}/>
                   )
                 })
               ) : (
                 data.map(item => {
                   return(
                     <ProductItem key={item._id} col='col-lg-4' item={item}/>
                   )
                 })
               )
               
             }
           </div>
         </div>
           </div>
         </div>
       </div>
     </section> : <Spinner />
      }
    </>
  )
}
export default CategoryPage
