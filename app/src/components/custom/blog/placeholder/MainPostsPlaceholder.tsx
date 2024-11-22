"use client";

import { Link } from "@/components";
import { useAuthStore } from "@/store";

export function MainPostsPlaceholder() {
  const isLogin = useAuthStore((state) => state.creds.isLogin);
  return (
    <div className="m-auto">
      <div className="flex-1 dead-center">
        <div className="flex flex-col items-center">
          <h2>No Posts Yet?</h2>
          <p>
            Go ahead and{" "}
            {isLogin ? (
              <Link href="/new" className="px-0">
                create one now
              </Link>
            ) : (
              <>
                <Link href="/login" className="px-0">
                  login
                </Link>{" "}
                to create your own posts
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
