

export class Recipe{
    public recipeName:string ;
    public recipeDescription:string;
    public recipeImg:string;

    constructor(name:string,desc:string,imgPath:string){


        this.recipeName=name;
        this.recipeDescription=desc;
        this.recipeImg=imgPath;
    }

}