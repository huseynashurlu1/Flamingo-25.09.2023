
const apiUrl = {
    productApi: {
      addProduct: 'https://flamingoapi.cscyber.site/api/product/add',
      getProducts: 'https://flamingoapi.cscyber.site/api/product/all-products',
      getProductByCategory: 'https://flamingoapi.cscyber.site/api/product/all-products/category',
      increaseView: 'https://flamingoapi.cscyber.site/api/product/:id/increase-view',
      updateProduct: 'https://flamingoapi.cscyber.site/api/product',
      deleteProduct: 'https://flamingoapi.cscyber.site/api/product',
    },
    brandApi: {
        addBrand: 'https://flamingoapi.cscyber.site/api/brand/add',
        getBrands: 'https://flamingoapi.cscyber.site/api/brand/all-brands',
        deleteBrand: 'https://flamingoapi.cscyber.site/api/brand',
    },
    categoryApi: {
        addCategory: 'https://flamingoapi.cscyber.site/api/category/add',
        getCategories: 'https://flamingoapi.cscyber.site/api/category/all-categories',
        deleteCategory: 'https://flamingoapi.cscyber.site/api/category',
        getSubCategoriesByCategoryId: 'https://flamingoapi.cscyber.site/api/category/subcategories/:categoryId',
        addSubCategory: 'https://flamingoapi.cscyber.site/api/category/:categoryId/add-subcategory',
    },
    orderApi: {
        addOrder: 'https://flamingoapi.cscyber.site/api/order/add',
        getOrders: 'https://flamingoapi.cscyber.site/api/order/all-orders',
        deleteOrder: 'https://flamingoapi.cscyber.site/api/order',
    },
    statisticsApi: {
        getCounts: 'https://flamingoapi.cscyber.site/api/statistics/all'
    },
    userApi: {
        createUser: 'https://flamingoapi.cscyber.site/api/user/register',
        loginUser: 'https://flamingoapi.cscyber.site/api/user/login',
        checkLogin: 'https://flamingoapi.cscyber.site/api/user/check-login'
    }
  };
  
  export default apiUrl;
  
