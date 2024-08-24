const CATEGORY = require("../model/category.model");
const PRODUCT = require("../model/product.model");

const createProduct = async (reqData) => {
  try {

    let topLevel = await CATEGORY.findOne({name:reqData.topLevelCategory});

    if(!topLevel){
      topLevel = new CATEGORY({
        name:reqData.topLevelCategory,
        level:1
      })

      await topLevel.save();
    }
    
    let secondLevel = await CATEGORY.findOne({name:reqData.secondLevelCategory, parentCategory : topLevel._id});

    if(!secondLevel){
      secondLevel = new CATEGORY({
        name:reqData.secondLevelCategory,
        parentCategory : topLevel._id,
        level:2
      })
      await secondLevel.save();
    }

    let thirdLevel = await CATEGORY.findOne({name:reqData.thirdLevelCategory, parentCategory : secondLevel._id});

    if(!thirdLevel){
      thirdLevel = new CATEGORY({
        name:reqData.thirdLevelCategory,
        parentCategory : secondLevel._id,
        level:3
      })
      await thirdLevel.save();
    }

    const product = new PRODUCT({
      title : reqData.title,
      color : reqData.color,
      description : reqData.description,
      discountedPrice : reqData.discountedPrice,
      discountedPercent : reqData.discountedPercent,
      price : reqData.price,
      imageUrl : reqData.imageUrl,
      brand : reqData.brand,
      quantity : reqData.quantity,
      sizes : reqData.sizes,
      category : thirdLevel._id
    })
    return await product.save();

  } catch (error) {
    throw new Error(error.message);
  }

};

const deleteProduct = async (productId) => {
  try {
    const product = await findProductById(productId);
    await PRODUCT.findByIdAndDelete(product._id);

    return "Product deleted Successfully"
    
  } catch (error) {
    throw new Error(error.message);
  }
}

const updateProduct = async (productId, reqData) => {
  return await PRODUCT.findByIdAndUpdate(productId, reqData)
}

const findProductById = async (productId) => {
  try {
    const product = await PRODUCT.findById(productId).populate("category").exec();

    if(!product){
      throw new Error("Product not Found with id : ", productId);
    }

    return product;
    
  } catch (error) {
    throw new Error(error.message);
  }
}

const getAllProducts = async (reqQuery) =>{
  let {category, color, sizes, minPrice, maxPrice, minDiscount, sort, stock, pageNumber, pageSize} = reqQuery;

  // Ensure pageNumber and pageSize are numbers and valid
  pageNumber = Math.max(parseInt(pageNumber, 10) || 1, 1);
  pageSize = Math.max(parseInt(pageSize, 10) || 10, 1);
  minPrice = parseInt(minPrice) || 0;
  maxPrice = parseInt(maxPrice) || Number.MAX_SAFE_INTEGER;

  // console.log(reqQuery);
  // pageSize = pageSize || 10;

  let query = PRODUCT.find().populate("category");
  if(category){
    const existcategory = await CATEGORY.findOne({ name: new RegExp(`^${category.trim()}$`, "i") });
    if(existcategory){
      query =  query.where("category").equals(existcategory._id);
    }else{
      return {content:[], curentPage : 1, totalPages : 0}
    }
  }
  
  if(color){
    const colorSet = new Set(color.split(",").map(color => color.trim().toLowerCase()));
    const colorRegex = colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;
    query =  query.where("color").regex(colorRegex)
  }

  if(sizes){
    const sizesSet = new Set(sizes);
    query =  query.where("sizes.name").in([...sizesSet]);
  }

  if(minPrice && maxPrice){
    query =  query.where('discountedPrice').gte(minPrice).lte(maxPrice);
  }

  if(minDiscount){
    query =  query.where('discountedPercent').gt(minDiscount);
  }

  if(stock){

    if(stock === "in_stock"){
      query = query.where("quantity").gt(0);
    }else if(stock === "out_of_stock"){
      query =  query.where("quantity").lt(1);
    }

  }

  if(sort){
    const sortDirection = sort === "price_hight" ? -1 : 1;
    query = query.sort({discountedPrice:sortDirection});
  }

  const totalProducts = await PRODUCT.countDocuments(query);
  const skip = (pageNumber - 1) * pageSize; 
  query = query.skip(skip).limit(pageSize);
  const products = await query.exec();
  const totalPages = Math.ceil(totalProducts/pageSize);

  return {content : products, curentPage : pageNumber, totalPages :totalPages }

}

const createMultipleProduct = async (products) => {
  for(let product of products){
    await createProduct(product);
  }
}

module.exports = {
  createProduct,
  deleteProduct,
  findProductById,
  updateProduct,
  getAllProducts,
  createMultipleProduct
};