# Pakistan Multi-Board MDCAT Preparation Platform — Living Product Specification

> **Status:** Approved baseline (2026-09-05)
> **Rule (§106):** The latest approved product requirement takes precedence over previous implementation, while preserving existing functionality that has not been explicitly changed or removed. See `changelog.md` and `decisions.md`.

---

# 1. PRODUCT VISION

Build a modern web application/PWA for Pakistani students preparing for:

1. FSc/Intermediate board examinations
2. MDCAT

The platform initially covers:

### Boards

* Federal Board / FBISE
* Punjab Board
* Sindh Board
* KPK Board
* Balochistan Board

### Classes

* 1st Year / Grade 11
* 2nd Year / Grade 12

### Subjects

* Biology
* Chemistry
* Physics

The architecture MUST remain extensible for:

* English
* Logical Reasoning

in a future release without requiring database restructuring.

The platform consists of three interconnected systems:

1. **Study Engine**
2. **MCQ Examination Engine**
3. **AI Personal MDCAT Tutor**

The application should be designed as a serious educational product, not as a generic quiz website.

---

# 2. CORE PRODUCT PRINCIPLE

The application must NOT treat the textbook PDF as the primary academic data structure.

Instead:

```text
Board
  ↓
Book Edition
  ↓
Subject
  ↓
Class
  ↓
Chapter
  ↓
Topic
  ↓
Concept
  ↓
MDCAT Syllabus / Learning Outcome
  ↓
Past MDCAT Questions
  ↓
AI Generated Questions
  ↓
Student Performance
  ↓
Topic Mastery
  ↓
AI Recommendations
```

The PDF remains available for reading, but the academic content must also be extracted into structured data.

---

# 3. PRODUCT MODES

The application must have two major preparation modes.

## MODE A — BOARD PREPARATION

Purpose:

Prepare students for their respective board examinations.

Example:

```text
Punjab
→ Class XI
→ Biology
→ Chapter 5
→ Practice MCQs
```

The question engine primarily uses the selected board's textbook and relevant questions.

---

## MODE B — MDCAT PREPARATION

Purpose:

Prepare students for MDCAT.

The engine should operate primarily around:

* Current MDCAT syllabus
* Relevant learning outcomes
* Concepts
* Historical MDCAT questions
* Historical question patterns
* Board textbooks
* High-yield concepts
* Student performance

Board selection remains available.

Example:

```text
Punjab + Federal + Sindh
→ Biology
→ Both Years
→ Current MDCAT Syllabus
→ High Yield
→ 100 MCQs
```

---

# 4. NO EXPERIMENTAL / PRACTICAL QUESTIONS

The system MUST NOT generate or include questions whose primary purpose is:

* Laboratory experiments
* Practical procedures
* Laboratory apparatus identification
* Practical examination procedures
* Experimental observations as a practical-exam question

Allowed question categories include:

* Conceptual
* Factual
* Numerical
* Formula-based
* Application
* Statement-based
* Comparison
* Diagram-based where academically appropriate
* Reasoning
* Calculation
* Cause/effect
* Sequence/process
* MDCAT-style conceptual questions

---

# 5. SUPPORTED PLATFORMS

Primary:

## Responsive Web Application

The application must work properly on:

* Desktop
* Laptop
* Tablet
* Android phones
* iPhones

## PWA

The web application must be installable as a Progressive Web App.

PWA requirements:

* Manifest
* App icon
* Standalone mode
* Responsive layouts
* Service worker
* Appropriate caching
* Offline capability where technically appropriate
* Push notification architecture
* Installable on Android
* "Add to Home Screen" support

Do not make offline functionality dependent on downloading copyrighted textbook files unless the application's licensing permits it.

---

# 6. UI/UX PRINCIPLES

The interface must be:

* Modern
* Clean
* Fast
* Academic
* Professional
* Minimal
* Mobile-first
* Easy to understand for a teenager
* Low cognitive load

Avoid:

* Excessive animations
* Visually heavy dashboards
* Excessive cards
* Unnecessary gradients
* Clutter
* Complicated navigation
* Gaming-style UI dominating the educational experience

The examination interface should be especially minimal.

---

# 7. MAIN NAVIGATION

Recommended navigation:

```text
Dashboard
Study
Practice
Exams
Past Papers
AI Tutor
Progress
Mistakes
Bookmarks
Profile
```

Admin users receive a separate administration interface.

---

# 8. STUDENT DASHBOARD

The dashboard should immediately answer:

1. What should I study?
2. What is my progress?
3. What are my weak areas?
4. What should I practice today?
5. Where can I continue from?

Example:

```text
Good Evening

MDCAT Preparation
Overall Mastery: 72%

Today's Recommendation
Physics → Waves

25 MCQs
[Start]

Continue Reading
Chemistry → Organic Chemistry

Weakest Areas

Physics → Waves       54%
Chemistry → Organic   61%
Biology → Genetics    67%

Quick Practice

[Biology]
[Chemistry]
[Physics]

[AI Tutor]
What should I study today?
```

---

# 9. BOOK MANAGEMENT

The system must support textbook ingestion.

Each book must have:

```text
Board
Class
Subject
Book Title
Edition
Publication Year
Publisher
Language
Version
Source
File
Status
```

Example:

```text
Punjab
Class XI
Biology
Biology Grade XI
Edition: ...
Year: ...
```

Do not hard-code chapter names into application code.

---

# 10. BOOK READER

Students must be able to read textbooks inside the application.

Required capabilities:

* Open book
* Chapter navigation
* Page navigation
* Search
* Zoom
* Previous/next page
* Table of contents
* Remember last page
* Continue reading
* Bookmark page
* Mobile reading
* Desktop reading
* Full-screen reading

Potential future capabilities:

* Highlight
* Notes
* AI explanation
* Ask AI about selected text

---

# 11. PDF + STRUCTURED CONTENT

When a book is uploaded:

```text
PDF
 ↓
Document Processing
 ↓
OCR / Text Extraction
 ↓
Page Detection
 ↓
Chapter Detection
 ↓
Topic Detection
 ↓
Structured Academic Content
```

The original PDF must remain associated with the book.

Structured content should store:

