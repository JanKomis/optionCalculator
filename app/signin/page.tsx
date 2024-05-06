import { auth, signIn } from "@/auth";
import { providerMap } from "@/auth.config";

export default async function SignInPage() {
  return (
    <div className="flex flex-col gap-2">
      {Object.values(providerMap).map((provider, index) => (
        <form
          key={index}
          action={async () => {
            "use server";
            await signIn(provider.id);
          }}
        >
          <button type="submit">
            <span>Sign in with {provider.name}</span>
          </button>
        </form>
      ))}
    </div>
  );
}
