import { prisma } from './prisma';

const DEFAULT_USER_EMAIL = 'default@craftquote.local';

export async function getDefaultUser() {
  let user = await prisma.user.findUnique({
    where: { email: DEFAULT_USER_EMAIL },
  });

  if (!user) {
    user = await prisma.user.create({
      data: {
        email: DEFAULT_USER_EMAIL,
        name: 'Woodworker',
        passwordHash: '',
        onboardingCompleted: true,
        shopRate: 50,
        overheadRate: 15,
        defaultMargin: 20,
        showDetailedBreakdown: true,
      },
    });
  }

  return user;
}