```text
Book
Chapter
Topic
Subtopic
Concept
Page Reference
Extracted Text
```

The extraction pipeline must preserve page references wherever possible.

---

# 12. ACADEMIC KNOWLEDGE MODEL

Create entities for:

```text
Board
Class
Subject
Book
BookEdition
Chapter
Topic
Subtopic
Concept
SyllabusVersion
LearningOutcome
```

Relationships must allow one concept to belong to multiple board textbooks.

Example:

```text
Concept:
Newton's Laws

Punjab:
Physics XI → Chapter X

Federal:
Physics XI → Chapter Y

Balochistan:
Physics XI → Chapter Z
```

Do NOT assume chapter numbering is identical between boards.

---

# 13. MDCAT SYLLABUS SYSTEM

The MDCAT syllabus MUST be versioned.

Never hard-code one permanent syllabus.

Structure:

```text
MDCAT Syllabus
    ↓
Year
    ↓
Version
    ↓
Subject
    ↓
Domain
    ↓
Topic
    ↓
Learning Outcome
```

Example:

```text
MDCAT 2026
→ Biology
→ Domain
→ Topic
→ Learning Outcome
```

When a new year's syllabus is released:

```text
MDCAT 2027
```

must be created as a new version rather than overwriting 2026.

Historical examination data must continue referencing the syllabus version applicable to that examination.

---

# 14. PAST MDCAT QUESTION DATABASE

Create a separate system for historical examinations.

Each examination should contain:

```text
Exam
Exam Year
Authority
Exam Type
Syllabus Version
Date
Question Set / Version
Subject
```

Each past question:

```text
Question
Options
Correct Answer
Explanation
Exam
Year
Subject
Concept
Topic
Board Mapping
MDCAT Syllabus Mapping
Difficulty
Question Pattern
Source
```

The system must clearly distinguish:

### Actual Past Question

from

### AI-Generated Question

Never represent an AI-generated question as an actual past MDCAT question.

---

# 15. HISTORICAL AUTHORITY NAMES

Historical examination authorities should be represented accurately.

For example, historical PMC-era examinations should retain their historical authority/source metadata.

Do not rewrite historical authority information simply because the current regulatory authority has changed.

---

# 16. MCQ DATA MODEL

Every MCQ should contain at minimum:

```text
id
questionText
subject
board
class
chapter
topic
subtopic
concept
difficulty
questionType
correctOption
explanation
sourceType
sourceReference
syllabusVersion
learningOutcome
mdcatRelevanceScore
status
createdAt
updatedAt
```

Question types:

```text
CONCEPTUAL
FACTUAL
NUMERICAL
APPLICATION
STATEMENT_BASED
COMPARISON
DIAGRAM
REASONING
SEQUENCE
FORMULA
MDCAT_STYLE
```

Do not include PRACTICAL or EXPERIMENTAL.

---

# 17. QUESTION SOURCES

Use explicit source types:

```text
TEXTBOOK
PAST_MDCAT
AI_GENERATED
ADMIN_CREATED
```

Potential future:

```text
BOARD_PAST_PAPER
```

---

# 18. MCQ SOURCE DISPLAY

Do NOT clutter every question with source information.

Default:

```text
Question
Options
```

After the question is answered, or when the student clicks:

```text
ⓘ Source
```

show:

```text
Source:
Punjab Board
Class XI
Biology
Chapter: ______
Topic: ______
Page: ______
```

For a past paper:

```text
MDCAT 2024
Subject: Biology
```

For generated questions:

```text
AI-generated

Based on:
MDCAT syllabus
+ relevant textbook concepts
+ historical MDCAT question patterns
```

---

# 19. EXPLANATIONS

After an answer, show an explanation ONLY for the correct answer.

Example:

```text
Correct Answer: C

Explanation:
[Concise academically accurate explanation]
```

Do NOT automatically explain all incorrect options.

Provide an optional future feature:

```text
Ask AI
```

for students who need additional explanation.

---

# 20. MCQ GENERATION ENGINE

The AI generation pipeline is one of the most important systems.

Never simply prompt an LLM:

"Generate 10,000 MDCAT questions."

Instead use a multi-stage pipeline.

```text
Textbook
+
Current MDCAT Syllabus
+
Learning Outcomes
+
Historical MDCAT Questions
+
Concept Analysis
        ↓
Knowledge Extraction
        ↓
Concept Prioritization
        ↓
Question Generation
        ↓
Independent Validation
        ↓
Duplicate Detection
        ↓
Answer Validation
        ↓
Syllabus Validation
        ↓
Ambiguity Detection
        ↓
Difficulty Classification
        ↓
MDCAT Relevance Scoring
        ↓
Publish
```

---

# 21. AI KNOWLEDGE EXTRACTION

For each chapter extract:

* Definitions
* Concepts
* Relationships
* Processes
* Formulas
* Important facts
* Comparisons
* Cause/effect relationships
* Sequences
* Biological structures
* Chemical principles
* Physics principles
* Common misconceptions

Do not allow the model to invent academic facts that are not supported by the approved source material.

---

# 22. SYLLABUS VALIDATION

Before a generated question enters the question bank:

Check:

```text
Is the underlying concept inside the selected MDCAT syllabus?
```

If NO:

```text
Reject
```

If YES:

```text
Continue
```

The syllabus validation should use the selected/versioned syllabus rather than a generic AI opinion.

---

# 23. HIGH-YIELD / MDCAT RELEVANCE ENGINE

The application should NOT claim:

> "This question will definitely appear in MDCAT."

Instead calculate a score such as:

```text
MDCAT Relevance Score: 94/100
```

The score should consider:

* Current syllabus relevance
* Learning outcome relevance
* Historical frequency
* Historical question pattern
* Concept importance
* Textbook emphasis
* Cross-board coverage
* Conceptual importance
* Recurrence of related concepts
* Question quality
* Whether the concept is fundamental to other concepts

Possible classification:

```text
VERY_HIGH
HIGH
MEDIUM
LOW
```

The exact algorithm must be configurable.

---

# 24. IMPORTANT: CONCEPT PROBABILITY ≠ QUESTION PROBABILITY

The system should primarily predict:

