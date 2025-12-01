import {type ContentNode} from "../framework/content.tsx";
import {mathDiv, mathSpan} from "../framework/technical-components/Math/Math.tsx";

export const contentTree: ContentNode = {
    id: "root",
    name: "Topics",
    type: "folder",
    children: [
      {
        id: "math",
        name: "Math",
        type: "folder",
        children: [
          {
            id: "induction",
            name: "Induction",
            type: "exercise",
            contentItems: [
              {
                problem: <>
                  Use induction to show that the sum of the first {mathSpan("n")} positive integers is equal to
                  {mathSpan("#frac{n(n+1)}{2}")}.
                </>,
                answer: <>
                  <p>
                    The sum of the first {mathSpan("n")} positive integers is written as {mathSpan("#sum_{i=1}^ni")}. The problem
                    then reads:
                  </p>
                  {mathDiv("#sum_{i=1}^ni = #frac{n(n+1)}{2}")}
                  <p>
                    Base case ({mathSpan("n = 1")}):
                  </p>
                  {mathDiv("#sum_{i=1}^ni = #sum_{i=1}^1i = 1 = #frac{1(1+1)}{2} = #frac{n(n+1)}{2}")}
                  <p>
                    Induction step: Assume that
                  </p>
                  {mathDiv("#sum_{i=1}^ni = #frac{n(n+1)}{2}")}
                  <p>
                    (induction hypothesis). Then show that
                  </p>
                  {mathDiv("#sum_{i=1}^{n+1}i = #frac{(n+1)(n+2)}{2}")}
                  <p>
                    Proof:
                  </p>
                  {mathDiv("#sum_{i=1}^{n+1}i")}
                  {mathDiv("= (n+1) + #sum_{i=1}^ni")}
                  {mathDiv("= (n+1) + #frac{n(n+1)}2")}
                  {mathDiv("= #frac{2(n+1)}2 + #frac{n(n+1)}2")}
                  {mathDiv("= #frac{2(n+1) + n(n+1)}2")}
                  {mathDiv("= #frac{(n+1)(n+2)}2")}
                </>,
              },
              {
                problem: <>
                  Use induction to show that the sum of the first {mathSpan("n")} <b>odd</b> positive integers is equal
                  to {mathSpan("n^2")}.
                </>,
                answer: <>
                  <p>
                    The sum of the first {mathSpan("n")} odd positive integers is written
                    as {mathSpan("#sum_{i=1}^n(2i-1)")}. The problem then reads:
                  </p>
                  {mathDiv("#sum_{i=1}^{n}(2i-1) = n^2")}
                  <p>
                    Base case ({mathSpan("n = 1")}):
                  </p>
                  {mathDiv("#sum_{i=1}^n(2i-1) = #sum_{i=1}^1(2i-1) = 2#cdot 1 - 1 = 1 = 1^2 = n^2")}
                  <p>
                    Induction step: Assume that
                  </p>
                  {mathDiv("#sum_{i=1}^{n}(2i-1) = n^2")}
                  <p>
                    (induction hypothesis). Then show that
                  </p>
                  {mathDiv("#sum_{i=1}^{n+1}(2i-1) = (n+1)^2")}
                  <p>
                    Proof:
                  </p>
                  {mathDiv("#sum_{i=1}^{n+1}(2i-1)")}
                  {mathDiv("= (2(n+1)-1) + #sum_{i=1}^n(2i-1)")}
                  {mathDiv("= (2n+1) + #sum_{i=1}^n(2i-1)")}
                  {mathDiv("= 2n + 1 + n^2")}
                  {mathDiv("= (n+1)^2")}
                </>,
              },
                
                // TODO -----------------------------
                
              {
                problem: <>1</>,
                answer: <>1</>
              },
              {
                problem: <>2</>,
                answer: <>2</>
              },
              {
                problem: <>3</>,
                answer: <>3</>
              },
              {
                problem: <>4</>,
                answer: <>4</>
              },
              {
                problem: <>5</>,
                answer: <>5</>
              },
              {
                problem: <>6</>,
                answer: <>6</>
              },
              {
                problem: <>7</>,
                answer: <>7</>
              },
              {
                problem: <>8</>,
                answer: <>8</>
              },
              {
                problem: <>9</>,
                answer: <>9</>
              },
              {
                problem: <>10</>,
                answer: <>10</>
              },
              {
                problem: <>11</>,
                answer: <>11</>
              },
              {
                problem: <>12</>,
                answer: <>12</>
              },
              {
                problem: <>13</>,
                answer: <>13</>
              },
              {
                problem: <>14</>,
                answer: <>14</>
              },
              {
                problem: <>15</>,
                answer: <>15</>
              },
              {
                problem: <>16</>,
                answer: <>16</>
              },
              {
                problem: <>17</>,
                answer: <>17</>
              },
              {
                problem: <>18</>,
                answer: <>18</>
              },
              {
                problem: <>19</>,
                answer: <>19</>
              },
              {
                problem: <>20</>,
                answer: <>20</>
              },
              {
                problem: <>21</>,
                answer: <>21</>
              },
              {
                problem: <>22</>,
                answer: <>22</>
              },
              {
                problem: <>23</>,
                answer: <>23</>
              },
              {
                problem: <>24</>,
                answer: <>24</>
              },
              {
                problem: <>25</>,
                answer: <>25</>
              },
              {
                problem: <>26</>,
                answer: <>26</>
              },
              {
                problem: <>27</>,
                answer: <>27</>
              },
              {
                problem: <>28</>,
                answer: <>28</>
              },
              {
                problem: <>29</>,
                answer: <>29</>
              },
            ],
          },
        ],
      },
      {
        id: "two",
        name: "Two",
        type: "folder",
        children: [],
      },
    ],
};
