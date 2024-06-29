import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();

  // Check current login user
  if (!user) {
    return null;
  }

  // Check if user is in db by Clerk ID
  let loggedInUser = await db.user.findUnique({
    where: {
      clerkId: user.id,
    },
  });

  // If user is in db by Clerk ID
  if (loggedInUser) {
    return loggedInUser;
  }

  // Check if user is in db by email
  loggedInUser = await db.user.findUnique({
    where: {
      email: user.emailAddresses[0].emailAddress,
    },
  });

  // If user is in db by email, update Clerk ID and other details
  if (loggedInUser) {
    loggedInUser = await db.user.update({
      where: {
        email: user.emailAddresses[0].emailAddress,
      },
      data: {
        clerkId: user.id,
        name: `${user.firstName} ${user.lastName}`,
        imageUrl: user.imageUrl,
      },
    });

    return loggedInUser;
  }

  // If user is not in db, create a new user
  const newUser = await db.user.create({
    data: {
      clerkId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newUser;
};