> "How important/high-yield is this concept?"

rather than:

> "Will this exact question appear?"

This prevents misleading predictions.

A concept may have a high probability of being tested while the exact wording never appears.

---

# 25. QUESTION VALIDATION

Every AI-generated question must pass automated validation.

Validation checks:

### Answer validity

Exactly one option must be correct.

### Ambiguity

No two options may reasonably be correct.

### Source support

The underlying fact/concept must be supported.

### Syllabus

Must be within selected syllabus.

### Grammar

Question must be grammatically understandable.

### Scientific accuracy

No scientifically incorrect claims.

### Distractor quality

Incorrect options must be plausible but clearly incorrect.

### Duplication

Detect semantically similar questions.

### Practical exclusion

Reject experimental/practical questions.

### Hallucination detection

Reject unsupported information.

Questions failing validation should NOT be published.

No manual approval should be required for normal publication.

---

# 26. ADMIN OVERRIDE

Although normal questions publish automatically, administrators must be able to:

* Disable question
* Edit question
* Correct answer
* Edit explanation
* Change difficulty
* Change source
* Change syllabus mapping
* Change topic
* Change relevance score
* Mark duplicate
* Mark problematic
* Restore disabled question

---

# 27. EXAM CREATION ENGINE

Students must be able to combine filters.

Example:

```text
Boards:
Punjab + Federal

Classes:
XI + XII

Subjects:
Biology + Chemistry + Physics

Chapters:
All

Difficulty:
Medium + Hard

MDCAT Relevance:
High + Very High

Questions:
100
```

The engine generates the test from the intersection of these filters.

---

# 28. EXAM FILTERS

Required:

### Board

* Federal
* Punjab
* Sindh
* KPK
* Balochistan
* Multiple boards
* All boards

### Class

* 1st Year
* 2nd Year
* Both

### Subject

* Biology
* Chemistry
* Physics
* Multiple subjects

### Chapter

* All
* Specific chapters

### Topic

* All
* Specific topics

### Difficulty

* Easy
* Medium
* Hard
* Mixed

### Question Type

* Conceptual
* Numerical
* Application
* Statement-based
* Diagram
* Mixed

### Source

* Textbook
* Past MDCAT
* AI-generated
* Mixed

### MDCAT Relevance

* Very High
* High
* Medium
* All

### Question history

* Never attempted
* Previously incorrect
* Previously correct
* Bookmarked
* Mixed

---

# 29. EXAM MODES

Create:

## Practice Mode

Immediate feedback.

```text
Your answer: B

Correct answer: C

Explanation:
...
```

## Examination Mode

No immediate answer.

The student sees:

```text
Question 17 / 100

A
B
C
D

[Mark for Review]

[Previous] [Next]
```

At the end:

```text
Submit Examination
```

Then show results.

---

# 30. EXAM TIMER

Allow:

* Timed
* Untimed

For timed examinations:

```text
Time Remaining
01:32:45
```

Warning thresholds should be configurable.

---

# 31. QUESTION NAVIGATION

The examination interface must support:

* Next
* Previous
* Question number navigation
* Mark for review
* Answered indicator
* Unanswered indicator
* Marked indicator

Example:

```text
1 ✓
2 ✓
3 ?
4 !
5 ✓
```

---

# 32. RANDOMIZATION

Question selection should be randomized.

Also randomize answer-option ordering where academically safe.

Store the actual option order presented to the student so historical attempts remain reproducible.

---

# 33. RESULT ENGINE

After examination:

```text
Score
Percentage
Correct
Incorrect
Unanswered
Time Used
Average Time/Question
```

Then:

### Subject Performance

```text
Biology       84%
Chemistry     73%
Physics       61%
```

### Board Performance

```text
Punjab        82%
Federal       77%
Sindh         71%
KPK           75%
Balochistan   81%
```

### Chapter Performance

```text
Mechanics       61%
Waves           54%
Electricity     72%
```

---

# 34. STUDENT QUESTION HISTORY

For every attempt record:

```text
Student
Question
Test
Selected Answer
Correct Answer
Correct/Incorrect
Time Spent
Date
Mode
```

This becomes the foundation of the AI tutor.

---

# 35. MISTAKE BANK

Every incorrectly answered question should automatically be eligible for:

```text
My Mistakes
```

Student can start:

> Practice My Mistakes

The system should prioritize concepts that repeatedly cause errors.

---

# 36. BOOKMARKS

Students can bookmark:

* Questions
* Chapters
* Topics
* Book pages

Required:

```text
My Bookmarks
```

---

# 37. MASTERY ENGINE

Do NOT use only test percentages.

Calculate topic mastery from multiple signals:

```text
Recent accuracy
Historical accuracy
Number of attempts
Repeated mistakes
Difficulty
Time taken
Recency
Question quality
```

Each topic can have:

```text
Mastery: 0–100
Confidence: 0–100
```

Example:

```text
Physics → Waves

Mastery: 58%
Confidence: 74%
```

---

# 38. RECENCY WEIGHTING

Recent performance should have greater influence than very old performance.

However, old mistakes should not disappear completely.

Use a configurable decay/weighting system.

---

# 39. ADAPTIVE TESTING

The test engine should eventually support:

```text
Weak Areas Test
```

The engine automatically selects questions based on:

* Weak topics
* Previously incorrect questions
* Unattempted questions
* High-yield concepts
* Appropriate difficulty

Example:

```text
Physics Waves: 8 questions
Organic Chemistry: 7 questions
Genetics: 5 questions
Other weak topics: 5 questions
```

---

# 40. AI PERSONAL MDCAT TUTOR

The AI Tutor is NOT merely a generic chatbot.

It must have controlled access to the student's academic profile.

The tutor should know:

* Student's subjects
* Syllabus coverage
* Topics studied
* Topic mastery
* Weak areas
* Strong areas
* Mistakes
* Attempt history
* Bookmarks
* Recent examinations
* Study history
* MDCAT preparation mode

---

# 41. AI TUTOR FUNCTIONS

Provide quick actions:

```text
What should I study today?

Find my weakest topics

Explain my mistakes

Make me a 7-day plan

Give me 20 questions

Test me on my mistakes

Help me revise this chapter

Am I improving?

Am I ready for MDCAT?

What should I prioritize?
```

