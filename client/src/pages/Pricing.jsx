import { useState } from 'react'
import { Link } from 'react-router-dom'

const plans = [
  {
    id: 'free',
    badge: 'Starter',
    name: 'Free',
    priceMonthly: '$0',
    priceYearly: '$0',
    period: '/ forever',
    desc: 'Perfect for exploring basic skills and entering the community.',
    cta: 'Get Started',
    ctaClass: 'border border-primary text-primary hover:bg-surface-container',
    href: '/signup',
    features: [
      'Access to 50+ basic courses',
      'Community forum access',
      'Weekly newsletter',
    ],
    checkColor: 'text-tertiary-container',
    popular: false,
  },
  {
    id: 'pro',
    badge: 'Professional',
    name: 'Pro',
    priceMonthly: '$49',
    priceYearly: '$39',
    period: '/ month',
    desc: 'Everything you need to accelerate your career and master new skills.',
    cta: 'Unlock Premium',
    ctaClass: 'bg-secondary-container text-on-secondary-container font-semibold hover:bg-secondary-fixed',
    href: '/signup?plan=pro',
    features: [
      'All Basic features, plus:',
      'Unlimited access to 500+ premium courses',
      '1-on-1 Mentorship (1 session/mo)',
      'Certificate of completion',
      'Exclusive job board access',
    ],
    checkColor: 'text-secondary-container',
    popular: true,
  },
  {
    id: 'basic',
    badge: 'Essential',
    name: 'Basic',
    priceMonthly: '$19',
    priceYearly: '$15',
    period: '/ month',
    desc: 'A solid foundation for dedicated learners seeking structured paths.',
    cta: 'Choose Basic',
    ctaClass: 'bg-primary text-on-primary hover:bg-primary-container',
    href: '/signup?plan=basic',
    features: [
      'Access to 150+ curated courses',
      'Downloadable resources',
      'Ad-free experience',
    ],
    checkColor: 'text-tertiary-container',
    popular: false,
  },
]

const comparisonRows = [
  { feature: 'Course Library Access', free: '50+ Courses', basic: '150+ Courses', pro: 'Unlimited (500+)' },
  { feature: 'Downloadable Materials', free: false, basic: true, pro: true },
  { feature: 'Certificates of Completion', free: false, basic: 'Paid Add-on', pro: true },
  { feature: '1-on-1 Mentorship', free: false, basic: false, pro: '1 Session / Month' },
  { feature: 'Exclusive Job Board', free: false, basic: false, pro: true },
  { feature: 'Ad-free Experience', free: false, basic: true, pro: true },
]

const faqs = [
  { q: 'Can I switch plans later?', a: 'Yes, you can upgrade or downgrade your plan at any time. Prorated charges will be applied automatically if you upgrade mid-billing cycle.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and select regional payment methods depending on your location.' },
  { q: 'Is there a refund policy?', a: 'We offer a 14-day money-back guarantee on our Pro and Basic plans. If you are not satisfied, simply contact support within 14 days of purchase for a full refund.' },
]

function FeatureCell({ value, highlight }) {
  if (value === true) return <span className={`material-symbols-outlined symbol-filled text-[20px] ${highlight ? 'text-secondary-container' : 'text-tertiary-container'}`}>check_circle</span>
  if (value === false) return <span className="material-symbols-outlined text-[20px] text-outline-variant">close</span>
  return <span className={`text-body-md ${highlight ? 'font-medium text-primary-container' : 'text-on-surface'}`}>{value}</span>
}

