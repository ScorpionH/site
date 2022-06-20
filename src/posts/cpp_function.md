---
date: 2022-02-27
categories:
  - 编程
tags:
  - 学习笔记
---

# C++ 函数

## 函数

在 c++中使用函数，必须完成以下 3 个步骤：

1. 提供函数的定义
2. 提供函数原型
3. 调用函数

## 定义函数

### 无返回值的函数

```
void functionName(params)
{
    statements
    return;          // optional
}
```

### 有返回值的函数

```
typeName functionName(params)
{
    statements
    return value;
}
```

- 对于有返回值的函数，return 值的类型必须位 typeName 或者可被强转为 typeName 的类型。
- C++函数返回值的类型有一定限制：不能是数组，但可以是其他任何类型————整数、浮点数、指针甚至是对象和结构体。

## 函数原型

### 函数原型的作用

1. 函数原型告诉编译器函数需要的参数和返回值，如果程序中没有提供正确的参数和返回值，函数原型可以让编译器捕获错误。
2. 函数执行后将返回值放在指定位置（可能是 CPU 寄存器，也可能是内存中），由于函数原型指出了返回值的类型，因此编译器知道检索多少个字节以及如何解释他们。

### 为什么要有函数原型？为何不在这个文件中进一步查找？

1. 效率不高
2. C++允许将一个程序放在多个文件中，单独编译这些文件再将他们组合起来。这种情况下，编译器在编译 main()时可能无权访问函数代码。如果这些函数位于库中，情况也是如此。

## 函数和数组

```
int sum_arr(int arr[]);  // prototype
```

- 在大多数情况下，c++和 c 语言一样也将数组名视为指针。
- arr == &arr[0]

```
int sum_arr(int arr[]);
int sum_arr(int *arr);
```

- 用 int \*arr 替换了 int arr[]，证明这两种函数头都是正确的。
- 在 C++中，仅当用于函数头和函数原型中，int \*arr 和 int arr[]的含义才相同，它们都以为 arr 是一个 int 指针。
- int arr[]提醒用户 arr 不仅指向 int，还指向 int 数组的第一个 int。

```
arr[i] == *(arr + i)  // values in tow notations
&arr[i] == arr + i // address in two notations
```

### 将数组作为参数

```
int sum_arr(int arr[], int n);
sum_arr(cookies, ArSize);
```

- sum_arr()函数将 cookies 的地址赋值给指针变量 arr，将 ArSize 赋值给变量 n。
- 这意味着在函数调用时没有将数组内容传递给参数，而是将数组的位置（地址），包含的元素种类（类型），以及元素数目（n 变量）提交给函数。

```
#include <iostream>

const int ArSize = 8;
int sum_arr(int arr[], int n);

using namespace std;
int main()
{
    int cookies[ArSize] = {1, 2, 4, 8, 16, 32, 64, 128};
    cout << cookies << " = array address, ";
    cout << sizeof(cookies) << " = sizeof cookies\n";
    int sum = sum_arr(cookies, ArSize);
    cout << "Total cookies eaten: " << sum << endl;
    sum = sum_arr(cookies, 3);
    cout << "First three eaters eaten: " << sum << " cookies.\n" ;
    sum = sum_arr(cookies + 4, 4);
    cout << "Last four eaters ate " << sum << " cookies.\n" ;
    return 0;
}

int sum_arr(int arr[], int n)
{
    int total = 0;
    cout << arr << " = arr, ";
    cout << sizeof(arr) << " = sizeof arr \n";
    for (int i = 0; i < n; i++)
        total = total + arr[i];
    return total;
}


// output
// 地址值和数组的长度将随系统而异。
0x78fdf0 = array address, 32 = sizeof cookies
0x78fdf0 = arr, 8 = sizeof arr
Total cookies eaten: 255
0x78fdf0 = arr, 8 = sizeof arr
First three eaters eaten: 7 cookies.
0x78fe00 = arr, 8 = sizeof arr
Last four eaters ate 240 cookies.

```

## to be continued...