---

# 42. AI STUDY PLAN

The tutor should be capable of creating plans such as:

```text
7-Day Plan

Day 1
Physics → Waves
20 MCQs

Day 2
Chemistry → Organic Chemistry
25 MCQs

Day 3
Review mistakes
30 MCQs

...
```

The plan must be based on actual student performance.

---

# 43. AI TUTOR RECOMMENDATION ENGINE

The AI should prioritize:

```text
High importance
+
Low mastery
+
Recent mistakes
+
Syllabus relevance
+
Remaining preparation time
```

Concepts that are both important and weak should receive highest priority.

---

# 44. AI TUTOR MUST NOT INVENT STUDENT DATA

If the system does not have enough data, the AI must say so.

Example:

```text
You have attempted only 8 Physics questions,
so I don't yet have enough data to confidently identify
your weakest Physics topics.
```

Do not fabricate performance statistics.

---

# 45. DYNAMIC AI QUESTIONS

Architecture should support dynamically generated questions in the AI Tutor.

However:

### Examination scoring

should primarily use stored, validated question-bank questions.

### AI Tutor

may eventually generate supplemental questions dynamically.

Clearly label dynamic questions:

```text
AI Practice Question
```

Do not mix unverified dynamic questions into official mock examination scoring.

---

# 46. BOARD PREPARATION ANALYTICS

Board mode should show:

```text
Book Coverage
Chapter Coverage
Topic Mastery
MCQ Accuracy
Weak Chapters
Strong Chapters
```

Example:

```text
Punjab Biology XI

Chapter 1     88%
Chapter 2     76%
Chapter 3     52%
```

---

# 47. MDCAT PREPARATION ANALYTICS

MDCAT mode should show:

```text
Syllabus Coverage
Concept Mastery
High-Yield Mastery
Past Paper Performance
Mock Exam Performance
Weak Topics
Strong Topics
```

---

# 48. SYLLABUS COVERAGE

Separate:

### Studied

and:

### Mastered

Example:

```text
Syllabus studied: 82%

Syllabus mastered: 61%
```

This distinction is essential.

Reading a chapter does not mean mastering it.

---

# 49. PAST PAPER SYSTEM

Students should be able to:

```text
Select Year
Select Subject
Select Exam
Start Past Paper
```

Modes:

### Authentic Past Paper Mode

Preserve the historical paper as accurately as possible.

### Practice Mode

Allow explanations and source information.

Do not modify an authentic historical question while representing it as the original question.

---

# 50. QUESTION SEARCH

Students should eventually be able to search:

```text
Newton's Laws
Photosynthesis
Organic Chemistry
Electrostatics
```

Search should return:

* Book sections
* Topics
* MCQs
* Past questions
* Mistakes
* Bookmarks

---

# 51. DUPLICATE DETECTION

AI-generated questions should be checked against existing questions.

Use semantic similarity rather than exact text matching.

Detect:

```text
Exact duplicate
Near duplicate
Same concept / same wording
Same concept / different wording
```

Do not eliminate every question about the same concept.

Different high-quality questions can test the same concept.

---

# 52. QUESTION QUALITY SCORING

Internally maintain:

```text
Quality Score
```

Possible dimensions:

```text
Accuracy
Clarity
Difficulty
Distractor Quality
Source Support
Syllabus Alignment
MDCAT Relevance
Originality
```

The score should be available to administrators.

---

# 53. ADMIN DASHBOARD

Admin navigation:

```text
Dashboard
Books
Boards
Subjects
Chapters
Topics
Syllabus
Past Papers
Questions
Question Generation
Question Quality
Students
Tests
Analytics
Subscriptions
AI Tutor
System Settings
```

---

# 54. ADMIN BOOK UPLOAD

Admin can:

```text
Upload Book
Select Board
Select Class
Select Subject
Enter Edition
Enter Year
Enter Publisher
Process
Review Extraction
Publish
```

---

# 55. QUESTION GENERATION ADMIN SCREEN

Allow:

```text
Select Board
Select Class
Select Subject
Select Book
Select Chapters
Select Topics
Select Syllabus Version
Number of Questions
Difficulty
Question Types
MDCAT Relevance
```

Then:

```text
Generate
```

The system processes questions automatically.

---

# 56. GENERATION JOB SYSTEM

Large AI jobs must NOT run inside a normal web request.

Use background jobs.

Example:

```text
Generation Request
       ↓
Job Queue
       ↓
AI Worker
       ↓
Validation Worker
       ↓
Duplicate Worker
       ↓
Scoring Worker
       ↓
Publish
```

Admin sees:

```text
Job #1029

Requested: 5,000 questions
Generated: 5,000
Validated: 4,612
Rejected: 388
Published: 4,550
Duplicates: 62
```

---

# 57. AI COST CONTROL

The system must be designed to minimize unnecessary LLM calls.

Use:

* Chunking
* Caching
* Embeddings where appropriate
* Structured extraction
* Reuse of extracted concepts
* Batch generation
* Batch validation
* Background processing

Do not repeatedly send entire textbooks to an LLM.

---

# 58. KNOWLEDGE RETRIEVAL

The AI Tutor should use retrieval rather than relying only on its internal knowledge.

Potential architecture:

```text
Student Query
     ↓
Intent Detection
     ↓
Retrieve Relevant Academic Content
     ↓
Retrieve Student Performance
     ↓
AI Response
```

The retrieved academic content should come from approved textbook/syllabus/question-bank data.

---

# 59. AI HALLUCINATION CONTROL

For academic answers, the tutor should prioritize:

1. Approved textbook content
2. Approved syllabus
3. Verified question database
4. Verified past papers

The system should not confidently invent textbook facts.

---

# 60. USER ACCOUNT SYSTEM

Student accounts should store:

```text
User
Profile
Board preference
Class
Subjects
Preparation mode
Target exam
Study preferences
Subscription
```

Students must be able to continue their progress across devices.

---

# 61. STUDENT ONBOARDING

First login:

