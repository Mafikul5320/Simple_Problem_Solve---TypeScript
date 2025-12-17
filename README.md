1. What are some differences between interfaces and types in TypeScript?

Ans: 
Interface---

অবজেক্টের কাঠামো নির্ধারণে সবচেয়ে বেশি ব্যবহৃত হয়।

একই নামের একাধিক interface ডিক্লেয়ার করলে সেগুলো একত্রে মিশে যায় ।

ক্লাসে implements ব্যবহার করে interface-এর নিয়ম মানতে বাধ্য করা যায়।

Type---

অবজেক্ট ছাড়াও primitive alias (যেমন type ID = string | number) তৈরি করা যায়।

Union (|) এবং intersection (&) ব্যবহার করে জটিল টাইপ বানানো যায়।

Declaration merging সম্ভব নয়, তবে intersection দিয়ে একাধিক টাইপ একত্র করা যায়।




2.Provide an example of using union and intersection types in TypeScript.

Ans:

Union Type (|) উদাহরণ: ---

Union মানে একাধিক টাইপের যেকোনো একটিই হতে পারে।

type ID = string | number;

let userId1: ID = 101;
let userId2: ID = "ABC123";


➡️ এখানে userId হয় string অথবা number হতে পারে।

✅ Intersection Type (&) উদাহরণ

Intersection মানে সব টাইপের property একসাথে থাকতে হবে।

type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Staff = Person & Employee;

const staff1: Staff = {
  name: "Rahim",
  employeeId: 5001
};


➡️ এখানে Staff টাইপে Person এবং Employee—দুটোর সব property থাকতে হবে।

| (Union) → OR

& (Intersection) → AND