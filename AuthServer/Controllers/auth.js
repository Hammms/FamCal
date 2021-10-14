ValidPasswordToken(req, res) {
    if (!req.body.resettoken) {
        return res.status(500).json({ message: 'Token is required' });
    }
    const user = await passwordResetToken.findOne({
    resettoken: req.body.resettoken
    });
    if (!user) {
    return res
    .status(409)
    .json({ message: 'Invalid URL' });
    }
    User.findOneAndUpdate({ _id: user._userId }).then(() => {
    res.status(200).json({ message: 'Token verified successfully.' });
    }).catch((err) => {
    return res.status(500).send({ msg: err.message });
    });
};