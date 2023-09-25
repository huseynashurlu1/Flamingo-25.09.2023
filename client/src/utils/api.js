
const apiUrl = {
    productApi: {
      addProduct: 'http://localhost:5000/api/product/add',
      getProducts: 'http://localhost:5000/api/product/all-products',
      getProductByCategory: 'http://localhost:5000/api/product/all-products/category',
      increaseView: 'http://localhost:5000/api/product/:id/increase-view',
      updateProduct: 'http://localhost:5000/api/product',
      deleteProduct: 'http://localhost:5000/api/product',
    },
    brandApi: {
        addBrand: 'http://localhost:5000/api/brand/add',
        getBrands: 'http://localhost:5000/api/brand/all-brands',
        deleteBrand: 'http://localhost:5000/api/brand',
    },
    categoryApi: {
        addCategory: 'http://localhost:5000/api/category/add',
        getCategories: 'http://localhost:5000/api/category/all-categories',
        deleteCategory: 'http://localhost:5000/api/category',
        getSubCategoriesByCategoryId: 'http://localhost:5000/api/category/subcategories/:categoryId',
        addSubCategory: 'http://localhost:5000/api/category/:categoryId/add-subcategory',
    },
    orderApi: {
        addOrder: 'http://localhost:5000/api/order/add',
        getOrders: 'http://localhost:5000/api/order/all-orders',
        deleteOrder: 'http://localhost:5000/api/order',
    },
    statisticsApi: {
        getCounts: 'http://localhost:5000/api/statistics/all'
    },
    userApi: {
        createUser: 'http://localhost:5000/api/user/register',
        loginUser: 'http://localhost:5000/api/user/login',
        checkLogin: 'http://localhost:5000/api/user/check-login'
    }
  };
  
  export default apiUrl;
  