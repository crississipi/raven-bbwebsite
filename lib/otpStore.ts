// lib/otpStore.ts
const otpStore = new Map<string, { otp: string, expiresAt: number }>();
export default otpStore;
