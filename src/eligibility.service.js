const { getValue } = require("./helpers");
const validateCondition = require("./validate-condition");

class EligibilityService {
  /**
   * Compare cart data with criteria to compute eligibility.
   * If all criteria are fulfilled then the cart is eligible (return true).
   *
   * @param cart
   * @param criteria
   * @return {boolean}
   */
  isEligible(cart, criteria) {
    return Object.keys(criteria).every((key) => {
      const value = getValue(key, cart);
      return validateCondition(criteria[key], value);
    });
  }
}

module.exports = {
  EligibilityService,
};
