import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { BaseClass } from "src/app/core/desing-pattern/classes/baseClass";
import { MasterCard } from "src/app/core/desing-pattern/classes/masterCard";
import { IBaseClass } from "src/app/core/desing-pattern/interfaces/baseCard";
import { VisaCard } from "../../core/desing-pattern/classes/visaCard";
import { WeekDays } from "src/app/core/desing-pattern/classes/design-pattern/singleton.class";
import {
  IStragegy,
  FaceBookStragegy,
  InstagramStragegy,
  StrategyContext,
} from "src/app/core/desing-pattern/classes/design-pattern/strategy.class";
import {
  BasicNecessityProductDecorator,
  CommercialInfoProductDecorator,
  HighRangeProductDecorator,
  ProductComponent,
  StoreProductDecorator,
} from "src/app/core/desing-pattern/classes/design-pattern/decorator.class";
import {
  PersonBuilder,
  PersonDirector,
} from "src/app/core/desing-pattern/classes/design-pattern/builder.class";
import { Ticket } from "src/app/core/desing-pattern/classes/design-pattern/state.class";
import {
  WithThumbnailListItemView,
  VideoViewModel,
  JustTextListItemView,
  StreamViewModel,
  ListItemView,
} from "src/app/core/desing-pattern/classes/design-pattern/bridge.class";
import { Meal } from "src/app/core/desing-pattern/classes/design-pattern/decorator-board.class";
import {
  BoardStrategyContext,
  FullBoardStrategy,
  HalfBoardStrategy,
  SchoolLunchBoardStrategy,
} from "src/app/core/desing-pattern/classes/design-pattern/strategy-board.class";
import {
  Room,
  RoomStrategyContext,
  SingleRoomStrategy,
  SuiteRoomStrategy,
} from "src/app/core/desing-pattern/classes/design-pattern/strategy-room.class";

@Component({
  selector: "app-design-pattern",
  templateUrl: "./design-pattern.component.html",
  styleUrls: ["./design-pattern.component.css"],
})
export class DesignPatternComponent implements OnInit, AfterViewInit {
  base: IBaseClass;
  methodPayment: string;
  user: string;
  amount: number;
  @ViewChild("messagePayment", { read: ElementRef }) message: ElementRef;
  @ViewChild("singleton1", { read: ElementRef }) singletonMessage1: ElementRef;
  @ViewChild("singleton2", { read: ElementRef }) singletonMessage2: ElementRef;
  @ViewChild("strategy", { read: ElementRef }) strategy: ElementRef;
  loginMethods: Array<any>;
  selectedValue: any;
  auth: IStragegy;
  userLogin: string;
  password: string;

  top: number = 0;
  accumulator: number;
  stateStore: Array<string> = [];
  accu = new Ticket();

  boards: Array<Meal> = [];
  boardList = {
    name: "all boards",
    completed: false,
    color: "primary",
    instance: FullBoardStrategy,
    boards: this.boards,
  };
  radioButtonSelected: any;
  allBoardsCompleted: boolean = false;
  schoolLunchBoard: Meal;
  halfBoard: Meal;
  fullBoard: Meal;
  radioButtonRoomSelected: any;
  rooms: any = [];
  messageBoardRoom: string;
  board: any;
  roomStrategy: any;

  constructor() {}

  ngOnInit(): void {
    this.base = new BaseClass();
    this.loginMethods = [
      { value: new FaceBookStragegy(), label: "FaceBook" },
      { value: new InstagramStragegy(), label: "Instagram" },
    ];
    this.setAllBoards();
  }

  ngAfterViewInit(): void {
    this.callingSingletonPattern();
    this.callingDecoratorPattern();
    this.callingBuilderPattern();
    this.callingStatePattern();
    this.callingBridgePattern();
  }

