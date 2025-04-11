'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      const userCred = await createUserWithEmailAndPassword(auth, form.email, form.password);
      await setDoc(doc(db, 'users', userCred.user.uid), {
        name: form.name,
        email: form.email,
        role: 'resident', // Default role
      });
      alert('Registered successfully!');
      router.push('/login');
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <input
        name="name"
        onChange={handleChange}
        placeholder="Full Name"
        className="mb-3 p-2 border rounded w-full"
      />
      <input
        name="email"
        onChange={handleChange}
        placeholder="Email"
        className="mb-3 p-2 border rounded w-full"
      />
      <input
        name="password"
        type="password"
        onChange={handleChange}
        placeholder="Password"
        className="mb-3 p-2 border rounded w-full"
      />
      <button
        onClick={handleRegister}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Register
      </button>
    </div>
  );
}
