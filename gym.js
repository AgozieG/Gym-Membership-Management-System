// Define the MembershipPlan class
class MembershipPlan {
  // Static property to track how many plan types are offered
  static totalPlanTypes = 3;

  constructor(planType, price) {
    this.planType = planType;
    this.price = price;
  }

  // Instance method
  getPlanDetails() {
    console.log(`Plan: ${this.planType}, Price: $${this.price}`);
  }

  // Static method to compare two plans
  static comparePlans(plan1, plan2) {
    if (plan1.price > plan2.price) {
      console.log(`${plan1.planType} is more expensive than ${plan2.planType}.`);
    } else {
      console.log(`${plan2.planType} is more expensive or equal to ${plan1.planType}.`);
    }
  }
}

// Define the Member class
class Member {
  // Static property to track total active members globally
  static activeMembersCount = 0;

  constructor(memberId, name, plan) {
    this.memberId = memberId;
    this.name = name;
    this.plan = plan; // Association with MembershipPlan
    Member.activeMembersCount++; 
  }

  // Instance method: Simulate a member checking in
  checkIn() {
    console.log(`Member ${this.name} (ID: ${this.memberId}) has checked into the gym.`);
  }

  // Static method: Get the current gym occupancy status
  static getSystemStatus() {
    console.log(`System Status: ${Member.activeMembersCount} active members currently registered.`);
  }
}

// --- Example Usage ---

// 1. Create Membership Plans
const basicPlan = new MembershipPlan("Monthly", 30);
const premiumPlan = new MembershipPlan("Yearly", 300);

// 2. Create Members
const member1 = new Member("M001", "Alice Smith", basicPlan);
const member2 = new Member("M002", "Bob Jones", premiumPlan);

// 3. Perform Actions
member1.checkIn();
basicPlan.getPlanDetails();

// 4. Use Static Methods
MembershipPlan.comparePlans(basicPlan, premiumPlan);
Member.getSystemStatus();
