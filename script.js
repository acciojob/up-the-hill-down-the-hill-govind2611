function aveSpd(upTime, upSpd, downSpd) {
  const totalDistance = upSpd * (upTime / 60); 
  const totalTime = upTime + (totalDistance / downSpd) * 60;
  const averageSpeed = (2 * totalDistance) / (totalTime / 60);

  return averageSpeed;
}
console.log(aveSpd(18, 20, 60));
console.log(aveSpd(30, 10, 30));
console.log(aveSpd(30, 8, 24)); 


// Do not change the code below
const upTime = prompt("Enter upTime: ");
const downTime = prompt("Enter downTime: ");
const downSpd = prompt("Enter downSpd: ");

//alert(aveSpd(upTime, downTime, downSpd));