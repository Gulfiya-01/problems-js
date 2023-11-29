class Timer {
  #startTime: Date | null;
  #pausedTime: number;
  #isPaused: boolean;
  constructor() {
      this.#startTime = null;
      this.#pausedTime = 0;
      this.#isPaused = true;
  }
  start() {
    if (this.#isPaused) {
        const currentTime = Date.now();
        const remainingTime = this.#pausedTime - (this.#startTime ? this.#startTime.getTime() : 0);
        this.#startTime = new Date(currentTime - remainingTime);
        this.#isPaused = false;
    }
}

  pause() {
      if (!this.#isPaused && this.#startTime) {
          this.#pausedTime = Date.now();
          this.#isPaused = true;
      }
  }

  reset() {
      this.#startTime = null;
      this.#pausedTime = 0;
      this.#isPaused = true;
  }

  log() {
      if (this.#startTime) {
          const currentTime = this.#isPaused ? this.#pausedTime : Date.now();;
          let diff = Math.abs(currentTime - this.#startTime.getTime());

          const ms = diff % 1000;
          diff = Math.floor(diff / 1000);
          const s = diff % 60;
          diff = Math.floor(diff / 60);
          const m = diff % 60;
          const h = Math.floor(diff / 60);

          console.log({ h, m, s, ms });
      } else {
          console.log({ h: 0, m: 0, s: 0, ms: 0 });
      }
  }
}


export default Timer;
