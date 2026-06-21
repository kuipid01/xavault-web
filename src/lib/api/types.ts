export type Currency = "NGN";
export type PlanStatus = "draft" | "active" | "completed" | "cancelled" | "expired";
export type BalancePolicy = "flexible" | "locked_until_plan_ends" | "locked_until_parent_ends";

export interface Wallet {
  id: string;
  user_id: string;
  available_balance: number;
  locked_balance: number;
  ledger_balance: number;
  currency: Currency;
  created_at: string;
  updated_at: string;
}

export interface SpendingPlan {
  id: string;
  user_id: string;
  wallet_id: string;
  name: string;
  amount: number;
  currency: Currency;
  status: PlanStatus;
  unboxed_balance_policy: BalancePolicy;
  start_date: string;
  end_date: string;
  top_level_allocated: number;
  plan_unboxed_balance: number;
  confirmed_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Envelope {
  id: string;
  user_id: string;
  plan_id: string;
  parent_envelope_id: string | null;
  name: string;
  amount: number;
  status: "active" | "cancelled" | "completed";
  unboxed_balance_policy: BalancePolicy;
  start_date: string;
  end_date: string;
  allocated_to_children: number;
  unboxed_balance: number;
  children?: Envelope[];
  created_at: string;
  updated_at: string;
}
