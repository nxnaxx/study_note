import * as Data from '../data';
import { Title, SubTitle, Summary, Paragraph } from '../components';

type TextsTestProps = {};

const paragraphs = Data.makeArr(2).map(Data.randomParagraphs).join('\n\n');
const summary = Data.makeArr(3).map(Data.randomSentence).join('\n\n');

export default function TextsTest() {
  return (
    <div>
      <div>
        <Title className="text-blue-600">{Data.randomTitleText()}</Title>
        <SubTitle className="text-blue-400">{Data.randomSentence()}</SubTitle>
        <p className="text-xl italic text-center text-gray-900 text-bold">
          {Data.randomName()}
        </p>
        <Paragraph numberOfLines={5}>{paragraphs}</Paragraph>
        <Summary className="text-center text-gray-500">{summary}</Summary>
        <p className="text-center text-pink-400">
          {Data.randomDayMonthYear()} ({Data.randomRelativeDate()})
        </p>
      </div>
    </div>
  );
}
