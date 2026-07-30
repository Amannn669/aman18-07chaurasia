import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

type AuthorizationDetails = {
  client?: { name?: string; client_uri?: string; redirect_uri?: string };
  redirect_url?: string;
  redirect_to?: string;
  scope?: string;
  scopes?: string[];
};

type OAuthApi = {
  getAuthorizationDetails: (id: string) => Promise<{ data: AuthorizationDetails | null; error: { message: string } | null }>;
  approveAuthorization: (id: string) => Promise<{ data: AuthorizationDetails | null; error: { message: string } | null }>;
  denyAuthorization: (id: string) => Promise<{ data: AuthorizationDetails | null; error: { message: string } | null }>;
};

const oauth = () => (supabase.auth as unknown as { oauth: OAuthApi }).oauth;

const scopeLabel = (scope: string) => {
  if (scope === "openid") return "Verify your identity";
  if (scope === "email") return "Share your email address";
  if (scope === "profile") return "Share your basic profile";
  return `Additional permission requested: ${scope}`;
};

const OAuthConsent = () => {
  const [params] = useSearchParams();
  const authorizationId = params.get("authorization_id") ?? "";
  const [details, setDetails] = useState<AuthorizationDetails | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      if (!authorizationId) {
        setError("Missing authorization_id in the request URL.");
        return;
      }
      const { data: sess } = await supabase.auth.getSession();
      if (!sess.session) {
        const next = window.location.pathname + window.location.search;
        window.location.href = "/auth?next=" + encodeURIComponent(next);
        return;
      }
      setAccount(sess.session.user.email ?? sess.session.user.id);
      const { data, error: err } = await oauth().getAuthorizationDetails(authorizationId);
      if (!active) return;
      if (err) {
        setError(err.message);
        return;
      }
      const immediate = data?.redirect_url ?? data?.redirect_to;
      if (immediate && !data?.client) {
        window.location.href = immediate;
        return;
      }
      setDetails(data);
    })();
    return () => {
      active = false;
    };
  }, [authorizationId]);

  const decide = async (approve: boolean) => {
    setBusy(true);
    const { data, error: err } = approve
      ? await oauth().approveAuthorization(authorizationId)
      : await oauth().denyAuthorization(authorizationId);
    if (err) {
      setBusy(false);
      setError(err.message);
      return;
    }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) {
      setBusy(false);
      setError("No redirect returned by the authorization server.");
      return;
    }
    window.location.href = target;
  };

  const clientName = details?.client?.name ?? "this app";
  const scopes = details?.scopes ?? (details?.scope ? details.scope.split(" ").filter(Boolean) : []);

  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="w-full max-w-md border border-border rounded-xl p-8 bg-card">
        {error ? (
          <>
            <h1 className="text-xl font-bold mb-2">Could not load this request</h1>
            <p className="text-sm text-muted-foreground">{error}</p>
          </>
        ) : !details ? (
          <p className="text-sm text-muted-foreground">Loading…</p>
        ) : (
          <>
            <h1 className="text-2xl font-black mb-2">
              Connect {clientName} to Aman&apos;s portfolio
            </h1>
            <p className="text-sm text-muted-foreground mb-6">
              {clientName} will be able to call this app&apos;s enabled tools while you are signed in.
            </p>

            <dl className="text-sm space-y-3 mb-6">
              <div>
                <dt className="text-muted-foreground">Signed in as</dt>
                <dd className="font-medium break-all">{account}</dd>
              </div>
              {details.client?.redirect_uri && (
                <div>
                  <dt className="text-muted-foreground">Redirects to</dt>
                  <dd className="font-medium break-all">{details.client.redirect_uri}</dd>
                </div>
              )}
              {scopes.length > 0 && (
                <div>
                  <dt className="text-muted-foreground mb-1">Requested access</dt>
                  <dd>
                    <ul className="list-disc pl-5 space-y-1">
                      {scopes.map((s) => (
                        <li key={s}>{scopeLabel(s)}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
            </dl>

            <p className="text-xs text-muted-foreground mb-6">
              This does not bypass this app&apos;s permissions or backend policies.
            </p>

            <div className="flex gap-3">
              <Button className="flex-1" disabled={busy} onClick={() => decide(true)}>
                Approve
              </Button>
              <Button variant="outline" className="flex-1" disabled={busy} onClick={() => decide(false)}>
                Cancel connection
              </Button>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default OAuthConsent;
