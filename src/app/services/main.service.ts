import { Injectable } from '@angular/core';
import { IFavorites } from '../imageSlider/types/favorites.interface';
import { IProducts } from '../imageSlider/types/product.interface';
import { IOrders } from '../imageSlider/types/orders.interface';
import { ITrends } from '../imageSlider/types/trends.interface';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  cartList: IProducts[] = [];

  favoritesList: IFavorites[] = [];

  trends: ITrends[] = [
    {
      imageUrl: '/assets/images/trends1.png',
      fashionSeason: 'October 8, 2020',
      topTrends: 'Top Trends From Spring',
      information:
        'Lorem ipsum dolor sit amet,consectetur adipiscing elit. faucibus augue, a maximus elit ex vitae libero...',
    },
    {
      imageUrl: '/assets/images/trends2.png',
      fashionSeason: 'October 8, 2020',
      topTrends: 'Top Trends From Spring',
      information:
        'Lorem ipsum dolor sit amet,consectetur adipiscing elit. faucibus augue, a maximus elit ex vitae libero...',
    },
    {
      imageUrl: '/assets/images/trends3.png',
      fashionSeason: 'October 8, 2020',
      topTrends: 'Top Trends From Spring',
      information:
        'Lorem ipsum dolor sit amet,consectetur adipiscing elit. faucibus augue, a maximus elit ex vitae libero...',
    },
    {
      imageUrl: '/assets/images/trends4.png',
      fashionSeason: 'October 8, 2020',
      topTrends: 'Top Trends From Spring',
      information:
        'Lorem ipsum dolor sit amet,consectetur adipiscing elit. faucibus augue, a maximus elit ex vitae libero...',
    },
  ];

  orders: IOrders[] = [
    {
      orderNumber: 7643980998990,
      date: 'October 8,2021',
      status: 'Delivered',
      total: 105,
      actions: 'View Order',
    },
    {
      orderNumber: 943980998990,
      date: 'October 8,2021',
      status: 'Processing',
      total: 100,
      actions: 'View Order',
    },
    {
      orderNumber: 879980998990,
      date: 'October 8,2020',
      status: 'Delivered',
      total: 65,
      actions: 'View Order',
    },
  ];

  inItList() {
    this.cartList = JSON.parse(localStorage.getItem('cards') || '[]');
  }

  getCardList() {
    this.cartList = JSON.parse(localStorage.getItem('cards') || '[]');
    return this.cartList;
  }

  setFavoritesList(product: IProducts) {
    const favoritesFromStorage: IProducts[] = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );

    const existingProduct = favoritesFromStorage.find(
      (item) => item.id === product.id
    );

    if (!existingProduct) {
      favoritesFromStorage.push(product);
      localStorage.setItem('favorites', JSON.stringify(favoritesFromStorage));
    }
    this.favoritesList = favoritesFromStorage;
  }

  getFavoritesList() {
    this.favoritesList = JSON.parse(localStorage.getItem('favorites') || '[]');
    return this.favoritesList;
  }

  setCardList(product: IProducts) {
    let cardsFromStorage = JSON.parse(
      localStorage.getItem('cards') || '[]'
    ) as IProducts[];

    const existingProduct = cardsFromStorage.find((x) => x.id === product.id);

    if (existingProduct) {
      existingProduct.num = product.num;
    } else {
      product.num = product.num || 1;
      cardsFromStorage.push(product);
    }

    localStorage.setItem('cards', JSON.stringify(cardsFromStorage));
    this.cartList = cardsFromStorage;
    return this.cartList;
  }

  removeCardList(product: IProducts) {
    const cardsFromStorage: IProducts[] = JSON.parse(
      localStorage.getItem('cards') || '[]'
    );

    const existingProduct = cardsFromStorage.find((p) => p.id === product.id);

    if (!existingProduct) return;

    existingProduct.num = 0;
    const filteredCardsFromStorage = cardsFromStorage.filter(
      (p) => p.id !== product.id
    );
    localStorage.setItem('cards', JSON.stringify(filteredCardsFromStorage));

    this.cartList = filteredCardsFromStorage;
  }

  getSlidesProducts(): IProducts[] {
    const products = this.getProducts();
    const partialProducts = products.filter((p) => p.showOnSlide);
    return partialProducts;
  }

  getPartialData(): IProducts[] {
    const products = this.getProducts();
    const partialProducts = products.slice(5, 11);
    return partialProducts;
  }

  getProductById(id: number): IProducts | null {
    return this.getProducts().find((p) => p.id === id) || null;
  }

  getProducts(): IProducts[] {
    return [
      {
        id: 1,
        name: 'Gold Big Hoops',
        price: '68,00',
        imageUrl: '/assets/images/slider_image_1.png',
        discount: 20,
        liked: false,
        added: false,
        showOnSlide: true,
        showDiscount: false,
        additionalText: 'Sold Out',
        SKU: 12,
        Categories: 'Fashion, Style',
        Description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.',
        additionalInformation: {
          weight: '0.3 kg ',
          dimensions: '15 x 10 x 1 cm',
          colors: ' Black, Browns, White ',
          material: 'Metal',
        },
        reviews: [
          {
            name: 'Scarlet withch',
            stars: 3,
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ',
            date: '6 May, 2020',
          },
        ],
        similarItemIds: [2, 3, 4],
        images: [
          '/assets/images/slider_image_3.png',
          'assets/images/Img 01 (1).png',
          'assets/images/Img 04.png',
          'assets/images/Img 02.png',
        ],
      },

      {
        id: 2,
        name: 'Necklace',
        price: '40,00',
        imageUrl: '/assets/images/slider_image_3.png',
        discount: 20,
        liked: false,
        added: false,
        showOnSlide: true,
        showDiscount: false,
        additionalText: 'Sold Out',
        SKU: 14,
        Categories: 'Fashion, Style',
        Description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.',
        additionalInformation: {
          weight: '0.3 kg ',
          dimensions: '15 x 10 x 1 cm',
          colors: ' Black, Browns, White ',
          material: 'Metal',
        },
        reviews: [
          {
            name: 'Scarlet withch',
            stars: 3,
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ',
            date: '6 May, 2020',
          },
        ],
        similarItemIds: [2, 3, 4],
        images: [
          '/assets/images/slider_image_3.png',
          'assets/images/Img 01 (1).png',
          'assets/images/Img 04.png',
          'assets/images/Img 02.png',
        ],
      },

      {
        id: 3,
        name: 'Golden Earings',
        price: '70,00',
        imageUrl: '/assets/images/trends3.png',
        discount: 20,
        liked: false,
        added: false,
        showOnSlide: true,
        showDiscount: false,
        additionalText: 'Sold Out',
        SKU: 13,
        Categories: 'Fashion, Style',
        Description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.',
        additionalInformation: {
          weight: '0.3 kg ',
          dimensions: '15 x 10 x 1 cm',
          colors: ' Black, Browns, White ',
          material: 'Metal',
        },
        reviews: [
          {
            name: 'Scarlet withch',
            stars: 3,
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ',
            date: '6 May, 2020',
          },
        ],
        similarItemIds: [5, 6, 7],
        images: [
          '/assets/images/slider_image_3.png',
          'assets/images/Img 01 (1).png',
          'assets/images/Img 04.png',
          'assets/images/Img 02.png',
        ],
      },

      {
        id: 4,
        name: 'Golden Earings',
        price: '60,00',
        imageUrl: '/assets/images/trends2.png',
        discount: 20,
        liked: false,
        added: false,
        showOnSlide: true,
        showDiscount: false,
        additionalText: 'Sold Out',
        SKU: 13,
        Categories: 'Fashion, Style',
        Description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.',
        additionalInformation: {
          weight: '0.3 kg ',
          dimensions: '15 x 10 x 1 cm',
          colors: ' Black, Browns, White ',
          material: 'Metal',
        },
        reviews: [
          {
            name: 'Scarlet withch',
            stars: 3,
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ',
            date: '6 May, 2020',
          },
        ],
        similarItemIds: [8, 9, 10],
        images: [
          '/assets/images/slider_image_3.png',
          'assets/images/Img 01 (1).png',
          'assets/images/Img 04.png',
          'assets/images/Img 02.png',
        ],
      },
      {
        id: 5,
        name: 'Gold Big Hoops',
        price: '68,00',
        imageUrl: '/assets/images/trends4.png',
        discount: 20,
        liked: false,
        added: false,
        showOnSlide: true,
        showDiscount: false,
        additionalText: 'Sold Out',
        SKU: 12,
        Categories: 'Fashion, Style',
        Description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.',
        additionalInformation: {
          weight: '0.3 kg ',
          dimensions: '15 x 10 x 1 cm',
          colors: ' Black, Browns, White ',
          material: 'Metal',
        },
        reviews: [
          {
            name: 'Scarlet withch',
            stars: 3,
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ',
            date: '6 May, 2020',
          },
        ],
        similarItemIds: [11, 12, 13],
        images: [
          '/assets/images/slider_image_3.png',
          'assets/images/Img 01 (1).png',
          'assets/images/Img 04.png',
          'assets/images/Img 02.png',
        ],
      },
      {
        id: 6,
        name: 'Lira Earrings',
        price: '20,00',
        imageUrl: 'assets/images/Img 01 (1).png',
        discount: 20,
        liked: false,
        added: false,
        showOnSlide: false,
        showDiscount: false,
        additionalText: 'Sold Out',
        SKU: 15,
        Categories: 'Fashion, Style',
        Description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.',
        additionalInformation: {
          weight: '0.3 kg ',
          dimensions: '15 x 10 x 1 cm',
          colors: ' Black, Browns, White ',
          material: 'Metal',
        },
        reviews: [
          {
            name: 'Scarlet withch',
            stars: 3,
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ',
            date: '6 May, 2020',
          },
        ],
        similarItemIds: [11, 12, 13],
        images: [
          '/assets/images/slider_image_3.png',
          'assets/images/Img 01 (1).png',
          'assets/images/Img 04.png',
          'assets/images/Img 02.png',
        ],
      },
      {
        liked: false,
        added: false,
        id: 7,
        name: 'Hal Earrings',
        price: '25,00',
        imageUrl: 'assets/images/Img 02.png',
        discount: 20,
        showOnSlide: false,
        showDiscount: false,
        additionalText: 'Sold Out',
        SKU: 16,
        Categories: 'Fashion, Style',
        Description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.',
        additionalInformation: {
          weight: '0.3 kg ',
          dimensions: '15 x 10 x 1 cm',
          colors: ' Black, Browns, White ',
          material: 'Metal',
        },
        reviews: [
          {
            name: 'Scarlet withch',
            stars: 3,
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ',
            date: '6 May, 2020',
          },
        ],
        similarItemIds: [11, 12, 13],
        images: [
          '/assets/images/slider_image_3.png',
          'assets/images/Img 01 (1).png',
          'assets/images/Img 04.png',
          'assets/images/Img 02.png',
        ],
      },
      {
        liked: false,
        added: false,
        id: 8,
        name: 'Kaede Hair Pin Set Of 3',
        price: '30,00',
        imageUrl: 'assets/images/Img 04.png',
        discount: 20,
        showOnSlide: false,
        showDiscount: false,
        additionalText: 'Sold Out',
        SKU: 17,
        Categories: 'Fashion, Style',
        Description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.',
        additionalInformation: {
          weight: '0.3 kg ',
          dimensions: '15 x 10 x 1 cm',
          colors: ' Black, Browns, White ',
          material: 'Metal',
        },
        reviews: [
          {
            name: 'Scarlet withch',
            stars: 3,
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ',
            date: '6 May, 2020',
          },
        ],
        similarItemIds: [11, 12, 13],
        images: [
          '/assets/images/slider_image_3.png',
          'assets/images/Img 01 (1).png',
          'assets/images/Img 04.png',
          'assets/images/Img 02.png',
        ],
      },
      {
        liked: false,
        added: false,
        id: 9,
        name: 'Hair Pin Set Of 3',
        price: '30,00',
        imageUrl: 'assets/images/Img 04.png',
        discount: 20,
        showOnSlide: false,
        showDiscount: false,
        additionalText: 'Sold Out',
        SKU: 18,
        Categories: 'Fashion, Style',
        Description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.',
        additionalInformation: {
          weight: '0.3 kg ',
          dimensions: '15 x 10 x 1 cm',
          colors: ' Black, Browns, White ',
          material: 'Metal',
        },
        reviews: [
          {
            name: 'Scarlet withch',
            stars: 3,
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ',
            date: '6 May, 2020',
          },
        ],
        similarItemIds: [11, 12, 13],
        images: [
          '/assets/images/slider_image_3.png',
          'assets/images/Img 01 (1).png',
          'assets/images/Img 04.png',
          'assets/images/Img 02.png',
        ],
      },
      {
        liked: false,
        added: false,
        id: 10,
        name: 'Plaine Necklace',
        price: '19,00',
        imageUrl: 'assets/images/Img 05.png',
        discount: 20,
        showOnSlide: false,
        showDiscount: true,
        additionalText: 'Sold Out',
        SKU: 19,
        Categories: 'Fashion, Style',
        Description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.',
        additionalInformation: {
          weight: '0.3 kg ',
          dimensions: '15 x 10 x 1 cm',
          colors: ' Black, Browns, White ',
          material: 'Metal',
        },
        reviews: [
          {
            name: 'Scarlet withch',
            stars: 3,
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ',
            date: '6 May, 2020',
          },
        ],
        similarItemIds: [11, 12, 13],
        images: [
          '/assets/images/slider_image_3.png',
          'assets/images/Img 01 (1).png',
          'assets/images/Img 04.png',
          'assets/images/Img 02.png',
        ],
      },

      {
        liked: false,
        added: false,
        id: 11,
        name: 'Yuki Hair Pin Set Of 3',
        price: '29,00',
        imageUrl: 'assets/images/Img 07.png',
        discount: 20,
        showOnSlide: false,
        showDiscount: false,
        additionalText: 'Sold Out',
        SKU: 20,
        Categories: 'Fashion, Style',
        Description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.',
        additionalInformation: {
          weight: '0.3 kg ',
          dimensions: '15 x 10 x 1 cm',
          colors: ' Black, Browns, White ',
          material: 'Metal',
        },
        reviews: [
          {
            name: 'Scarlet withch',
            stars: 3,
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ',
            date: '6 May, 2020',
          },
        ],
        similarItemIds: [11, 12, 13],
        images: [
          '/assets/images/slider_image_3.png',
          'assets/images/Img 01 (1).png',
          'assets/images/Img 04.png',
          'assets/images/Img 02.png',
        ],
      },

      {
        liked: false,
        added: false,
        id: 12,
        name: 'Hair Pin Set Of 3',
        price: '30,00',
        imageUrl: 'assets/images/Img 04.png',
        discount: 20,
        showOnSlide: false,
        showDiscount: false,
        additionalText: 'Sold Out',
        SKU: 21,
        Categories: 'Fashion, Style',
        Description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.',
        additionalInformation: {
          weight: '0.3 kg ',
          dimensions: '15 x 10 x 1 cm',
          colors: ' Black, Browns, White ',
          material: 'Metal',
        },
        reviews: [
          {
            name: 'Scarlet withch',
            stars: 3,
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ',
            date: '6 May, 2020',
          },
        ],
        similarItemIds: [11, 12, 13],
        images: [
          '/assets/images/slider_image_3.png',
          'assets/images/Img 01 (1).png',
          'assets/images/Img 05.png',
          'assets/images/Img 07.png',
        ],
      },
      {
        liked: false,
        added: false,
        id: 13,
        name: 'PLaine Necklace',
        price: '20,00',
        imageUrl: 'assets/images/Img 05.png',
        discount: 20,
        showOnSlide: false,
        showDiscount: true,
        additionalText: 'Sold Out',
        SKU: 22,
        Categories: 'Fashion, Style',
        Description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.',
        additionalInformation: {
          weight: '0.3 kg ',
          dimensions: '15 x 10 x 1 cm',
          colors: ' Black, Browns, White ',
          material: 'Metal',
        },
        reviews: [
          {
            name: 'Scarlet withch',
            stars: 3,
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ',
            date: '6 May, 2020',
          },
        ],
        similarItemIds: [11, 12, 13],
        images: [
          '/assets/images/slider_image_3.png',
          'assets/images/Img 01 (1).png',
          'assets/images/Img 04 (1).png',
          'assets/images/Img 04 (2).png',
        ],
      },

      {
        liked: false,
        added: false,
        id: 14,
        name: 'Yuki Hair Pin Set Of 3',
        price: '29,00',
        imageUrl: 'assets/images/Img 07.png',
        discount: 20,
        showOnSlide: false,
        showDiscount: false,
        additionalText: 'Sold Out',
        SKU: 23,
        Categories: 'Fashion, Style',
        Description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.',
        additionalInformation: {
          weight: '0.3 kg ',
          dimensions: '15 x 10 x 1 cm',
          colors: ' Black, Browns, White ',
          material: 'Metal',
        },
        reviews: [
          {
            name: 'Scarlet withch',
            stars: 3,
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ',
            date: '6 May, 2020',
          },
        ],
        similarItemIds: [11, 12, 13],
        images: [
          '/assets/images/slider_image_3.png',
          'assets/images/Img 01 (1).png',
          'assets/images/Img 04.png',
          'assets/images/Img 02.png',
        ],
      },
      {
        liked: false,
        added: false,
        id: 15,
        name: 'Hal Earrings',
        price: '25,00',
        imageUrl: 'assets/images/Img 02.png',
        discount: 20,
        showOnSlide: false,
        showDiscount: false,
        additionalText: 'Sold Out',
        SKU: 16,
        Categories: 'Fashion, Style',
        Description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.',
        additionalInformation: {
          weight: '0.3 kg ',
          dimensions: '15 x 10 x 1 cm',
          colors: ' Black, Browns, White ',
          material: 'Metal',
        },
        reviews: [
          {
            name: 'Scarlet withch',
            stars: 3,
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ',
            date: '6 May, 2020',
          },
        ],
        similarItemIds: [11, 12, 13],
        images: [
          '/assets/images/slider_image_3.png',
          'assets/images/Img 01 (1).png',
          'assets/images/Img 04.png',
          'assets/images/Img 02.png',
        ],
      },
    ];
  }
}
