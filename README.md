
# 🔍 Differences between interface and type alias.

Interface and type alias both are used to define types in typescript to give a hastle free experience. They help to write reusable and flexible type for any project like large or small. Despit of being used for type define they have some subtle differences also in their use case and behave.

### 🔸 Difference:

Normally, type alias are used for the primitive type definition. On the other hand interface is being used for the modern types data like object, array and function. Interface can't be used in primitive and tuple types data definition. Interface is suitable for merging when type alias isn't. Interface can't be helpful for union and intersection type directly but type alias is best option.

### 🧩 Here the overview for the key differences

| Feature                              | `interface`                                | `type`                                        |
|--------------------------------------|---------------------------------------------|-----------------------------------------------|
| Definition of primitive types                 | ❌ Not suitable                                       | ✅ Yes                                         |
| Modern types                 | ✅ Yes                          | ✅ Yes (less preferable)
| Extending other types                  | ✅ Yes (using `extends` keyword)                          | ✅ Yes (using `&`)                              |
| Declaration merging                 | ✅ Yes (can be merged)                      | ❌ No                                          |
| Union and intersection types        | ❌ No (directly)                            | ✅ Yes (`|`, `&`)                              |
| Use with primitives & tuples        | ❌ No                                       | ✅ Yes                                         |

### 🧪 Code Examples

#### Interface:

```ts
interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  role: string;
}
```
#### type:

```ts
type User = {
  id: number;
  name: string;
};

type Admin = User & {
  role: string;
};

type Status = "active" | "inactive";
type ID = number | string;

```
### 🧠 Differnt usecases:
#### Use interface when:

 1. Defining object shapes or class contracts

2. You want to extend or merge types later

#### Use type when:

1. Working with unions, intersections, or complex structures

2. Defining aliases for primitives, tuples, or utility types


### Define a type alias for a tuple
```ts
type NumberTuple = [number, number, number];

type UserTuple = [string, number, boolean];
```

These are the key differences between interface and the type alias.



<h1 align='center'>🧩 Uses of `keyof` keyword in Typescript</h1>

`keyof` is the special kind of keyword in modern typescript to bring out the keys of an object and make them union type data type for a variable. It's preety helpful for the developers who works with the big dynamic object type data.

```ts
// Define a user type
type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};

// keyof User produces: "id" | "name" | "isAdmin"
type UserKeys = keyof User;

// Use in a function
function getUserProperty(user: User, key: UserKeys) {
  return user[key];
}

const user: User = {
  id: 1,
  name: "Oleei",
  isAdmin: true,
};

console.log(getUserProperty(user, "name")); // "oleei"
```
### ✅ Explanation

keyof User becomes the union type: "id" | "name" | "isAdmin"

This allows you to safely access properties of the User object using keys that must exist.

Great for creating type-safe utilities, like form handlers or dynamic accessors.