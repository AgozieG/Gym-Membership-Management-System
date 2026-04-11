// --- TASK B: ENCAPSULATION & ABSTRACTION ---
class MembershipPlan {
  // Encapsulation: Private fields protect sensitive data
  #planType;
  #price;
  static totalPlans = 0;

  constructor(planType, price) {
    this.#planType = planType;
    this.#price = price;
    MembershipPlan.totalPlans++;
  }

  // Getters for controlled read access
  get planType() { return this.#planType; }
  get price() { return this.#price; }

  // Abstraction: Simple method name hides the complexity of formatting
  getPlanSummary() {
    return `Plan: ${this.#planType} | Fee: $${this.#price}/mo`;
  }

  // Abstraction: Internal logic for processing renewals
  processRenewal() {
    console.log(`Renewal processed for ${this.#planType}. Payment of $${this.#price} received.`);
  }
}

// --- TASK C: INHERITANCE & POLYMORPHISM ---

// Inheritance: VIPPlan is a more specific type of MembershipPlan
class VIPPlan extends MembershipPlan {
  #perks;

  constructor(planType, price, perks = []) {
    // Calling super() to initialize parent attributes
    super(planType, price);
    this.#perks = perks;
  }

  get perks() { return this.#perks; }

  // Polymorphism: Overriding the parent's getPlanSummary method
  // It behaves differently for VIP members by listing their perks
  getPlanSummary() {
    const baseInfo = super.getPlanSummary();
    return `[VIP ACCESS] ${baseInfo} | Perks: ${this.#perks.join(", ")}`;
  }

  // Polymorphism: Overriding processRenewal to add a "Priority" message
  processRenewal() {
    console.log(`PRIORITY RENEWAL: VIP ${this.planType} status extended. Thank you for your loyalty.`);
  }
}

// --- USAGE SECTION (Outputting the 4 Pillars) ---

// 1. Create a standard plan
const standard = new MembershipPlan("Standard", 30);

// 2. Create a VIP plan (Inheritance)
const vip = new VIPPlan("Elite", 100, ["24/7 Access", "Personal Coach", "Steam Room"]);

// 3. Demonstrate Polymorphism (Same method name, different output)
console.log(standard.getPlanSummary());
// Output: Plan: Standard | Fee: $30/mo

console.log(vip.getPlanSummary());
// Output: [VIP ACCESS] Plan: Elite | Fee: $100/mo | Perks: 24/7 Access, Personal Coach, Steam Room

// 4. Demonstrate Abstraction (Internal logic)
standard.processRenewal();
vip.processRenewal();
