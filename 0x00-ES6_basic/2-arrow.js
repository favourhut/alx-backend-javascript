export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  
    // Use an arrow function for addNeighborhood
    this.addNeighborhood = (newNeighborhood) => {
      this.sanFranciscoNeighborhoods.push(newNeighborhood);
      return this.sanFranciscoNeighborhoods;
    };
  }