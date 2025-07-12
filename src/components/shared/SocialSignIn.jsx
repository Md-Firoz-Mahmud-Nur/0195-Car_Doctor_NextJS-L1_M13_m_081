import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const SocialSignIn = () => {
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect");

  const handleSocialSignIn = async (provider) => {
    const res = await signIn(provider, {
      redirect: true,
      callbackUrl: path ? path : "/",
    });
    console.log("social", res);
  };
  return (
    <div className="flex items-center justify-center gap-4">
      <button onClick={() => handleSocialSignIn("facebook")}>
        <Image
          width={55}
          height={55}
          alt="Facebook"
          src="/assets/Facebook.svg"
          className="rounded-full bg-[#F5F5F8] p-3"
        ></Image>
      </button>
      <button onClick={() => handleSocialSignIn("linkedin")}>
        <Image
          width={55}
          height={55}
          alt="LinkedIn"
          src="/assets/LinkedIn.svg"
          className="rounded-full bg-[#F5F5F8] p-3"
        ></Image>
      </button>
      <button onClick={() => handleSocialSignIn("google")}>
        <Image
          width={55}
          height={55}
          alt="Google"
          src="/assets/Google.svg"
          className="rounded-full bg-[#F5F5F8] p-3"
        ></Image>
      </button>
    </div>
  );
};

export default SocialSignIn;
