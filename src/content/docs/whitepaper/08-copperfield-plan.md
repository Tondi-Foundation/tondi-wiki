---
title: "VIII. Copperfield Plan: Bitcoin's Proving Ground for Unadopted BIPs"
description: "Tondi as Bitcoin's experimental laboratory for testing unadopted BIP proposals"
---

## Vision

To further emphasize Tondi's role as a BTC Taproot-native experimental chain, Avato Labs introduced the **Copperfield Plan** — turning Tondi into a living experimental ground for BIP proposals not adopted or still debated.

### Dual Objectives

1. **Validation for Bitcoin**: Provide real-world environments for long-discussed proposals, generating reference data
2. **Preparation for the Next Era**: Explore if Bitcoin's "trilemma" (decentralization, security, scalability) can evolve dynamically, rather than stagnate in conservatism

### Core Philosophy

> We believe: inaction ≠ reduced risk. Conservatism protects today's Bitcoin, but experimentation prepares tomorrow's.

## Copperfield Focus Areas

### 🔹 Channel & Scalability Layer

- **ANYPREVOUT (TSP-0007)** – Eltoo & simplified channel updates
- **Channel Factories (TSP-0012)** – multi-party factories, reduced footprint
- **CTV (TSP-0009)** – covenant-based commitments

### 🔹 Privacy & Signature Layer

- **PTLC (TSP-0010)** – privacy-enhanced conditional payments
- **CISA (TSP-0008)** – cross-input Schnorr aggregation
- **Native MuSig2 (TSP-0011)** – efficient multisig, consensus-integrated

### 🔹 Performance & State Management

- **UTreeXO** – stateless client, Merkleized UTXO
- **AssumeUTXO** – fast node bootstraps via snapshot validation

### 🔹 Extension Models

- **Ark** – UX-improved off-chain pools
- **Statechains** – transferable off-chain custodianship

### 🔹 Covenant & Contract Layer

- **OP_VAULT** – delegated spending vaults
- **OP_CAT** – byte concatenation opcodes for covenant expressions
- **OP_CSFS** – checksum script validation for advanced contracts

### 🔹 Applications & Standards

- **FUN20 (TSP-0006)** – inscription-like fungible token standard

## Experimentation Process & Community Feedback

### Three-Phase Validation Cycle

```mermaid
graph LR
    A[Frontier Phase] --> B[Mainnet Phase]
    B --> C[Reporting Phase]
    C --> D[Bitcoin Core & BIP Authors]
    D --> A
```

#### 1. Frontier Phase
- **Rapid testnet implementation** & trials
- **Community testing** and feedback
- **Technical validation** of concepts

#### 2. Mainnet Phase
- **Mature features deployed**, run under load
- **Real-world performance** testing
- **Economic impact** assessment

#### 3. Reporting Phase
- **Technical reports** & real-world data
- **Performance metrics** and analysis
- **Recommendations** for Bitcoin Core & BIP authors

## Current Progress (As of Jan 2025)

Among **12 TSPs** in progress:

- ✅ **Implemented**: 3
- 🔄 **Under review**: 3
- 📋 **Draft stage**: 5
- ✅ **Accepted governance proposal**: 1

### Implementation Status

#### Completed Implementations
- **TSP-0006**: FUN20 Standard
- **TSP-0007**: ANYPREVOUT Support
- **TSP-0008**: CISA Implementation

#### Under Review
- **TSP-0009**: CTV Covenant Support
- **TSP-0010**: PTLC Implementation
- **TSP-0011**: Native MuSig2

#### Draft Stage
- **TSP-0012**: Channel Factories
- **TSP-0013**: GhostDAG Optimization
- Additional TSPs in development

## Strategic Philosophy

### Bitcoin's Evolution

> Bitcoin's durability comes from conservatism, but progress comes from exploration.

Tondi's mission is not to compete with Bitcoin, but to serve as its **"wind tunnel laboratory"**:

### Core Principles

1. **Not weakening security**, but stress-testing attack surfaces & UX
2. **Not solving the trilemma**, but empirically testing decentralization/security/scalability trade-offs
3. **Not splitting Bitcoin's path**, but filling its conservative gaps via experimentation

### Benefits for Bitcoin Ecosystem

- **Real-world Testing**: Test Bitcoin proposals in live environment
- **Performance Data**: Generate actual performance metrics
- **Community Feedback**: Gather community input on proposals
- **Technical Validation**: Validate technical feasibility

## Implementation Strategy

### Phase 1: Foundation (2025)
- **Tondi Frontier Launch**: Deploy experimental network
- **Core TSPs**: Implement foundational TSPs
- **Community Building**: Build developer and user community

### Phase 2: Expansion (2026)
- **Advanced TSPs**: Implement complex proposals
- **Mainnet Integration**: Deploy successful features to mainnet
- **Ecosystem Development**: Expand ecosystem partnerships

### Phase 3: Maturation (2027+)
- **Bitcoin Integration**: Feed results back to Bitcoin Core
- **Standardization**: Help standardize successful proposals
- **Global Impact**: Influence Bitcoin's evolution globally

## Community Engagement

### Developer Community
- **Open Source Development**: All TSPs developed openly
- **Community Contributions**: Community can contribute to TSP development
- **Technical Discussions**: Regular technical discussions and reviews

### Research Community
- **Academic Partnerships**: Collaborate with academic institutions
- **Research Publications**: Publish research findings
- **Conference Presentations**: Present findings at conferences

### Bitcoin Community
- **Core Developer Engagement**: Regular engagement with Bitcoin Core developers
- **BIP Author Collaboration**: Work directly with BIP authors
- **Community Feedback**: Gather feedback from Bitcoin community

## Success Metrics

### Technical Metrics
- **Implementation Success Rate**: Percentage of successful TSP implementations
- **Performance Improvements**: Measured improvements in performance
- **Security Validation**: Security testing results

### Community Metrics
- **Developer Adoption**: Number of developers using TSPs
- **Community Engagement**: Level of community participation
- **Bitcoin Core Integration**: Number of TSPs adopted by Bitcoin Core

### Impact Metrics
- **Bitcoin Evolution**: Contribution to Bitcoin's evolution
- **Ecosystem Growth**: Growth of Tondi ecosystem
- **Global Recognition**: Recognition in global blockchain community

## Future Vision

Through Copperfield, Tondi aims to provide Bitcoin's future with a **clearer evolutionary path**:

- **Informed Decisions**: Better-informed decisions about Bitcoin's future
- **Reduced Risk**: Lower risk through extensive testing
- **Faster Innovation**: Faster innovation through experimentation
- **Community Consensus**: Better community consensus on proposals
