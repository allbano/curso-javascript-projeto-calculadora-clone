class CalcController {
    
    constructor() {
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl =  document.querySelector("#data");
        this._timeEl =  document.querySelector("#hora");
        this._currentDate;
        this.inicialize();

    }

    inicialize() {


        
        setInterval(()=>{

            this.displayDate = this.currentDate.toLocaleDateString();
            this.displayTime = this.currentDate.toLocaleTimeString();
        },1000);
    }

    get displayDate() {
        return this._dateEl.innerHTML;
    }
    set displayDate(value) {
        this._dateEl.innerHTML = value;
    }

    get displayTime() {
        return this._timeEl.innerHTML;
    }
    set displayTime(value) {
        this._timeEl.innerHTML = value;
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }
    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate() {
        return new Date();
    }
    set currentDate(value) {
        this._currentDate = value;
    }
}