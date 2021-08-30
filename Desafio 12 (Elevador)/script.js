var elevator = {
  currentFloor: 0,
  up(){
    if (this.currentFloor >= 3){
      return this.currentFloor;
    } else {
      return this.currentFloor++;
    }
  },
  down() {
    if (this.currentFloor <= 0) {
      return this.currentFloor;
    } else {
      return this.currentFloor--;
    }
  }
}