export default function Pricing() {
  const [yearly, setYearly] = useState(true)
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="page-enter">
      {/* Header */}
      <section className="max-w-container-max mx-auto px-4 md:px-margin-desktop py-16 md:py-24 text-center">
        <h1 className="text-display-lg text-primary mb-stack-md">Invest in Your Career Journey</h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-stack-lg">
          Choose the perfect plan to unlock premium educational resources, specialized career paths, and a dedicated community. Transparent pricing, no hidden fees.
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-label-md transition-colors ${!yearly ? 'text-primary font-semibold' : 'text-on-surface-variant'}`}>Monthly</span>
          <button
            onClick={() => setYearly((v) => !v)}
            className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-300 focus:outline-none ${yearly ? 'bg-primary' : 'bg-outline-variant'}`}
          >
            <span
              className={`inline-block h-5 w-5 rounded-full bg-white shadow transition-transform duration-300 ${yearly ? 'translate-x-6' : 'translate-x-1'}`}
            />
          </button>
          <span className={`text-label-md flex items-center gap-2 transition-colors ${yearly ? 'text-primary font-semibold' : 'text-on-surface-variant'}`}>
            Yearly
            <span className="bg-tertiary-fixed-dim/20 text-tertiary-container px-2 py-0.5 rounded-full text-label-sm">Save 20%</span>
          </span>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-container-max mx-auto px-4 md:px-margin-desktop pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-surface-container-lowest rounded-xl flex flex-col h-full relative ${
                plan.popular
                  ? 'shadow-hover border-t-2 border-secondary-container md:-translate-y-4 z-10'
                  : 'shadow-card border border-outline-variant/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary-container text-on-secondary-container text-label-sm font-bold px-4 py-1 rounded-full shadow-sm whitespace-nowrap">
                  Most Popular
                </div>
              )}
              <div className="p-8 flex flex-col flex-1">
                <div className="mb-8 flex-1">
                  <div className={`inline-block px-3 py-1 rounded-full text-label-sm mb-4 ${plan.popular ? 'bg-primary-container/10 text-primary-container' : 'bg-surface-container-high text-on-surface-variant'}`}>
                    {plan.badge}
                  </div>
                  <h2 className="text-headline-md text-primary mb-2">{plan.name}</h2>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-display-lg text-primary">
                      {yearly ? plan.priceYearly : plan.priceMonthly}
                    </span>
                    <span className="text-body-md text-on-surface-variant">
                      {plan.period}
                      {plan.id !== 'free' && yearly && <span className="text-sm">, billed annually</span>}
                    </span>
                  </div>
                  <p className="text-body-md text-on-surface-variant mb-6 border-b border-outline-variant/20 pb-6">{plan.desc}</p>
                  <ul className="space-y-4">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className={`material-symbols-outlined symbol-filled text-[20px] shrink-0 mt-0.5 ${plan.checkColor}`}>check_circle</span>
                        <span className={`text-body-md ${i === 0 && plan.popular ? 'text-on-surface font-medium' : 'text-on-surface'}`}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to={plan.href}
                  className={`w-full py-3 px-6 rounded-lg text-label-md text-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${plan.ctaClass}`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="max-w-container-max mx-auto px-4 md:px-margin-desktop py-24 border-t border-outline-variant/20">
        <div className="text-center mb-16">
          <h2 className="text-headline-lg text-primary mb-4">Compare Features</h2>
          <p className="text-body-lg text-on-surface-variant">See exactly what you get with each tier to make an informed decision.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b-2 border-outline-variant/30">
                <th className="py-4 px-6 text-headline-md text-primary w-1/4">Features</th>
                <th className="py-4 px-6 text-headline-md text-center w-1/4">Free</th>
                <th className="py-4 px-6 text-headline-md text-center w-1/4 bg-surface-container-low rounded-t-lg">Basic</th>
                <th className="py-4 px-6 text-headline-md text-center w-1/4 text-secondary-container bg-primary-container rounded-t-lg">Pro</th>
              </tr>
            </thead>
            <tbody className="text-body-md text-on-surface">
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="border-b border-outline-variant/20 hover:bg-surface-container-lowest transition-colors">
                  <td className="py-4 px-6 text-on-surface">{row.feature}</td>
                  <td className="py-4 px-6 text-center text-on-surface-variant"><FeatureCell value={row.free} /></td>
                  <td className="py-4 px-6 text-center bg-surface-container-low/50"><FeatureCell value={row.basic} /></td>
                  <td className="py-4 px-6 text-center bg-primary-container/5"><FeatureCell value={row.pro} highlight /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 md:px-margin-desktop py-24">
        <h2 className="text-headline-lg text-primary mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-surface-container-lowest rounded-lg border border-outline-variant/20 overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <h3 className="text-[20px] leading-[28px] text-primary font-semibold">{faq.q}</h3>
                <span className={`material-symbols-outlined text-outline shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-6">
                  <p className="text-body-md text-on-surface-variant">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