```text
Welcome

Select Class:
[1st Year]
[2nd Year]

Select Board:
[Federal]
[Punjab]
[ Sindh]
[KPK]
[Balochistan]

Goal:
[Board Exam]
[MDCAT]
[Both]

Subjects:
Biology
Chemistry
Physics
```

These settings can be changed later.

---

# 62. SUBSCRIPTION MODEL

Use:

## FREE

Possible limits:

* Daily MCQ limit
* Limited AI Tutor usage
* Basic analytics
* Selected past papers
* Basic mock tests

## PREMIUM

Potential benefits:

* Unlimited MCQs
* Full question bank
* Full past papers
* Full AI Tutor
* Personalized plans
* Adaptive tests
* Advanced analytics
* Full mock examinations
* Mistake revision
* High-yield tests

All limits must be configurable from Admin Settings.

Do NOT hard-code pricing or limits.

---

# 63. PAYMENT ARCHITECTURE

Build a provider-agnostic subscription system.

Database should support:

```text
Subscription
Plan
Payment
PaymentProvider
Transaction
SubscriptionPeriod
```

This allows future integration with Pakistani and international payment providers without restructuring the application.

---

# 64. SECURITY

Required:

* Secure authentication
* Password hashing
* Session management
* Authorization
* Admin role protection
* API authorization
* Rate limiting
* Input validation
* File upload validation
* Secure storage
* Audit logging
* Protection against unauthorized access to student data
* Protection against prompt injection in uploaded academic content

---

# 65. ROLES

At minimum:

```text
STUDENT
ADMIN
SUPER_ADMIN
```

Future:

```text
TEACHER
ACADEMY
CONTENT_EDITOR
```

The database should be designed to support them later.

---

# 66. ANALYTICS

Admin analytics should include:

### Question Analytics

* Most attempted
* Most incorrect
* Most difficult
* Average time
* Most bookmarked
* Most reported
* Lowest quality
* Highest relevance

### Student Analytics

* Active students
* Tests taken
* Questions attempted
* Average score
* Subject performance
* Retention

### Content Analytics

* Most studied chapters
* Least studied chapters
* Weakest topics nationally

---

# 67. FUTURE "NATIONAL DIFFICULTY" FEATURE

Once enough users exist, calculate empirical difficulty.

Example:

```text
Question #8291

AI Difficulty: Medium
Actual Student Difficulty: Hard

Correct rate: 37%
```

This is extremely valuable.

Eventually distinguish:

### Predicted Difficulty

from:

### Observed Difficulty

---

# 68. FUTURE "QUESTION PERFORMANCE" SYSTEM

A question can be flagged automatically when:

```text
Correct rate unusually low
+
High disagreement
+
High report count
```

Admin can investigate.

This creates a self-improving question bank.

---

# 69. REPORT QUESTION

Every question should have:

```text
Report Question
```

Reasons:

```text
Wrong answer
Wrong explanation
Ambiguous
Typographical error
Out of syllabus
Duplicate
Other
```

Store reports for admin review.

---

# 70. DATABASE PRINCIPLES

Do NOT put academic content into hard-coded application enums where future expansion would require code changes.

For example, avoid:

```text
subject ENUM('BIOLOGY','CHEMISTRY','PHYSICS')
```

Prefer a subjects table.

Same for:

* Boards
* Syllabus versions
* Question types
* Sources
* Exam authorities

Use configurable/reference tables wherever appropriate.

---

# 71. RECOMMENDED HIGH-LEVEL DATABASE

Core:

```text
users
roles
subscriptions
plans
payments

boards
classes
subjects

books
book_editions
book_pages
chapters
topics
subtopics
concepts

syllabus_versions
syllabus_domains
learning_outcomes
syllabus_mappings

exams
past_questions

questions
question_options
question_sources
question_mappings
question_tags
question_quality

tests
test_questions
attempts
answers

student_topic_mastery
student_question_history
student_mistakes
student_bookmarks
student_study_history
student_study_plans

ai_tutor_sessions
ai_tutor_messages
ai_recommendations

generation_jobs
validation_jobs

question_reports
audit_logs
system_settings
```

---

# 72. IMPORTANT DATA RELATIONSHIP

A question should NOT belong to only one board.

Use mapping tables.

Example:

```text
Question
   ↓
Concept
   ↓
Punjab Chapter
   ↓
Federal Chapter
   ↓
KPK Chapter
   ↓
MDCAT Learning Outcome
```

This is essential for the "All Boards" examination system.

---

# 73. QUESTION REUSE

The same question can appear in:

```text
Punjab test
Federal test
All Boards test
MDCAT test
Weak Areas test
Adaptive test
```

without duplicating the question in the database.

---

# 74. TEST GENERATION ALGORITHM

When a student requests:

```text
Punjab + Federal
Biology + Chemistry
XI + XII
100 questions
High Yield
Medium
```

the engine should:

1. Resolve filters
2. Resolve syllabus if MDCAT mode
3. Find eligible concepts
4. Find eligible questions
5. Remove excluded questions
6. Apply history preferences
7. Balance subjects
8. Balance topics
9. Balance difficulty
10. Balance sources if requested
11. Randomize
12. Create immutable test snapshot

---

# 75. TEST SNAPSHOT

Once an examination starts, store the exact question set.

If the question bank changes later, the student's historical test must remain unchanged.

---

# 76. FAIR QUESTION DISTRIBUTION

For broad tests, avoid accidental concentration.

Example:

100-question Biology test should not randomly produce:

```text
40 questions from one chapter
```

unless the student specifically requested that chapter.

Use configurable topic balancing.

---

# 77. TARGETED TESTS

Support:

```text
Chapter Test
Topic Test
Subject Test
Year Test
Board Test
MDCAT Test
Weak Area Test
Mistake Test
Past Paper
Mock Exam
```

---

# 78. FULL MDCAT MOCK ARCHITECTURE

Do NOT permanently hard-code the number of questions or subject distribution.

Create:

```text
Mock Exam Configuration
```

with:

```text
Year
Syllabus Version
Total Questions
Subject Distribution
Time Limit
Difficulty Distribution
Rules
```

When the official MDCAT structure changes, update configuration.

---

# 79. AI TUTOR GUARDRAILS

The AI Tutor must:

