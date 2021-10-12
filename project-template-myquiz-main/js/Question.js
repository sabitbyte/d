class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option Number here..")
    this.submit = createButton("Submit")
   //Create a input box to enter the number
    


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.Question = createElement("h3")
    this.option1 = createElement("h4")
    this.option2 = createElement("h4")
    this.option3 = createElement("h4")
    this.option4 = createElement("h4")

    this.message = createElement("h2")
    
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);
    this.Question.html("What starts and ends with the letter 'E', but only has one letter?")
    this.option1.html("Everyone")
    this.option2.html("Envelope")
    this.option3.html("Estimate")
    this.option4.html("Example")


    //Create html() and position() for each question, input and answers.
    this.Question.position(150,80)
    this.option1.position(150,100)
    this.option2.position(150,120)
    this.option3.position(150,140)
    this.option4.position(150,160)

    this.input1.position(150, 230);
    this.input2.position(350,230)
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.submit.mousePressed(()=>{
    
    this.message.html("Thank You, Your Answer Has Been Submited.")
    this.message.position(350,350)


    })


  }
}
