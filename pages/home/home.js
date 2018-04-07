// pages/home/home.js

let swiperAutoHeight = require("../../template/swiper/swiper.js"),
  Product = require("../../service/product.js"),
  Cart = require("../../service/cart.js"),
  Coupon = require("../../service/coupon.js"),
  member = require("../../service/member.js"),
  Tenant = require("../../service/tenant.js"),
  Ad = require("../../service/ad.js"),
  app = getApp(),
  util = require("../../utils/util.js")

Page(Object.assign({}, swiperAutoHeight, {

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://www.sincereglobe.com/IMAGE/BANNER1.jpg',
      'https://www.sincereglobe.com/IMAGE/BANNER2.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 4000,
    duration: 1000,
    productHotList: [
      {
        "id": 1181009,
        "category_id": null,
        "goods_sn": "9999",
        "name": "妈达人超值礼包",
        "brand_id": null,
        "goods_number": 999,
        "keywords": null,
        "goods_brief": null,
        "goods_desc": "<p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522732692261805097c9-df7a-41a2-8600-586df005ef4a.jpeg\" width=\"300\"></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>",
        "is_on_sale": 1,
        "add_time": 2018,
        "sort_order": 1,
        "is_delete": 0,
        "attribute_category": null,
        "counter_price": null,
        "extra_price": null,
        "is_new": 1,
        "goods_unit": null,
        "primary_pic_url": "https://www.sincereglobe.com/IMAGE/upload/1_152230902532313e53a93-db43-4863-85ac-b434c04ef5aa.jpeg",
        "list_pic_url": "https://www.sincereglobe.com/IMAGE/upload/1_152230902532313e53a93-db43-4863-85ac-b434c04ef5aa.jpeg",
        "market_price": 299,
        "retail_price": 299,
        "sell_volume": null,
        "primary_product_id": 315,
        "unit_price": null,
        "promotion_desc": null,
        "promotion_tag": null,
        "app_exclusive_price": null,
        "is_app_exclusive": 0,
        "is_limited": 0,
        "is_hot": 1,
        "ecouponsId": null,
        "cart_num": 0,
        "product_id": null,
        "firstBonus": 50,
        "secondBonus": 0,
        "thirdBonus": 0,
        "isFreeShipping": 1,
        "freightTemplateId": 0
      },
      {
        "id": 1181012,
        "category_id": null,
        "goods_sn": "15",
        "name": "天使系列四包购",
        "brand_id": null,
        "goods_number": 900,
        "keywords": null,
        "goods_brief": null,
        "goods_desc": "<p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522735305792a13c37ae-11a7-4dd4-b03b-5f9941b2490e.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_15227353255608ba12958-5398-485c-909c-1d7c59fe5e23.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_15227353375707a92f330-e55b-4811-b55e-6790718b8576.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522735343999e58a0e85-3427-4078-a3b5-b948a26d934c.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522735348089623b34c8-a228-4540-9558-3da23587c127.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_152273535225539c580c3-fce2-41ef-bd82-ece19a91a8e1.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522735356173a5301c98-b39a-4af4-89f9-65c41b01ce42.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522735362166317ddceb-0a62-45bb-9ee2-86971f8f292a.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522735366804a3c6aa83-6426-4aee-a8dd-ba6432c5c25a.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_15227353741938275c3f5-08f1-4e22-9d03-3bbb58251d23.jpeg\" width=\"300\"></p><p><br></p>",
        "is_on_sale": 1,
        "add_time": 2018,
        "sort_order": 1,
        "is_delete": 0,
        "attribute_category": null,
        "counter_price": null,
        "extra_price": null,
        "is_new": 1,
        "goods_unit": null,
        "primary_pic_url": "https://www.sincereglobe.com/IMAGE/upload/1_152273505046199bf4d71-0626-4f0e-b929-326930fcb6b1.jpeg",
        "list_pic_url": "https://www.sincereglobe.com/IMAGE/upload/1_152273505046199bf4d71-0626-4f0e-b929-326930fcb6b1.jpeg",
        "market_price": 650,
        "retail_price": 520,
        "sell_volume": null,
        "primary_product_id": 343,
        "unit_price": null,
        "promotion_desc": null,
        "promotion_tag": null,
        "app_exclusive_price": null,
        "is_app_exclusive": 0,
        "is_limited": 0,
        "is_hot": 1,
        "ecouponsId": null,
        "cart_num": 0,
        "product_id": null,
        "firstBonus": 40,
        "secondBonus": 20,
        "thirdBonus": 8,
        "isFreeShipping": 1,
        "freightTemplateId": 0
      },
      {
        "id": 1181013,
        "category_id": null,
        "goods_sn": "44",
        "name": "维E系列四包购",
        "brand_id": null,
        "goods_number": 900,
        "keywords": null,
        "goods_brief": null,
        "goods_desc": "<p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522735428334bca5d6f1-60d2-4044-9329-47c338542b2e.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522735431406e6779d6a-e55a-43c8-863c-a0a289f5bca2.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522735437895f622c09d-a495-4eaf-ad37-7212b3e835d1.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522735443378cccadc24-7792-4ccb-b55b-165729d10711.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522735449353c09a0e2a-a2ac-4a47-a770-a265f2e7faaf.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522735453281e537f3a4-0c15-4a0f-912b-f68e3913a2ec.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_15227354584919a09776e-bf76-4348-b164-08a2d4aa0ca4.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522735463232792a33a4-93a0-4a79-89fa-925bc7e28d9e.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_15227354683594e0592f0-75cf-4234-bac5-d25f137d12c0.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522735473316dca1b763-bdef-4dd2-9c06-e2c0c8962ea7.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_15227354789072ae54182-b109-4c4b-baef-ccf9aec515d5.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522735484261d4b5901a-024c-4eb5-a241-44f3db7faf0f.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_152273548915694e9cf4c-0b0c-4130-ae2d-2ea96e0c4303.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_15227354950167cb79a9d-23dd-497a-8240-90c7c3291be5.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522735499325b3a96f31-4d8a-407c-bfa0-383664ff656a.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_152273550433274788591-691c-469a-8c55-5df0f44083a9.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522735509640b477fbf1-0264-4924-b4a1-d37a17f76f24.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522735514036ef0617df-10f0-49c4-8043-127a10dc2c7e.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_152273551894556c8a535-0da2-47e3-bbe0-9a806f267ccd.jpeg\" width=\"300\"></p><p><br></p>",
        "is_on_sale": 1,
        "add_time": 2018,
        "sort_order": 2,
        "is_delete": 0,
        "attribute_category": null,
        "counter_price": null,
        "extra_price": null,
        "is_new": 1,
        "goods_unit": null,
        "primary_pic_url": "https://www.sincereglobe.com/IMAGE/upload/1_1522735067288a4470c3d-cae7-4196-84fe-5f0657c0dbdc.jpeg",
        "list_pic_url": "https://www.sincereglobe.com/IMAGE/upload/1_1522735067288a4470c3d-cae7-4196-84fe-5f0657c0dbdc.jpeg",
        "market_price": 450,
        "retail_price": 360,
        "sell_volume": null,
        "primary_product_id": 352,
        "unit_price": null,
        "promotion_desc": null,
        "promotion_tag": null,
        "app_exclusive_price": null,
        "is_app_exclusive": 0,
        "is_limited": 0,
        "is_hot": 1,
        "ecouponsId": null,
        "cart_num": 0,
        "product_id": null,
        "firstBonus": 20,
        "secondBonus": 12,
        "thirdBonus": 4,
        "isFreeShipping": 1,
        "freightTemplateId": 0
      },
      {
        "id": 1181016,
        "category_id": null,
        "goods_sn": "1",
        "name": "光羽系列四包购",
        "brand_id": null,
        "goods_number": 900,
        "keywords": null,
        "goods_brief": null,
        "goods_desc": "<p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522740523951d5d40bec-ad5a-4425-8884-bf8b587226ae.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522740527289f617a98d-3913-4c64-9d80-9696206ccb54.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_152274053252233808f37-352e-49be-aff5-ff4105d21b94.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_152274053776914f9a9b5-0053-4d26-bf4c-768b50410626.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522740540644ea48c481-9c2e-4dcb-a037-e7127f57167e.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_152274054364759d919d4-2e51-4767-9fcd-d8e7a175a403.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_152274054717732858339-eb1b-436c-9e2c-ed9ec1de13cf.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_152274055183955a27526-6b1c-4623-89b0-cae433fff8c7.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_15227405589676aeb34ea-62be-40d8-b40c-8eb0947f7632.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_15227405660174a26e0ce-926e-4e3c-82ef-b8c57a0a287e.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_15227405732140bfee836-712d-4a51-907b-c46423fea561.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522740578075f1070186-cdde-4dd1-b00d-5cd3415df620.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522740582395317ac230-8f68-43f2-b44c-cc023ea54b13.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522740586388c63496b4-4775-464d-9441-03491d68dfe3.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_15227405907879b9fbc93-23cd-4dc4-a372-7335e733a9c0.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_15227405939901dea0565-befc-40d8-8c0c-e4c2bdbc72fb.jpeg\" width=\"300\"></p><p><br></p>",
        "is_on_sale": 1,
        "add_time": 2018,
        "sort_order": 2,
        "is_delete": 0,
        "attribute_category": null,
        "counter_price": null,
        "extra_price": null,
        "is_new": 1,
        "goods_unit": null,
        "primary_pic_url": "https://www.sincereglobe.com/IMAGE/upload/1_1522740495922eecad145-f95a-4d66-a864-2ea7046612a9.jpeg",
        "list_pic_url": "https://www.sincereglobe.com/IMAGE/upload/1_1522740495922eecad145-f95a-4d66-a864-2ea7046612a9.jpeg",
        "market_price": 850,
        "retail_price": 700,
        "sell_volume": null,
        "primary_product_id": 373,
        "unit_price": null,
        "promotion_desc": null,
        "promotion_tag": null,
        "app_exclusive_price": null,
        "is_app_exclusive": 0,
        "is_limited": 0,
        "is_hot": 1,
        "ecouponsId": null,
        "cart_num": 0,
        "product_id": null,
        "firstBonus": 60,
        "secondBonus": 40,
        "thirdBonus": 20,
        "isFreeShipping": 1,
        "freightTemplateId": 0
      },
      {
        "id": 1181006,
        "category_id": null,
        "goods_sn": "0004",
        "name": "大王维E系列",
        "brand_id": null,
        "goods_number": 999,
        "keywords": null,
        "goods_brief": null,
        "goods_desc": "<p><br></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_152220710581580808ae5-e38d-49ce-b256-4cf34e735564.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522207119465bf87809f-aa80-440e-a3f5-c2c5ce74a56e.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_152220712783381be703d-34b3-47d8-a118-0c2f06e1c072.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_15222071429501f1d3fbe-ba83-4e6c-9746-7cc665504aa1.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522207152720da87e1ce-58fc-438e-ac08-8eb24ce856d7.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522207160716e90d75e2-4f8a-4d51-976a-64645c128d1c.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_15222071667583ecce92d-0b70-499b-9806-c4b46589b30b.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522207172405bc1da2af-eee6-4d78-8617-99aef2701bc9.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_15222071811370e64bab1-c67e-4bc0-8887-b82700c7423b.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522207196089e8f9b23e-fd45-4679-b9f9-ec3704cbf998.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_15222072024140a5e5b3a-7f57-4f4f-9e63-249b8e642b7d.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522207207518248b54fe-03ba-48ee-b02b-17b0d34bea23.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_152220721456637320120-fa88-4fa2-ba3f-0b26340e3ad6.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_152220722222943d5da23-1f24-4fbb-a3c5-4e830d38e84a.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522207228391fe683d3c-f8f4-4299-a729-7f02ff04141d.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_15222072339030bce4b86-1e12-4240-b16b-6579879d55c8.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_152220724001367eb398b-1013-4d38-ad8f-370240a53838.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_15222072479817ddbce3a-26b6-436f-ad9c-39f0f8bf23a7.jpeg\" width=\"300\"></p><p><br></p><p><br></p><p><br>&nbsp;</p><p><br></p><p><br></p>",
        "is_on_sale": 1,
        "add_time": 2018,
        "sort_order": 3,
        "is_delete": 0,
        "attribute_category": null,
        "counter_price": null,
        "extra_price": null,
        "is_new": 1,
        "goods_unit": null,
        "primary_pic_url": "https://www.sincereglobe.com/IMAGE/upload/1_15227350930499fc67261-e0a1-4249-b486-b6d345740275.jpeg",
        "list_pic_url": "https://www.sincereglobe.com/IMAGE/upload/1_15227350930499fc67261-e0a1-4249-b486-b6d345740275.jpeg",
        "market_price": 158,
        "retail_price": 90,
        "sell_volume": null,
        "primary_product_id": 277,
        "unit_price": null,
        "promotion_desc": null,
        "promotion_tag": null,
        "app_exclusive_price": null,
        "is_app_exclusive": 0,
        "is_limited": 0,
        "is_hot": 1,
        "ecouponsId": null,
        "cart_num": 0,
        "product_id": null,
        "firstBonus": 5,
        "secondBonus": 3,
        "thirdBonus": 1,
        "isFreeShipping": 0,
        "freightTemplateId": 8
      },
      {
        "id": 1181005,
        "category_id": null,
        "goods_sn": "22",
        "name": "大王天使系列",
        "brand_id": null,
        "goods_number": 999,
        "keywords": null,
        "goods_brief": null,
        "goods_desc": "<p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1515638996154aab10601-b3d1-46b8-93be-996ed2550067.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1515638999122d16cff2b-5555-4bdb-8fd8-356d830fb208.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_15156390033910586b999-b368-44fb-8458-87915b300e98.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1515639008108b8cea1e6-0ac6-454a-bf4f-251f8cdbed23.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1515639011838cbdf7227-a37c-4758-9701-e4850633b53d.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_15156390153133e72df34-3407-4a6a-9b69-f6cd8502a06b.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1515639019018d2ca878a-273e-42c3-ab1f-8f2dab47fa18.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1515639021998f64a7b19-573f-4aa2-929f-1757f516ed00.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1515639025270bdc261dc-2bce-4a06-88fc-41d027125793.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1515639029330a15b202c-24b7-4090-a14f-8fce58094611.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1515639034422c84efdf8-3c29-4a2b-aa76-fbefa0b42e50.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1515639478803ac654f7e-431a-4eb6-bd62-25630ee271a3.jpeg\" width=\"300\"></p><p><br></p><p><br></p>",
        "is_on_sale": 1,
        "add_time": 2018,
        "sort_order": 4,
        "is_delete": 0,
        "attribute_category": null,
        "counter_price": null,
        "extra_price": null,
        "is_new": 1,
        "goods_unit": null,
        "primary_pic_url": "https://www.sincereglobe.com/IMAGE/upload/1_152273507913479a51c88-b0ac-4edd-80ad-feb01ac63389.jpeg",
        "list_pic_url": "https://www.sincereglobe.com/IMAGE/upload/1_152273507913479a51c88-b0ac-4edd-80ad-feb01ac63389.jpeg",
        "market_price": 158,
        "retail_price": 130,
        "sell_volume": null,
        "primary_product_id": 276,
        "unit_price": null,
        "promotion_desc": null,
        "promotion_tag": null,
        "app_exclusive_price": null,
        "is_app_exclusive": 0,
        "is_limited": 0,
        "is_hot": 1,
        "ecouponsId": null,
        "cart_num": 0,
        "product_id": null,
        "firstBonus": 10,
        "secondBonus": 5,
        "thirdBonus": 2,
        "isFreeShipping": 0,
        "freightTemplateId": 8
      },
      {
        "id": 1181014,
        "category_id": null,
        "goods_sn": "1",
        "name": "大王光羽系列",
        "brand_id": null,
        "goods_number": 900,
        "keywords": null,
        "goods_brief": null,
        "goods_desc": "<p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522647778663857c3437-0a0f-4b0a-84f9-41b822cdf2b0.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_15226477824517dac33db-ea5b-4901-ad9c-f1aebbde0e7a.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_15226477863032e2e190a-246b-4bca-965b-2cdb20c06f29.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_15226477894491240f8ac-d050-4a15-87a3-8811c2733904.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522647792399d228f275-36ee-4b13-a69c-8f2075ad0ac8.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522647803027e0154128-978b-4277-8271-7028e3a83e8c.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1522647817116f99a8146-34a5-4f3a-9763-4147333e816c.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_15226478217559291d812-8c5c-4261-b0d0-aa385a144db2.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_15226478274551fee881f-ed1d-4f78-acc0-17bc1275da4d.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_15226478310529a3fbb9e-b1c5-4975-bed1-903f0361b849.jpeg\" width=\"300\"></p><p><br></p>",
        "is_on_sale": 1,
        "add_time": 2018,
        "sort_order": 4,
        "is_delete": 0,
        "attribute_category": null,
        "counter_price": null,
        "extra_price": null,
        "is_new": 1,
        "goods_unit": null,
        "primary_pic_url": "https://www.sincereglobe.com/IMAGE/upload/1_1522741299994295e37f5-76dd-46a0-af3f-da473c2d54ad.jpeg",
        "list_pic_url": "https://www.sincereglobe.com/IMAGE/upload/1_1522741299994295e37f5-76dd-46a0-af3f-da473c2d54ad.jpeg",
        "market_price": 228,
        "retail_price": 175,
        "sell_volume": null,
        "primary_product_id": 365,
        "unit_price": null,
        "promotion_desc": null,
        "promotion_tag": null,
        "app_exclusive_price": null,
        "is_app_exclusive": 0,
        "is_limited": 0,
        "is_hot": 1,
        "ecouponsId": null,
        "cart_num": 0,
        "product_id": null,
        "firstBonus": 15,
        "secondBonus": 10,
        "thirdBonus": 5,
        "isFreeShipping": 0,
        "freightTemplateId": 8
      },
      {
        "id": 1181008,
        "category_id": null,
        "goods_sn": "4",
        "name": "甜睡系列",
        "brand_id": null,
        "goods_number": 999,
        "keywords": null,
        "goods_brief": null,
        "goods_desc": "<p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_151565719403478eb3da0-c970-445d-8531-056b3def41fe.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_1515657200036c2a429ab-966c-4ffc-80af-edb1751f3311.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_15156572052787d8a6be2-acdc-4e92-a7af-f4084f720d0f.jpeg\" width=\"300\"></p><p><img class=\"fr-fin\" data-fr-image-preview=\"false\" alt=\"Image title\" src=\"https://www.sincereglobe.com/IMAGE/upload/1_151565720960521231e13-f426-486e-b4e1-225b32aad0ef.jpeg\" width=\"300\"></p><p><br></p>",
        "is_on_sale": 1,
        "add_time": 2018,
        "sort_order": 10,
        "is_delete": 0,
        "attribute_category": null,
        "counter_price": null,
        "extra_price": null,
        "is_new": 1,
        "goods_unit": null,
        "primary_pic_url": "https://www.sincereglobe.com/IMAGE/upload/1_152273503440580dc7879-c47f-4b43-bdb5-69cf7182fbc8.jpeg",
        "list_pic_url": "https://www.sincereglobe.com/IMAGE/upload/1_152273503440580dc7879-c47f-4b43-bdb5-69cf7182fbc8.jpeg",
        "market_price": 236,
        "retail_price": 98,
        "sell_volume": null,
        "primary_product_id": 279,
        "unit_price": null,
        "promotion_desc": null,
        "promotion_tag": null,
        "app_exclusive_price": null,
        "is_app_exclusive": 0,
        "is_limited": 0,
        "is_hot": 1,
        "ecouponsId": null,
        "cart_num": 0,
        "product_id": null,
        "firstBonus": 5,
        "secondBonus": 3,
        "thirdBonus": 1,
        "isFreeShipping": 0,
        "freightTemplateId": 8
      },
      {
        "id": 1181010,
        "category_id": null,
        "goods_sn": "09",
        "name": "一元补差价链接",
        "brand_id": null,
        "goods_number": 999,
        "keywords": null,
        "goods_brief": null,
        "goods_desc": "",
        "is_on_sale": 1,
        "add_time": 2018,
        "sort_order": 13,
        "is_delete": 0,
        "attribute_category": null,
        "counter_price": null,
        "extra_price": null,
        "is_new": 1,
        "goods_unit": null,
        "primary_pic_url": "https://www.sincereglobe.com/IMAGE/upload/1_1522242468079c82ab55f-f512-45c5-abdb-7702f6cfffeb.jpeg",
        "list_pic_url": "https://www.sincereglobe.com/IMAGE/upload/1_1522242468079c82ab55f-f512-45c5-abdb-7702f6cfffeb.jpeg",
        "market_price": 1,
        "retail_price": 1,
        "sell_volume": null,
        "primary_product_id": 322,
        "unit_price": null,
        "promotion_desc": null,
        "promotion_tag": null,
        "app_exclusive_price": null,
        "is_app_exclusive": 0,
        "is_limited": 0,
        "is_hot": 1,
        "ecouponsId": null,
        "cart_num": 0,
        "product_id": null,
        "firstBonus": null,
        "secondBonus": null,
        "thirdBonus": null,
        "isFreeShipping": 1,
        "freightTemplateId": 0
      }
    ]
  },

  //邀请
  joinUs: function () {
    new member(function (res) {
      if (res.data.userIsMember == 1) {
        util.navigateTo({
          url: '/pages/member/share/share'
        })
      } else {
        util.navigateTo({
          url: 'join/join'
        })
      }
    }).view()
  },

  //视频
  goVideo:function(){
    util.navigateTo({
      url: '/pages/home/video/video',
    })
  },

  //商品详情
  goProductDeatil: function (e) {
    var id = e.currentTarget.dataset.id;
    util.navigateTo({
      url: '/pages/home/productDetails/productDetails?id=' + id,
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.LOGIN_STATUS) {
      this.getData(options)
    } else {
      app.loginOkCallbackList.push(() => {
        this.getData(options)
      })
    }
  },

  getData: function (options) {
    var that = this;
    if (options.extension){
      wx.setStorageSync('extension', options.extension)
    }
    new Product(function (data) {
      that.setData({
        productHotList: data.data.hotGoodsList
      })
      // console.log(data)
    }).list()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  //分享
  onShareAppMessage: function (res) {
    var that = this;
    if (res.from === 'button') {
      // 来自页面内转发按钮

    }
    return {
      title: '邀请您加入大王纸尿裤',
      path: 'pages/home/home?extension=' + app.globalData.memberInfo.userId,
      success: function (res) {
        // 转发成功
        wx.showToast({
          title: '转发成功',
          icon: 'success'
        })
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
}))