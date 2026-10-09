# Demo: RERA complaint

## Example instruction

> My builder in Pune promised possession of my flat in March 2023. It still isn't ready. I've paid Rs 68 lakh over 11 instalments and I want my money back with interest.

## How the firm handles it

1. **Managing Partner** sizes the matter as standard and asks India Counsel for an intake assessment: Maharashtra, the State RERA authority, and whether the relief lies with the Authority or the adjudicating officer.
2. **Real Estate Lawyer** is appointed Matter Owner and follows the [RERA complaint workflow](../plugins/legal-ai-skills/workflows/rera-complaint.md).
3. The workflow checks whether the developer is in insolvency before anything is drafted.

## Illustrative consolidated output

### Breach

The agreement promises possession by March 2023, with no extension granted by the Authority in the documents supplied. The project's registration and certificates are checked against the registration page where accessible.

### Relief

The buyer wants to exit, so the refund-with-interest branch is chosen.

### Computation

The 11 receipts are listed with dates and amounts. Interest is computed on each instalment from its payment date, with the State rate shown as a variable until India Counsel confirms it.

### Draft complaint

The complaint is drafted in the State's prescribed form, with an evidence index: agreement, receipts, bank statements, correspondence and the RERA registration page.

### Verification status

The interest rate, prescribed form, fees and forum split are marked for verification. Filing requires the buyer's confirmation and, where needed, an authorised representative.
