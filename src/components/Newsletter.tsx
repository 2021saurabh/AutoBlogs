// components/Newsletter.tsx
'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'exists' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const validateEmail = (val: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());

  const handleSubscribe = async () => {
    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('');

    // Try a plain INSERT first; if unique violation -> already subscribed
    const { error } = await supabase.from('subscribers').insert([{ email: email.trim() }]);

    if (!error) {
      setStatus('success');
      setMessage('Thanks! You are subscribed. 🎉');
      setEmail('');
      return;
    }

    // 23505 = unique_violation (email already exists)
    // Supabase surfaces Postgres codes on error.details or error.code
    if ((error as any)?.code === '23505') {
      setStatus('exists');
      setMessage('You’re already on the list. ✅');
    } else {
      setStatus('error');
      setMessage('Something went wrong. Please try again in a moment.');
      console.error('Subscribe error:', error);
    }
  };

  return (
    <div className="bg-gray-900/50 h-full p-6 rounded-lg border border-gray-800 flex flex-col justify-center">
      <h3 className="text-lg font-bold mb-4 text-center uppercase tracking-wide">NEWSLETTER</h3>

      <div className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-sm focus:outline-none focus:border-green-500 disabled:opacity-60"
          disabled={status === 'loading'}
        />

        <button
          onClick={handleSubscribe}
          disabled={status === 'loading'}
          className="w-full bg-green-600 hover:bg-green-500 py-2 rounded font-medium text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
        </button>

        {message && (
          <p
            className={
              status === 'success' || status === 'exists'
                ? 'text-green-400 text-xs'
                : 'text-red-400 text-xs'
            }
          >
            {message}
          </p>
        )}

        
      </div>
    </div>
  );
}
