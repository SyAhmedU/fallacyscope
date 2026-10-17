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
  },
  {
    id: 'dunning-kruger',
    name: 'Dunning–Kruger Effect',
    kind: 'bias',
    family: 'reasoning',
    trap: "The least competent tend to most overrate their competence, because the skill needed to do well is the same skill needed to see you are doing badly.",
    example: "Kruger and Dunning (1999) tested people on humour, logic and grammar. Bottom-quartile performers scored around the 12th percentile but rated their own ability near the 62nd — and could not recognise better answers even when shown them.",
    why: "Metacognitive self-monitoring depends on domain skill: the deficit that produces wrong answers also conceals their wrongness, so self-assessment error is largest exactly where competence is lowest.",
    antidote: "Never treat self-rated expertise as a measure of competence — anchor it to objective performance, calibration checks, or blind external review. Confident self-report from low scorers is uninformative, not reassuring.",
    stages: ['measurement', 'interpretation'],
    links: [{ tool: 'scalescope', label: 'Pair self-report with an objective measure', arg: 'self-assessment competence' }],
    also: ['confirmation-bias', 'common-method-bias'],
    refs: [
      { cite: "Kruger, J., & Dunning, D. (1999). Unskilled and unaware of it: How difficulties in recognizing one's own incompetence lead to inflated self-assessments. Journal of Personality and Social Psychology, 77(6), 1121–1134.", doi: "10.1037/0022-3514.77.6.1121" }
    ]
  },
  {
    id: 'conjunction-fallacy',
    name: 'Conjunction Fallacy',
    kind: 'fallacy',
    family: 'reasoning',
    trap: "Judging a specific combination of events as more probable than one of its own components — which is mathematically impossible.",
    example: "In Tversky and Kahneman's (1983) 'Linda' problem, a woman is described as a philosophy graduate concerned with discrimination. Most respondents rated 'Linda is a bank teller and active in the feminist movement' as more probable than 'Linda is a bank teller' — but a conjunction can never be more likely than its conjunct.",
    why: "The representativeness heuristic substitutes similarity for probability: the richer, stereotype-fitting description feels more typical, so people rank it higher despite the logic.",
    antidote: "When a vivid, detailed scenario seems likely, strip it to its base claim and compare. Specificity raises plausibility but can only lower probability — added conditions narrow, never widen.",
    stages: ['analysis', 'inference', 'interpretation'],
    links: [],
    also: ['base-rate-fallacy', 'availability-heuristic', 'narrative-fallacy'],
    refs: [
      { cite: "Tversky, A., & Kahneman, D. (1983). Extensional versus intuitive reasoning: The conjunction fallacy in probability judgment. Psychological Review, 90(4), 293–315.", doi: "10.1037/0033-295X.90.4.293" }
    ]
  },
  {
    id: 'planning-fallacy',
    name: 'Planning Fallacy',
    kind: 'bias',
    family: 'decision',
    trap: "Predicting that a task will go faster and smoother than it ever has, even when you know your past estimates were optimistic.",
    example: "Buehler, Griffin and Ross (1994) had students predict when they would finish theses and assignments. Most finished far later than their own forecasts — and even their explicit 'worst-case' estimates were, on average, optimistic.",
    why: "People build estimates from an inside view — an idealised step-by-step plan for this case — while ignoring the outside view (the distribution of how similar projects actually went).",
    antidote: "Take the outside view: estimate from the realised durations of comparable past projects (reference-class forecasting), not from a best-case narrative. Pad timelines and milestones for the unknowns history guarantees.",
    stages: ['design'],
    links: [{ tool: 'researchflow', label: 'Reality-check the project timeline', arg: 'realistic timeline and feasibility for this study' }],
    also: ['sunk-cost-fallacy'],
    refs: [
      { cite: "Buehler, R., Griffin, D., & Ross, M. (1994). Exploring the 'planning fallacy': Why people underestimate their task completion times. Journal of Personality and Social Psychology, 67(3), 366–381.", doi: "10.1037/0022-3514.67.3.366" }
    ]
  },
  {
    id: 'endowment-effect',
    name: 'Endowment Effect',
    kind: 'bias',
    family: 'decision',
    trap: "People demand far more to give up a thing than they would have paid to acquire it — mere ownership inflates value.",
    example: "Kahneman, Knetsch and Thaler (1990) randomly gave half the participants a university mug. Median sellers wanted about $5.25 to part with it; median buyers would pay only about $2.25 — roughly a 2:1 gap for an item assigned by chance moments earlier.",
    why: "Loss aversion applied to possessions: giving up the mug is coded as a loss, which looms larger than the equivalent gain of acquiring it, so willingness-to-accept exceeds willingness-to-pay.",
    antidote: "In valuation or willingness-to-pay studies, watch for ownership/framing effects; randomise endowment and compare WTA vs WTP. Don't read inflated 'accept' prices as true preference.",
    stages: ['design', 'measurement', 'interpretation'],
    links: [],
    also: ['loss-aversion', 'status-quo-bias', 'framing-effect'],
    refs: [
      { cite: "Kahneman, D., Knetsch, J. L., & Thaler, R. H. (1990). Experimental tests of the endowment effect and the Coase theorem. Journal of Political Economy, 98(6), 1325–1348.", doi: "10.1086/261737" }
    ]
  },
  {
    id: 'status-quo-bias',
    name: 'Status-Quo Bias',
    kind: 'bias',
    family: 'decision',
    trap: "A disproportionate preference for the current state of affairs — the default option wins simply because it is the default.",
    example: "Samuelson and Zeckhauser (1988) gave people hypothetical choices (e.g., an inherited investment portfolio). Labelling one option as the existing state sharply raised how often it was chosen, and the pull to keep doing nothing grew as the number of alternatives increased.",
    why: "Loss aversion plus the anticipated regret of an active change make deviating from the default feel riskier than staying, even when options are otherwise equivalent.",
    antidote: "In survey or choice design, rotate which option is the default and check for order/anchor effects; never infer genuine preference from take-up of a default. In your own decisions, ask whether you'd choose the status quo if it weren't already in place.",
    stages: ['design', 'measurement', 'interpretation'],
    links: [],
    also: ['endowment-effect', 'loss-aversion', 'anchoring'],
    refs: [
      { cite: "Samuelson, W., & Zeckhauser, R. (1988). Status quo bias in decision making. Journal of Risk and Uncertainty, 1(1), 7–59.", doi: "10.1007/BF00055564" }
    ]
  },
  {
    id: 'loss-aversion',
    name: 'Loss Aversion',
    kind: 'bias',
    family: 'decision',
    trap: "Losses hurt about twice as much as equivalent gains please, so framing the same outcome as a loss or a gain flips choices.",
    example: "In Kahneman and Tversky's (1979) prospect theory, the value function is steeper for losses than gains: most people reject a 50/50 bet to win or lose the same amount, and choices reverse depending on whether outcomes are framed relative to a gain or a loss reference point.",
    why: "Outcomes are evaluated as changes from a reference point, not absolute states, and the loss limb of the value function is steeper — so identical prospects are valued differently by frame.",
    antidote: "Pre-register the reference frame; present gains and losses symmetrically and test both framings. Treat a result that depends on framing as evidence about the frame, not the underlying preference.",
    stages: ['design', 'measurement', 'interpretation'],
    links: [],
    also: ['framing-effect', 'endowment-effect', 'status-quo-bias'],
    refs: [
      { cite: "Kahneman, D., & Tversky, A. (1979). Prospect theory: An analysis of decision under risk. Econometrica, 47(2), 263–291.", doi: "10.2307/1914185" }
    ]
  },
  {
    id: 'fundamental-attribution-error',
    name: 'Fundamental Attribution Error',
    kind: 'bias',
    family: 'reasoning',
    trap: "Over-attributing others' behaviour to their character and under-weighting the situation that shaped it.",
    example: "Ross (1977), who named the error, drew on quiz-game studies where questioners and contestants were assigned at random: observers still rated the questioners as more knowledgeable, ignoring that writing the questions was a built-in situational advantage.",
    why: "The actor's behaviour is salient while the situational constraints are not, so dispositional explanations come to mind first and the context is discounted.",
    antidote: "Before coding behaviour as a trait, specify the situation and incentives that produced it; in interview/observational research, separate disposition from role and context, and beware trait inferences from constrained settings.",
    stages: ['measurement', 'analysis', 'interpretation'],
    links: [],
    also: ['correlation-not-causation', 'narrative-fallacy'],
    refs: [
      { cite: "Ross, L. (1977). The intuitive psychologist and his shortcomings: Distortions in the attribution process. Advances in Experimental Social Psychology, 10, 173–220.", doi: "10.1016/S0065-2601(08)60357-3" }
    ]
  },
  {
    id: 'immortal-time-bias',
    name: 'Immortal Time Bias',
    kind: 'bias',
    family: 'selection',
    trap: "A span of follow-up during which the outcome cannot occur is misattributed to a treatment, manufacturing a survival advantage.",
    example: "Suissa (2008) showed that when 'treated' status requires surviving long enough to receive the treatment, that guaranteed event-free 'immortal time' gets credited to the drug — the same artefact behind the folk claim that Oscar winners live longer than nominees.",
    why: "Misclassified or excluded person-time that is event-free by construction is assigned to the exposed group, biasing the rate comparison in its favour.",
    antidote: "Use a time-varying definition of exposure and start follow-up at the same landmark for both groups; map every participant's person-time to its true exposure status before comparing rates.",
    stages: ['design', 'analysis', 'inference'],
    links: [{ tool: 'researchflow', label: 'Pin down exposure timing in the design', arg: 'cohort study where exposure is defined by a later event' }],
    also: ['survivorship-bias', 'berksons-paradox'],
    refs: [
      { cite: "Suissa, S. (2008). Immortal time bias in pharmacoepidemiology. American Journal of Epidemiology, 167(4), 492–499.", doi: "10.1093/aje/kwm324" }
    ]
  },
  {
    id: 'lbw-paradox',
    name: 'Low-Birth-Weight Paradox',
    kind: 'paradox',
    family: 'selection',
    trap: "Among low-birth-weight babies, those of smokers appear to have LOWER mortality than those of non-smokers — reversing the real harm of smoking.",
    example: "Wilcox (2001) explained the classic finding: conditioning on low birth weight is conditioning on a collider, so a more benign cause (non-smoking with some other pathology) is pooled with the smoking effect, making smoking look protective within the low-weight stratum.",
    why: "Birth weight lies on the causal path and is also influenced by other, more dangerous causes; stratifying on it opens a spurious path that flips the association inside the stratum.",
    antidote: "Don't condition on a variable that is itself an effect of the exposure (a mediator/collider). Reason from the causal DAG, not from convenient strata.",
    stages: ['analysis', 'inference', 'interpretation'],
    links: [{ tool: 'toolsscope', label: 'Avoid stratifying on a collider', arg: 'subgroup analysis conditioned on an intermediate variable' }],
    also: ['berksons-paradox', 'simpsons-paradox', 'survivorship-bias'],
    refs: [
      { cite: "Wilcox, A. J. (2001). On the importance—and the unimportance—of birthweight. International Journal of Epidemiology, 30(6), 1233–1241.", doi: "10.1093/ije/30.6.1233" }
    ]
  },
  {
    id: 'prevention-paradox',
    name: 'Prevention Paradox',
    kind: 'paradox',
    family: 'levels',
    trap: "A measure that brings large benefit to a whole population offers little to each participating individual — and vice versa.",
    example: "Rose (1981) observed that most cases of disease arise from the large number of people at modest risk, not the few at high risk. A population-wide shift (e.g., lowering everyone's blood pressure slightly) prevents more cases overall than treating high-risk individuals, yet each person gains almost nothing they can feel.",
    why: "Risk is a population property; aggregate benefit comes from small effects spread across many people, so the population optimum and the individual incentive diverge.",
    antidote: "Match the level of the claim to the level of the evidence: don't sell a population strategy on individual benefit, or judge a population intervention by individual effect sizes.",
    stages: ['sampling', 'inference', 'interpretation'],
    links: [],
    also: ['ecological-fallacy', 'atomistic-fallacy'],
    refs: [
      { cite: "Rose, G. (1981). Strategy of prevention: lessons from cardiovascular disease. British Medical Journal, 282(6279), 1847–1851.", doi: "10.1136/bmj.282.6279.1847" }
    ]
  },
  {
    id: 'productivity-paradox',
    name: 'Productivity Paradox',
    kind: 'paradox',
    family: 'measurement',
    trap: "Massive investment in a technology shows up everywhere except in the measured productivity statistics.",
    example: "Brynjolfsson (1993) reviewed the 1970s–80s puzzle (after Solow's 'you can see the computer age everywhere but in the productivity statistics'): firm- and economy-level data showed little IT return, which he traced largely to mismeasurement, lags, and redistribution rather than a true absence of value.",
    why: "Outputs of information work (quality, variety, timeliness) are poorly captured by conventional productivity measures, and benefits arrive with long lags after complementary changes — so real gains are invisible to the metric.",
    antidote: "Before concluding 'no effect', ask whether your outcome measure can even capture the value, and whether the time window covers the lag. Absence in a coarse metric is not absence of effect.",
    stages: ['measurement', 'analysis', 'interpretation'],
    links: [],
    also: ['streetlight-effect', 'goodharts-law'],
    refs: [
      { cite: "Brynjolfsson, E. (1993). The productivity paradox of information technology. Communications of the ACM, 36(12), 66–77.", doi: "10.1145/163298.163309" }
    ]
  },
  // ── 2026-10-17 expansion: every DOI below re-checked against Crossref (title, authors, year, venue) ──
  {
    id: 'steins-paradox',
    name: "Stein's Paradox (Shrinkage)",
    kind: 'paradox',
    family: 'statistical',
    trap: "Estimating each group's mean from its own data alone is beaten, in total accuracy, by pulling every estimate toward the grand mean — even when the groups are unrelated.",
    example: "Efron & Morris (1977) took 18 baseball players' batting averages after their first 45 at-bats. Shrinking each average toward the group mean (the James–Stein estimator) predicted the players' remaining-season averages better than each player's own early average did.",
    why: "With three or more means estimated together, the noise in each raw estimate makes extreme values too extreme. Borrowing strength from the group trades a little bias for a large cut in variance, lowering total squared error.",
    antidote: "When ranking many units (teams, branches, journals, schools) from noisy data, use multilevel/partial-pooling estimates instead of raw means, and be suspicious of 'top' and 'bottom' units drawn from small samples.",
    stages: ['analysis', 'inference'],
    links: [
      { tool: 'toolsscope', label: 'Fit a multilevel model in ToolsScope', arg: 'Estimate unit means with partial pooling (random intercepts) instead of raw per-unit means' }
    ],
    also: ['regression-to-the-mean', 'winners-curse'],
    refs: [
      { cite: "Efron, B., & Morris, C. (1977). Stein's paradox in statistics. Scientific American, 236(5), 119–127.", doi: "10.1038/scientificamerican0577-119" }
    ]
  },
  {
    id: 'jeffreys-lindley-paradox',
    name: "Jeffreys–Lindley Paradox",
    kind: 'paradox',
    family: 'statistical',
    trap: "With a very large sample, a result can be 'significant at 5%' while the same data, analysed in a Bayesian way, favour the null hypothesis.",
    example: "Lindley (1957) showed that for a fixed p-value just under .05, the posterior probability of a point null can approach 1 as the sample size grows, so the two frameworks reach opposite conclusions from the same data.",
    why: "A fixed significance threshold ignores sample size. In huge samples, a tiny, practically trivial deviation produces p < .05, while a prior that spreads belief over plausible effect sizes finds the null more consistent with the data.",
    antidote: "In large-N studies (big surveys, platform data), report effect sizes with intervals and judge practical importance. Do not let 'p < .05' carry the claim, and consider Bayes factors or equivalence tests.",
    stages: ['analysis', 'inference'],
    links: [],
    also: ['p-value-misinterpretation', 'difference-in-significance'],
    refs: [
      { cite: "Lindley, D. V. (1957). A statistical paradox. Biometrika, 44(1–2), 187–192.", doi: "10.1093/biomet/44.1-2.187" }
    ]
  },
  {
    id: 'choice-overload',
    name: 'Choice Overload (Paradox of Choice)',
    kind: 'paradox',
    family: 'decision',
    trap: "Offering more options can reduce the chance that people choose anything at all — but the effect is far less general than the famous study suggests.",
    example: "In Iyengar & Lepper's (2000) jam-tasting study, 30% of shoppers who saw a display of 6 jams bought one versus 3% of those who saw 24. A later meta-analysis of 50 experiments (Scheibehenne, Greifeneder & Todd, 2010) found a mean choice-overload effect of virtually zero, with large variation across conditions.",
    why: "Large assortments raise the cost of comparing options and the anticipated regret, but whether that outweighs the benefit of variety depends on preferences, expertise and how options are organised.",
    antidote: "Treat a striking single study as a hypothesis about conditions, not a law. Check the meta-analytic evidence and look for moderators before building a design or intervention on it.",
    stages: ['design', 'interpretation'],
    links: [],
    also: ['publication-bias', 'winners-curse', 'narrative-fallacy'],
    refs: [
      { cite: "Iyengar, S. S., & Lepper, M. R. (2000). When choice is demotivating: Can one desire too much of a good thing? Journal of Personality and Social Psychology, 79(6), 995–1006.", doi: "10.1037/0022-3514.79.6.995" },
      { cite: "Scheibehenne, B., Greifeneder, R., & Todd, P. M. (2010). Can there ever be too many options? A meta-analytic review of choice overload. Journal of Consumer Research, 37(3), 409–425.", doi: "10.1086/651235" }
    ]
  },
  {
    id: 'abilene-paradox',
    name: 'Abilene Paradox',
    kind: 'paradox',
    family: 'decision',
    trap: "A group agrees to a course of action that no individual member actually wants, because each assumes the others want it.",
    example: "Harvey (1974) describes his family driving 53 miles to Abilene, Texas, on a hot July afternoon in a car without air-conditioning for a poor meal. Afterwards it emerged that nobody, including the person who suggested it, had wanted to go.",
    why: "Fear of separation and of voicing dissent makes members misread the group's preference. The failure is in managing agreement, not conflict: private agreement goes unspoken.",
    antidote: "In research teams and supervisory meetings, make dissent cheap: ask each person privately or in turn what they actually prefer, and name the paradox when a plan has no clear owner.",
    stages: ['design', 'interpretation'],
    links: [],
    also: ['status-quo-bias', 'false-consensus'],
    refs: [
      { cite: "Harvey, J. B. (1974). The Abilene paradox: The management of agreement. Organizational Dynamics, 3(1), 63–80.", doi: "10.1016/0090-2616(74)90005-9" }
    ]
  },
  {
    id: 'allais-paradox',
    name: 'Allais Paradox',
    kind: 'paradox',
    family: 'decision',
    trap: "People's choices between risky options systematically violate expected-utility theory's independence axiom.",
    example: "Allais (1953) showed that many people prefer a sure 100 million francs over a lottery giving a 10% chance of 500 million, 89% of 100 million and 1% of nothing, yet also prefer a 10% chance of 500 million over an 11% chance of 100 million. No single utility function fits both choices.",
    why: "Certainty carries extra psychological weight (the certainty effect). Removing a common consequence from both options changes preferences, which expected-utility theory forbids.",
    antidote: "Don't assume respondents are expected-utility maximisers when modelling risky choices. Prospect-theory-style weighting is often a better descriptive model, and choice framing must be held constant across conditions.",
    stages: ['design', 'interpretation'],
    links: [],
    also: ['framing-effect', 'loss-aversion', 'ellsberg-paradox'],
    refs: [
      { cite: "Allais, M. (1953). Le comportement de l'homme rationnel devant le risque: Critique des postulats et axiomes de l'école américaine. Econometrica, 21(4), 503–546.", doi: "10.2307/1907921" }
    ]
  },
  {
    id: 'ellsberg-paradox',
    name: 'Ellsberg Paradox (Ambiguity Aversion)',
    kind: 'paradox',
    family: 'decision',
    trap: "People prefer known risks to unknown ones, even when that preference is inconsistent with any probability belief.",
    example: "Ellsberg (1961): an urn holds 30 red balls and 60 balls that are black or yellow in unknown proportion. Most people prefer betting on red over black, but prefer betting on 'black or yellow' over 'red or yellow'. No assignment of probabilities makes both preferences consistent.",
    why: "Missing information about probabilities (ambiguity) is disliked in itself, separately from risk, which violates Savage's axioms of subjective expected utility.",
    antidote: "When studying decisions under uncertainty (strategy, entrepreneurship, investment), distinguish risk from ambiguity in the design and measures, and do not code all uncertainty as one variable.",
    stages: ['design', 'measurement'],
    links: [],
    also: ['allais-paradox', 'status-quo-bias'],
    refs: [
      { cite: "Ellsberg, D. (1961). Risk, ambiguity, and the Savage axioms. The Quarterly Journal of Economics, 75(4), 643–669.", doi: "10.2307/1884324" }
    ]
  },
  {
    id: 'condorcet-paradox',
    name: "Voting Paradox (Condorcet / Arrow)",
    kind: 'paradox',
    family: 'levels',
    trap: "Individually consistent preferences can add up to an inconsistent group preference, so 'what the group wants' may not exist.",
    example: "With three voters ranking A>B>C, B>C>A and C>A>B, a majority prefers A to B, B to C, and C to A, which is a cycle. Arrow (1950) proved that no ranking rule can satisfy a small set of reasonable fairness conditions for every possible preference profile.",
    why: "Majority aggregation does not preserve transitivity. The group-level 'preference' depends on the agenda and the voting rule, not just on members' views.",
    antidote: "Be careful attributing preferences, values or intentions to teams and organisations from aggregated member data, and report the aggregation rule, since a different rule can give a different 'collective' answer.",
    stages: ['measurement', 'interpretation'],
    links: [],
    also: ['ecological-fallacy', 'abilene-paradox'],
    refs: [
      { cite: "Arrow, K. J. (1950). A difficulty in the concept of social welfare. Journal of Political Economy, 58(4), 328–346.", doi: "10.1086/256963" }
    ]
  },
  {
    id: 'jevons-paradox',
    name: "Jevons Paradox (Rebound Effect)",
    kind: 'paradox',
    family: 'causal',
    trap: "Making a resource more efficient to use can increase, rather than decrease, total consumption of it.",
    example: "Jevons (1865) argued that more efficient steam engines would raise, not lower, Britain's coal consumption by making coal-powered work cheaper. Alcott (2005) reviews the history and evidence on this rebound.",
    why: "Efficiency lowers the effective price of the service, which raises demand and opens new uses. The direct saving can be partly or fully offset at the system level.",
    antidote: "When evaluating efficiency interventions (green HRM, digital tools, time-saving practices), measure total system-level use, not only per-unit savings, and look for displaced or expanded use.",
    stages: ['design', 'interpretation'],
    links: [],
    also: ['productivity-paradox', 'goodharts-law'],
    refs: [
      { cite: "Alcott, B. (2005). Jevons' paradox. Ecological Economics, 54(1), 9–21.", doi: "10.1016/j.ecolecon.2005.03.020" }
    ]
  },
  {
    id: 'too-much-of-a-good-thing',
    name: 'Too-Much-of-a-Good-Thing Effect',
    kind: 'paradox',
    family: 'statistical',
    trap: "A normally beneficial antecedent stops helping, then starts hurting, past an inflection point, but a linear model reports one positive slope.",
    example: "Pierce & Aguinis (2013) reviewed management findings in which ordinarily beneficial antecedents, such as personality traits and leadership behaviours, show curvilinear (inverted-U) relations with desirable outcomes, a pattern linear models conceal.",
    why: "Many organisational resources have diminishing and then negative returns. A linear specification averages the rising and falling parts into one misleading coefficient.",
    antidote: "Test for curvilinearity (a squared term, or splines) when theory allows an optimum, check the range of your data covers the inflection point, and report where the turning point falls.",
    stages: ['design', 'analysis', 'interpretation'],
    links: [
      { tool: 'toolsscope', label: 'Test a curvilinear term in ToolsScope', arg: 'Add a centred squared predictor to test an inverted-U relation and locate the turning point' }
    ],
    also: ['range-restriction', 'dichotomization'],
    refs: [
      { cite: "Pierce, J. R., & Aguinis, H. (2013). The too-much-of-a-good-thing effect in management. Journal of Management, 39(2), 313–338.", doi: "10.1177/0149206311410060" }
    ]
  },
  {
    id: 'self-fulfilling-prophecy',
    name: 'Self-Fulfilling Prophecy',
    kind: 'paradox',
    family: 'causal',
    trap: "A false belief about a situation evokes behaviour that makes the belief come true, and that outcome is then taken as proof it was right all along.",
    example: "Merton (1948) used the run on a solvent bank: a rumour of insolvency leads depositors to withdraw their money, and the withdrawals make the bank insolvent.",
    why: "Expectations are causes, not just forecasts. When the predicted outcome depends on how people act, the prediction changes the system it describes.",
    antidote: "Where expectations can shape outcomes (performance ratings, labels, forecasts shared with participants), measure expectations as variables, blind raters where possible, and do not read confirmation as validation.",
    stages: ['design', 'interpretation'],
    links: [],
    also: ['experimenter-expectancy', 'confirmation-bias', 'hawthorne-effect'],
    refs: [
      { cite: "Merton, R. K. (1948). The self-fulfilling prophecy. The Antioch Review, 8(2), 193–210.", doi: "10.2307/4609267" }
    ]
  },
  {
    id: 'garden-of-forking-paths',
    name: 'Garden of Forking Paths',
    kind: 'fallacy',
    family: 'integrity',
    trap: "Even without deliberate p-hacking, choosing the analysis after seeing the data makes a single reported test far less trustworthy than its p-value claims.",
    example: "Gelman & Loken (2014) argue that each data-dependent choice (which outcome, which subgroup, which exclusions, which covariates) defines a test that would have been run had the data looked different. The nominal p-value assumes a fixed plan that never existed.",
    why: "The multiplicity is in potential comparisons, not ones actually tried. Honest researchers following plausible-looking paths still inflate false positives.",
    antidote: "Pre-register the analysis plan, or clearly label analyses as exploratory. Report robustness across reasonable specifications (multiverse analysis), and confirm surprising findings in new data.",
    stages: ['analysis', 'inference'],
    links: [
      { tool: 'researchflow', label: 'Draft a pre-registered plan in ResearchFlow', arg: 'Pre-specify outcomes, exclusions, covariates and subgroup tests before data collection' }
    ],
    also: ['p-hacking', 'texas-sharpshooter-harking', 'winners-curse'],
    refs: [
      { cite: "Gelman, A., & Loken, E. (2014). The statistical crisis in science. American Scientist, 102(6), 460–465.", doi: "10.1511/2014.111.460" },
      { cite: "Simmons, J. P., Nelson, L. D., & Simonsohn, U. (2011). False-positive psychology: Undisclosed flexibility in data collection and analysis allows presenting anything as significant. Psychological Science, 22(11), 1359–1366.", doi: "10.1177/0956797611417632" }
    ]
  },
  {
    id: 'difference-in-significance',
    name: "Difference-in-Significance Fallacy",
    kind: 'fallacy',
    family: 'statistical',
    trap: "Concluding that two effects differ because one is significant and the other is not.",
    example: "Gelman & Stern (2006): an estimate of 25 (SE 10) is significant and one of 10 (SE 10) is not, yet their difference of 15 (SE ≈ 14) is nowhere near significant. Nieuwenhuis, Forstmann & Wagenmakers (2011) found about half of the neuroscience papers they examined that could make this error did make it.",
    why: "'Significant' versus 'not significant' is a threshold split of two noisy estimates. The difference between them has its own, larger, standard error and must be tested directly.",
    antidote: "To claim that men and women, two conditions or two countries differ in an effect, test the interaction or the difference itself. Never compare two separate p-values.",
    stages: ['analysis', 'inference'],
    links: [
      { tool: 'toolsscope', label: 'Test the interaction in ToolsScope', arg: 'Test the group × predictor interaction directly instead of comparing separate subgroup p-values' }
    ],
    also: ['p-value-misinterpretation', 'absence-of-evidence'],
    refs: [
      { cite: "Gelman, A., & Stern, H. (2006). The difference between “significant” and “not significant” is not itself statistically significant. The American Statistician, 60(4), 328–331.", doi: "10.1198/000313006X152649" },
      { cite: "Nieuwenhuis, S., Forstmann, B. U., & Wagenmakers, E.-J. (2011). Erroneous analyses of interactions in neuroscience: A problem of significance. Nature Neuroscience, 14(9), 1105–1107.", doi: "10.1038/nn.2886" }
    ]
  },
  {
    id: 'absence-of-evidence',
    name: 'Absence of Evidence ≠ Evidence of Absence',
    kind: 'fallacy',
    family: 'statistical',
    trap: "Reading a non-significant result as proof that there is no effect.",
    example: "Altman & Bland (1995) warn that many trials are too small to detect plausible effects, so 'no significant difference' often reflects imprecision. The confidence interval may include both no effect and a substantial one.",
    why: "A p-value above .05 means the data are compatible with no effect, not that they rule out an effect. Low power makes 'not significant' the expected result even when the effect is real.",
    antidote: "Report and interpret the confidence interval. To claim 'no meaningful effect', run an equivalence test against a smallest effect size of interest and show the study had power for it.",
    stages: ['inference', 'interpretation'],
    links: [],
    also: ['low-power-type-m-s', 'p-value-misinterpretation', 'difference-in-significance'],
    refs: [
      { cite: "Altman, D. G., & Bland, J. M. (1995). Statistics notes: Absence of evidence is not evidence of absence. BMJ, 311(7003), 485.", doi: "10.1136/bmj.311.7003.485" }
    ]
  },
  {
    id: 'p-value-misinterpretation',
    name: 'P-Value Misinterpretation',
    kind: 'fallacy',
    family: 'statistical',
    trap: "Treating p as the probability that the null hypothesis is true, the chance the result is a fluke, or the size or importance of an effect.",
    example: "Greenland, Senn, Rothman, Carlin, Poole, Goodman & Altman (2016) catalogue two dozen common misreadings of p-values, confidence intervals and power, for example that p = .05 means a 5% chance the null is true, or that a 95% CI has a 95% chance of containing the true value in this study.",
    why: "A p-value is the probability of data at least this extreme if the model (including the null and every assumption) were true. It says nothing directly about the probability of hypotheses or the size of effects.",
    antidote: "Describe p-values as compatibility with a model, lead with effect sizes and intervals, and avoid 'significant/non-significant' as the headline of a finding.",
    stages: ['inference', 'interpretation'],
    links: [],
    also: ['base-rate-fallacy', 'prosecutors-fallacy', 'jeffreys-lindley-paradox'],
    refs: [
      { cite: "Greenland, S., Senn, S. J., Rothman, K. J., Carlin, J. B., Poole, C., Goodman, S. N., & Altman, D. G. (2016). Statistical tests, P values, confidence intervals, and power: A guide to misinterpretations. European Journal of Epidemiology, 31(4), 337–350.", doi: "10.1007/s10654-016-0149-3" }
    ]
  },
  {
    id: 'table-2-fallacy',
    name: 'Table 2 Fallacy',
    kind: 'fallacy',
    family: 'causal',
    trap: "Interpreting every coefficient in a multivariable regression as an effect of that variable, when the model was built to estimate only one.",
    example: "Westreich & Greenland (2013) show that in a model adjusting for confounders of an exposure–outcome effect, the confounders' own coefficients can be direct effects, confounded effects or neither, so reporting them side by side as 'effects' misleads.",
    why: "Covariates are chosen to block confounding paths for the focal exposure. For a covariate, the same model may adjust for its mediators and omit its confounders.",
    antidote: "Report the focal estimate. If you interpret a control variable's coefficient, justify a separate adjustment set for it, ideally from a causal diagram.",
    stages: ['analysis', 'interpretation'],
    links: [],
    also: ['overadjustment-bias', 'confounding', 'endogeneity'],
    refs: [
      { cite: "Westreich, D., & Greenland, S. (2013). The Table 2 fallacy: Presenting and interpreting confounder and modifier coefficients. American Journal of Epidemiology, 177(4), 292–298.", doi: "10.1093/aje/kws412" }
    ]
  },
  {
    id: 'collider-bias',
    name: 'Collider (Selection) Bias',
    kind: 'bias',
    family: 'causal',
    trap: "Controlling for, or selecting on, a common effect of two variables creates an association between them that does not exist in the population.",
    example: "Cole, Platt, Schisterman, Chu, Westreich, Richardson & Poole (2010) give simple worked illustrations showing how conditioning on a collider (a variable caused by both exposure and outcome) induces bias, even when exposure has no effect.",
    why: "Within levels of a common effect, knowing one cause tells you about the other. Adjusting for it, or sampling only some of its values, opens a non-causal path.",
    antidote: "Draw the causal diagram before choosing controls. Do not adjust for post-treatment variables or outcomes of both focal variables, and ask whether your sample was selected on such a variable (e.g., only employees who stayed, only published studies).",
    stages: ['sampling', 'analysis'],
    links: [],
    also: ['berksons-paradox', 'lbw-paradox', 'overadjustment-bias', 'survivorship-bias'],
    refs: [
      { cite: "Cole, S. R., Platt, R. W., Schisterman, E. F., Chu, H., Westreich, D., Richardson, D., & Poole, C. (2010). Illustrating bias due to conditioning on a collider. International Journal of Epidemiology, 39(2), 417–420.", doi: "10.1093/ije/dyp334" }
    ]
  },
  {
    id: 'cross-sectional-mediation',
    name: 'Cross-Sectional Mediation Fallacy',
    kind: 'fallacy',
    family: 'design',
    trap: "Testing a causal process (X → M → Y) that unfolds over time with data measured at a single moment.",
    example: "Maxwell & Cole (2007) showed analytically that cross-sectional estimates of a longitudinal mediation process can be badly biased, overstating or understating the indirect effect, and even suggesting mediation when there is none.",
    why: "Mediation is a claim about change over time. Concurrent correlations mix stable between-person differences with within-person processes, and the bias depends on the unknown autoregressive structure.",
    antidote: "Measure X, M and Y on separate occasions, ideally with repeated measures (cross-lagged or longitudinal mediation models). Otherwise present cross-sectional 'indirect effects' as associations consistent with, not evidence for, mediation.",
    stages: ['design', 'analysis', 'inference'],
    links: [
      { tool: 'researchflow', label: 'Plan a multi-wave design in ResearchFlow', arg: 'Design a three-wave study measuring the predictor, mediator and outcome at separate time points' }
    ],
    also: ['correlation-not-causation', 'common-method-bias', 'endogeneity'],
    refs: [
      { cite: "Maxwell, S. E., & Cole, D. A. (2007). Bias in cross-sectional analyses of longitudinal mediation. Psychological Methods, 12(1), 23–44.", doi: "10.1037/1082-989X.12.1.23" }
    ]
  },
  {
    id: 'overadjustment-bias',
    name: 'Overadjustment Bias',
    kind: 'bias',
    family: 'causal',
    trap: "Adding a variable on the causal path (a mediator or its proxy) as a 'control' and removing part of the very effect you want to estimate.",
    example: "Schisterman, Cole & Platt (2009) define overadjustment as control for an intermediate variable, or a descendant of one, on the path from exposure to outcome, and show it biases the total effect toward the null. They also distinguish it from merely unnecessary adjustment, which costs precision.",
    why: "'More controls is safer' is false. Controlling for a mediator blocks the causal pathway, and controlling for a descendant of the outcome can create collider bias.",
    antidote: "Classify every candidate control as a confounder, mediator, collider or precision variable before modelling. Keep mediators out of total-effect models and justify each covariate.",
    stages: ['analysis'],
    links: [],
    also: ['table-2-fallacy', 'collider-bias', 'confounding'],
    refs: [
      { cite: "Schisterman, E. F., Cole, S. R., & Platt, R. W. (2009). Overadjustment bias and unnecessary adjustment in epidemiologic studies. Epidemiology, 20(4), 488–495.", doi: "10.1097/EDE.0b013e3181a819a1" }
    ]
  },
  {
    id: 'winners-curse',
    name: "Winner's Curse (Inflated First Findings)",
    kind: 'bias',
    family: 'integrity',
    trap: "The first study to report a significant effect usually overestimates it, so replications 'shrink' the effect.",
    example: "Ioannidis (2008) explains why newly discovered true associations are typically inflated: a discovery is declared only when the estimate crosses a significance threshold, which selects the studies whose estimates happened to be too large, especially in small studies.",
    why: "Filtering on significance is filtering on luck. Among underpowered studies, only the overestimates clear the bar.",
    antidote: "Expect the first effect size to shrink when you plan sample sizes, power your study for a smaller, more conservative effect, and weight meta-analytic or replication estimates above original ones.",
    stages: ['inference', 'interpretation'],
    links: [],
    also: ['publication-bias', 'low-power-type-m-s', 'regression-to-the-mean'],
    refs: [
      { cite: "Ioannidis, J. P. A. (2008). Why most discovered true associations are inflated. Epidemiology, 19(5), 640–648.", doi: "10.1097/EDE.0b013e31818131e7" }
    ]
  },
  {
    id: 'low-power-type-m-s',
    name: 'Low Power (Type M & Type S Errors)',
    kind: 'bias',
    family: 'design',
    trap: "In an underpowered study, a 'significant' result is likely to exaggerate the effect (Type M) and can even have the wrong sign (Type S).",
    example: "Gelman & Carlin (2014) reanalysed a published claim that beautiful parents have more daughters and showed that, given plausible effect sizes and the sample, a significant estimate would exaggerate the true effect many times over and could easily point the wrong way. Cohen (1962) found the average power of studies in a 1960 volume of the Journal of Abnormal and Social Psychology to detect medium effects was below one half.",
    why: "When true effects are small relative to noise, only large-by-chance estimates reach significance. Power analysis based on optimistic effect sizes hides the problem.",
    antidote: "Run a design analysis before collecting data, using a realistic effect size from meta-analyses, not the original study, and report the study's sensitivity (the smallest effect it could reliably detect).",
    stages: ['design', 'inference'],
    links: [
      { tool: 'researchflow', label: 'Plan sample size in ResearchFlow', arg: 'Justify the sample size from a conservative, meta-analytic effect size and report sensitivity' }
    ],
    also: ['winners-curse', 'absence-of-evidence', 'publication-bias'],
    refs: [
      { cite: "Gelman, A., & Carlin, J. (2014). Beyond power calculations: Assessing Type S (sign) and Type M (magnitude) errors. Perspectives on Psychological Science, 9(6), 641–651.", doi: "10.1177/1745691614551642" },
      { cite: "Cohen, J. (1962). The statistical power of abnormal-social psychological research: A review. The Journal of Abnormal and Social Psychology, 65(3), 145–153.", doi: "10.1037/h0045186" },
      { cite: "Ioannidis, J. P. A. (2005). Why most published research findings are false. PLoS Medicine, 2(8), e124.", doi: "10.1371/journal.pmed.0020124" }
    ]
  },
  {
    id: 'dichotomization',
    name: 'Dichotomizing Continuous Variables (Median Splits)',
    kind: 'fallacy',
    family: 'measurement',
    trap: "Splitting a continuous measure into 'high' and 'low' groups throws away information and can manufacture effects.",
    example: "MacCallum, Zhang, Preacher & Rucker (2002) show that dichotomising quantitative variables usually loses effect size and power, and that splitting two correlated predictors can produce spurious main effects or interactions.",
    why: "Everyone just above and just below the cut-point becomes maximally different, while very different people in the same half are treated as identical, so measurement error grows and relations distort.",
    antidote: "Keep continuous variables continuous: use regression with the continuous predictor (and probe interactions with simple slopes or Johnson–Neyman), and justify any cut-point substantively.",
    stages: ['measurement', 'analysis'],
    links: [
      { tool: 'toolsscope', label: 'Probe an interaction in ToolsScope', arg: 'Keep the moderator continuous and probe the interaction with simple slopes instead of a median split' }
    ],
    also: ['range-restriction', 'too-much-of-a-good-thing'],
    refs: [
      { cite: "MacCallum, R. C., Zhang, S., Preacher, K. J., & Rucker, D. D. (2002). On the practice of dichotomization of quantitative variables. Psychological Methods, 7(1), 19–40.", doi: "10.1037/1082-989X.7.1.19" }
    ]
  },
  {
    id: 'measurement-noninvariance',
    name: 'Measurement Non-Invariance (Comparing Apples & Oranges)',
    kind: 'bias',
    family: 'measurement',
    trap: "Comparing group means on a scale without checking that the scale measures the same construct in the same way in each group.",
    example: "Vandenberg & Lance (2000) reviewed the measurement-invariance literature and set out the sequence of tests (configural, metric, scalar and more) needed before differences in means or relationships across groups, cultures or time can be interpreted.",
    why: "If item loadings or intercepts differ across groups, an observed mean difference can reflect how people use the items, not a real difference in the construct.",
    antidote: "Before comparing countries, genders, occupations or waves, test invariance with multi-group CFA. Report the level reached, and compare only what that level licenses.",
    stages: ['measurement', 'analysis'],
    links: [
      { tool: 'toolsscope', label: 'Run a CFA in ToolsScope', arg: 'Fit the measurement model in each group and compare configural, metric and scalar invariance' }
    ],
    also: ['jingle-jangle', 'weird-samples'],
    refs: [
      { cite: "Vandenberg, R. J., & Lance, C. E. (2000). A review and synthesis of the measurement invariance literature: Suggestions, practices, and recommendations for organizational research. Organizational Research Methods, 3(1), 4–70.", doi: "10.1177/109442810031002" }
    ]
  },
  {
    id: 'endogeneity',
    name: 'Endogeneity (Unwarranted Causal Claims)',
    kind: 'bias',
    family: 'causal',
    trap: "Drawing causal conclusions from a predictor that is correlated with the error term, through omitted variables, simultaneity, measurement error or selection.",
    example: "Antonakis, Bendahan, Jacquart & Lalive (2010) reviewed published leadership research and found that most causal claims rested on designs and estimators that did not address endogeneity. They set out remedies such as experiments, instrumental variables and panel methods.",
    why: "When a predictor is endogenous, its coefficient absorbs the effects of whatever drives both it and the outcome, so the estimate is biased and can even flip sign. More data does not fix it.",
    antidote: "Name the source of endogeneity, then choose a design that addresses it (randomisation, natural experiment, instruments, fixed effects, lagged designs). Otherwise phrase findings as associations.",
    stages: ['design', 'analysis', 'inference'],
    links: [
      { tool: 'researchflow', label: 'Strengthen identification in ResearchFlow', arg: 'Identify omitted-variable, simultaneity and selection threats and choose a design that addresses them' }
    ],
    also: ['confounding', 'correlation-not-causation', 'common-method-bias'],
    refs: [
      { cite: "Antonakis, J., Bendahan, S., Jacquart, P., & Lalive, R. (2010). On making causal claims: A review and recommendations. The Leadership Quarterly, 21(6), 1086–1120.", doi: "10.1016/j.leaqua.2010.10.010" }
    ]
  },
  {
    id: 'ergodicity-fallacy',
    name: 'Ergodic (Group-to-Individual) Fallacy',
    kind: 'fallacy',
    family: 'levels',
    trap: "Assuming that a relationship found across people describes how the relationship works within each person over time.",
    example: "Molenaar (2004) argued that psychological processes are generally non-ergodic, so between-person structure need not match within-person structure. Fisher, Medaglia & Jeronimus (2018) compared group-level and person-level estimates from intensive repeated-measures data and found group results often poorly approximated individuals.",
    why: "Cross-sectional variation mixes differences between people with processes inside them. Only under strict (ergodic) conditions do the two coincide.",
    antidote: "If your claim is about individuals (e.g., 'when demands rise, a person disengages'), collect within-person data (diary or experience sampling) and separate within- from between-person effects in multilevel models.",
    stages: ['design', 'inference'],
    links: [
      { tool: 'researchflow', label: 'Design a diary study in ResearchFlow', arg: 'Use an experience-sampling design to estimate within-person effects separately from between-person differences' }
    ],
    also: ['ecological-fallacy', 'atomistic-fallacy'],
    refs: [
      { cite: "Molenaar, P. C. M. (2004). A manifesto on psychology as idiographic science: Bringing the person back into scientific psychology, this time forever. Measurement: Interdisciplinary Research and Perspectives, 2(4), 201–218.", doi: "10.1207/s15366359mea0204_1" },
      { cite: "Fisher, A. J., Medaglia, J. D., & Jeronimus, B. F. (2018). Lack of group-to-individual generalizability is a threat to human subjects research. Proceedings of the National Academy of Sciences, 115(27), E6106–E6115.", doi: "10.1073/pnas.1711978115" }
    ]
  },
  {
    id: 'alpha-misuse',
    name: "Cronbach's Alpha Misuse",
    kind: 'fallacy',
    family: 'measurement',
    trap: "Treating a high alpha as proof that a scale is unidimensional, internally consistent and valid.",
    example: "Sijtsma (2009) showed that alpha is neither a measure of internal consistency nor of unidimensionality: a multidimensional test can have a high alpha. Alpha is only a lower bound to reliability, and better lower bounds exist.",
    why: "Alpha rises with the number of items and the average inter-item correlation, whatever the factor structure. It says nothing about what the items measure.",
    antidote: "Test dimensionality with factor analysis first, then report a model-based reliability (e.g., omega) alongside alpha, and support validity with separate evidence.",
    stages: ['measurement'],
    links: [
      { tool: 'scalescope', label: 'Check item reliability in ScaleScope', arg: 'Inspect item-total correlations and alpha-if-deleted, then confirm dimensionality with a CFA' }
    ],
    also: ['jingle-jangle', 'measurement-noninvariance'],
    refs: [
      { cite: "Sijtsma, K. (2009). On the use, the misuse, and the very limited usefulness of Cronbach's alpha. Psychometrika, 74(1), 107–120.", doi: "10.1007/s11336-008-9101-0" }
    ]
  },
  {
    id: 'nonresponse-bias',
    name: 'Nonresponse Bias',
    kind: 'bias',
    family: 'selection',
    trap: "Assuming a high response rate guarantees an unbiased survey, or a low one guarantees a biased one.",
    example: "Groves (2006) reviewed methodological studies that estimated nonresponse bias and found that the nonresponse rate was a weak predictor of nonresponse bias. Bias arises when the reasons for responding are related to the variables being measured.",
    why: "Bias depends on the covariance between response propensity and the survey variable. A 70% response can be badly biased on one item and fine on another.",
    antidote: "Compare respondents with the frame on known variables, follow up late responders or a nonrespondent sample, and model or weight for response propensity. Do not use the response rate alone as evidence of quality.",
    stages: ['sampling', 'inference'],
    links: [],
    also: ['survivorship-bias', 'collider-bias', 'weird-samples'],
    refs: [
      { cite: "Groves, R. M. (2006). Nonresponse rates and nonresponse bias in household surveys. Public Opinion Quarterly, 70(5), 646–675.", doi: "10.1093/poq/nfl033" }
    ]
  },
  {
    id: 'social-desirability-bias',
    name: 'Social Desirability Bias',
    kind: 'bias',
    family: 'measurement',
    trap: "Respondents report what makes them look good, not what is true, especially on sensitive topics (deviance, prejudice, misconduct, performance).",
    example: "Nederhof (1985) reviewed methods for coping with social desirability bias, including forced-choice items, neutral question wording, the randomized-response technique, the bogus pipeline, self-administration and measuring desirability as a covariate.",
    why: "Self-presentation motives and self-deception push answers toward social norms, distorting means and attenuating or inflating correlations with other self-reports.",
    antidote: "Guarantee anonymity, use indirect or forced-choice formats for sensitive items, add other-report or behavioural measures, and measure social desirability so its influence can be tested.",
    stages: ['measurement'],
    links: [],
    also: ['common-method-bias', 'demand-characteristics'],
    refs: [
      { cite: "Nederhof, A. J. (1985). Methods of coping with social desirability bias: A review. European Journal of Social Psychology, 15(3), 263–280.", doi: "10.1002/ejsp.2420150303" }
    ]
  },
  {
    id: 'weird-samples',
    name: 'WEIRD Samples (Unrepresentative Populations)',
    kind: 'bias',
    family: 'selection',
    trap: "Generalising findings about 'human' behaviour from Western, educated, industrialised, rich and democratic samples.",
    example: "Henrich, Heine & Norenzayan (2010) reported that 96% of samples in top psychology journals came from Western industrialised countries housing about 12% of the world's population, and documented domains (visual perception, fairness, cooperation, reasoning) where these samples are outliers.",
    why: "Convenience populations (students, online panels, one country's employees) differ systematically on the very processes studied, so effects can fail to travel.",
    antidote: "Describe the sample's context explicitly, limit claims to comparable populations, and test boundary conditions across cultures, industries or occupations before claiming generality.",
    stages: ['sampling', 'interpretation'],
    links: [],
    also: ['measurement-noninvariance', 'nonresponse-bias'],
    refs: [
      { cite: "Henrich, J., Heine, S. J., & Norenzayan, A. (2010). The weirdest people in the world? Behavioral and Brain Sciences, 33(2–3), 61–83.", doi: "10.1017/S0140525X0999152X" }
    ]
  },
  {
    id: 'halo-effect',
    name: 'Halo Effect',
    kind: 'bias',
    family: 'measurement',
    trap: "One global impression colours ratings of distinct, separate attributes.",
    example: "Thorndike (1920) found that superiors' ratings of officers on different qualities (intelligence, physique, leadership, character) correlated far more highly than such distinct traits plausibly could, a 'constant error' in ratings.",
    why: "Raters judge an overall impression first and then fill in specific dimensions from it, inflating correlations among supposedly separate criteria.",
    antidote: "Use behaviourally anchored ratings, rate one dimension across all targets before moving to the next, add multiple raters, and be wary of very high intercorrelations among rated dimensions.",
    stages: ['measurement'],
    links: [],
    also: ['common-method-bias', 'confirmation-bias'],
    refs: [
      { cite: "Thorndike, E. L. (1920). A constant error in psychological ratings. Journal of Applied Psychology, 4(1), 25–29.", doi: "10.1037/h0071663" }
    ]
  },
  {
    id: 'self-serving-bias',
    name: 'Self-Serving Attribution Bias',
    kind: 'bias',
    family: 'reasoning',
    trap: "Crediting successes to oneself and blaming failures on circumstances.",
    example: "Miller & Ross (1975) reviewed the evidence and found reasonable support for self-enhancing attributions after success but much weaker evidence for self-protective attributions after failure. They proposed non-motivational, information-processing explanations for much of the pattern.",
    why: "People expect success, see a clearer link between their effort and good outcomes, and may protect self-esteem. The causes are debated, which is the point of the review.",
    antidote: "Do not take self-reported causes of performance (e.g., managers explaining firm results) at face value, and pair self-attributions with external evidence.",
    stages: ['measurement', 'interpretation'],
    links: [],
    also: ['fundamental-attribution-error', 'hindsight-bias', 'bias-blind-spot'],
    refs: [
      { cite: "Miller, D. T., & Ross, M. (1975). Self-serving biases in the attribution of causality: Fact or fiction? Psychological Bulletin, 82(2), 213–225.", doi: "10.1037/h0076486" }
    ]
  },
  {
    id: 'escalation-of-commitment',
    name: 'Escalation of Commitment',
    kind: 'bias',
    family: 'decision',
    trap: "Investing more in a failing course of action because you are responsible for having chosen it.",
    example: "Staw (1976): business-school participants playing corporate executives allocated more R&D money to a division that was doing badly when they had personally made the original investment decision than when someone else had.",
    why: "Self-justification: admitting the first decision was wrong is costly, so negative feedback prompts more commitment rather than less.",
    antidote: "Separate the people who start a project from those who evaluate it, set stop rules in advance, and review decisions against criteria fixed before results come in. This applies to research projects too.",
    stages: ['design', 'interpretation'],
    links: [],
    also: ['sunk-cost-fallacy', 'confirmation-bias'],
    refs: [
      { cite: "Staw, B. M. (1976). Knee-deep in the big muddy: A study of escalating commitment to a chosen course of action. Organizational Behavior and Human Performance, 16(1), 27–44.", doi: "10.1016/0030-5073(76)90005-2" }
    ]
  },
  {
    id: 'motivated-reasoning',
    name: 'Motivated Reasoning',
    kind: 'bias',
    family: 'reasoning',
    trap: "Wanting a particular conclusion shapes how evidence is searched for, evaluated and remembered, while the reasoner feels objective.",
    example: "Kunda (1990) reviewed evidence that directional goals bias which beliefs and rules people access and how they construct justifications, constrained by their ability to build a seemingly reasonable case.",
    why: "People do not believe whatever they like. They build the most plausible justification for the preferred conclusion and stop searching when it seems adequate.",
    antidote: "Specify in advance what evidence would count against your hypothesis, invite adversarial review, and apply the same scrutiny to results you like as to results you dislike.",
    stages: ['analysis', 'interpretation'],
    links: [],
    also: ['confirmation-bias', 'bias-blind-spot', 'garden-of-forking-paths'],
    refs: [
      { cite: "Kunda, Z. (1990). The case for motivated reasoning. Psychological Bulletin, 108(3), 480–498.", doi: "10.1037/0033-2909.108.3.480" }
    ]
  },
  {
    id: 'bias-blind-spot',
    name: 'Bias Blind Spot',
    kind: 'bias',
    family: 'reasoning',
    trap: "Seeing cognitive and motivational biases in others while believing you are relatively free of them.",
    example: "Pronin, Lin & Ross (2002) found that people rated themselves as less susceptible than the average American to a range of biases.",
    why: "People judge their own objectivity by introspection, which feels unbiased, but judge others by their behaviour, where bias is visible.",
    antidote: "Rely on procedures, not self-assessed objectivity: blind coding, pre-registration, independent replication and second coders.",
    stages: ['interpretation'],
    links: [],
    also: ['motivated-reasoning', 'confirmation-bias', 'dunning-kruger'],
    refs: [
      { cite: "Pronin, E., Lin, D. Y., & Ross, L. (2002). The bias blind spot: Perceptions of bias in self versus others. Personality and Social Psychology Bulletin, 28(3), 369–381.", doi: "10.1177/0146167202286008" }
    ]
  },
  {
    id: 'false-consensus',
    name: 'False Consensus Effect',
    kind: 'bias',
    family: 'reasoning',
    trap: "Overestimating how many other people share your own choices, beliefs and behaviours.",
    example: "Ross, Greene & House (1977) asked students whether they would walk around campus wearing a sandwich-board sign. Those who agreed estimated that most peers would agree, and those who refused estimated that most would refuse.",
    why: "We see our own choice as the natural response to the situation and mix with similar others, so our own behaviour serves as a biased sample.",
    antidote: "Don't use researchers' or managers' intuitions as evidence of what respondents think. Pilot the instrument, and measure norms instead of assuming them.",
    stages: ['design', 'interpretation'],
    links: [],
    also: ['availability-heuristic', 'abilene-paradox'],
    refs: [
      { cite: "Ross, L., Greene, D., & House, P. (1977). The “false consensus effect”: An egocentric bias in social perception and attribution processes. Journal of Experimental Social Psychology, 13(3), 279–301.", doi: "10.1016/0022-1031(77)90049-X" }
    ]
  },
  {
    id: 'illusory-correlation',
    name: 'Illusory Correlation',
    kind: 'bias',
    family: 'reasoning',
    trap: "Perceiving a relationship between variables that are unrelated, because the pairing seems meaningful or distinctive.",
    example: "Chapman (1967) showed observers word pairs in which every pairing appeared equally often. They nonetheless reported that semantically associated pairs (such as lion–tiger) had occurred together more often.",
    why: "Prior expectations and distinctive co-occurrences are encoded and remembered more readily, so memory-based frequency judgements overstate them.",
    antidote: "Count instead of recall: tabulate all four cells of a 2×2 (including absent–absent), and treat practitioners' 'we always see X with Y' as a hypothesis to test.",
    stages: ['measurement', 'interpretation'],
    links: [],
    also: ['availability-heuristic', 'confirmation-bias', 'spurious-correlation'],
    refs: [
      { cite: "Chapman, L. J. (1967). Illusory correlation in observational report. Journal of Verbal Learning and Verbal Behavior, 6(1), 151–155.", doi: "10.1016/S0022-5371(67)80066-5" }
    ]
  },
  {
    id: 'citation-distortion',
    name: 'Citation Distortion (Unfounded Authority)',
    kind: 'bias',
    family: 'integrity',
    trap: "A claim becomes 'established' through repeated citation, while the underlying evidence stays weak or contrary.",
    example: "Greenberg (2009) analysed the citation network around a biomedical claim and showed how citation bias (ignoring contradicting papers), amplification (citing reviews instead of data) and invention (changing what sources said) created unfounded authority.",
    why: "Authors cite what others cite and summaries of summaries. Each step drops caveats, so the citation count measures popularity, not support.",
    antidote: "Trace key claims back to the primary data, read the cited paper rather than the citing sentence, and cite contradicting evidence as well as supporting.",
    stages: ['design', 'interpretation'],
    links: [],
    also: ['matthew-effect', 'publication-bias', 'confirmation-bias'],
    refs: [
      { cite: "Greenberg, S. A. (2009). How citation distortions create unfounded authority: Analysis of a citation network. BMJ, 339, b2680.", doi: "10.1136/bmj.b2680" }
    ]
  },
  {
    id: 'matthew-effect',
    name: 'Matthew Effect (Cumulative Advantage)',
    kind: 'bias',
    family: 'integrity',
    trap: "Recognition flows to already-eminent scientists, so visibility tracks prior status as much as the merit of the work.",
    example: "Merton (1968) documented, from interviews with Nobel laureates, how eminent scientists receive disproportionate credit for jointly authored or independently co-discovered work, while lesser-known contributors receive less.",
    why: "Attention is scarce and readers use reputation as a filter, so early advantage compounds into citations, resources and further advantage.",
    antidote: "Read the work rather than the name when building literature reviews and choosing exemplars, and recognise that citation counts partly reflect cumulative advantage.",
    stages: ['interpretation'],
    links: [],
    also: ['citation-distortion', 'survivorship-bias'],
    refs: [
      { cite: "Merton, R. K. (1968). The Matthew effect in science. Science, 159(3810), 56–63.", doi: "10.1126/science.159.3810.56" }
    ]
  },
  {
    id: 'outcome-bias',
    name: 'Outcome Bias',
    kind: 'bias',
    family: 'decision',
    trap: "Judging the quality of a decision by how it turned out instead of by what was knowable when it was made.",
    example: "Baron & Hershey (1988) gave participants identical descriptions of a medical decision. They rated the decision, and the decision-maker's competence, more highly when told the outcome was good than when told it was bad.",
    why: "Outcomes are vivid and seem informative about the process, even when chance largely determined them.",
    antidote: "When evaluating managerial decisions, strategies or research choices, assess the information and reasoning available at the time, and separate decision quality from outcome luck in study designs.",
    stages: ['measurement', 'interpretation'],
    links: [],
    also: ['hindsight-bias', 'survivorship-bias', 'narrative-fallacy'],
    refs: [
      { cite: "Baron, J., & Hershey, J. C. (1988). Outcome bias in decision evaluation. Journal of Personality and Social Psychology, 54(4), 569–579.", doi: "10.1037/0022-3514.54.4.569" }
    ]
  },
  {
    id: 'pseudoreplication',
    name: 'Pseudoreplication (Ignoring Nesting)',
    kind: 'fallacy',
    family: 'design',
    trap: "Treating non-independent observations (employees in the same team, repeated measures of one person) as independent replicates.",
    example: "Hurlbert (1984) defined pseudoreplication as testing treatment effects with an error term inappropriate to the hypothesis, for example treating many samples from one treated plot as independent replicates, and found it common in published ecological field experiments.",
    why: "Observations within a cluster share influences, so the effective sample size is smaller than the count of observations. Standard errors shrink and false positives multiply.",
    antidote: "Identify the unit at which the treatment or predictor varies. Analyse at that level or use multilevel models with clustered errors, and report ICCs and the number of clusters.",
    stages: ['design', 'analysis'],
    links: [
      { tool: 'toolsscope', label: 'Account for nesting in ToolsScope', arg: 'Fit a multilevel model with employees nested in teams and report the ICC' }
    ],
    also: ['atomistic-fallacy', 'ecological-fallacy'],
    refs: [
      { cite: "Hurlbert, S. H. (1984). Pseudoreplication and the design of ecological field experiments. Ecological Monographs, 54(2), 187–211.", doi: "10.2307/1942661" }
    ]
  }
];

// Expose for the app (also works if ever loaded as a module).
if (typeof window !== 'undefined') window.PITFALLS = PITFALLS;
if (typeof module !== 'undefined' && module.exports) module.exports = { PITFALLS };
