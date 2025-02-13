'use client';

import React from 'react';

import { useLogin, usePrivy } from '@privy-io/react-auth';
import { Button } from '@/components/ui';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginButton: React.FC = () => {
	const router = useRouter();

	const { authenticated } = usePrivy();

	const { login } = useLogin({
		onComplete: (_, __, wasAlreadyAuthenticated) => {
			if (!wasAlreadyAuthenticated) {
				router.replace('/manageAI');
			}
		},
	});

	if (authenticated)
		return (
			<Link href="/manageAI">
				<Button variant={'brand'}>Get Started</Button>
			</Link>
		);

	return (
		<Button
			variant={'brand'}
			onClick={() => login()}
			disabled={authenticated}
		>
			Login
		</Button>
	);
};

export default LoginButton;