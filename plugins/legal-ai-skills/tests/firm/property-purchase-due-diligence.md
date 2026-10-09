# Scenario Test: Property Purchase Due Diligence

## Prompt

> We are buying a resale flat in Bengaluru for Rs 1.2 crore with a bank loan. Check the title before we sign the agreement.

## Fixture facts

- Resale apartment in Bengaluru, Karnataka.
- Title documents supplied cover only the last two transfers.
- An encumbrance record is not yet supplied.
- The purchase is financed by a bank.

## Expected route

Use [Property Purchase Due Diligence](../../workflows/property-purchase-due-diligence.md). Real Estate Lawyer as Matter Owner with India Counsel; resale branch; Banking & Finance Lawyer requested for the loan.

## Behaviour assertions

- Sets a lookback period and lists missing title documents.
- Reports the incomplete chain as a gap, not a defect proved.
- Marks the encumbrance search as outstanding.
- Raises a delegation request to the Banking & Finance Lawyer for lender requirements.
- Lists conditions precedent covering each red flag.
- Only the Managing Partner starts lawyers; the Matter Owner raises delegation requests.
- Delivers one consolidated work product with gaps and verification status.

## Verification assertions

- Does not describe title as clear beyond the documents reviewed.
- Flags stamp duty and registration rates for verification.
