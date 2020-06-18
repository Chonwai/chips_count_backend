#include <iostream>
#include <unistd.h>

using namespace std;

int main() {
    int a[5][5];
    cout << "-1" << endl;
    usleep(1000000/60);
    for (int i = 0; i < 100; i++) {
        cout << "Image " << i << ": " << endl;
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                a[i][j] = rand() % 256;
            }
        }
        cout << a << endl;
        usleep(1000);
    }
    cout << "1" << endl;
    usleep(1000000/60);
    return 0;
}