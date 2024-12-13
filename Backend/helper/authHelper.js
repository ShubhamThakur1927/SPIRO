import bcrypt, { hash } from 'bcryptjs';

export const hashPassword = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password,10);

    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}
export const comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
}