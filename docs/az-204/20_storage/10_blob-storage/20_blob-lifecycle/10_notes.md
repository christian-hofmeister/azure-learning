# Blob Lifecycle Management – Notes

## Storage Tiers

### Hot

* Frequent access
* Highest storage cost
* Lowest access cost

### Cool

* Infrequent access
* Lower storage cost
* Higher access cost

### Archive

* Rarely accessed
* Lowest storage cost
* Requires rehydration

---

## Lifecycle Policies

* Automatically manage blob lifecycle

### Actions

* Move to cool tier
* Move to archive tier
* Delete blobs

### Conditions

* Age (days since creation/modification)

---

## Rehydration

* Required to access archive blobs
* Takes hours
* Temporary copy created in hot/cool tier

---

## Use Cases

* Cost optimization
* Data retention strategies
