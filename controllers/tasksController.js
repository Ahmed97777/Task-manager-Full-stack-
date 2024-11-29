const getAllTasks = (req, res) => {
  res.json({ getAllTasks: "success" });
};

const createTask = (req, res) => {
  res.json({ createTask: "success" });
};

const getSingleTask = (req, res) => {
  res.json({ getSingleTask: req.params.id });
};

const updateTask = (req, res) => {
  res.json({ updateTask: req.params.id });
};

const deleteTask = (req, res) => {
  res.json({ deleteTask: req.params.id });
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
