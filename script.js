//Circle Task
class circle{
    constructor(a,b)
    {
    this.radius=a;
    this.color=b;
    }
    PG(){
    return `Area of circle ${this.radius*3.14*this.radius}
    circumference of circle is ${2*3.14*this.radius}` ;
    }
    }
    var c=new circle(3.0,"Red");
    console.log(c.PG());

    //Movie -Task
    class movie {
        constructor(title, studio, rating) {
          this.title = title;
          this.studio = studio;
          this.rating = rating;
        }
      
        getrating() {
          return "the rating is  " + this.rating;
        }
      
      }
      class movie2 {
          constructor(title, studio, rating){
              this.title = title;
              this.studio = studio;
              this.rating = "PG";
          }
          getrating2() {
          return "the rating is  " + this.rating;
          }
      }
      var CasinoRoyale = new movie( "Casino Royal", "Eon Productions", "PG13");
      var CasinoRoyale2 = new movie2( "Casino Royal", "Eon Productions");
      console.log(CasinoRoyale.getrating())
      console.log(CasinoRoyale2.getrating2())