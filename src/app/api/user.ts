import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';
import { getAuth } from '@clerk/nextjs/server';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = getAuth(req);

  if (!userId) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  if (req.method === 'POST') {
    const { email, name } = req.body;

    try {
      const newUser = await prisma.user.create({
        data: {
          clerkId: userId, // Assuming userId from Clerk is stored as clerkId
          email,
          name,
        },
      });

      res.status(200).json(newUser);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Unable to create user' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
