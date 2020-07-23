title: C 語言入門
author: willy14620
tags:
  - C
  - Program for beginner
  - Computer science
categories:
  - 程式語言
  - C/C++
abbrlink: c43bd37
date: 2020-07-22 19:26:00
---
# C 語言入門 
`緩慢更新 :D`

<!-- more -->

---
## 開始之前

`PS:內容適用於初學者，若有程式基礎的可跳過！`

先到[Dev C++](https://sourceforge.net/projects/orwelldevcpp/)下載編譯器，並安裝。

---
## 程式碼基本架構

```c
// 引用函式庫
#include <stdio.h>
#include <stdlib.h>

int main(){
	
    // 程式主體
    //..........
    //..........
    
    return 0;
}
```

---
## 變數
* 整數型態 (int, long, long long)
```c
// 變數宣告
int a;
long b;
long long c;
```
* 浮點數型態 (float, double, long double)
```c
// 變數宣告
float a;
double b;
long double c;
```
* 字元型態 (char)`PS:在C裡頭字串是字元陣列`
```c
// 變數宣告
char a;
```

---
## 陣列 
* 差異
變數:取一個空間存放一個變數。
陣列:取一個連續空間放很多個整數。
* 用法
	* 整數型態
    ```c
    // 陣列宣告
    int arr[長度];
    ```
    * 浮點數
    ```c
    // 陣列宣告
    float arr[長度];
    ```
    * 字元
    ```c
    // 陣列宣告
    char arr[長度];
    ```
`PS:宣告陣列時請記得要告知長度為何，否則要使用動態配置記憶體(malloc()函數)。`

---
## printf/scanf 印出/儲存
* 於螢幕上印出程式結果 (printf)
```c
print("%d", 變數);  // 印出整數型態 (int)
print("%ld", 變數);  // 印出長整數型態 (long)
print("%f", 變數);  // 印出浮點數型態 (float)
print("%lf", 變數);  // 印出雙精度浮點數型態 (double)
print("%c", 變數);  // 印出字元型態 (char)
```
* 將輸入儲存到變數中 (scanf)
```c
scanf("%d", &變數);  // 儲存整數型態 (int)
scanf("%ld", &變數);  // 儲存長整數型態 (long int)
scanf("%f", &變數);  // 儲存浮點數型態 (float)
scanf("%lf", &變數);  // 儲存雙精度浮點數型態 (double)
scanf("%c", &變數);  // 儲存字元型態 (char)
```

---
## if/else 條件判斷
* 條件判斷，顧名思義當條件為真時，才進行if/else內的程式碼；反之跳過。
```c
if(條件式){
	// 程式碼
    //..........
    //..........
}else{
	// 程式碼
    //..........
    //..........
}
```
* 巢狀式
```c
if(條件式){
	if(條件式){
		// 程式碼
        //..........
        //..........
    }else{
		// 程式碼
        //..........
        //..........
    }
}else{
	// 程式碼
    //..........
    //..........
}
```

---
## switch/case 條件判斷
* 與if/else相同功能，視情況做使用。
* 用法
```c
switch(變數或運算式){
	case 符合的數字或字元:
    	// 程式碼
        break;
	case 符合的數字或字元:
    	// 程式碼
        break;
        /* .
           .
           .
           .
        */
    default:  //當不符合其他的例子時才做執行(可省略)。
    	// 程式碼
}
```

---
## for/while 迴圈
* 迴圈目的:執行相同程式碼多次
* for
```c
// 次數總共5次
for(int i = 0;i < 5;i++){
	// 要執行的程式碼
    // .............
    // .............
}
```
`PS:遞增 { 變數++ } 、 遞減 { 變數-- }`
* while
```c
// 當條件成立時繼續執行，反之跳出。
while(條件式)
	// 要執行的程式碼
    // .............
    // .............
}
```
* do while
```c
// 當條件成立時繼續執行，反之跳出。
// 與while不同，至少會執行一次。
// 最後才進行判斷
do{
	// 要執行的程式碼
    // .............
    // .............
}while(條件式)
```
`PS:使用while或do-while時，要注意條件判斷，否則可能會造成無窮迴圈。`

---
## 指標 
`PS:偏難，建議先熟練基礎語法再學。`
**待補**
---
## 其他

如果覺得自己已經熟練語法，可以試試去[UVA](https://onlinejudge.org)挑戰題目。

---
## 參考
參考網址:[良葛格學習筆記](https://openhome.cc/Gossip/index.html)