import { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";

function ROICalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState(25000);
  const [revenueGrowth, setRevenueGrowth] = useState(10);
  const [hoursSaved, setHoursSaved] = useState(10);
  const [hourlyValue, setHourlyValue] = useState(35);
  const [initialInvestment, setInitialInvestment] = useState(5000);
  const [monthlyCost, setMonthlyCost] = useState(500);

  const results = useMemo(() => {
    const annualRevenue = Number(monthlyRevenue || 0) * 12;

    const revenueBenefit =
      annualRevenue * (Number(revenueGrowth || 0) / 100);

    const productivityBenefit =
      Number(hoursSaved || 0) *
      Number(hourlyValue || 0) *
      52;

    const annualCost =
      Number(initialInvestment || 0) +
      Number(monthlyCost || 0) * 12;

    const totalBenefit =
      revenueBenefit + productivityBenefit;

    const netBenefit =
      totalBenefit - annualCost;

    const roi =
      annualCost > 0
        ? (netBenefit / annualCost) * 100
        : 0;

    const monthlyBenefit =
      totalBenefit / 12;

    const paybackMonths =
      monthlyBenefit > 0
        ? annualCost / monthlyBenefit
        : 0;

    return {
      revenueBenefit,
      productivityBenefit,
      annualCost,
      totalBenefit,
      netBenefit,
      roi,
      paybackMonths,
    };
  }, [
    monthlyRevenue,
    revenueGrowth,
    hoursSaved,
    hourlyValue,
    initialInvestment,
    monthlyCost,
  ]);

  const currency = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <section className="roi-section">
      <div className="container">

        <div className="section-header">
          <span className="section-tag">
            ROI Calculator
          </span>

          <h2 className="section-title">
            Estimate the Potential Value of Your Investment
          </h2>

          <p className="section-description">
            Explore how increased revenue and improved efficiency
            could impact the return on your technology investment.
          </p>
        </div>

        <div className="roi-calculator">

          {/* LEFT SIDE - INPUTS */}

          <div className="roi-input-panel">

            <div className="roi-panel-heading">
              <span>
                Business Assumptions
              </span>

              <h3>
                Tell us about your current operations
              </h3>
            </div>

            <div className="roi-fields">

              <div className="roi-field">
                <label htmlFor="monthlyRevenue">
                  Current Monthly Revenue
                </label>

                <div className="roi-input-wrap">
                  <span>$</span>

                  <input
                    id="monthlyRevenue"
                    type="number"
                    min="0"
                    value={monthlyRevenue}
                    onChange={(e) =>
                      setMonthlyRevenue(e.target.value)
                    }
                  />
                </div>
              </div>


              <div className="roi-field">
                <label htmlFor="revenueGrowth">
                  Expected Revenue Increase
                </label>

                <div className="roi-input-wrap roi-percent">
                  <input
                    id="revenueGrowth"
                    type="number"
                    min="0"
                    value={revenueGrowth}
                    onChange={(e) =>
                      setRevenueGrowth(e.target.value)
                    }
                  />

                  <span>%</span>
                </div>
              </div>


              <div className="roi-field">
                <label htmlFor="hoursSaved">
                  Hours Saved Per Week
                </label>

                <input
                  id="hoursSaved"
                  type="number"
                  min="0"
                  value={hoursSaved}
                  onChange={(e) =>
                    setHoursSaved(e.target.value)
                  }
                />
              </div>


              <div className="roi-field">
                <label htmlFor="hourlyValue">
                  Average Hourly Value
                </label>

                <div className="roi-input-wrap">
                  <span>$</span>

                  <input
                    id="hourlyValue"
                    type="number"
                    min="0"
                    value={hourlyValue}
                    onChange={(e) =>
                      setHourlyValue(e.target.value)
                    }
                  />
                </div>
              </div>


              <div className="roi-field">
                <label htmlFor="initialInvestment">
                  Initial Project Investment
                </label>

                <div className="roi-input-wrap">
                  <span>$</span>

                  <input
                    id="initialInvestment"
                    type="number"
                    min="0"
                    value={initialInvestment}
                    onChange={(e) =>
                      setInitialInvestment(e.target.value)
                    }
                  />
                </div>
              </div>


              <div className="roi-field">
                <label htmlFor="monthlyCost">
                  Estimated Monthly Cost
                </label>

                <div className="roi-input-wrap">
                  <span>$</span>

                  <input
                    id="monthlyCost"
                    type="number"
                    min="0"
                    value={monthlyCost}
                    onChange={(e) =>
                      setMonthlyCost(e.target.value)
                    }
                  />
                </div>
              </div>

            </div>
          </div>


          {/* RIGHT SIDE - RESULTS */}

          <div className="roi-results-panel">

            <div className="roi-panel-heading">
              <span>
                Estimated Results
              </span>

              <h3>
                Your potential 12-month return
              </h3>
            </div>


            <div className="roi-main-result">
              <span>
                Estimated ROI
              </span>

              <strong>
                {results.roi.toFixed(0)}%
              </strong>

              <p>
                Based on the assumptions you entered.
              </p>
            </div>


            <div className="roi-result-grid">

              <div className="roi-result-card">
                <span>
                  Revenue Impact
                </span>

                <strong>
                  {currency(results.revenueBenefit)}
                </strong>
              </div>


              <div className="roi-result-card">
                <span>
                  Productivity Value
                </span>

                <strong>
                  {currency(results.productivityBenefit)}
                </strong>
              </div>


              <div className="roi-result-card">
                <span>
                  Annual Investment
                </span>

                <strong>
                  {currency(results.annualCost)}
                </strong>
              </div>


              <div className="roi-result-card">
                <span>
                  Net Annual Benefit
                </span>

                <strong>
                  {currency(results.netBenefit)}
                </strong>
              </div>

            </div>


            <div className="roi-payback">
              <span>
                Estimated Payback Period
              </span>

              <strong>
                {results.paybackMonths.toFixed(1)} months
              </strong>
            </div>


            <NavLink
              to="/contact"
              className="btn roi-button"
            >
              Discuss Your ROI With Us
            </NavLink>

          </div>

        </div>


        <p className="roi-disclaimer">
          This calculator provides illustrative estimates only.
          Actual results depend on your business, implementation,
          market conditions, adoption, and other factors.
        </p>

      </div>
    </section>
  );
}

export default ROICalculator;