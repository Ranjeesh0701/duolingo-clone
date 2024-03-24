import { auth } from "@clerk/nextjs";

const adminIds = ["user_2e50SHT4AXuQLwwhkaaJ2So1jCw"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
