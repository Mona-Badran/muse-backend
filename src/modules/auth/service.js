import bcrypt from "bcrypt";

export const handlePassword = async (password, hashed) => {
    if (hashed) {
        const check = await bcrypt.compare(password, hashed);
        if (!check) throw new Error("Invalid Credentials");
    } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    }
};