import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import QuoteView from '@/components/QuoteView';

export default async function PublicQuotePage({
  params,
}: {
  params: Promise<{ shareToken: string }>;
}) {
  const { shareToken } = await params;

  const project = await prisma.project.findUnique({
    where: { shareToken },
    include: {
      lineItems: {
        orderBy: { sortOrder: 'asc' },
      },
      user: {
        select: {
          businessName: true,
          logo: true,
          name: true,
          email: true,
          phone: true,
          address: true,
        },
      },
    },
  });

  if (!project) {
    notFound();
  }

  return <QuoteView project={project} />;
}
