import { useEffect, useState } from 'react';
import { me } from '@/features/auth';
import { userType } from '@/shared/types';

export function useAuth() {
    const [user, setUser] = useState<userType | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        me()
        .then((res) => setUser(res?.data))
        .catch(() => setUser(null))
        .finally(() => setLoading(false))
    })

    return { user, loading }
}