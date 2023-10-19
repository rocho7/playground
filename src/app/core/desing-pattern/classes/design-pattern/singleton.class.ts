export class WeekDays {
  es: string[] = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];
  en: string[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  private static instance: WeekDays;
  public random: number;

  private constructor(private lang: string) {
    this.random = Math.random();
  }

  getLang(): string[] {
    return this.lang === "es" ? this.es : this.en;
  }

  public static getInstance(): WeekDays {
    if (!this.instance) {
      this.instance = new WeekDays("es");
    }
    return this.instance;
  }
}
