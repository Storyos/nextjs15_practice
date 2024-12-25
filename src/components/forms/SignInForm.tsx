'use client';
import { Button } from "../ui/button";

export default function SignInForm() {
    return (
        <div>
            <form className="flex flex-col gap-4">
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <Button variant="outline">Sign in</Button>
            </form>
        </div>
    );
}