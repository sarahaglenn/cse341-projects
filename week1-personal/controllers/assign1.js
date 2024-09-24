const sarahRoute = (req, res) => {
    res.send("The Sarah Glenn page!");
};
    
const andrewRoute = (req, res) => {
  res.send("Andrew Glenn.");
};

const michaelRoute = (req, res) => {
    res.send('Michael Glenn');
};

module.exports = {
    sarahRoute,
    andrewRoute,
    michaelRoute,
};