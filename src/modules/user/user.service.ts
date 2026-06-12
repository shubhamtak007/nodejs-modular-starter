import prisma from '../../config/db.js';


async function retrieveUserProfile(userId: string) {
    if (!userId) {
        throw new Error('User id is missing!!.')
    }

    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            id: true,
            name: true,
            email: true
        },
    });

    if (!user) {
        throw new Error("User not found");
    }

    return user;
}

const UserService = { retrieveUserProfile }

export default UserService;