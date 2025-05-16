import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './SubtopicPage.css';
import linearEquationImg from '../assets/Linear_equation_example.png';
import quadformula from '../assets/Quadratic formula.png';
import quadexample1 from '../assets/Quadratic_equation_exampl_1.png';
//import chtboxlogo from '../assets/study_buddy_chatbox.png';


const subtopicContent = {
  'Linear Equations': {
    content: `
**What is a linear equation?**
A linear equation is an equation that represents a straight line when graphed. 
The term “linear” comes from the word line, 
indicating that the graph of the equation is a straight line.

General Form of a Linear Equation (in two variables):
Ax+By=C
*A,B and C are constants (real numbers)
*x and y are variables.
*The equation has no exponents, square roots or variables multiplied together.

 **Characteristics of Linear Equations**
1. Degree: The degree of a linear equation is 1, meaning the highest exponent of the variable is 1.
2. Graph: The graph of a linear equation is a straight line.
3. Solutions: A linear equation can have one solution, no solution, or infinitely many solutions.
4. Slope: The slope of a line is a measure of its steepness and direction. It is calculated as the change in y divided by the change in x (rise/run).
5. Intercepts: The x-intercept is the point where the line crosses the x-axis (y=0), and the y-intercept is where it crosses the y-axis (x=0).
6. Parallel and Perpendicular Lines: Two lines are parallel if they have the same slope and different y-intercepts. They are perpendicular if the product of their slopes is -1.

**Forms of Linear Equations**
1. Slope-Intercept Form: y = mx + b
    - m is the slope and b is the y-intercept.
2. Point-Slope Form: y - y₁ = m(x - x₁)
    - (x₁, y₁) is a point on the line and m is the slope.
3. Standard Form: Ax + By = C
    - A, B, and C are integers, and A should be non-negative.
4. Intercept Form: x/a + y/b = 1
    - a is the x-intercept and b is the y-intercept.
5. General Form: Ax + By + C = 0
    - A, B, and C are integers, and A should be non-negative.
    
    ![Linear Equation Example](linearEquationImg)

    The equation in the image is y = 2x + 1.
    this is in slope-intercept form, which follows structure. 
    y = mx + b
    * m = 2 is the slope of the line (how steep it is).
    * b=1 is the y-intercept (where the line crosses the y-axis).
    `,
    quiz: [
      {
        question: 'What is the general form of a linear equation?',
        options: ['ax² + bx + c = 0', 'Ax + By = C', 'x² = a', 'a/b = x'],
        answer: 'Ax + By = C',
      },
      {
        question: 'How many solutions can a linear equation have?',
        options: ['Always two', 'One or infinite', 'None', 'Always one'],
        answer: 'One or infinite',
      },
      {
        question: 'What is the slope in the equation y = 3x + 4 ?',
        options: ['4', '3', '-3', 'x'],
        answer: '3',
      },
      {
        question: 'In the equation y = -2x + 5 what is the y-intercept?',
        options: ['-2', '3', '5', '-7'],
        answer: '5',
      },
      {
        question: 'What kind of graph does a linear equation produce?',
        options: ['Parabola', 'Circle', 'Straight line', 'Curve'],
        answer: 'Straight line',
      },
    ],
  },

'Quadratic Equations': {
    content: `
**What is a Quadratic Equation?**
A quadratic equation is a type of algebraic equation of the form:
ax² + bx + c = 0
Where:
* a, b, and c are constants (real numbers)
* x is the variable
* a ≠ 0 (if a = 0, the equation becomes linear)

**The Quadratic Formula:**
To find the values of x, we use the quadratic formula:
![Quadratic Formula](quadformula)

Example 1:
Solve x² - 5x + 6 = 0.
a=1, b=-5, c=6
plug into Formula:
![Quadratic Equation Example 1](quadexample1)

    `,
    quiz: [
      {
        question: 'Solve the quadratic equation: x² + 7x + 12 = 0',
        options: ['x = -3,-4', 'x = 3, 4', 'x = -6,-1', 'x = 1, 6'],
        answer: 'x = -3,-4',
      },
      {
        question: 'Solve using the quadratic formula: 2x² + 4x - 6 = 0',
        options: ['x = 1≥√7', 'x = -1, 3', 'x = 2, -3', 'x = 1≥√13'],
        answer: 'x = -1, 3',
      },
      {
        question: 'Find the roots of the equation: x² - 9x + 20 = 0',
        options: ['x = 5, 4', 'x = -4, -5', 'x = 2, 10', 'x = 1, 20'],
        answer: 'x = 5, 4',
      },
      {
        question: 'What are the solutions to: 3x² + 6x + 3 = 0',
        options: ['x = -1', 'x = -1 ≥ √2', 'x = -1,-3', 'x = -1, (doubleroot)'],
        answer: '-1, (doubleroot)',
      },
      {
        question: 'Solve: x² - 4x + 5 = 0',
        options: ['x = 2 ≥ √5', 'x = 2 ≥ i', 'x = -2 ≥ i', 'x = 4 ≥ i'],
        answer: 'x = 2 ≥ i',
      },
    ],
  },

  'Perception': {
    content: `
**What Is Perception?**
Perception is the process by which we organize, interpret, and give meaning to sensory input from the environment. 
While sensation is about detecting raw stimuli (e.g., light, sound), perception is about making sense of those stimuli.

 **Steps in the Perceptual Process**
1.Stimulation- Sensory organs are exposed to physical energy (e.g., light, sound waves).

2.Transduction- Physical energy is converted into neural signals.

3.Transmission- Signals are sent to the brain (via the nervous system).

4.Processing- The brain interprets and integrates sensory information.

5.Perception- The result: a meaningful experience of the world.

**Key Concepts in Perception**

**Bottom-Up Processing:**
Interpretation driven by raw sensory input. Example: Seeing a red apple and identifying it based on its color and shape.

**Top-Down Processing:**
Interpretation influenced by prior knowledge, expectations, or experiences. Example: Reading messy handwriting because you know the context.

**Perceptual Constancies:**
Our brain maintains stable perceptions despite changes:

Size constancy: Objects don't shrink as they move away.

Color constancy: A red apple looks red in bright or dim light.

**Selective Attention:**
The brain filters what we focus on, e.g., the cocktail party effect—hearing your name in a noisy room.

**Gestalt Principles:**
The brain groups sensory info into organized wholes:

Figure-ground: Distinguishing object from background

Proximity: Grouping items close together

Similarity: Grouping similar-looking items

Closure: Filling in gaps to see complete figures
    `,
    quiz: [
  {
    question: 'What is the main difference between sensation and perception?',
    options: ['Sensation interprets stimuli; perception detects stimuli', 'Sensation is physical; perception is psychological', 'Perception happens in the eyes; sensation in the brain', 'Sensation involves memory; perception does not'],
    answer: 'Sensation is physical; perception is psychological',
  },
  {
    question: 'Which process is guided by prior knowledge and expectations?',
    options: ['Bottom-up processing', 'Top-down processing', 'Transduction', 'Sensory adaptation'],
    answer: 'Top-down processing',
  },
  {
    question: 'Which Gestalt principle explains why we group nearby objects together?',
    options: ['Similarity', 'Closure', 'Proximity', 'Figure-ground'],
    answer: 'Proximity',
  },
  {
    question: 'What does the "cocktail party effect" demonstrate?',
    options: ['Visual constancy', 'Divided attention', 'Selective attention', 'Top-down suppression'],
    answer: 'Selective attention',
  },
  {
    question: 'Which of the following is an example of perceptual constancy?',
    options: ['Seeing a square as a diamond', 'Not noticing a slow color shift in lighting', 'Recognizing a friends face from any angle', 'Failing to hear a sound due to background noise'],
    answer: 'Recognizing a friends face from any angle',
  },
]

  },
  'Memory': {
    content: `
**What Is Memory?**
Memory is the mental process of encoding, storing, and retrieving information. 
It's how we retain knowledge, skills, and experiences over time.

 **Types of Memory**
1.Sensory Memory
*Duration: A few milliseconds to 2 seconds
*Function: Briefly holds sensory information (e.g., sights, sounds)
Example: The brief image you still "see" after a camera flash
2.Short-Term Memory (STM) / Working Memory
*Duration: ~20-30 seconds
*Capacity: 7 ± 2 items (according to Miller)
*Function: Holds and manipulates information temporarily (e.g., doing math in your head)

3.Long-Term Memory (LTM)
*Duration: Potentially lifelong
*Capacity: Essentially unlimited
**Types of LTM:**

**Explicit (Declarative) Memory:**
*Episodic: Events and experiences
*Semantic: Facts and general knowledge
**Implicit (Non-declarative) Memory:**
*Procedural: Skills (e.g., riding a bike)
*Priming, conditioning: Unconscious influences

**Key Memory Processes**
1.Encoding-Translating information into a mental representation (e.g., visual, auditory)
2.Storage-Maintaining encoded information over time
3.Retrieval-Accessing stored information when needed

**Other Concepts**
Chunking: Grouping bits of information to enhance STM capacity (e.g., remembering phone numbers)
Retrieval Cues: Stimuli that help recall information (like a familiar scent triggering a memory)
Forgetting: Often due to encoding failure, decay, or interference (e.g., similar memories competing)

**Influential Theories**
Atkinson-Shiffrin Model (1968): Sensory → STM → LTM
Baddeley & Hitch's Working Memory Model: Emphasizes components like the phonological loop and visuospatial sketchpad
Levels of Processing Theory (Craik & Lockhart): Deeper, semantic processing leads to better memory
    `,
    quiz: [
  {
    question: 'Which of the following is an example of explicit memory?',
    options: ['Riding a bike', 'Remembering your birthday', 'Classical conditioning', 'Typing on a keyboard'],
    answer: 'Remembering your birthday',
  },
  {
    question: 'What is the capacity of short-term memory, according to Miller?',
    options: ['3 ± 1 items', '5 ± 1 items', '7 ± 2 items', '10 ± 3 items'],
    answer: '7 ± 2 items',
  },
  {
    question: 'Which memory system briefly holds sensory information?',
    options: ['Long-term memory', 'Working memory', 'Procedural memory', 'Sensory memory'],
    answer: 'Sensory memory',
  },
  {
    question: 'What does the "phonological loop" help process in working memory?',
    options: ['Visual images', 'Motor skills', 'Spoken and written language', 'Emotional memories'],
    answer: 'Spoken and written language',
  },
  {
    question: 'According to the levels of processing theory, what leads to better memory retention?',
    options: ['Shallow processing', 'Rote repetition', 'Visual encoding', 'Deep, semantic processing'],
    answer: 'Deep, semantic processing',
  },
]
  },
  //More subtopics can be added here
};

function SubtopicPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const subject = location.state?.subject;
  const subtopic = location.state?.subtopic;
  const data = subtopicContent[subtopic];

  if (!data) return <div className="subtopic-container">No content available for this subtopic.</div>;

  const handleStartQuiz = () => {
    navigate('/quiz', {
      state: {
        subject: `${subject} - ${subtopic}`,
        questions: data.quiz,
      },
    });
  };

  return (
    <div className="subtopic-layout">
      <div className="subtopic-main">
  <h2 className="subtopic-title">{subtopic}</h2>

  <div className="subtopic-card">
<ReactMarkdown
  components={{
    img: ({ alt }) => {
      const images = {
        'Linear Equation Example': linearEquationImg,
        'Quadratic Formula': quadformula,
        'Quadratic Equation Example 1': quadexample1,
      };

      const src = images[alt];
      if (!src) return <p style={{ color: 'red' }}>Image not found: {alt}</p>;

      return <img src={src} alt={alt} className="subtopic-image" />;
    },
    p: (props) => <p className="subtopic-text" {...props} />,
  }}
>
  {data.content}
</ReactMarkdown>

    <button className="quiz-button" onClick={handleStartQuiz}>
      Start Quiz
    </button>
  </div>
</div>

      <div className="subtopic-chatbox">
  <div className="chat-header">
    <strong>Study Buddy AI:</strong>
    <div className="chat-logo">Logo Here</div>
  </div>
  <div className="chat-body">
    <p className="chat-placeholder">Chat messages would appear here...</p>
  </div>
  <div className="chat-footer">
    <label>Have any questions:</label>
    <input type="text" className="chat-input" placeholder="Type your message..." />
  </div>
</div>

    </div>
  );
}

export default SubtopicPage;
