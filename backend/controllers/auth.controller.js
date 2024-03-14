import User from "../models/user.model.js";

export const login = (req, res) => {
  res.send("login");
  console.log("login");
};

export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword)
      return res.status(400).json({ error: "Password don't match!" });

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Username already exists!" });
    }

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullname,
      username,
      password,
      confirmPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      fullname: newUser.fullName,
      username: newUser.username,
      profilePic: newUser.profilePic,
    });
  } catch (err) {
    console.log('Error in signup', err)
    res.status(500).json({error:"Internal Server Error!"})
  }
};

export const logout = (req, res) => {
  res.send("logout");
  console.log("logout");
};
