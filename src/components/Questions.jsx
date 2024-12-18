"use client";

import Heading from "@/components/sub/Heading";
import Question from "@/components/sub/Question";
import { questions } from "@/assets/index";

const Questions = () => {
  return (
    <div id="questions" className="py-20">
      <Heading text={"Questions & Answers"} />
      <div>
        <ul className="flex flex-col gap-y-3">
          {questions.map((question, index) => (
            <Question key={index} data={question} index={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Questions;