  payment() {
    if (this.methodPayment === "visa") {
      if (this.base) {
        this.base.setStrategy(new VisaCard("card123", "123cvv"));
      }
    } else if (this.methodPayment === "master") {
      if (this.base) {
        this.base.setStrategy(new MasterCard("master123", "456cvv"));
      }
    }
    if (this.base.execute(this.user, this.amount)) {
      this.message.nativeElement.innerHTML = `Compra realizada por ${this.user}
       con ${this.methodPayment}`;
    }
  }

  submit(): void {
    this.payment();
  }

  callingSingletonPattern() {
    const instance1 = WeekDays.getInstance();
    const instance2 = WeekDays.getInstance();
    console.log(
      "%cSINGLETON ",
      "background: green; color: white; display: block;",
      instance1.random,
      instance2.random
    );
    this.singletonMessage1.nativeElement.innerHTML = `Random: ${instance1.random}`;
    this.singletonMessage2.nativeElement.innerHTML = `Random: ${instance2.random}`;
  }

  valueChange(): void {
    console.log(
      "%cselecteValue ",
      "color: white; background-color: #007acc;",
      this.selectedValue
    );
    this.auth = new StrategyContext(this.selectedValue);
  }

  submitLogin(): void {
    if (this.auth.login(this.userLogin, this.password)) {
      this.strategy.nativeElement.innerHTML = `You have been logged in ${this.selectedValue.constructor.name}`;
    } else {
      this.strategy.nativeElement.innerHTML = `Something wrong happened while logging in ${this.selectedValue.constructor.name}`;
    }
  }

  callingDecoratorPattern() {
    // ProductComponent
    const productComponent = new ProductComponent("Cerveza", 22.5);
    console.log(
      "%c Decorator pattern ",
      "color: white; background-color: #007acc;",
      productComponent.getDetail()
    );
    const commercialInfoProduct = new CommercialInfoProductDecorator(
      productComponent,
      "San Miguel",
      "La cabra"
    );
    console.log(
      "%c ",
      "background: green; color: white; display: block;",
      commercialInfoProduct.getDetail()
    );
    const storeProduct = new StoreProductDecorator(productComponent, 33.8);
    console.log(
      "%cstore ",
      "color: red; display: block; width: 100%;",
      storeProduct.getDetail()
    );
    const storeProduct2 = new StoreProductDecorator(
      commercialInfoProduct,
      99.85
    );
    console.log(
      "%cFull info ",
      "color: white; background-color: #007acc;",
      storeProduct2.getDetail()
    );
    const basicNecessary = new BasicNecessityProductDecorator(productComponent);
    basicNecessary.getFinalPricePlus4Taxes();
    const highRange = new HighRangeProductDecorator(commercialInfoProduct);

    highRange.getDetail();
  }

  setAllBoards(): void {
    this.schoolLunchBoard = new Meal(
      "school lunch",
      20,
      new SchoolLunchBoardStrategy()
    );
    this.halfBoard = new Meal("half-Meal room", 50, new HalfBoardStrategy());
    this.fullBoard = new Meal("full boards", 100, new FullBoardStrategy());
    this.boardList.boards = [
      this.schoolLunchBoard,
      this.halfBoard,
      this.fullBoard,
    ];
    this.rooms = [
      new Room("single", 140, new SingleRoomStrategy()),
      new Room("suite", 200, new SuiteRoomStrategy()),
    ];
    this.updateAllCompleteBoard(this.boardList.boards[0]);
    this.radioButtonSelected = this.boardList.boards[0].name;
    this.selectRoom(this.rooms[0]);
    this.radioButtonRoomSelected = this.rooms[0].name;
  }

  updateAllCompleteBoard(board: any): void {
    const boardStrategy = new BoardStrategyContext();

    boardStrategy.setStrategy(board.strategy);
    this.board = boardStrategy.checkIn(board);
    this.showMessageBoardRoom();
  }

  showMessageBoardRoom(): void {
    if (this.roomStrategy && this.board) {
      this.messageBoardRoom = `The total is ${this.roomStrategy.price} + ${
        this.board.mealDecorator.price
      } = ${this.roomStrategy.price + this.board.mealDecorator.price}`;
    }
  }

