// Message class
export class Message {
    profile_pic: string
    
    constructor(
      public content: string,
      public sentBy: string,
      public placeholder : boolean = false,
      public action: string = null,
      
      ) 
      {
        //You can define the message profile pic
        this.profile_pic = (sentBy=='user') ? "../../assets/img/user.png": "../../assets/img/bot.png";
      }
  }