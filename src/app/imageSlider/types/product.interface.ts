export interface IProducts {
	added: boolean;
	liked: boolean;
	id: number;
  name: string;
  price: string;
  imageUrl: string;
  discount: number;
  showOnSlide: boolean;
	showDiscount: boolean;
  additionalText: string;
	SKU: number;
  Categories: string;
  Description: string;
  additionalInformation: IAdditionalInformation;
  reviews: IReviews[];
  similarItemIds: number[];
	num?: number;
	images:string[];
}

export interface IReviews {
  name: string;
  stars: number;
  text: string;
  date: string;
}

export interface IAdditionalInformation {
  weight: string;
  dimensions: string;
  colors: string;
  material: string;
}
