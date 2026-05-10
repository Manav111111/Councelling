"use client";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Chrome, Mail } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getFirebaseAuth, getFirebaseDb, getGoogleProvider } from "@/lib/firebase";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toaster";

export function AuthBox() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "signup">("login");
  const { toast } = useToast();
  const router = useRouter();

  async function saveProfile(uid: string, displayName: string | null, userEmail: string | null) {
    await setDoc(
      doc(getFirebaseDb(), "users", uid),
      {
        uid,
        name: displayName ?? name,
        email: userEmail ?? email,
        rank: null,
        category: "General",
        savedColleges: [],
        notifications: true,
        role: "student"
      },
      { merge: true }
    );
  }

  async function submit() {
    try {
      if (mode === "signup") {
        const credential = await createUserWithEmailAndPassword(getFirebaseAuth(), email, password);
        if (name) await updateProfile(credential.user, { displayName: name });
        await saveProfile(credential.user.uid, name, credential.user.email);
        toast.success("Account created. Welcome to IPU Counselling Hub.");
        router.push("/");
      } else {
        const credential = await signInWithEmailAndPassword(getFirebaseAuth(), email, password);
        await saveProfile(credential.user.uid, credential.user.displayName, credential.user.email);
        toast.success("Logged in successfully.");
        router.push("/");
      }
    } catch (error: any) {
      let message = "Authentication failed.";
      
      switch (error.code) {
        case "auth/invalid-email":
          message = "Please enter a valid email address.";
          break;
        case "auth/user-not-found":
          message = "No account found with this email.";
          break;
        case "auth/wrong-password":
          message = "Incorrect password.";
          break;
        case "auth/invalid-credential":
          message = "Incorrect email or password.";
          break;
        case "auth/too-many-requests":
          message = "Too many attempts. Try again later.";
          break;
        case "auth/email-already-in-use":
          message = "This email is already registered.";
          break;
        case "auth/weak-password":
          message = "Password should be at least 6 characters.";
          break;
      }
      
      toast.error(message);
      console.error(error);
    }
  }

  async function googleLogin() {
    try {
      const credential = await signInWithPopup(getFirebaseAuth(), getGoogleProvider());
      await saveProfile(credential.user.uid, credential.user.displayName, credential.user.email);
      toast.success("Google login successful.");
      router.push("/");
    } catch (error: any) {
      if (error.code !== "auth/popup-closed-by-user") {
        toast.error("Google login failed.");
      }
    }
  }

  return (
    <div className="rounded-lg border border-blue-100 bg-white p-5 shadow-sm">
      <h2 className="text-2xl font-black">{mode === "login" ? "Login" : "Create account"}</h2>
      <div className="mt-5 grid gap-3">
        {mode === "signup" && <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Full name" className="rounded-md border border-blue-100 px-3 py-3" />}
        <input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" type="email" className="rounded-md border border-blue-100 px-3 py-3" />
        <input value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" type="password" className="rounded-md border border-blue-100 px-3 py-3" />
        <Button onClick={submit}><Mail size={18} /> {mode === "login" ? "Login with email" : "Sign up with email"}</Button>
        <Button onClick={googleLogin} variant="secondary"><Chrome size={18} /> Continue with Google</Button>
        <button onClick={() => setMode(mode === "login" ? "signup" : "login")} className="text-sm font-bold text-ipu-blue">
          {mode === "login" ? "Need an account? Sign up" : "Already have an account? Login"}
        </button>
      </div>
    </div>
  );
}
