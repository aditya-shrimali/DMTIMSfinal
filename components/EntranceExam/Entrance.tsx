import React from "react";
import Table2 from "./Table2";
import Image from "next/image";
import entranceImage from '../../public/images/entranceImage.jpg'

const Entrance = () => {
  return (
    <div className="px-4">
      <h1 className="font-sans text-[30px] font-bold text-[#2F3D5F]">DATE</h1>
      <h1 className="font-sans text-5xl font-bold text-[#F4115E]">
        DMTIMS Entrance Exam 2024 - 26
      </h1>
      <h2 className="pb-8 font-sans text-2xl font-bold tracking-wide text-[#ED1651] ">
        DMTIMS APTITUDE & TECHNICAL EVALUATION
      </h2>

      {/* <div className="mr-32  rounded-md bg-gray-100 px-4 py-4 pr-8">
        <h3 className="font-sans text-lg font-bold ">About DATE</h3>
        <p className=" ">
          St. Mary's Group's, Navi Mumbai, Dr. Mar Theophilus Institute of
          Management Studies (DMTIMS) conducts DATE (DMTIMS Aptitude & Technical
          Evaluation) Test for aspiring Management professionals is conducted
          nationally for admission to its Dual Degree ( AICTE PGDM &
          International MBA ) Program.
        </p>
      </div> */}


<div className="w-auto h-auto">
      <Image
      src={entranceImage}
      alt="entranceImage"

      />
    </div>



      <ul className="px-6 py-4 font-sans  font-bold text-[#ED1651] ">
        <li className="list-roman">About DATE</li>
        <li className="list-roman">Guidelines & Syllabus of DATE</li>
        <li className="list-roman ">Register for DATE</li>
        <li className="list-roman">Mock DATE Test Link</li>
      </ul>

      <ul className=" px-4  py-2 font-sans text-lg font-bold">
        <li className="list-roman ">About DATE</li>
      </ul>
      <p>
        St. Mary's Group's, Navi Mumbai, Dr. Mar Theophilus Institute of
        Management Studies (DMTIMS) conducts DATE (DMTIMS Aptitude & Technical
        Evaluation) Test for aspiring Management professionals nationally for
        admission to its Dual Degree ( AICTE PGDM & International MBA ) Program.
      </p>

      <h4 className=" py-2 font-sans text-base font-bold">Who Can Apply?</h4>
      <p className="">
        All final year graduates seeking admissions in higher management
        programs.
      </p>

      <h4 className=" py-2 font-sans text-base font-bold">DATE Mode:</h4>
      <p>Options of Online & Offline is available.</p>
      <h4 className=" py-2 font-sans text-base font-bold">DATE Content:</h4>
      <p>
        DATE shares some features with prominent national tests like CAT, CET,
        MAT & ATMA. DATE score is based on the performance of candidates in four
        sections, namely, Communication Skills, Numerical Ability, Logical
        Reasoning and General Knowledge. Total marks for all 4 sections is 200.
      </p>
      <h4 className=" py-2 font-sans text-base font-bold">DATE Takeaways:</h4>
      <p>
        Fulfilling your dream of Dual Degree of PGDM and International MBA, is
        just a DATE away.
      </p>
      <h4 className=" py-2 font-sans text-base font-bold">
        DATE March 2024 Date & Time:
      </h4>

      <div className="">
        <h1 className="font-semibold text-[#ED1651]">27th April 2024</h1>
        <h1>1st Slot: 11 am to 1 pm</h1>
        <h1>2nd Slot: 2.30 pm to 4.30 pm</h1>
      </div>

      <div>
        <h1 className="py-2 font-sans text-lg font-bold">
          II.Guidelines & Syllabus:
        </h1>
        <p className="">
          The DMTIMS DATE Test is an evaluation test conducted by St. Mary’s
          Group, Navi Mumbai, DMTIMS for the screening process of students who
          have applied for the DMTIMS Dual Degree of AICTE PGDM and European
          University MBA program for the Batch 2024-26.
        </p>

        {/* Create table of weightage score and interview */}

        <table className="m-auto my-4 border-2 border-black px-8">
          <thead>
            <tr>
              <th className="px-8 text-xl" colSpan={3}>
                Weightage of DATE PG Score and Interview
              </th>
            </tr>
            <tr className="border-2 border-black">
              <th className="border-2 border-black px-2 py-2 sm:px-6">Stage</th>
              <th className="border-2 border-black px-2 py-2 sm:px-6">
                Activity
              </th>
              <th className="border-2 border-black px-2 py-2 sm:px-6">
                Weightage (%)
              </th>
            </tr>
          </thead>
          <tbody className="text-base font-medium">
            <tr className="border-2 border-black">
              <td className="border-2 border-black px-2 py-2 sm:px-6">
                Stage 1 DATE PG-2024 score
              </td>
              <td className="border-2 border-black px-2 py-2 sm:px-6">
                Examination conducted by DMTIMS, scheduled on 27th April 2024
              </td>
              <td className="border-2 border-black px-2 py-2 sm:px-6">
                75% Weightage in DATE Admission
              </td>
            </tr>
          </tbody>
          <tbody className="text-base font-medium">
            <tr className="border-2 border-black">
              <td className="border-2 border-black px-2 py-2 sm:px-6">
                Stage 2 Personal Interview
              </td>
              <td className="border-2 border-black px-2 py-2 sm:px-6">
                Personal Interview (PI)
              </td>
              <td className="border-2 border-black px-2 py-2 sm:px-6">
                25% Weightage in DATE Admission
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={3} className="text-lg font-medium">
                (For PGDM and International MBA)
              </th>
            </tr>
          </tfoot>
        </table>






        <h3 className="py-2 font-sans font-semibold">
          Important instructions to be noted before the test are as follows.
        </h3>
        <div className="flex-col py-2 font-sans ">
          <p>1. There are total 200 questions to be answered here.</p>
          <p>2. All the 200 questions are multiple choice questions.</p>
          3. The DATE Test is of total 200 marks.
          <p>4. It is mandatory to answer all 200 multiple choice questions.</p>
          <p>5. There is no negative marking.</p>
          <p>6. The total time of DATE test is 120 minutes.</p>
          <p>
            7. The DATE Test form once completed and submitted, cannot be
            reversed.
          </p>
        </div>
        <h3 className="py-2 font-sans text-base font-semibold">
          DATE Syllabus
        </h3>
        <div className="mr-32 rounded-md bg-gray-100 px-2 py-4 pr-8 italic text-[#9AA1B4]">
          <h2 className=" font-medium ">Abstract</h2>
          <p>
            This following is a summary of the syllabus set for the evaluation
            test conducted by DMTIMS for the selection of students who wish to
            enrol to their Dual Degree Program of PGDM approved by AICTE and
            consecutively also participate in the European University MBA
            program.
          </p>
        </div>

          {/* New table add here */}
        <Table2/>

          
        {/* <h2 className="pt-4 font-semibold">Contents</h2>
        <div className="font-semibold text-[#ED1651]">
          <p>Section-1: Language Comprehension</p>
          <p>Part-1: Reading Comprehension in DATE Exam</p>
          <p>Part-2: DATE Verbal Ability</p>
          <p className="pt-4">Section-2: Intelligence and Critical Reasoning</p>
          <p>Section-3: Data Analysis and Sufficiency</p>
          <p>Section-4: Indian and Global Environment</p>
        </div>
      </div>

      <h1 className="py-4 font-semibold">
        DATE 2024 Exam Pattern DATE 2024 Vs IIMs CAT & CET
      </h1>

      <h4 className="pt-2 text-base font-semibold">
        Section-1: Language Comprehension
      </h4>
      <p className=" pb-4 text-base">
        Language Comprehension section in DATE is divided into 2 parts. The 1st
        part of DATE covers topics on Reading Comprehension passages and the 2nd
        part covers questions on Grammar & other parts of Verbal Ability. Key
        details are:
      </p>

      <h4 className="py-2 text-base font-semibold">
        Part-1: Reading Comprehension
      </h4>

      <div className="flex-col pb-4 text-base">
        <p>·Number of Questions Based on RC Passages: 20</p>
        <p>
          ·Sectional Weightage of RC in DATE Language Comprehension Section:
          12.5 %
        </p>
        <p>
          ·Type of passages in DATE Exam on RC: 4 Short passages of moderate
          difficulty level
        </p>
        <p>·Division of questions: 5 questions based on each passage</p>
        <p>·Type of Questions: All of MCQ type</p>
        <p>
          ·Format of questions: Questions are based on information in RC
          passage; Antonyms/synonyms of the words & phrases as used in the
          passage; True/false statements; main idea of RC passage
        </p>
      </div>

      <h4 className="py-2 text-base font-semibold">
        Part-2: DATE Verbal Ability
      </h4>
      <div className="flex-col pb-4 text-base">
        <p>·Number of Questions: 20</p>
        <p>·Sectional Weightage in DATE Syllabus: 12.5 %</p>
        <p>·Type of Questions: All of MCQ type</p>
        <p>·Jumbled Paragraphs (3-4 questions)</p>
        <p>
          ·Error Correction of Verb, Noun, Pronoun, Adjective, Adverb and other
          parts of speech in the Sentences.
        </p>
        <p>
          ·Correcting the sequence of sentences in the paragraph for example
          correct use of conditional sentence, time clauses, reported speech,
          passive writing (3-4 questions)
        </p>
        <p>·Antonyms/Synonyms (5-6 questions)</p>
        <p>·Fill in the blanks (3-4 questions)</p>
        <p>·One word substitution (1-2 questions)</p>
        <p>·Idioms/Phrases (2-3 questions)</p>
      </div>

      <h4 className="py-2 text-base font-semibold">
        Section-2: Intelligence and Critical Reasoning
      </h4>
      <div className="flex-col pb-4 text-base">
        <p>
          DATE question paper has tricky questions in this area. The section in
          DATE exam pattern is divided in 2 parts – Intelligence Reasoning and
          Critical Reasoning. Here are the key details on the section in DATE
          exam:
        </p>
        <p>
          ·Questions in Reasoning section can be individual or can be in the set
          of 3-4 questions.
        </p>
        <p>·Weightage of Reasoning Section in DATE exam: 25%</p>
        <p>
          ·Weightage of Reasoning Section in DATE Percentile calculation: 25%
        </p>
        <p>·Total Reasoning questions in DATE syllabus for exam: 25</p>
        <p>·Type of Questions: MCQs</p>
        <p>
          · Trend of topics in DATE Reasoning Syllabus: Questions were based on
          Family Relation, Statements-Cause & Effect, Clocks& Calendars,
          Statement–Assumptions, Reasons, analogies, direction, series,
          Incorrect Terms.
        </p>
      </div>

      <h4 className="py-2 text-base font-semibold">
        Section-3:Data Analysis and Sufficiency
      </h4>
      <div className="flex-col pb-4 text-base">
        <p>
          DATE exam pattern for Data Analysis and Sufficiency covers more topics
          on Data Interpretation. The key details of the section in DATE exam
          pattern are:
        </p>
        <p>·Number of Questions: 25</p>
        <p>·Type of questions: MCQs</p>
        <p>·Sectional weightage in DATE Exam: 25%</p>
        <p>·Sectional Weightage in DATE Percentile Calculation: 25%</p>
        <p>
          · Trend of topics in DATE exam for Data Analysis shows that questions
          on Data Analysis are based on text, tables, graphs (line, area),
          charts (column, bar, pie), Venn diagram.
        </p>
        <p>·Data could be given in form of tables, charts or graphs.</p>
        <p>
          ·In this section it is tested that how candidates can interpret the
          given data and answer questions based on it.
        </p>
        <p>·This section has more questions on data interpretation</p>
        <p>
          ·Data comparison time remains the major hurdle to solve these
          questions with speed and accuracy
        </p>
        <p>
          ·Questions on Data Interpretation (DI) occupy more than 50% of the
          section, rest of the part covers questions on data sufficiency and
          data comparison
        </p>
        <p>
          ·The questions in this section of DATE question paper can be expected
          in sets as well as individual ones
        </p>
      </div>

      <h4 className="py-2 text-base font-semibold">
        Section-4: Indian and Global Environment
      </h4>
      <div className="flex-col pb-4 text-base">
        <p>
          Indian and Global Environment section in DATE exam refers to the GK
          section. It expects you to know everything under the Sun on Business&
          Economy, Who’s who, current affairs, static GK among others.
        </p>
        <p>·Number of Questions: 25</p>
        <p>·Type of questions: MCQs</p>
        <p>·Sectional weightage in DATE: 25%</p>
        <p>·Sectional Weightage in Percentile Calculation: Nil</p>
        <p>
          · Trend of topics in DATE Syllabus for Indian & Global Environment
          reveal that the Questions are formed on Film Awards, taxation &
          duties, Indian constitution, Who’s who, States of India, Sports,
          Recent events, National & International news, etc.
        </p>
        <p>
          ·Suggested time limit to answer the 40 questions in this section is 15
          minutes but 10 minutes are enough to attempt this section
        </p>
        <p>
          ·The questions are based on conventional GK, business and economics,
          current affairs, international affairs
        </p>
        <p>
          ·This section is not counted for percentile calculation in DATE exam
        </p>
        <p>
          ·Many Candidates skip or answer very few questions in this section to
          save time for other sections
        </p>
      </div> */}

      </div>
    </div>
  );
};

export default Entrance;
