import Navbar from "./components/Navbar";

export default function Coding() {

  // Longest words in text
  let sentence = "This is a coding challenge for the interview process";
  let wordList = sentence.split(/\s+/);
  let longestLength = Math.max(...wordList.map(word => word.length));
  let longestWords = wordList.filter(word => word.length === longestLength);

  // Largest sum of 3 integers
  const nums = [1, 5, 8, 6, 7, 9, 9, 9];
  let uniqueNums = [...new Set(nums)].sort((a, b) => b - a);
  let topThree = uniqueNums.slice(0, 3);
  let topThreeSum = topThree.reduce((sum, num) => sum + num, 0);

  // Find vowels in a word
  let word = "Challenge";
  let vowels = word.match(/[aeiou]/gi) || [];
  let vowelCount = vowels.length;

  // Find intersection of Two Arrays
  const firstArray = [1, 2, 3, 4, 5, 6];
  const secondArray = [1, 3, 5, 7];
  let intersection = firstArray.filter(n => secondArray.includes(n));

  return (
    <div className="bg-white h-screen javascript-coding">
      <Navbar />
      <h1 className="text-black text-4xl font-bold text-center mt-4">JavaScript Coding Questions</h1>
      <div className="lg:flex justify-center gap-40 text-black lg:max-w-7xl mx-auto p-4 lg:p-0">
        <div className="">
          <div className="flex gap-20 mt-4 text-2xl font-semibold">
            <h2 className="lg:w-1/2">Questions</h2>
            <h2 className="lg:w-1/2">Execution & Results</h2>
          </div>
          <ol className="h-full">
            <li className="flex gap-20 mt-4 bg-gray-200">
              <div className="lg:w-1/2 p-3">
                <strong>Longest Word from the given file/text</strong>
                <p>For instance, assume the given text is &quot;This is a coding challenge for the interview process&quot;.Find the longest word/words in the given text. Here challenge/interview are the longest words.</p>
              </div>
              <div className="lg:w-1/2 bg-black text-white p-3">
                <div>{`let sentence = "This is a coding challenge for the interview process";`}</div>
                <div>{`let wordList = sentence.split(/\s+/);`}</div>
                <div>{`let longestLength = Math.max(...wordList.map(word => word.length));`}</div>
                <div>{`let longestWords = wordList.filter(word => word.length === longestLength);`}</div>
                <strong>Result:</strong> {JSON.stringify(longestWords)}
              </div>
            </li>
            <li className="flex gap-20 mt-4 bg-gray-200">
              <div className="lg:w-1/2 p-3">
                <strong>Given an array of integers. Find the largest sum of 3 integers</strong>
                <p>For example, given an array [1,5,8,6,7,9,9,9]. The largest sum of the unique items within the array is 24 (9+8+7). Your code should only the unique items and ignore any duplicates. If we consider duplicates, largest will be 27 (9+9+9). Consider only Unique Items not duplicates.</p>
              </div>
              <div className="lg:w-1/2 bg-black text-white p-3">
                <div>{`const nums = [1, 5, 8, 6, 7, 9, 9, 9];`}</div>
                <div>{`let uniqueNums = [...new Set(nums)].sort((a, b) => b - a);`}</div>
                <div>{`let topThree = uniqueNums.slice(0, 3);`}</div>
                <div>{`let topThreeSum = topThree.reduce((sum, num) => sum + num, 0);`}</div>
                <strong>Top 3 Unique:</strong> [{topThree.join(', ')}] <br />
                <strong>Result:</strong> {topThreeSum}
              </div>
            </li>
            <li className="flex gap-20 mt-4 bg-gray-200">
              <div className="lg:w-1/2 p-3">
                <strong>Find vowels in a word</strong>
                <p>Given a word &quot;Challenge&quot; and it should give total as 3 (a,e,e).</p>
              </div>
              <div className="lg:w-1/2 bg-black text-white p-3">
                <div>{`let word = "Challenge";`}</div>
                <div>{`let vowels = word.match(/[aeiou]/gi) || [];`}</div>
                <div>{`let vowelCount = vowels.length;`}</div>
                <strong>Vowels:</strong> [{vowels.join(', ')}] <br />
                <strong>Count:</strong> {vowelCount}
              </div>
            </li>
            <li className="flex gap-20 mt-4 bg-gray-200">
              <div className="lg:w-1/2 p-3">
                <strong>Find intersection of two arrays</strong>
                <p>Given two arrays [1,2,3,4,5,6] and [1,3,5,7] and the answer should be [1,3,5]</p>
              </div>
              <div className="lg:w-1/2 bg-black text-white p-3">
                <div>{`const firstArray = [1, 2, 3, 4, 5, 6];`}</div>
                <div>{`const secondArray = [1, 3, 5, 7];`}</div>
                <div>{`let intersection = firstArray.filter(n => secondArray.includes(n));`}</div>
                <strong>Result:</strong> [{intersection.join(', ')}]
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