  selectRoom(room: any) {
    const roomStrategyContext = new RoomStrategyContext();

    roomStrategyContext.setStrategy(room.instance);
    this.roomStrategy = roomStrategyContext.select(room);
    this.showMessageBoardRoom();
  }

  callingBuilderPattern() {
    const personBuilder = new PersonBuilder();
    const angel = personBuilder
      .setName("Angel")
      .setLastname("León")
      .setAge(44)
      .build();
    const federico = personBuilder
      .setName("Roger")
      .setLastname("Federer")
      .setAge(38)
      .setCity("Basilea")
      .setCountry("Suiza")
      .setHobbies("Tennis")
      .setHobbies("Travel")
      .setHobbies("Read")
      .build();
    console.log(
      "%cBUILDER ",
      "color: red; display: block; width: 100%;",
      angel
    );
    console.log(
      "%cBUILDER ",
      "color: red; display: block; width: 100%;",
      federico
    );

    //? Lo mismo pero creado con DIRECTOR
    const directo = new PersonDirector(personBuilder);
    directo.createSimplePerson("Rafael", "Nada");
    const rafa = personBuilder.build();
    console.log(
      "%cBUILDER WITH DIRECTOR ",
      "color: red; display: block; width: 100%;",
      rafa
    );
    directo.createFullPerson("Carlos", "Alcaraz", 20, "Murcia", "Spain", [
      "Tennis",
      "Series",
      "TV Shows",
    ]);
    const carlos = personBuilder.build();
    console.log(
      "%cOTRO BUILDER WITH DIRECTOR ",
      "color: red; display: block; width: 100%;",
      carlos
    );
  }

  callingStatePattern() {
    const ticket = new Ticket();
    ticket.setLimit = 5;
    console.log(
      "%cstate next ",
      "background: green; color: white; display: block;",
      ticket.getState,
      "next resta 1 ",
      ticket.add(1),
      ticket.getState,
      ticket.add(2),
      ticket.next(),
      ticket.getState,
      ticket.add(3),
      ticket.getState,
      "Cuando llega a FullState termina el proceso, no dejando seguir...",
      ticket.add(2),
      ticket.getState
    );
    this.submitState();
  }

  submitState(): void {
    this.accu.setLimit = this.top;
    this.accu.add(this.accumulator);
    this.getStateStore();
  }

  subtractState(): void {
    this.accu.next();
    this.getStateStore();
  }

  getStateStore(): void {
    const message = `${this.accu.getState.constructor.name}: Top number ${
      this.top
    } - ${this.accu.quantity} = ${this.top - this.accu.quantity}`;
    this.stateStore.push(message);
  }
  callingBridgePattern() {
    const content = [
      {
        type: "video",
        title: "Title 1",
        image: "Image 1",
      },
      {
        type: "stream",
        title: "Title stream 1",
        image: "Image stream 1",
        viewers: 10,
      },
      {
        type: "video",
        title: "Title video 2",
        image: "Image video 2",
      },
      {
        type: "video",
        title: "Title video 3",
        image: "Image video 3",
      },
      {
        type: "stream",
        title: "Title stream 2",
        image: "Image stream 2",
        viewers: 30,
      },
    ];
    const listViews: ListItemView[] = [];
    for (let item of content) {
      if (item.type === "video") {
        listViews.push(
          Math.random() > 0.5
            ? new WithThumbnailListItemView(new VideoViewModel(item))
            : new JustTextListItemView(new VideoViewModel(item))
        );
      } else if (item.type === "stream") {
        listViews.push(
          Math.random() > 0.5
            ? new WithThumbnailListItemView(new StreamViewModel(item))
            : new JustTextListItemView(new StreamViewModel(item))
        );
      }
    }
    // for (let view of listViews) {
    //   view.render();
    // }
    const withT = new WithThumbnailListItemView(new VideoViewModel(content[0]));
    withT.render();
    const justTVideo = new JustTextListItemView(new VideoViewModel(content[0]));
    justTVideo.render();
  }
}
