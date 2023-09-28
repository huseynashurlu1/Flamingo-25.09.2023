
const apiUrl = {
    productApi: {
      addProduct: 'https://api.flamingo.az/api/product/add',
      getProducts: 'https://api.flamingo.az/api/product/all-products',
      getProductByCategory: 'https://api.flamingo.az/api/product/all-products/category',
      increaseView: 'https://api.flamingo.az/api/product/:id/increase-view',
      updateProduct: 'https://api.flamingo.az/api/product',
      deleteProduct: 'https://api.flamingo.az/api/product',
    },
    brandApi: {
        addBrand: 'https://api.flamingo.az/api/brand/add',
        getBrands: 'https://api.flamingo.az/api/brand/all-brands',
        deleteBrand: 'https://api.flamingo.az/api/brand',
    },
    categoryApi: {
        addCategory: 'https://api.flamingo.az/api/category/add',
        getCategories: 'https://api.flamingo.az/api/category/all-categories',
        deleteCategory: 'https://api.flamingo.az/api/category',
        getSubCategoriesByCategoryId: 'https://api.flamingo.az/api/category/subcategories/:categoryId',
        addSubCategory: 'https://api.flamingo.az/api/category/:categoryId/add-subcategory',
    },
    orderApi: {
        addOrder: 'https://api.flamingo.az/api/order/add',
        getOrders: 'https://api.flamingo.az/api/order/all-orders',
        deleteOrder: 'https://api.flamingo.az/api/order',
    },
    statisticsApi: {
        getCounts: 'https://api.flamingo.az/api/statistics/all'
    },
    userApi: {
        createUser: 'https://api.flamingo.az/api/user/register',
        loginUser: 'https://api.flamingo.az/api/user/login',
        checkLogin: 'https://api.flamingo.az/api/user/check-login'
    }
  };
  
  export default apiUrl;
  
