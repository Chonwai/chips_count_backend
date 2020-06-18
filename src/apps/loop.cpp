#include <iostream>
#include <unistd.h>

using namespace std;

int main() {
    int a[3][3] = {1,1,1,1,1,1,1,1,1};
    cout << "-1" << endl;
    usleep(1000000/60);
    for (int i = 0; i < 100; i++) {
        cout << "This is: " << i << endl;
        usleep(1000);
    }
    cout << "1" << endl;
    usleep(1000000/60);
    return 0;
}