* Prefer approved academic sources
* Distinguish facts from explanations
* Not claim certainty where evidence is insufficient
* Not invent syllabus coverage
* Not invent student statistics
* Not label AI-generated questions as past questions
* Not claim an exact question will appear in MDCAT
* Encourage source-based learning
* Respect current syllabus version

---

# 80. FUTURE ENGLISH + LOGICAL REASONING

Do not implement these initially.

But the architecture must allow:

```text
subjects
```

to later contain:

```text
English
Logical Reasoning
```

without database migration that changes the core academic model.

The question engine should already support them.

---

# 81. FUTURE FEATURES — DO NOT BUILD NOW

Keep architecture ready for:

* English
* Logical Reasoning
* Teacher accounts
* Academy accounts
* Leaderboards
* National ranking
* Achievement system
* Video lessons
* AI voice tutor
* AI-generated study notes
* Flashcards
* Spaced repetition
* Live classes
* Parent dashboard

Do not allow these future features to complicate V1.

---

# 82. MVP PRIORITY

Build in this order.

## PHASE 1 — FOUNDATION

* Authentication
* Users
* Boards
* Classes
* Subjects
* Books
* Book reader
* Chapters
* Topics
* Admin panel foundation

## PHASE 2 — QUESTION ENGINE

* Question database
* Options
* Sources
* Difficulty
* Question types
* Question mapping
* MCQ practice
* MCQ examination
* Results

## PHASE 3 — CONTENT INGESTION

* Book upload
* PDF processing
* OCR/text extraction
* Chapter/topic extraction
* Structured content

## PHASE 4 — AI QUESTION GENERATION

* Knowledge extraction
* Question generation
* Validation
* Duplicate detection
* Syllabus validation
* Relevance scoring
* Background jobs

## PHASE 5 — PAST PAPERS

* Historical exams
* Historical questions
* Source mapping
* Past-paper mode

## PHASE 6 — STUDENT INTELLIGENCE

* History
* Mistakes
* Bookmarks
* Topic mastery
* Weak areas
* Adaptive tests

## PHASE 7 — AI TUTOR

* Student context
* Retrieval
* Recommendations
* Study plans
* AI conversations
* Personalized tests

## PHASE 8 — PREMIUM

* Subscription
* Payment provider
* Usage limits
* Premium features

## PHASE 9 — PWA

* Manifest
* Service worker
* Installability
* Notifications
* Appropriate offline support

---

# 83. TESTING REQUIREMENTS

Every major module must have automated tests.

At minimum:

### Unit tests

* Scoring
* Question selection
* Filter logic
* Mastery calculations
* Relevance scoring
* Subscription limits

### Integration tests

* Test creation
* Test submission
* Result calculation
* Book processing
* AI generation pipeline
* Student history

### Security tests

* Unauthorized access
* Admin authorization
* Student data isolation
* File upload validation

### AI evaluation

Create a benchmark set containing manually verified questions.

The AI validation pipeline must be tested against that benchmark.

---

# 84. CONTENT LICENSE / COPYRIGHT REQUIREMENT

The system must keep source metadata for every textbook and past-paper document.

Do not assume that a publicly accessible PDF is automatically licensed for commercial redistribution.

The production deployment must distinguish between:

```text
Publicly accessible
```

and:

```text
Legally licensed for redistribution
```

If complete textbook reproduction is not legally permitted, the book-reader functionality must be adjusted to the rights available to the platform.

Do not remove source attribution.

---

# 85. PERFORMANCE

The student-facing application should feel fast.

Avoid:

* Loading the entire question bank
* Loading entire PDFs unnecessarily
* Sending huge textbook chunks to the browser
* Synchronous AI processing
* Blocking requests for long AI operations

Use:

* Pagination
* Lazy loading
* Caching
* Background jobs
* Optimized database queries
* Indexed filters
* CDN/object storage where appropriate

---

# 86. OBSERVABILITY

Implement:

* Application logs
* Error tracking
* Background-job monitoring
* AI generation monitoring
* API latency monitoring
* Database performance monitoring
* Usage analytics

AI jobs should have identifiable job IDs.

---

# 87. CONFIGURATION

Avoid hard-coding:

* MDCAT question count
* Subject distribution
* Premium limits
* Free limits
* Relevance thresholds
* Difficulty thresholds
* AI model
* AI token limits
* Notification schedules

Put configurable values into system configuration.

---

# 88. AI MODEL ABSTRACTION

Do not hard-code the entire application around one AI provider.

Create an AI provider abstraction.

Conceptually:

```text
AIProvider
 ├── generateQuestion()
 ├── validateQuestion()
 ├── extractKnowledge()
 ├── classifyDifficulty()
 ├── mapSyllabus()
 └── tutorResponse()
```

This allows changing models/providers later.

---

# 89. FILE STORAGE

Separate:

### Original source files

from:

### Processed academic data

and:

### Generated AI data

Use appropriate storage architecture.

Never store large PDFs directly inside relational database records.

---

# 90. SEARCH ARCHITECTURE

Search should eventually support:

```text
Books
Chapters
Topics
Questions
Past Papers
Concepts
```

Start with database search if sufficient.

Add full-text/vector search only where it provides meaningful benefit.

Do not introduce unnecessary infrastructure prematurely.

---

# 91. USER EXPERIENCE: QUESTION SCREEN

Keep it extremely clean.

Example:

```text
Biology                         17 / 50

Which of the following...

A. ______

B. ______

C. ______

D. ______


[Mark for Review]


[Previous]              [Next]
```

No unnecessary UI elements.

---

# 92. USER EXPERIENCE: PRACTICE RESULT

```text
Correct

Correct Answer: C

Explanation:
...

ⓘ Source
```

Buttons:

```text
Next Question
Practice Similar
Ask AI
```

---

# 92. USER EXPERIENCE: EXAM RESULT

```text
82%

41 / 50

Correct       41
Incorrect      7
Unanswered     2

Average Time
48 sec/question

Strongest:
Biology

Weakest:
Physics
```

Then:

```text
Weak Topics

Waves          54%
Electrostatics 61%
Organic Chem   64%
```

Button:

```text
Practice Weak Areas
```

---

