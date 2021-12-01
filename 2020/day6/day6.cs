using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace day6
{
    internal class Program
    {
        public static List<int> SumCount = new List<int>();

        public static void Main(string[] args)
        {
            Part2();
        }

        public static void Part1()
        {
            string[] lines = File.ReadAllLines(@"input.txt", Encoding.UTF8);
            List<char> seens = new List<char>();

            foreach (string line in lines)
            {
                char[] q = line.ToCharArray();

                if (line == lines.Last())
                {
                    SumCount.Add(seens.Count);
                }
                else if (line != "")
                {
                    for (int i = 0; i < q.Length; i++)
                    {
                        if (!seens.Contains(q[i]))
                        {
                            seens.Add(q[i]);
                        }
                    }
                }
                else
                {
                    SumCount.Add(seens.Count);
                    seens = new List<char>();
                }
            }
        }

        public static void Part2()
        {
            string[] lines = File.ReadAllLines(@"input.txt", Encoding.UTF8);
            Dictionary<char, int> charCount = new Dictionary<char, int>();
            int peopleInGroup = 0;
            int everySumCount = 0;

            foreach (var line in lines)
            {
                char[] q = line.ToCharArray();

                if (line == lines.Last())
                {
                    everySumCount += charCount.Count(v => v.Value == peopleInGroup);
                }
                else if (line != "")
                {
                    for (int i = 0; i < q.Length; i++)
                    {
                        if (charCount.ContainsKey(q[i]))
                        {
                            charCount[q[i]]++;
                        }
                        else
                        {
                            charCount.Add(q[i], 1);
                        }
                    }

                    peopleInGroup++;    
                }
                else
                {
                    everySumCount += charCount.Count(v => v.Value == peopleInGroup);
                    peopleInGroup = 0;
                    charCount = new Dictionary<char, int>();
                }
            }
            Console.WriteLine(everySumCount);
        }
    }
}
