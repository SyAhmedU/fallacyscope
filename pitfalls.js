/* ════════════════════════════════════════════════════════════════
   FALLACYSCOPE — data
   The reasoning traps that bend social-science & management research:
   paradoxes (counter-intuitive but real), fallacies (errors of
   inference) and biases (systematic distortions in data, measurement
   or judgement). Reference tier of the Research Suite ("Throughline").

   NO-FABRICATION RULE (suite-wide): every entry names a real, hand-
   verified canonical source. DOIs are included only where verified;
   where a DOI is uncertain it is omitted rather than guessed (a wrong
   DOI is worse than none). Worked examples are drawn from the cited
   literature, not invented. Prefer fewer verified entries over
   plausible-sounding ones.

   Schema (one object per trap):
     id        kebab-case, stable, used in #/<id> deep-links + cross-refs
     name      display name
     kind      'paradox' | 'fallacy' | 'bias'
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
    also: ['ecological-fallacy', 'lords-paradox', 'berksons-paradox', 'confounding'],
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
    also: ['simpsons-paradox', 'regression-to-the-mean', 'correlation-not-causation'],
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
    also: ['survivorship-bias', 'simpsons-paradox', 'friendship-paradox', 'confounding'],
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
    id: 'will-rogers-phenomenon',
    name: "Will Rogers Phenomenon (Stage Migration)",
    kind: 'paradox',
    family: 'statistical',
    trap: "Moving one element from one group to another can raise the average of both groups at once — though no individual changed.",
    example: "Feinstein, Sosin & Wells (1985): sharper scans reclassify some apparently-healthy cancer patients as mildly ill. Being the sickest of the healthy group but the healthiest of the ill group, they lift both groups' average survival — pure reclassification, no real improvement.",
    why: "Reassigning a value that sits below one group's mean but above another's raises both means simultaneously; the pooled total is unchanged.",
    antidote: "Hold classification fixed when comparing groups over time; watch for shifting diagnostic or inclusion criteria; analyse the whole cohort, not migrating subgroups.",
    stages: ['measurement', 'analysis', 'interpretation'],
    links: [],
    also: ['simpsons-paradox', 'regression-to-the-mean'],
    refs: [
      { cite: "Feinstein, A. R., Sosin, D. M., & Wells, C. K. (1985). The Will Rogers phenomenon: Stage migration and new diagnostic techniques as a source of misleading statistics for survival in cancer. New England Journal of Medicine, 312(25), 1604–1608.", doi: "10.1056/NEJM198506203122504" }
    ]
  },
  {
    id: 'friendship-paradox',
    name: "Friendship Paradox",
    kind: 'paradox',
    family: 'selection',
    trap: "On average your friends have more friends than you do — and most people sit below their friends' average.",
    example: "Feld (1991) showed that because highly-connected people appear in many others' friend lists, drawing 'a random friend' over-samples hubs. The same logic biases snowball and respondent-driven network samples toward the well-connected.",
    why: "Sampling proportional to degree — you are more likely to be someone's friend the more friends you have — over-represents high-degree nodes in any friend-of-a-friend draw.",
    antidote: "Account for degree when sampling networks; don't treat friends-of-respondents as a random sample. (Used deliberately, the same effect powers early outbreak detection.)",
    stages: ['sampling', 'inference'],
    links: [],
    also: ['berksons-paradox', 'survivorship-bias'],
    refs: [
      { cite: "Feld, S. L. (1991). Why your friends have more friends than you do. American Journal of Sociology, 96(6), 1464–1477.", doi: "10.1086/229693" }
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
    id: 'confounding',
    name: "Confounding (the Third-Variable Problem)",
    kind: 'bias',
    family: 'causal',
    trap: "A third variable causes both the supposed cause and the effect, manufacturing an association that is not causal.",
    example: "Ice-cream sales correlate with drownings — but hot weather drives both. In observational work an unmeasured common cause can fully explain an apparent treatment effect (Greenland, Pearl & Robins, 1999).",
    why: "An open 'back-door' path through a common cause transmits association without causation; unless you block it — by design or by adjustment — the estimate is biased.",
    antidote: "Draw a causal DAG to find common causes; randomise where you can, or adjust for the confounder (never for mediators or colliders); reason explicitly about unmeasured confounding.",
    stages: ['design', 'analysis', 'inference'],
    links: [
      { tool: 'toolsscope', label: 'Add the confounder in ToolsScope', arg: 'add the suspected common cause as a covariate and check how the estimate moves' }
    ],
    also: ['correlation-not-causation', 'simpsons-paradox', 'spurious-correlation', 'berksons-paradox'],
    refs: [
      { cite: "Greenland, S., Pearl, J., & Robins, J. M. (1999). Causal diagrams for epidemiologic research. Epidemiology, 10(1), 37–48.", doi: "10.1097/00001648-199901000-00008" }
    ]
  },
  {
    id: 'correlation-not-causation',
    name: "Correlation ≠ Causation (Cum Hoc)",
    kind: 'fallacy',
    family: 'causal',
    trap: "Reading a causal claim off a correlation, without ruling out confounding, reverse causation, or chance.",
    example: "Observational data linked hormone-replacement therapy to lower heart-disease risk; randomised trials later found no protective effect — the association was confounded by healthier users. As Holland (1986) put it: 'no causation without manipulation.'",
    why: "Association is symmetric and assumption-free; causation needs a counterfactual. A correlation is equally consistent with X→Y, Y→X, Z→both, or coincidence.",
    antidote: "State the causal estimand and its identifying assumptions; prefer randomisation or a credible quasi-experiment; never quietly upgrade 'associated with' to 'causes' in the write-up.",
    stages: ['inference', 'interpretation'],
    links: [
      { tool: 'researchflow', label: 'Design for a causal claim (ResearchFlow)', arg: 'what design would let me make a causal claim rather than a correlational one' }
    ],
    also: ['confounding', 'spurious-correlation', 'lords-paradox'],
    refs: [
      { cite: "Holland, P. W. (1986). Statistics and causal inference. Journal of the American Statistical Association, 81(396), 945–960.", doi: "10.2307/2289064" }
    ]
  },
  {
    id: 'spurious-correlation',
    name: "Spurious Correlation (Nonsense Correlation)",
    kind: 'fallacy',
    family: 'statistical',
    trap: "Two trending or autocorrelated series correlate strongly by coincidence, with no real link between them.",
    example: "Yule (1926) warned that time series sharing a trend yield high 'nonsense-correlations'. The modern echo: the near-perfect correlation between US per-capita cheese consumption and deaths from bedsheet entanglement.",
    why: "Shared trends, autocorrelation, or a lurking common driver inflate the correlation; and with enough candidate series, some will line up by chance alone.",
    antidote: "Detrend or difference time series; demand a mechanism and pre-specify the hypothesis; treat data-dredged correlations as exploratory, never confirmatory.",
    stages: ['analysis', 'inference'],
    links: [],
    also: ['correlation-not-causation', 'confounding', 'texas-sharpshooter-harking'],
    refs: [
      { cite: "Yule, G. U. (1926). Why do we sometimes get nonsense-correlations between time-series? A study in sampling and the nature of time-series. Journal of the Royal Statistical Society, 89(1), 1–63.", doi: "10.2307/2341482" }
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
    also: ['gamblers-fallacy', 'prosecutors-fallacy', 'anchoring', 'texas-sharpshooter-harking'],
    refs: [
      { cite: "Tversky, A., & Kahneman, D. (1973). On the psychology of prediction. Psychological Review, 80(4), 237–251.", doi: "10.1037/h0034747" },
      { cite: "Bar-Hillel, M. (1980). The base-rate fallacy in probability judgments. Acta Psychologica, 44(3), 211–233.", doi: "10.1016/0001-6918(80)90046-3" }
    ]
  },
  {
    id: 'prosecutors-fallacy',
    name: "Prosecutor's Fallacy",
    kind: 'fallacy',
    family: 'reasoning',
    trap: "Confusing the probability of the evidence given a hypothesis with the probability of the hypothesis given the evidence.",
    example: "Thompson & Schumann (1987): a 1-in-a-million DNA match is presented as a 1-in-a-million chance of innocence — ignoring how many people in a large population could also match. P(match | innocent) is not P(innocent | match).",
    why: "The two conditional probabilities are linked by Bayes' theorem through the base rate; swapping them drops both the prior and the size of the reference population.",
    antidote: "Be explicit about what is conditioned on what; carry the base rate and the population size; compute the posterior, not just the likelihood.",
    stages: ['inference', 'interpretation'],
    links: [],
    also: ['base-rate-fallacy'],
    refs: [
      { cite: "Thompson, W. C., & Schumann, E. L. (1987). Interpretation of statistical evidence in criminal trials: The prosecutor's fallacy and the defense attorney's fallacy. Law and Human Behavior, 11(3), 167–187.", doi: "10.1007/BF01044641" }
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
    also: ['base-rate-fallacy', 'regression-to-the-mean', 'hot-hand-fallacy'],
    refs: [
      { cite: "Tversky, A., & Kahneman, D. (1971). Belief in the law of small numbers. Psychological Bulletin, 76(2), 105–110.", doi: "10.1037/h0031322" }
    ]
  },
  {
    id: 'hot-hand-fallacy',
    name: "Hot-Hand Fallacy",
    kind: 'fallacy',
    family: 'reasoning',
    trap: "Believing a run of successes signals an elevated chance of further success in near-independent events.",
    example: "Gilovich, Vallone & Tversky (1985) found basketball 'streak' shooting was statistically indistinguishable from chance, though fans and players believed in the hot hand. The twist: Miller & Sanjurjo (2018) showed the original test was itself subtly biased, and a modest hot hand may be real — a fallacy about a fallacy.",
    why: "People over-read short streaks as representative of a hot state. But streak analysis can also under-detect a real effect, through a selection bias in how runs are sampled.",
    antidote: "Test sequence dependence formally and beware error in both directions; pre-register the streak definition; correct for the Miller–Sanjurjo bias.",
    stages: ['analysis', 'inference'],
    links: [
      { tool: 'toolsscope', label: 'Test sequence randomness (ToolsScope)', arg: 'test whether a sequence of successes departs from independence' }
    ],
    also: ['gamblers-fallacy', 'base-rate-fallacy'],
    refs: [
      { cite: "Gilovich, T., Vallone, R., & Tversky, A. (1985). The hot hand in basketball: On the misperception of random sequences. Cognitive Psychology, 17(3), 295–314.", doi: "10.1016/0010-0285(85)90010-6" },
      { cite: "Miller, J. B., & Sanjurjo, A. (2018). Surprised by the hot hand fallacy? A truth in the law of small numbers. Econometrica, 86(6), 2019–2047. [challenge]", doi: "10.3982/ECTA14943" }
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
    also: ['lords-paradox', 'gamblers-fallacy', 'will-rogers-phenomenon', 'range-restriction'],
    refs: [
      { cite: "Galton, F. (1886). Regression towards mediocrity in hereditary stature. Journal of the Anthropological Institute of Great Britain and Ireland, 15, 246–263.", doi: "10.2307/2841583" }
    ]
  },
  {
    id: 'survivorship-bias',
    name: "Survivorship Bias",
    kind: 'bias',
    family: 'selection',
    trap: "Drawing conclusions only from the cases that survived a selection process, while the ones that dropped out are silently missing.",
    example: "Wald's WWII team realised the bullet holes on planes that returned showed where a plane could be hit and still fly home; the armour belonged where holes were absent — on the planes that never came back (Mangel & Samaniego, 1984). In finance, funds that die vanish from databases, inflating the average return of 'all funds' (Brown et al., 1992).",
    why: "The sample is conditioned on survival, so failures are systematically absent and the surviving distribution is biased toward success.",
    antidote: "Reconstruct the full at-risk set including dropouts and failures. Always ask: what data is missing precisely because it didn't survive?",
    stages: ['sampling', 'inference', 'interpretation'],
    links: [],
    also: ['berksons-paradox', 'publication-bias', 'range-restriction', 'friendship-paradox'],
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
    also: ['framing-effect'],
    refs: [
      { cite: "Arkes, H. R., & Blumer, C. (1985). The psychology of sunk cost. Organizational Behavior and Human Decision Processes, 35(1), 124–140.", doi: "10.1016/0749-5978(85)90049-4" }
    ]
  },
  {
    id: 'framing-effect',
    name: "Framing Effect",
    kind: 'bias',
    family: 'decision',
    trap: "Logically equivalent descriptions — gains vs losses, '90% survive' vs '10% die' — lead to different choices and answers.",
    example: "Tversky & Kahneman (1981): people chose the 'sure 200 saved' option but rejected the equivalent 'sure 400 die' framing of the very same program. Wording alone flips survey and treatment preferences.",
    why: "Options are evaluated against a reference point under loss-aversion; the frame sets that reference, so equivalent choices feel different.",
    antidote: "Test multiple framings; word survey items neutrally and balance positive with negative; report sensitivity to framing as a robustness check.",
    stages: ['measurement', 'interpretation'],
    links: [
      { tool: 'theoryscope', label: 'Prospect theory (TheoryScope)', arg: 'prospect theory framing reference point' }
    ],
    also: ['anchoring', 'sunk-cost-fallacy'],
    refs: [
      { cite: "Tversky, A., & Kahneman, D. (1981). The framing of decisions and the psychology of choice. Science, 211(4481), 453–458.", doi: "10.1126/science.7455683" }
    ]
  },
  {
    id: 'anchoring',
    name: "Anchoring",
    kind: 'bias',
    family: 'reasoning',
    trap: "An initial number 'anchors' later judgments, which adjust insufficiently away from it — even when the anchor is arbitrary.",
    example: "Tversky & Kahneman (1974) spun a wheel of fortune, then asked the percentage of African nations in the UN; people who saw a higher random number gave higher estimates. Anchors bias estimates, negotiations, and survey responses alike.",
    why: "Judgment under uncertainty starts from an available reference point and adjusts too little; the anchor need not be relevant to exert its pull.",
    antidote: "Form your own estimate before seeing others'; consider an opposite anchor; keep suggestive numbers out of survey items and prompts.",
    stages: ['measurement', 'inference'],
    links: [
      { tool: 'theoryscope', label: 'Heuristics & biases (TheoryScope)', arg: 'heuristics and biases anchoring and adjustment' }
    ],
    also: ['availability-heuristic', 'framing-effect', 'base-rate-fallacy'],
    refs: [
      { cite: "Tversky, A., & Kahneman, D. (1974). Judgment under uncertainty: Heuristics and biases. Science, 185(4157), 1124–1131.", doi: "10.1126/science.185.4157.1124" }
    ]
  },
  {
    id: 'availability-heuristic',
    name: "Availability Heuristic",
    kind: 'bias',
    family: 'reasoning',
    trap: "Judging how likely or frequent something is by how easily examples come to mind.",
    example: "People overestimate dramatic, memorable risks (plane crashes, shark attacks) and underestimate common ones, because vivid cases are more retrievable (Tversky & Kahneman, 1973).",
    why: "Ease of recall stands in for frequency; recency, vividness and media coverage make some events disproportionately available, distorting the estimate.",
    antidote: "Look up base rates instead of relying on recall; beware vivid anecdotes driving 'how common is this?' judgments in interviews, reviews and case selection.",
    stages: ['measurement', 'inference', 'interpretation'],
    links: [
      { tool: 'theoryscope', label: 'Heuristics & biases (TheoryScope)', arg: 'heuristics and biases availability' }
    ],
    also: ['anchoring', 'base-rate-fallacy'],
    refs: [
      { cite: "Tversky, A., & Kahneman, D. (1973). Availability: A heuristic for judging frequency and probability. Cognitive Psychology, 5(2), 207–232.", doi: "10.1016/0010-0285(73)90033-9" }
    ]
  },
  {
    id: 'confirmation-bias',
    name: "Confirmation Bias",
    kind: 'bias',
    family: 'reasoning',
    trap: "Seeking, weighting and remembering evidence that fits your hypothesis while discounting what contradicts it.",
    example: "In Wason's (1960) rule-discovery task, people tested only sequences they expected to confirm, rarely trying to falsify — and clung to wrong rules. Nickerson (1998) traces the same one-sided pattern across science and everyday judgment.",
    why: "Positive testing and motivated reasoning feel like inquiry but gather one-sided evidence; disconfirming tests are more informative yet psychologically aversive.",
    antidote: "Actively seek disconfirming evidence; pre-register predictions; invite adversarial review or a 'red team'; deliberately consider the opposite.",
    stages: ['design', 'analysis', 'interpretation'],
    links: [
      { tool: 'researchflow', label: 'Pre-register disconfirming tests (ResearchFlow)', arg: 'pre-register predictions and a disconfirming test before analysis' }
    ],
    also: ['hindsight-bias', 'narrative-fallacy', 'texas-sharpshooter-harking'],
    refs: [
      { cite: "Wason, P. C. (1960). On the failure to eliminate hypotheses in a conceptual task. Quarterly Journal of Experimental Psychology, 12(3), 129–140.", doi: "10.1080/17470216008416717" },
      { cite: "Nickerson, R. S. (1998). Confirmation bias: A ubiquitous phenomenon in many guises. Review of General Psychology, 2(2), 175–220.", doi: "10.1037/1089-2680.2.2.175" }
    ]
  },
  {
    id: 'hindsight-bias',
    name: "Hindsight Bias",
    kind: 'bias',
    family: 'reasoning',
    trap: "Once you know the outcome, it feels as if you 'knew it all along' — past uncertainty shrinks in memory.",
    example: "Fischhoff (1975) gave people historical outcomes and found they judged those outcomes as having been more predictable than groups who weren't told them. The same inflates how 'obvious' a study's result seems after the fact.",
    why: "Outcome knowledge contaminates recall of prior belief; the mind updates, then misremembers the update as its original expectation.",
    antidote: "Record predictions before outcomes are known; pre-register; in review, ask whether the result would have seemed just as obvious had it gone the other way.",
    stages: ['interpretation'],
    links: [
      { tool: 'researchflow', label: 'Record predictions first (ResearchFlow)', arg: 'record and pre-register predictions before outcomes are known' }
    ],
    also: ['confirmation-bias', 'narrative-fallacy', 'texas-sharpshooter-harking'],
    refs: [
      { cite: "Fischhoff, B. (1975). Hindsight ≠ foresight: The effect of outcome knowledge on judgment under uncertainty. Journal of Experimental Psychology: Human Perception and Performance, 1(3), 288–299.", doi: "10.1037/0096-1523.1.3.288" }
    ]
  },
  {
    id: 'narrative-fallacy',
    name: "Narrative Fallacy",
    kind: 'fallacy',
    family: 'reasoning',
    trap: "Imposing a tidy cause-and-effect story on what is largely noise, because coherent narratives are more memorable than data.",
    example: "Taleb (2007) argues we retrofit explanations onto random market and historical events: a run of luck becomes a 'strategy', and post-hoc stories make the unpredictable feel inevitable.",
    why: "Humans compress information into stories; a causal narrative is easier to store and recall than a distribution, so we prefer it even when it isn't warranted.",
    antidote: "Separate description from explanation; ask what evidence would break the story; favour base rates and effect sizes over compelling anecdotes — especially in qualitative coding.",
    stages: ['interpretation'],
    links: [],
    also: ['hindsight-bias', 'confirmation-bias', 'texas-sharpshooter-harking'],
    refs: [
      { cite: "Taleb, N. N. (2007). The Black Swan: The Impact of the Highly Improbable. Random House." }
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
    also: ['p-hacking', 'publication-bias', 'hindsight-bias', 'base-rate-fallacy'],
    refs: [
      { cite: "Kerr, N. L. (1998). HARKing: Hypothesizing after the results are known. Personality and Social Psychology Review, 2(3), 196–217.", doi: "10.1207/s15327957pspr0203_4" }
    ]
  },
  {
    id: 'p-hacking',
    name: "P-Hacking (Researcher Degrees of Freedom)",
    kind: 'fallacy',
    family: 'integrity',
    trap: "Flexibly trying analyses — dropping outliers, adding covariates, peeking and stopping — until p < .05, then reporting only what 'worked'.",
    example: "Simmons, Nelson & Simonsohn (2011) showed that exploiting ordinary analytic flexibility can push the false-positive rate above 60%; in a demonstration they 'found' that listening to a song literally made people younger.",
    why: "Each undisclosed choice is an extra implicit test. The nominal 5% error rate assumes one pre-specified analysis; many flexible ones drive the real rate far higher.",
    antidote: "Pre-register the analysis plan; disclose all measures, conditions and exclusions; report sensitivity analyses; keep exploratory clearly labelled as exploratory.",
    stages: ['analysis', 'interpretation'],
    links: [
      { tool: 'researchflow', label: 'Pre-register the analysis (ResearchFlow)', arg: 'pre-register the full analysis plan to remove researcher degrees of freedom' }
    ],
    also: ['texas-sharpshooter-harking', 'publication-bias', 'confirmation-bias'],
    refs: [
      { cite: "Simmons, J. P., Nelson, L. D., & Simonsohn, U. (2011). False-positive psychology: Undisclosed flexibility in data collection and analysis allows presenting anything as significant. Psychological Science, 22(11), 1359–1366.", doi: "10.1177/0956797611417632" }
    ]
  },
  {
    id: 'publication-bias',
    name: "Publication Bias (File-Drawer Problem)",
    kind: 'bias',
    family: 'integrity',
    trap: "Significant, positive results get published; null results sit in the file drawer — so the literature overstates effects.",
    example: "Rosenthal (1979) framed the 'file drawer problem': a body of significant findings can coexist with many unpublished null studies, so a meta-analysis that ignores them overestimates the true effect.",
    why: "Selection on statistical significance truncates the distribution of results; what is visible is a biased sample of what was actually run.",
    antidote: "Search grey literature and trial registries; use funnel plots, trim-and-fill and p-curve; weight pre-registered and registered-report evidence most heavily.",
    stages: ['sampling', 'inference', 'interpretation'],
    links: [
      { tool: 'toolsscope', label: 'Funnel plot / meta-analysis (ToolsScope)', arg: 'run a meta-analysis with a funnel plot to check for publication bias' }
    ],
    also: ['p-hacking', 'survivorship-bias', 'texas-sharpshooter-harking'],
    refs: [
      { cite: "Rosenthal, R. (1979). The file drawer problem and tolerance for null results. Psychological Bulletin, 86(3), 638–641.", doi: "10.1037/0033-2909.86.3.638" }
    ]
  },
  {
    id: 'goodharts-law',
    name: "Goodhart's Law",
    kind: 'bias',
    family: 'measurement',
    trap: "When a measure becomes a target, it stops being a good measure.",
    example: "Goodhart (1975) observed monetary aggregates lost their statistical regularity once they were targeted. Strathern (1997) generalised it to audit culture: optimise a proxy — citations, KPIs, test scores — and people game the proxy, hollowing out the thing it was meant to track.",
    why: "Agents optimise the indicator, not the latent construct; the indicator–construct link, estimated under no pressure, breaks once incentive is applied.",
    antidote: "Use multiple, hard-to-game indicators; monitor the construct directly where possible; expect adaptive gaming and watch for it.",
    stages: ['measurement', 'interpretation'],
    links: [],
    also: ['campbells-law', 'common-method-bias'],
    refs: [
      { cite: "Goodhart, C. A. E. (1975). Problems of monetary management: The U.K. experience. In Papers in Monetary Economics (Vol. 1). Reserve Bank of Australia." },
      { cite: "Strathern, M. (1997). 'Improving ratings': Audit in the British University system. European Review, 5(3), 305–321." }
    ]
  },
  {
    id: 'campbells-law',
    name: "Campbell's Law",
    kind: 'bias',
    family: 'measurement',
    trap: "The more a quantitative indicator is used for high-stakes decisions, the more it will be corrupted and the more it distorts what it measures.",
    example: "Campbell (1979): high-stakes use of standardized test scores invites teaching-to-the-test and outright manipulation, corrupting both the scores and the education they were meant to gauge.",
    why: "Stakes create pressure to raise the number by any available route — including ones that don't improve, or actively damage, the underlying outcome.",
    antidote: "Decouple measurement from high-stakes incentives where you can; triangulate indicators; audit for corruption of the metric over time.",
    stages: ['measurement', 'interpretation'],
    links: [],
    also: ['goodharts-law', 'common-method-bias'],
    refs: [
      { cite: "Campbell, D. T. (1979). Assessing the impact of planned social change. Evaluation and Program Planning, 2(1), 67–90.", doi: "10.1016/0149-7189(79)90048-X" }
    ]
  },
  {
    id: 'common-method-bias',
    name: "Common-Method Bias",
    kind: 'bias',
    family: 'measurement',
    trap: "When predictor and outcome are measured the same way (e.g. one self-report survey), shared method variance inflates their correlation.",
    example: "Podsakoff et al. (2003): asking the same respondents about both job satisfaction and their own performance in a single questionnaire can manufacture or exaggerate the link, through consistency motifs, mood and item context.",
    why: "Variance attributable to the measurement method, rather than the constructs, is shared across items — biasing observed relationships, usually upward.",
    antidote: "Separate the sources or time the measurements; vary scale formats; use marker variables and CFA-based controls; pre-empt it at the design stage.",
    stages: ['design', 'measurement', 'analysis'],
    links: [
      { tool: 'toolsscope', label: 'Run a method-bias / CFA check (ToolsScope)', arg: 'run a confirmatory factor analysis and common-method check' }
    ],
    also: ['range-restriction', 'jingle-jangle', 'goodharts-law'],
    refs: [
      { cite: "Podsakoff, P. M., MacKenzie, S. B., Lee, J.-Y., & Podsakoff, N. P. (2003). Common method biases in behavioral research: A critical review of the literature and recommended remedies. Journal of Applied Psychology, 88(5), 879–903.", doi: "10.1037/0021-9010.88.5.879" }
    ]
  },
  {
    id: 'range-restriction',
    name: "Range Restriction (Attenuation)",
    kind: 'bias',
    family: 'measurement',
    trap: "Studying a narrow slice of a variable shrinks correlations, hiding relationships that exist in the full population.",
    example: "Validating a hiring test only on people who were actually hired — a restricted, pre-selected range — understates how well the test predicts performance across all applicants (Sackett & Yang, 2000).",
    why: "Correlation depends on variance; truncating the range removes variance, mechanically attenuating the observed association.",
    antidote: "Sample the full range where possible; apply established range-restriction corrections; always report the restriction and the direction it biases.",
    stages: ['sampling', 'analysis', 'interpretation'],
    links: [
      { tool: 'toolsscope', label: 'Correct for range restriction (ToolsScope)', arg: 'apply a range-restriction correction to an attenuated correlation' }
    ],
    also: ['regression-to-the-mean', 'survivorship-bias', 'common-method-bias'],
    refs: [
      { cite: "Sackett, P. R., & Yang, H. (2000). Correction for range restriction: An expanded typology. Journal of Applied Psychology, 85(1), 112–118.", doi: "10.1037/0021-9010.85.1.112" }
    ]
  },
  {
    id: 'jingle-jangle',
    name: "Jingle-Jangle Fallacy",
    kind: 'fallacy',
    family: 'measurement',
    trap: "Assuming two scales with the same name measure the same thing (jingle), or that two differently-named scales measure different things (jangle).",
    example: "Many 'engagement', 'commitment' or 'grit' measures share a label but tap different constructs (jingle); others use different labels for near-identical content (jangle) — e.g. grit overlapping heavily with conscientiousness (Kelley, 1927).",
    why: "Labels are not constructs. Without inspecting item content and discriminant validity, naming creates an illusion of equivalence or of distinctness.",
    antidote: "Read the actual items; test discriminant and convergent validity (and measurement invariance); never infer construct identity from a shared name.",
    stages: ['measurement', 'interpretation'],
    links: [
      { tool: 'theoryscope', label: 'Compare the constructs (TheoryScope)', arg: 'compare two similarly-named constructs for overlap' }
    ],
    also: ['common-method-bias', 'range-restriction'],
    refs: [
      { cite: "Kelley, T. L. (1927). Interpretation of Educational Measurements. World Book Company. (Origin of the 'jangle fallacy'; the 'jingle fallacy' traces to Thorndike, 1904.)" }
    ]
  },
  {
    id: 'hawthorne-effect',
    name: "Hawthorne Effect (Reactivity)",
    kind: 'bias',
    family: 'measurement',
    trap: "People change their behaviour simply because they know they are being observed or studied.",
    example: "Productivity rose during the 1920s–30s Hawthorne plant studies under many different conditions, attributed to the attention of being studied (Roethlisberger & Dickson, 1939). (A re-analysis by Levitt & List, 2011, found the original evidence far weaker than the legend — though reactivity itself is real.)",
    why: "Awareness of observation introduces motivation, self-presentation and novelty effects that get confounded with whatever you intended to manipulate.",
    antidote: "Use unobtrusive measures, a comparison group that is also observed, blinding, and longer run-ins so novelty fades; report the legend's contested status honestly.",
    stages: ['design', 'measurement', 'inference'],
    links: [
      { tool: 'researchflow', label: 'Design unobtrusive measurement (ResearchFlow)', arg: 'reduce reactivity with unobtrusive measures and an observed control group' }
    ],
    also: ['demand-characteristics', 'experimenter-expectancy'],
    refs: [
      { cite: "Roethlisberger, F. J., & Dickson, W. J. (1939). Management and the Worker. Harvard University Press." },
      { cite: "Levitt, S. D., & List, J. A. (2011). Was there really a Hawthorne effect at the Hawthorne plant? An analysis of the original illumination experiments. American Economic Journal: Applied Economics, 3(1), 224–238. [challenge]", doi: "10.1257/app.3.1.224" }
    ]
  },
  {
    id: 'demand-characteristics',
    name: "Demand Characteristics",
    kind: 'bias',
    family: 'design',
    trap: "Participants guess the study's purpose and act to confirm (or defy) it, so you measure their theory of your hypothesis, not the effect.",
    example: "Orne (1962) showed subjects infer the 'demand' of the situation from cues and comply — even performing tedious, pointless tasks for hours simply because the experiment seemed to ask for it.",
    why: "An experiment is a social situation; cues from instructions, setting and the experimenter signal expected behaviour, which cooperative participants then supply.",
    antidote: "Mask the hypothesis; use cover stories and filler items, between-subjects designs, and post-experimental suspicion checks; keep procedures neutral.",
    stages: ['design', 'measurement'],
    links: [
      { tool: 'researchflow', label: 'Mask the hypothesis (ResearchFlow)', arg: 'use a cover story and filler items to reduce demand characteristics' }
    ],
    also: ['experimenter-expectancy', 'hawthorne-effect'],
    refs: [
      { cite: "Orne, M. T. (1962). On the social psychology of the psychological experiment: With particular reference to demand characteristics and their implications. American Psychologist, 17(11), 776–783.", doi: "10.1037/h0043424" }
    ]
  },
  {
    id: 'experimenter-expectancy',
    name: "Experimenter Expectancy (Pygmalion) Effect",
    kind: 'bias',
    family: 'design',
    trap: "The researcher's own expectations subtly shape participants' behaviour and the recording of data, producing the predicted result.",
    example: "Rosenthal & Jacobson (1968) told teachers certain (randomly chosen) pupils were 'bloomers'; those pupils went on to gain more IQ — the expectation became self-fulfilling. Across 345 studies, expectancy effects proved pervasive (Rosenthal & Rubin, 1978).",
    why: "Expectations leak through tone, cueing and biased scoring, nudging both behaviour and measurement toward the hypothesis.",
    antidote: "Run double-blind procedures; automate and standardise instructions and scoring; keep data-coders blind to condition and to the hypothesis.",
    stages: ['design', 'measurement', 'analysis'],
    links: [
      { tool: 'researchflow', label: 'Double-blind design (ResearchFlow)', arg: 'design double-blind procedures and blind coding to control experimenter expectancy' }
    ],
    also: ['demand-characteristics', 'hawthorne-effect', 'confirmation-bias'],
    refs: [
      { cite: "Rosenthal, R., & Jacobson, L. (1968). Pygmalion in the Classroom: Teacher Expectation and Pupils' Intellectual Development. Holt, Rinehart & Winston." },
      { cite: "Rosenthal, R., & Rubin, D. B. (1978). Interpersonal expectancy effects: The first 345 studies. Behavioral and Brain Sciences, 1(3), 377–386.", doi: "10.1017/S0140525X00075506" }
    ]
  },
  {
    id: 'law-of-the-instrument',
    name: "Law of the Instrument (Maslow's Hammer)",
    kind: 'fallacy',
    family: 'design',
    trap: "Over-relying on a familiar method, so every problem gets bent to fit it — 'if all you have is a hammer, everything looks like a nail'.",
    example: "Maslow (1966) warned that a favourite technique dictates which questions get asked: a regression specialist frames everything as regression, a survey shop surveys everything — regardless of whether the method actually fits.",
    why: "Method competence breeds method commitment; the available tool shapes how the problem is formulated, instead of the problem selecting the tool.",
    antidote: "Start from the question, then choose the method; keep a diverse methodological toolkit; invite someone with a different method to critique the design.",
    stages: ['design', 'analysis'],
    links: [],
    also: ['streetlight-effect'],
    refs: [
      { cite: "Maslow, A. H. (1966). The Psychology of Science: A Reconnaissance. Harper & Row." },
      { cite: "Kaplan, A. (1964). The Conduct of Inquiry: Methodology for Behavioral Science. Chandler." }
    ]
  },
  {
    id: 'streetlight-effect',
    name: "Streetlight Effect (Drunkard's Search)",
    kind: 'fallacy',
    family: 'design',
    trap: "Looking for the answer where it's easiest to look — convenient data, available samples — rather than where the answer actually is.",
    example: "The parable: a man searches for lost keys under the streetlight, not where he dropped them, 'because the light is better here'. Kaplan (1964) used it for science that studies what is easy to measure rather than what matters.",
    why: "Accessibility of data and methods, not theoretical relevance, drives what gets studied; the easy-to-measure crowds out the important.",
    antidote: "Define what you need to measure before what you can; justify samples and proxies by relevance, not convenience; name explicitly what your accessible data cannot reach.",
    stages: ['design', 'sampling', 'interpretation'],
    links: [],
    also: ['law-of-the-instrument', 'survivorship-bias'],
    refs: [
      { cite: "Kaplan, A. (1964). The Conduct of Inquiry: Methodology for Behavioral Science. Chandler. (The 'drunkard's search' / law of the instrument.)" }
    ]
  }
];

// Expose for the app (also works if ever loaded as a module).
if (typeof window !== 'undefined') window.PITFALLS = PITFALLS;
if (typeof module !== 'undefined' && module.exports) module.exports = { PITFALLS };