# 94. USER EXPERIENCE: AI TUTOR

Minimal interface:

```text
AI Tutor

What would you like help with?

[What should I study today?]

[Find my weak areas]

[Explain my mistakes]

[Make a study plan]

[Give me a test]
```

Then normal conversational interface.

---

# 95. AI TUTOR RESPONSE FORMAT

When useful, the tutor should structure answers:

```text
Your Priority

Physics → Waves

Why:
Your recent accuracy is 54%.

What to do:
1. Review topic X
2. Attempt 15 questions
3. Review mistakes
4. Take a 20-question reassessment
```

Keep explanations concise unless the student asks for more.

---

# 96. PERSONALIZATION ENGINE

Student recommendations should consider:

```text
Weakness
Importance
Recency
Frequency of mistakes
Exam proximity
Syllabus coverage
Question difficulty
```

Future:

```text
Available daily study time
Target score
Target medical college
Exam date
```

---

# 97. SCORE PREDICTION

Do NOT initially claim:

> "You will score 180."

Instead eventually provide:

```text
Current performance estimate
Confidence level
Recent mock trend
Weak areas
Recommended improvement
```

Any prediction must clearly be presented as an estimate.

---

# 98. ADMIN CONTENT GOVERNANCE

Every academic object should have status:

```text
DRAFT
PROCESSING
PUBLISHED
DISABLED
ARCHIVED
```

Questions can also have:

```text
AI_GENERATED
VALIDATED
ADMIN_EDITED
```

---

# 99. VERSIONING

Academic content should be version-aware.

If a question changes:

* Preserve its history
* Do not corrupt historical student attempts
* Record changes
* Record who/what changed it

Question versions should be immutable once used in a completed examination.

---

# 100. IMPLEMENTATION WORKFLOW

Before writing implementation code:

1. Inspect the existing repository.
2. Identify existing framework and architecture.
3. Do not unnecessarily replace existing infrastructure.
4. Produce an implementation plan.
5. Identify conflicts with existing code.
6. Identify required migrations.
7. Identify missing dependencies.
8. Identify security implications.
9. Identify performance implications.
10. Only then begin implementation.

Do not rewrite the entire project simply to fit this specification.

---

# 101. CODE QUALITY

Use:

* Strong typing
* Clear domain boundaries
* Reusable components
* Service-layer separation
* Validation schemas
* Database transactions where required
* Proper error handling
* Auditability
* Automated tests

Avoid:

* Giant components
* Business logic in UI components
* Hard-coded academic data
* Hard-coded syllabus
* Hard-coded subscription rules
* Hard-coded board chapters
* AI calls scattered throughout the application

---

# 102. RECOMMENDED DOMAIN SERVICES

Conceptually separate services such as:

```text
BookService
AcademicContentService
SyllabusService
QuestionService
QuestionGenerationService
QuestionValidationService
PastPaperService
TestGenerationService
ExamService
ScoringService
MasteryService
RecommendationService
AITutorService
SubscriptionService
NotificationService
```

The exact implementation may differ depending on the existing stack.

---

# 103. FINAL PRODUCT PRINCIPLE

The application should evolve toward:

```text
                    STUDENT
                       │
          ┌────────────┼────────────┐
          │            │            │
        STUDY         TEST         AI
          │            │            │
       Books         MCQs       Tutor
          │            │            │
          └────────────┼────────────┘
                       │
                 KNOWLEDGE GRAPH
                       │
      ┌────────────────┼────────────────┐
      │                │                │
   Boards           MDCAT          Past Papers
      │                │                │
      └────────────────┼────────────────┘
                       │
                STUDENT MASTERY
                       │
                PERSONALIZATION
                       │
                 BETTER RESULTS
```

The long-term objective is not simply to create an MCQ website.

The objective is to create a **personalized MDCAT preparation system for Pakistani students that understands their textbooks, syllabus, past examinations, concepts, mistakes and weaknesses.**

---

# 104. PHASED EXECUTION RULE

Treat this specification as the product-level source of truth.

Do not implement every future feature immediately.

Build incrementally.

At the beginning of each phase:

1. Inspect current implementation.
2. State what will be changed.
3. State database changes.
4. State API changes.
5. State UI changes.
6. State tests required.
7. Implement only that phase.
8. Run tests.
9. Verify migrations.
10. Report completed functionality and remaining work.

Never silently invent product requirements.

If an architectural decision is necessary but unspecified, choose the simplest scalable solution and document the decision (see `decisions.md`).

---

# 105. FIRST IMPLEMENTATION TARGET

Do NOT start with AI generation.

The first functional foundation should be:

```text
Authentication
+
Boards
+
Classes
+
Subjects
+
Books
+
Chapters
+
Topics
+
Book Reader
+
Question Database
+
MCQ Practice
+
MCQ Examination
+
Scoring
```

Once this foundation is stable, add:

```text
Syllabus
→ Past Papers
→ AI Generation
→ Validation
→ Mastery
→ AI Tutor
→ Premium
```

This ordering minimizes architectural risk and prevents building an AI layer on top of an unstable academic data model.

---

# 106. LIVING PRODUCT SPECIFICATION

This product specification is the **current baseline architecture and product model**, not a permanently frozen specification.

The application will evolve over time.

Whenever a new requirement, feature, modification, correction, removal, or architectural improvement is introduced, the latest approved requirement MUST be treated as authoritative and the existing codebase updated accordingly.

## 106.1 CORE RULE

> **The latest approved product requirement takes precedence over the previous implementation, while preserving existing functionality that has not been explicitly changed or removed.**

Never assume that the original specification is immutable.

## 106.2 REQUIREMENT CHANGE WORKFLOW

Whenever a new requirement or change is introduced:

1. Identify the affected existing functionality.
2. Compare the new requirement against the current codebase.
3. Identify database implications.
4. Identify API implications.
5. Identify UI/UX implications.
6. Identify AI/LLM implications.
7. Identify security implications.
8. Identify testing implications.
9. Identify migration requirements.
10. Identify whether existing functionality must be modified, replaced, or preserved.

Then provide a concise implementation impact assessment before making substantial changes.

## 106.3 DO NOT TREAT NEW REQUIREMENTS AS ISOLATED FEATURES

