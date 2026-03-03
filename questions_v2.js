// questions_v2.js
// ACC Quiz bank (Ch1–4) – 30 questions (20 theory + 10 practice)

window.QUESTIONS = [
  // ---------------- PART 1: THEORY (1–20) ----------------
  {
    id: 1,
    part: "theory",
    tag: "Part 1 – Theory",
    text: "Câu 1: What is the formal definition of accounting?",
    choices: {
      A: "A method used solely for calculating annual tax payments.",
      B: "An information and measurement system that identifies, records, and communicates an organization’s business activities.",
      C: "A system for hiring and managing employees.",
      D: "The process of selling products to external customers."
    },
    answer: "B",
    explain:
      "Accounting là hệ thống thông tin + đo lường: nhận diện, ghi chép, và truyền đạt hoạt động kinh doanh để người dùng ra quyết định."
  },
  {
    id: 2,
    part: "theory",
    tag: "Part 1 – Theory",
    text: "Câu 2: Which of the following are considered \"external users\" of accounting information?",
    choices: {
      A: "Research and development managers and marketing managers.",
      B: "Human resource managers and production managers.",
      C: "Lenders, shareholders, and external auditors.",
      D: "Distribution managers and purchasing managers."
    },
    answer: "C",
    explain:
      "External users = bên ngoài DN: lenders (người cho vay), shareholders (cổ đông), external auditors (kiểm toán độc lập)."
  },
  {
    id: 3,
    part: "theory",
    tag: "Part 1 – Theory",
    text: "Câu 3: According to the \"Fraud Triangle,\" what three factors push a person to commit fraud?",
    choices: {
      A: "Opportunity, pressure, and rationalization.",
      B: "Greed, lack of supervision, and high debt.",
      C: "Opportunity, wealth, and ego.",
      D: "Pressure, desire, and opportunity."
    },
    answer: "A",
    explain:
      "Fraud Triangle = Pressure (động lực/áp lực) + Opportunity (cơ hội) + Rationalization (tự hợp thức hóa trong đầu)."
  },
  {
    id: 4,
    part: "theory",
    tag: "Part 1 – Theory",
    text: "Câu 4: The \"Measurement Principle\" (Cost Principle) implies that:",
    choices: {
      A: "Revenue is recorded when cash is received.",
      B: "Accounting information is based on actual cost, which is considered objective.",
      C: "Expenses should be matched against revenues.",
      D: "Financial statements must include all relevant details."
    },
    answer: "B",
    explain:
      "Cost principle: ghi nhận theo giá gốc (actual cost) vì khách quan hơn so với ước tính giá thị trường."
  },
  {
    id: 5,
    part: "theory",
    tag: "Part 1 – Theory",
    text: "Câu 5: Which accounting assumption presumes that a business will continue operating instead of being closed or sold?",
    choices: {
      A: "Monetary Unit Assumption.",
      B: "Business Entity Assumption.",
      C: "Going-Concern Assumption.",
      D: "Time Period Assumption."
    },
    answer: "C",
    explain:
      "Going concern = giả định doanh nghiệp hoạt động liên tục, không chuẩn bị giải thể/bán ngay."
  },
  {
    id: 6,
    part: "theory",
    tag: "Part 1 – Theory",
    text: "Câu 6: What is the expanded accounting equation?",
    choices: {
      A: "Assets = Liabilities + Equity.",
      B: "Assets = Liabilities + Owner Capital – Owner Withdrawals + Revenues – Expenses.",
      C: "Assets = Liabilities – Equity.",
      D: "Assets + Liabilities = Equity."
    },
    answer: "B",
    explain:
      "Expanded equation: Equity tách chi tiết thành Capital, Withdrawals, Revenues, Expenses."
  },
  {
    id: 7,
    part: "theory",
    tag: "Part 1 – Theory",
    text: "Câu 7: Which of the following is an example of a \"Source Document\"?",
    choices: {
      A: "General Ledger.",
      B: "Trial Balance.",
      C: "Income Statement.",
      D: "Checks, bills from suppliers, and bank statements."
    },
    answer: "D",
    explain:
      "Source documents là chứng từ gốc: checks, hóa đơn nhà cung cấp, sao kê ngân hàng…"
  },
  {
    id: 8,
    part: "theory",
    tag: "Part 1 – Theory",
    text: "Câu 8: In double-entry accounting, which accounts have a \"Normal Debit\" balance?",
    choices: {
      A: "Liabilities, Owner Capital, and Revenues.",
      B: "Assets, Owner Withdrawals, and Expenses.",
      C: "Liabilities and Expenses.",
      D: "Assets and Revenues."
    },
    answer: "B",
    explain:
      "Normal debit: Assets, Expenses, Withdrawals. Normal credit: Liabilities, Equity, Revenues."
  },
  {
    id: 9,
    part: "theory",
    tag: "Part 1 – Theory",
    text: "Câu 9: What is the primary purpose of a Trial Balance?",
    choices: {
      A: "To list all ledger accounts and verify that total debits equal total credits.",
      B: "To determine the net profit for the year.",
      C: "To replace the Balance Sheet.",
      D: "To record daily transactions."
    },
    answer: "A",
    explain:
      "Trial Balance dùng để liệt kê tài khoản sổ cái và kiểm tra tổng Nợ = tổng Có sau khi ghi sổ."
  },
  {
    id: 10,
    part: "theory",
    tag: "Part 1 – Theory",
    text: "Câu 10: Under the accrual basis of accounting:",
    choices: {
      A: "Revenues are recorded only when cash is received.",
      B: "Revenues are recorded when products or services are delivered, and expenses are recorded when incurred.",
      C: "Adjusting entries are never required.",
      D: "Expenses are recorded only when cash is paid."
    },
    answer: "B",
    explain:
      "Accrual basis: ghi nhận doanh thu khi earned (cung cấp hàng/dịch vụ), chi phí khi incurred (phát sinh), không chờ tiền."
  },
  {
    id: 11,
    part: "theory",
    tag: "Part 1 – Theory",
    text: "Câu 11: The \"Expense Recognition Principle\" (Matching Principle) requires that:",
    choices: {
      A: "Expenses be recorded when cash is paid.",
      B: "Expenses be recorded in the same period as the revenues they helped generate.",
      C: "Revenues be recorded when earned.",
      D: "Assets be recorded at cost."
    },
    answer: "B",
    explain:
      "Matching: chi phí đi cùng doanh thu liên quan trong cùng kỳ để phản ánh đúng lợi nhuận."
  },
  {
    id: 12,
    part: "theory",
    tag: "Part 1 – Theory",
    text: "Câu 12: How are \"Prepaid Expenses\" defined?",
    choices: {
      A: "Liabilities to be paid in the future.",
      B: "Revenues earned but not yet collected.",
      C: "Assets paid for in advance of receiving their benefits.",
      D: "Expenses that have been incurred but not yet paid."
    },
    answer: "C",
    explain:
      "Prepaid expenses: trả trước, lợi ích nhận sau → là Asset (ví dụ prepaid rent/insurance)."
  },
  {
    id: 13,
    part: "theory",
    tag: "Part 1 – Theory",
    text: "Câu 13: \"Unearned Revenue\" is classified as a:",
    choices: {
      A: "Asset.",
      B: "Liability.",
      C: "Equity.",
      D: "Revenue."
    },
    answer: "B",
    explain:
      "Unearned revenue: nhận tiền trước nhưng chưa cung cấp dịch vụ → nghĩa vụ phải làm → Liability."
  },
  {
    id: 14,
    part: "theory",
    tag: "Part 1 – Theory",
    text: "Câu 14: What does the process of \"Depreciation\" involve?",
    choices: {
      A: "Saving cash to purchase a replacement asset.",
      B: "Measuring the decline in the market value of an asset.",
      C: "Allocating or spreading out the cost of tangible assets over their expected useful lives.",
      D: "Recording the immediate expense of an asset at the time of purchase."
    },
    answer: "C",
    explain:
      "Depreciation = phân bổ giá trị (cost) của tài sản hữu hình qua các kỳ sử dụng (useful life), không phải đo giá thị trường."
  },
  {
    id: 15,
    part: "theory",
    tag: "Part 1 – Theory",
    text: "Câu 15: Which of these is considered a \"Temporary Account\" that must be closed at period-end?",
    choices: {
      A: "Cash.",
      B: "Accounts Payable.",
      C: "Owner, Capital.",
      D: "Revenues, Expenses, and Owner Withdrawals."
    },
    answer: "D",
    explain:
      "Temporary accounts: Revenues, Expenses, Withdrawals → phải khóa sổ cuối kỳ về Capital."
  },
  {
    id: 16,
    part: "theory",
    tag: "Part 1 – Theory",
    text: "Câu 16: Which accounts are \"Permanent Accounts\" that are NOT closed?",
    choices: {
      A: "Revenues and Expenses.",
      B: "Assets, Liabilities, and Owner Capital.",
      C: "Income Summary and Withdrawals.",
      D: "All accounts on the Income Statement."
    },
    answer: "B",
    explain:
      "Permanent accounts nằm trên Balance Sheet: Assets, Liabilities, Equity (Owner Capital)."
  },
  {
    id: 17,
    part: "theory",
    tag: "Part 1 – Theory",
    text: "Câu 17: What is a primary benefit of using a \"Work Sheet\"?",
    choices: {
      A: "It replaces the need for a General Ledger.",
      B: "It reduces the risk of errors and links accounts to their adjustments.",
      C: "It is a mandatory financial statement for external users.",
      D: "It prevents any fraud from occurring."
    },
    answer: "B",
    explain:
      "Worksheet giúp tổng hợp Adjusting entries, giảm lỗi, nối số liệu từ trial balance → adjusted trial balance → statements."
  },
  {
    id: 18,
    part: "theory",
    tag: "Part 1 – Theory",
    text: "Câu 18: In a classified balance sheet, \"Current Assets\" are resources expected to be sold, collected, or used within:",
    choices: {
      A: "Exactly five years.",
      B: "One month.",
      C: "One year or the company’s operating cycle, whichever is longer.",
      D: "The entire life of the business."
    },
    answer: "C",
    explain:
      "Current assets: trong 1 năm hoặc operating cycle (nếu operating cycle dài hơn)."
  },
  {
    id: 19,
    part: "theory",
    tag: "Part 1 – Theory",
    text: "Câu 19: What are \"Intangible Assets\"?",
    choices: {
      A: "Cash and accounts receivable.",
      B: "Long-term assets that benefit business operations but lack physical form.",
      C: "Tangible long-term assets like land and buildings.",
      D: "Short-term investments."
    },
    answer: "B",
    explain:
      "Intangible assets: tài sản dài hạn không có hình thái vật chất (patents, trademarks, goodwill...)."
  },
  {
    id: 20,
    part: "theory",
    tag: "Part 1 – Theory",
    text: "Câu 20: What is the purpose of \"Reversing Entries\"?",
    choices: {
      A: "They are mandatory entries at the end of every month.",
      B: "They simplify recordkeeping for accrued assets and liabilities in the next period.",
      C: "They are used to correct errors in the Trial Balance.",
      D: "They close the temporary accounts to capital."
    },
    answer: "B",
    explain:
      "Reversing entries (đầu kỳ sau) giúp đơn giản hóa ghi chép cho các khoản dồn tích (accruals) đã điều chỉnh cuối kỳ trước."
  },

  // ---------------- PART 2: PRACTICE (21–30) ----------------
  {
    id: 21,
    part: "practice",
    tag: "Part 2 – Practice",
    text: "Câu 21: Accounting Equation — Assets $30,000; Liabilities $7,100. Owner invests additional $5,000 cash. New total Equity?",
    choices: {
      A: "$22,900",
      B: "$35,000",
      C: "$27,900",
      D: "$30,000"
    },
    answer: "C",
    explain:
      "Initial Equity = 30,000 − 7,100 = 22,900. Invest +5,000 → Equity = 27,900."
  },
  {
    id: 22,
    part: "practice",
    tag: "Part 2 – Practice",
    text: "Câu 22: ROA — Net Profit $4,400; Beginning Assets $30,000; Ending Assets $40,400. ROA?",
    choices: {
      A: "11.0%",
      B: "14.6%",
      C: "12.5%",
      D: "10.9%"
    },
    answer: "C",
    explain:
      "Average Assets = (30,000 + 40,400)/2 = 35,200. ROA = 4,400 / 35,200 = 12.5%."
  },
  {
    id: 23,
    part: "practice",
    tag: "Part 2 – Practice",
    text: "Câu 23: Debt Ratio — Total Liabilities $9,200; Total Assets $42,395. Debt Ratio?",
    choices: {
      A: "21.7%",
      B: "46.0%",
      C: "78.3%",
      D: "4.6%"
    },
    answer: "A",
    explain:
      "Debt Ratio = Total Liabilities / Total Assets = 9,200 / 42,395 ≈ 21.7%."
  },
  {
    id: 24,
    part: "practice",
    tag: "Part 2 – Practice",
    text: "Câu 24: Straight-Line Depreciation — Cost $26,000; Residual $8,000; Life 60 months. Monthly depreciation?",
    choices: {
      A: "$433",
      B: "$520",
      C: "$300",
      D: "$133"
    },
    answer: "C",
    explain:
      "(26,000 − 8,000) / 60 = 18,000 / 60 = 300."
  },
  {
    id: 25,
    part: "practice",
    tag: "Part 2 – Practice",
    text: "Câu 25: Prepaid Insurance — Paid $2,400 for 24 months on Dec 1. Adjusting entry on Dec 31?",
    choices: {
      A: "Debit Prepaid Insurance $100; Credit Insurance Expense $100.",
      B: "Debit Insurance Expense $100; Credit Cash $100.",
      C: "Debit Insurance Expense $100; Credit Prepaid Insurance $100.",
      D: "Debit Insurance Expense $2,400; Credit Prepaid Insurance $2,400."
    },
    answer: "C",
    explain:
      "Monthly cost = 2,400/24 = 100. Adjust: Dr Insurance Expense 100; Cr Prepaid Insurance 100."
  },
  {
    id: 26,
    part: "practice",
    tag: "Part 2 – Practice",
    text: "Câu 26: Supplies — Purchased $9,720 supplies in Dec. Count on Dec 31 shows $8,670 remaining. Supplies Expense for Dec?",
    choices: {
      A: "$9,720",
      B: "$8,670",
      C: "$1,050",
      D: "$1,100"
    },
    answer: "C",
    explain:
      "Supplies used = Purchased − Remaining = 9,720 − 8,670 = 1,050."
  },
  {
    id: 27,
    part: "practice",
    tag: "Part 2 – Practice",
    text: "Câu 27: Accrued Salaries — Employee earns $70/day. Year ends Wednesday (3 days worked) and last payday was Friday. Adjusting entry?",
    choices: {
      A: "Debit Salaries Expense $210; Credit Cash $210.",
      B: "Debit Salaries Payable $210; Credit Salaries Expense $210.",
      C: "Debit Salaries Expense $210; Credit Salaries Payable $210.",
      D: "Debit Salaries Expense $350; Credit Salaries Payable $350."
    },
    answer: "C",
    explain:
      "Accrued salaries = 3 × 70 = 210. Record expense + liability: Dr Salaries Expense 210; Cr Salaries Payable 210."
  },
  {
    id: 28,
    part: "practice",
    tag: "Part 2 – Practice",
    text: "Câu 28: Current Ratio — Current Assets $42,900; Current Liabilities $29,000. Current Ratio?",
    choices: {
      A: "0.68",
      B: "1.48",
      C: "1.00",
      D: "2.32"
    },
    answer: "B",
    explain:
      "Current Ratio = 42,900 / 29,000 ≈ 1.48."
  },
  {
    id: 29,
    part: "practice",
    tag: "Part 2 – Practice",
    text: "Câu 29: Accrued Revenue — Provided 20 days of services at $90/day not billed or recorded. Adjusting entry?",
    choices: {
      A: "Debit Cash $1,800; Credit Consulting Revenue $1,800.",
      B: "Debit Accounts Receivable $1,800; Credit Consulting Revenue $1,800.",
      C: "Debit Consulting Revenue $1,800; Credit Accounts Receivable $1,800.",
      D: "Debit Accounts Receivable $2,700; Credit Consulting Revenue $2,700."
    },
    answer: "B",
    explain:
      "Accrued revenue: earned but not billed → Dr Accounts Receivable; Cr Consulting Revenue. Amount = 20×90=1,800."
  },
  {
    id: 30,
    part: "practice",
    tag: "Part 2 – Practice",
    text: "Câu 30: Closing Process — Consulting Revenue $7,850 and Rental Revenue $300. Entry to close revenues to Income Summary?",
    choices: {
      A: "Debit Income Summary $8,150; Credit Revenues $8,150.",
      B: "Debit Consulting Revenue $7,850 and Rental Revenue $300; Credit Income Summary $8,150.",
      C: "Debit Revenues $8,150; Credit Owner, Capital $8,150.",
      D: "Debit Income Summary $8,150; Credit Owner, Capital $8,150."
    },
    answer: "B",
    explain:
      "Close revenues: debit each revenue account to zero them; credit Income Summary tổng doanh thu (7,850+300=8,150)."
  }
];
