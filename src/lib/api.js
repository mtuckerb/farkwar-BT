export default () => {
  const boats = () => {
    let response = async fetch("https://staging.farkwar.com/boats")
    return await response.json
  }
};

