exports.getProtectedData = (req, res) => {
  const role = req.user.role; // Extracted from the JWT token
  if (role === "admin") {
    return res.json({ message: "hello admin" });
  } else {
    return res.json({
      message: "hello user",
    });
  }
};
