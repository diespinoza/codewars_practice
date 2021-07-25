// When the frog encounters an animal other than an alligator, the frog's mouth is wide. Otherwise it is small.
function mouthSize(animal) {
  animal = animal.toLowerCase();
  return (animal == "alligator" ? "small" : "wide");
  /*
  if (animal == "alligator"){
    return "small";
  } else {
    return "wide";
  }
  */
}
