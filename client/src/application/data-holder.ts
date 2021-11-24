export interface IApplicationData {
  categories: Array<ICategoryData>;
}
export interface ICategoryData {
  name: string;
  cardsArr: Array<ICardData>;
}

export interface ICardData {
  author: string;
  name: string;
  year: string;
  imageNum: string;
  image: string;
}
interface ICardRawData {
  author: string;
  name: string;
  year: string;
  imageNum: string;
}

class CardsData implements ICardData {
  public author: string;
  public name: string;
  public year: string;
  public imageNum: string;
  public image: string;
  constructor(
    author: string,
    name: string,
    year: string,
    imageNum: string,
    image: string
  ) {
    this.author = author;
    this.name = name;
    this.year = year;
    this.imageNum = imageNum;
    this.image = `../assets/img/${imageNum}.webp`;
  }

  static fromJson(json: any) {
    return new CardsData(
      json.author,
      json.name,
      json.year,
      json.imageNum,
      json.image
    );
  }
}

class ApplicationData implements IApplicationData {
  public categories: Array<ICategoryData>;
  constructor(data: Array<ICategoryData>) {
    this.categories = data;
  }

  static fromJson(data: any) {
    const categories: Array<string> = data[0];
    const categoryRecords= data[1] /* Array<Array<ICardRawData>> = data.slice(1); */
    

    const formattedCategories: Array<ICategoryData> = categories.map(
      (item, index) => {
        const category: ICategoryData = {
          name: item,
          cardsArr: categoryRecords.map((cardsRawData: any) =>
            CardsData.fromJson(cardsRawData)
          ),
        };
        return category;
      }
    );
    return new ApplicationData(formattedCategories);
  }
}
export class DataHolder {
  public base: ApplicationData;
  constructor() {}

  public async build() {
    const applicationData = await this.getBase();
    this.base = applicationData;

   /*  */
    return this;
  }

  private getBase() {
    return fetch("../assets/images.json")
      .then((res) => res.json())
      .then((data: Array<any>) => {
        return ApplicationData.fromJson(data);
        
      });
  }
}
