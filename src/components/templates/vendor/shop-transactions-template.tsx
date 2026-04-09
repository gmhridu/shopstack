import type { Transaction } from "@/types/transactions";
import { TransactionsHeader } from "@/components/containers/vendors/transactions/transactions-header";
import { TransactionsTable } from "@/components/containers/vendors/transactions/transactions-table";

interface ShopTransactionsTemplateProps {
  transactions: Transaction[];
}

export function ShopTransactionsTemplate({
  transactions,
}: ShopTransactionsTemplateProps) {
  return (
    <div className="space-y-6">
      <TransactionsHeader />
      <TransactionsTable transactions={transactions} />
    </div>
  );
}