A new requirement must NOT automatically be implemented as an independent add-on.

Determine whether it changes an existing domain model, and integrate it into the existing architecture rather than creating a disconnected parallel system.

## 106.4 CODEBASE IS THE CURRENT IMPLEMENTATION SOURCE OF TRUTH

Before implementing any modification, inspect the current repository.

The effective product model is:

```text
Latest Approved Requirements
+
Current Codebase
+
Current Database Schema
+
Current Architecture
```

Reconcile these before modifying the system.

## 106.5 NEVER BLINDLY REBUILD

When requirements change, do NOT automatically rewrite the application, replace the framework or database, delete functionality, recreate components, or introduce unnecessary dependencies.

Prefer:

```text
Extend → Refactor where necessary → Migrate → Test
```

over:

```text
Delete everything → Rebuild
```

## 106.6 REQUIREMENT CHANGE CLASSIFICATION

Classify every new requirement internally as one of:

* **ADDITION** — new functionality that does not replace existing behavior.
* **MODIFICATION** — existing functionality behaves differently.
* **REPLACEMENT** — existing functionality is replaced by a new model.
* **REMOVAL** — existing functionality should no longer exist.
* **ARCHITECTURAL CHANGE** — changes the underlying technical structure.

## 106.7 DATABASE SYNCHRONIZATION

Whenever a requirement changes the data model, update:

* Prisma/schema definitions or equivalent ORM models
* Database migrations
* Relations
* Indexes
* Constraints
* Seed data where applicable
* Validation schemas
* API types
* Frontend types

Never modify only the UI while leaving the database model inconsistent.

## 106.8 MIGRATIONS MUST BE SAFE

Database changes must use proper migrations. Never modify production database structure manually without a corresponding migration.

Existing student data must not be accidentally destroyed by a feature update.

## 106.9 HISTORICAL DATA PROTECTION

Never allow a new syllabus, question edit, book update, or algorithm change to corrupt historical student records.

A student's historical result must remain reproducible: completed examinations should retain the necessary snapshot/version references.

## 106.10 API SYNCHRONIZATION

When requirements change, inspect affected API routes, request/response schemas, validation, authorization, services, queries, and error handling. Do not leave obsolete API behavior active simply because the frontend no longer uses it.

## 106.11 UI SYNCHRONIZATION

When a requirement changes product behavior, update all relevant UI surfaces:

```text
New Requirement → Database → API → Test-generation service → UI filter → Result display → Tests
```

A UI-only implementation is incomplete.

## 106.12 AI SYSTEM SYNCHRONIZATION

Whenever the academic model changes, review the AI pipeline (retrieval, generation prompts, validation prompts, mapping, relevance scoring, tutor retrieval, recommendation engine, mock configuration). The AI system must always use the current applicable academic configuration.

## 106.13 PROMPT VERSIONING

AI prompts used for important academic operations should be versioned:

```text
QUESTION_GENERATION_V1
QUESTION_VALIDATION_V1
SYLLABUS_MAPPING_V1
MDCAT_RELEVANCE_V1
AI_TUTOR_V1
```

Create new versions rather than silently changing historical behavior. This makes AI-generated content auditable.

## 106.14 PRODUCT REQUIREMENT LOG

Maintain a machine-readable and human-readable record of major product requirements:

```text
requirements/
    product-spec.md
    changelog.md
    decisions.md
```

Each significant change should record date, requirement, reason, affected modules, database/API/UI/AI impact, migration, and tests.

## 106.15 CHANGELOG

Maintain a product changelog (see `changelog.md`). Append future changes rather than deleting historical decisions.

## 106.16 ARCHITECTURAL DECISION RECORDS

For important technical decisions, maintain an ADR-style record (see `decisions.md`): decision, reason, alternatives considered. This prevents repeated reconsideration of settled architecture.

## 106.17 WHEN REQUIREMENTS CONFLICT

If a new requirement conflicts with an older one:

1. Identify the conflict.
2. Treat the newer explicit requirement as authoritative.
3. Explain what existing behavior will change.
4. Update the architecture accordingly.
5. Preserve unrelated functionality.

## 106.18 DO NOT PRESERVE OBSOLETE ARCHITECTURE FOR ITS OWN SAKE

If a new requirement makes existing architecture unnecessarily complicated, you may refactor it. Explain the reason, preserve data, add migrations where required, preserve externally observable behavior unless intentionally changed, and test the refactor.

## 106.19 REGRESSION PROTECTION

Every meaningful change must include regression testing. Both existing functionality and the new requirement must work unless the requirement explicitly replaces the previous behavior.

## 106.20 IMPACT ANALYSIS

For substantial changes, produce:

```text
Requirement: [description]
Affected: Database, Backend, Frontend, AI, Authentication, Billing, Analytics
Migration required: Yes/No
Breaking change: Yes/No
Tests required: [list]
```

This should happen before implementation.

## 106.21 CURRENT REQUIREMENTS OVERRIDE ASSUMPTIONS

Never say "the original specification said X, so I ignored your new requirement." The conversation's latest explicit product decision is authoritative.

## 106.22 USER APPROVAL BOUNDARY

You may implement normal changes requested by the user. However, if a change would delete substantial historical data, destroy existing student records, cause a major irreversible migration, remove a major existing feature, introduce a significant security/privacy risk, or cause substantial infrastructure cost, stop before the destructive operation and clearly explain the impact.

## 106.23 KEEP THE SPECIFICATION SYNCHRONIZED

After implementing a substantial change:

```text
Requirement → Implementation → Tests → Specification update → Changelog
```

The product specification must not become outdated while the codebase evolves.

## 106.24 FINAL RULE

The application is a **living system**. The original product specification establishes the initial architecture; future requirements may modify it.

Always preserve the intent of the current product while continuously updating the codebase and architecture to reflect the latest approved requirements.

```text
LATEST PRODUCT REQUIREMENTS → CURRENT ARCHITECTURE → CURRENT CODEBASE → CURRENT DATABASE → CURRENT UI → CURRENT AI BEHAVIOR → TESTED AND CONSISTENT SYSTEM
```

All six layers must remain synchronized.