import { v4 as uuidv4 } from "uuid";
import gtIcon from "../assets/images/png/gt-logo.png";
import polarisIcon from "../assets/images/png/polaris-logo.png";
import providusIcon from "../assets/images/png/providus-logo.png";
import firstBankIcon from "../assets/images/png/first-bank-logo.png";

export const virtualAccounts = [
  {
    id: uuidv4(),
    bankLogo: polarisIcon,
    bankName: "Polaris Bank Limited",
    bankAbbreviation: "Polaris",
    accountNumber: "08023221144",
    linkedBranch: "Ikeja",
    totalInflow: "NGN 100,000.00",
    lastActivityDate: "13th Sept. 2022",
    linkedBranchStatus: "active",
    transactions: [
      {
        transactionDetails: "Olaoluwa S.",
        amount: "Olaoluwa S.",
        date: "Today, 8mins ago",
      },
      {
        transactionDetails: "Olaoluwa S.",
        amount: "Olaoluwa S.",
        date: "Today, 8mins ago",
      },
      {
        transactionDetails: "Olaoluwa S.",
        amount: "Olaoluwa S.",
        date: "Today, 8mins ago",
      },
      {
        transactionDetails: "Olaoluwa S.",
        amount: "Olaoluwa S.",
        date: "Today, 8mins ago",
      },
      {
        transactionDetails: "Olaoluwa S.",
        amount: "Olaoluwa S.",
        date: "Today, 8mins ago",
      },
    ],
  },
  {
    id: uuidv4(),
    bankLogo: gtIcon,
    bankName: "Guranty Trust Holding ",
    bankAbbreviation: "Gt-bank",
    accountNumber: "08023221144",
    linkedBranch: "Lekki II",
    totalInflow: "NGN 100,000.00",
    lastActivityDate: "13th Sept. 2022",
    linkedBranchStatus: "active",
    transactions: [
      {
        transactionDetails: "Olaoluwa S.",
        amount: "Olaoluwa S.",
        date: "Today, 8mins ago",
      },
    ],
  },
  {
    id: uuidv4(),
    bankLogo: providusIcon,
    bankName: "Providus Bank PLC",
    bankAbbreviation: "Providus",
    accountNumber: "08023221144",
    linkedBranch: "Lekki II",
    totalInflow: "NGN 100,000.00",
    lastActivityDate: "13th Sept. 2022",
    linkedBranchStatus: "active",
    transactions: [
      {
        transactionDetails: "Olaoluwa S.",
        amount: "Olaoluwa S.",
        date: "Today, 8mins ago",
      },
    ],
  },
  {
    id: uuidv4(),
    bankLogo: firstBankIcon,
    bankName: "First Bank of Nigeria",
    bankAbbreviation: "FBN",
    accountNumber: "08023221144",
    linkedBranch: "Abuja",
    totalInflow: "NGN 100,000.00",
    lastActivityDate: "13th Sept. 2022",
    linkedBranchStatus: "active",
    transactions: [
      {
        transactionDetails: "Olaoluwa S.",
        amount: "Olaoluwa S.",
        date: "Today, 8mins ago",
      },
    ],
  },
];
