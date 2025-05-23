export type GoogleSignInParams = {
    nonce?: string;
    serverClientId: string;
    autoSelectEnabled?: boolean;
    filterByAuthorizedAccounts?: boolean;
};
export type GoogleCredential = {
    type: 'google-signin';
    id: string;
    idToken: string;
    displayName?: string;
    familyName?: string;
    givenName?: string;
    profilePicture?: string;
    phoneNumber?: string;
};
export declare function signInWithGoogle(params: GoogleSignInParams): Promise<GoogleCredential>;
export declare function signOut(): Promise<void>;
//# sourceMappingURL=index.d.ts.map