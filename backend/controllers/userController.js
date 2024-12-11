exports.getProtectedData = (req, res) => {
  const role = req.user.role; // Extracted from the JWT token
  if (role === "admin") {
    return res.json({ message: "Hello Admin" });
  }
};
