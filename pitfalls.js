/* ════════════════════════════════════════════════════════════════
   FALLACYSCOPE — data
   The reasoning traps that bend social-science & management research:
   paradoxes (counter-intuitive but real) and fallacies (errors of
   inference). Reference tier of the Research Suite ("Throughline").

   NO-FABRICATION RULE (suite-wide): every entry names a real, hand-
   verified canonical source with a DOI/link out. Worked examples are
   drawn from the cited literature, not invented. Prefer fewer verified
   entries over plausible-sounding ones.

   Schema (one object per trap):
     id        kebab-case, stable, used in #/<id> deep-links + cross-refs
     name      display name
     kind      'paradox' | 'fallacy'
     family    one token (see FAMILY_LABELS in index.html)
     trap      one-line: the trap, in plain words
     example   a concrete worked example FROM the cited literature
     why       the mechanism — why reasoning goes wrong
     antidote  how to detect / avoid it
     stages[]  research-lifecycle points it bites (see STAGE_LABELS)
     links[]   {tool, label, arg} suite handoffs (real ?param contracts)
     also[]    ids of related FallacyScope entries (internal cross-links)
     refs[]    {cite, doi?} canonical sources — DOI renders as doi.org link
   ════════════════════════════════════════════════════════════════ */

const PITFALLS = [
  {
    id: 'simpsons-paradox',
    name: "Simpson's Paradox",
    kind: 'paradox',
    family: 'statistical',
    trap: "A trend that holds inside every subgroup reverses, or vanishes, once the groups are pooled.",
    example: "Berkeley's 1973 graduate admissions looked biased against women overall (44% of men admitted vs 35% of women) — yet within almost every department women were admitted at equal-or-higher rates. Women simply applied more often to the most competitive departments (Bickel, Hammel & O'Connell, 1975).",
    why: "A lurking third variable (a confounder) is distributed unevenly across the groups. Pooling mixes populations that have different base rates, so the aggregate association need not match — and can reverse — the within-group one.",
    antidote: "Disaggregate by plausible confounders before trusting a pooled association. Let theory, not the spreadsheet, decide which variable to condition on — adjusting for the wrong one re-creates the paradox.",
    stages: ['analysis', 'inference', 'interpretation'],
    links: [
      { tool: 'toolsscope', label: 'Check subgroups in ToolsScope', arg: 'Compare the association within subgroups before pooling, and add the suspected confounder as a covariate' }
    ],
    also: ['ecological-fallacy', 'lords-paradox', 'berksons-paradox'],
    refs: [
      { cite: "Simpson, E. H. (1951). The interpretation of interaction in contingency tables. Journal of the Royal Statistical Society: Series B, 13(2), 238–241.", doi: "10.1111/j.2517-6161.1951.tb00088.x" },
      { cite: "Bickel, P. J., Hammel, E. A., & O'Connell, J. W. (1975). Sex bias in graduate admissions: Data from Berkeley. Science, 187(4175), 398–404.", doi: "10.1126/science.187.4175.398" }
    ]
  },
  {
    id: 'lords-paradox',
    name: "Lord's Paradox",
    kind: 'paradox',
    family: 'causal',
    trap: "Two defensible analyses of the same before/after data — change-scores vs. covariate-adjustment (ANCOVA) — give opposite answers about a group effect.",
    example: "Lord (1967) imagined two statisticians studying whether a diet affects men and women differently. One analyses weight gain (post − pre) and finds no sex difference; the other runs ANCOVA adjusting for baseline weight and finds one. Both are internally correct.",
    why: "Without randomisation, 'analysing change' and 'adjusting for baseline' encode different and untestable assumptions about the counterfactual. The data alone cannot say which is right — it is a causal question, not a statistical one.",
    antidote: "State the causal question and its assumptions before choosing the model. With non-random groups, no statistical adjustment substitutes for a design or an explicit identification strategy.",
    stages: ['design', 'analysis', 'inference'],
    links: [
      { tool: 'researchflow', label: 'Frame the design in ResearchFlow', arg: 'comparing pre/post change between non-randomised groups' }
    ],
    also: ['simpsons-paradox', 'regression-to-the-mean'],
    refs: [
      { cite: "Lord, F. M. (1967). A paradox in the interpretation of group comparisons. Psychological Bulletin, 68(5), 304–305.", doi: "10.1037/h0025105" }
    ]
  },
  {
    id: 'berksons-paradox',
    name: "Berkson's Paradox",
    kind: 'paradox',
    family: 'selection',
    trap: "Two unrelated traits become correlated — usually negatively — once you condition on a selected sample (the admitted, the hired, the hospitalised).",
    example: "Berkson (1946) showed two diseases can look negatively associated among hospital patients even when they are independent in the population, because having either raises the chance of admission. The same mechanism makes talent and attractiveness seem anticorrelated among celebrities.",
    why: "Conditioning on a common effect (a 'collider') of two causes opens a spurious statistical path between them. Selection into the sample manufactures the correlation; it is not in the population.",
    antidote: "Ask what determined who entered your sample. Never condition on (or select on) a variable that both predictors influence. Draw the causal DAG before interpreting the correlation.",
    stages: ['sampling', 'analysis', 'inference'],
    links: [],
    also: ['survivorship-bias', 'simpsons-paradox'],
    refs: [
      { cite: "Berkson, J. (1946). Limitations of the application of fourfold table analysis to hospital data. Biometrics Bulletin, 2(3), 47–53.", doi: "10.2307/3002000" }
    ]
  },
  {
    id: 'easterlin-paradox',
    name: "Easterlin Paradox",
    kind: 'paradox',
    family: 'measurement',
    trap: "Within a country richer people report being happier, yet raising a whole country's income over time barely lifts average happiness.",
    example: "Easterlin (1974) found that despite large growth in US income per head across decades, average self-reported happiness stayed roughly flat — even though at any single moment higher-income individuals reported more happiness. (The magnitude is debated: Stevenson & Wolfers, 2008, argue the long-run link is stronger than Easterlin claimed.)",
    why: "Subjective well-being tracks relative standing and adapting reference points, not absolute income. A between-person cross-section and a within-country time series answer genuinely different questions.",
    antidote: "Never read a cross-sectional gradient as a longitudinal or causal effect. State explicitly whether your claim is between-person or within-person over time — and report contested effect sizes honestly.",
    stages: ['measurement', 'inference', 'interpretation'],
    links: [],
    also: ['ecological-fallacy'],
    refs: [
      { cite: "Easterlin, R. A. (1974). Does economic growth improve the human lot? Some empirical evidence. In P. A. David & M. W. Reder (Eds.), Nations and Households in Economic Growth (pp. 89–125). Academic Press." },
      { cite: "Stevenson, B., & Wolfers, J. (2008). Economic growth and subjective well-being: Reassessing the Easterlin paradox. Brookings Papers on Economic Activity, 2008(1), 1–87. [challenge]", doi: "10.1353/eca.0.0001" }
    ]
  },
  {
    id: 'ecological-fallacy',
    name: "Ecological Fallacy",
    kind: 'fallacy',
    family: 'levels',
    trap: "Inferring something about individuals from a group-level (aggregate) correlation.",
    example: "Robinson (1950) found US states with more foreign-born residents had higher literacy — yet at the individual level the foreign-born were less literate than the native-born. The aggregate correlation reversed the individual one, because immigrants settled in already-high-literacy states.",
    why: "Aggregation averages away within-group variation. A correlation between group means carries no guarantee about individuals and can flip sign entirely.",
    antidote: "Match the level of analysis to the level of the claim. For genuinely cross-level questions use multilevel models, not correlations of aggregates.",
    stages: ['analysis', 'inference', 'interpretation'],
    links: [
      { tool: 'theoryscope', label: 'Multilevel theory (TheoryScope)', arg: 'multilevel theory levels of analysis' },
      { tool: 'toolsscope', label: 'Analyse at the right level (ToolsScope)', arg: 'keep individual-level data; avoid correlating group means' }
    ],
    also: ['atomistic-fallacy', 'simpsons-paradox'],
    refs: [
      { cite: "Robinson, W. S. (1950). Ecological correlations and the behavior of individuals. American Sociological Review, 15(3), 351–357.", doi: "10.2307/2087176" },
      { cite: "Diez-Roux, A. V. (1998). Bringing context back into epidemiology: Variables and fallacies in multilevel analysis. American Journal of Public Health, 88(2), 216–222.", doi: "10.2105/ajph.88.2.216" }
    ]
  },
  {
    id: 'atomistic-fallacy',
    name: "Atomistic Fallacy",
    kind: 'fallacy',
    family: 'levels',
    trap: "Inferring something about groups or contexts from an individual-level relationship — the mirror image of the ecological fallacy.",
    example: "That, across individuals, education predicts health does not tell you a neighbourhood's average education affects its residents' health. Contextual effects can differ in size or even sign from individual ones (Diez-Roux, 1998).",
    why: "Individual-level associations omit the emergent, contextual and compositional effects that operate at the group level. Mechanisms do not automatically scale up.",
    antidote: "Don't assume an individual mechanism reproduces at the group level. Model the group level explicitly (e.g. multilevel / HLM) before making contextual claims.",
    stages: ['analysis', 'inference', 'interpretation'],
    links: [
      { tool: 'theoryscope', label: 'Multilevel theory (TheoryScope)', arg: 'multilevel theory contextual effects' }
    ],
    also: ['ecological-fallacy'],
    refs: [
      { cite: "Diez-Roux, A. V. (1998). Bringing context back into epidemiology: Variables and fallacies in multilevel analysis. American Journal of Public Health, 88(2), 216–222.", doi: "10.2105/ajph.88.2.216" }
    ]
  },
  {
    id: 'base-rate-fallacy',
    name: "Base-Rate Fallacy",
    kind: 'fallacy',
    family: 'reasoning',
    trap: "Judging probability from how representative a case looks, while ignoring the underlying base rate (the prior).",
    example: "Told a personality sketch fits 'a librarian', people judge the person a librarian even when farmers vastly outnumber librarians. Likewise a 95%-accurate test for a rare disease yields mostly false positives — yet people badly overstate the chance of really being ill (Tversky & Kahneman, 1973; Bar-Hillel, 1980).",
    why: "Intuition substitutes representativeness or likelihood for the posterior probability, neglecting the prior that Bayes' theorem requires.",
    antidote: "Anchor on the base rate first, then update on the evidence. Recast probabilities as natural frequencies ('10 in 1,000') to keep the prior visible.",
    stages: ['inference', 'interpretation'],
    links: [
      { tool: 'theoryscope', label: 'Heuristics & biases (TheoryScope)', arg: 'heuristics and biases representativeness' }
    ],
    also: ['gamblers-fallacy', 'texas-sharpshooter-harking'],
    refs: [
      { cite: "Tversky, A., & Kahneman, D. (1973). On the psychology of prediction. Psychological Review, 80(4), 237–251.", doi: "10.1037/h0034747" },
      { cite: "Bar-Hillel, M. (1980). The base-rate fallacy in probability judgments. Acta Psychologica, 44(3), 211–233.", doi: "10.1016/0001-6918(80)90046-3" }
    ]
  },
  {
    id: 'gamblers-fallacy',
    name: "Gambler's Fallacy",
    kind: 'fallacy',
    family: 'reasoning',
    trap: "Believing independent random events 'balance out' in the short run — a run of heads makes tails feel 'due'.",
    example: "After red comes up several times at roulette, gamblers pile onto black; the wheel has no memory. Tversky & Kahneman (1971) tie this to a broader 'belief in the law of small numbers' — expecting small samples to mirror the population.",
    why: "People apply the law of large numbers to short sequences, demanding local representativeness from trials that are in fact independent.",
    antidote: "Check independence. For independent events the next outcome's probability is unchanged by history. Watch for the opposite over-correction too — the 'hot-hand' belief that a streak will continue.",
    stages: ['inference'],
    links: [],
    also: ['base-rate-fallacy', 'regression-to-the-mean'],
    refs: [
      { cite: "Tversky, A., & Kahneman, D. (1971). Belief in the law of small numbers. Psychological Bulletin, 76(2), 105–110.", doi: "10.1037/h0031322" }
    ]
  },
  {
    id: 'regression-to-the-mean',
    name: "Regression to the Mean",
    kind: 'fallacy',
    family: 'statistical',
    trap: "Treating the natural drift of extreme scores back toward the average as if it were a real effect of an intervention.",
    example: "Galton (1886) found tall parents tend to have somewhat shorter (closer-to-average) children. The modern echo: the worst-performing students, teams or hospitals 'improve' after almost any intervention, and top performers 'decline' — even when the treatment did nothing.",
    why: "When a measure correlates imperfectly across occasions (measurement error or luck), extreme observations are partly chance and tend to be less extreme when re-measured.",
    antidote: "Use a randomised control group. Never select units on an extreme baseline and then attribute their movement toward average to your treatment.",
    stages: ['design', 'analysis', 'inference'],
    links: [
      { tool: 'researchflow', label: 'Add a control group (ResearchFlow)', arg: 'pre/post design selecting on extreme baseline scores needs a control group' }
    ],
    also: ['lords-paradox', 'gamblers-fallacy'],
    refs: [
      { cite: "Galton, F. (1886). Regression towards mediocrity in hereditary stature. Journal of the Anthropological Institute of Great Britain and Ireland, 15, 246–263.", doi: "10.2307/2841583" }
    ]
  },
  {
    id: 'survivorship-bias',
    name: "Survivorship Bias",
    kind: 'fallacy',
    family: 'selection',
    trap: "Drawing conclusions only from the cases that survived a selection process, while the ones that dropped out are silently missing.",
    example: "Wald's WWII team realised the bullet holes on planes that returned showed where a plane could be hit and still fly home; the armour belonged where holes were absent — on the planes that never came back (Mangel & Samaniego, 1984). In finance, funds that die vanish from databases, inflating the average return of 'all funds' (Brown et al., 1992).",
    why: "The sample is conditioned on survival, so failures are systematically absent and the surviving distribution is biased toward success.",
    antidote: "Reconstruct the full at-risk set including dropouts and failures. Always ask: what data is missing precisely because it didn't survive?",
    stages: ['sampling', 'inference', 'interpretation'],
    links: [],
    also: ['berksons-paradox'],
    refs: [
      { cite: "Mangel, M., & Samaniego, F. J. (1984). Abraham Wald's work on aircraft survivability. Journal of the American Statistical Association, 79(386), 259–267.", doi: "10.2307/2288257" },
      { cite: "Brown, S. J., Goetzmann, W., Ibbotson, R. G., & Ross, S. A. (1992). Survivorship bias in performance studies. Review of Financial Studies, 5(4), 553–580.", doi: "10.1093/rfs/5.4.553" }
    ]
  },
  {
    id: 'sunk-cost-fallacy',
    name: "Sunk-Cost Fallacy",
    kind: 'fallacy',
    family: 'decision',
    trap: "Continuing a failing course of action because of resources already — and irrecoverably — invested.",
    example: "Arkes & Blumer (1985): people who paid for a theatre ticket are likelier to brave a blizzard to use it than those given the same ticket free. In organisations the same logic drives 'escalation of commitment' — pouring more money into doomed projects.",
    why: "Past costs are gone and should be irrelevant to the marginal decision, but loss-aversion and a wish not to feel wasteful bias the choice (it links closely to prospect theory).",
    antidote: "Decide on future costs and benefits alone. Ask: 'Knowing only what I know now, would I start this today?' If no, the prior spend is no reason to continue.",
    stages: ['design', 'interpretation'],
    links: [
      { tool: 'theoryscope', label: 'Prospect theory (TheoryScope)', arg: 'prospect theory loss aversion' }
    ],
    also: [],
    refs: [
      { cite: "Arkes, H. R., & Blumer, C. (1985). The psychology of sunk cost. Organizational Behavior and Human Decision Processes, 35(1), 124–140.", doi: "10.1016/0749-5978(85)90049-4" }
    ]
  },
  {
    id: 'texas-sharpshooter-harking',
    name: "Texas Sharpshooter Fallacy (& HARKing)",
    kind: 'fallacy',
    family: 'integrity',
    trap: "Painting the bullseye after firing — finding a pattern in the data, then presenting it as a hypothesis you set out to test.",
    example: "Running many subgroup analyses and reporting only the 'significant' one as if it were predicted. Kerr (1998) named the research-practice version HARKing — Hypothesising After the Results are Known — and showed how it corrupts the published record.",
    why: "Selecting from many comparisons inflates the false-positive rate; re-framing a post-hoc finding as a priori hides that multiplicity and the degrees of freedom spent searching.",
    antidote: "Pre-register hypotheses and the analysis plan. Keep confirmatory and exploratory work clearly separate, and correct for multiple comparisons.",
    stages: ['design', 'analysis', 'interpretation'],
    links: [
      { tool: 'researchflow', label: 'Pre-register the plan (ResearchFlow)', arg: 'pre-register confirmatory hypotheses before looking at the data' }
    ],
    also: ['base-rate-fallacy'],
    refs: [
      { cite: "Kerr, N. L. (1998). HARKing: Hypothesizing after the results are known. Personality and Social Psychology Review, 2(3), 196–217.", doi: "10.1207/s15327957pspr0203_4" }
    ]
  }
];

// Expose for the app (also works if ever loaded as a module).
if (typeof window !== 'undefined') window.PITFALLS = PITFALLS;
if (typeof module !== 'undefined' && module.exports) module.exports = { PITFALLS };
