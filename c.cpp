#include <iostream>
#include <vector>
using namespace std;


vector < vector < int > > numberPattern(int n) {

    vector<vector<int> > ans;
    
    int a=1;
    for(int i=1;i<=n;i++){
      vector<int> v;
      for(int j=1;j<=i;j++){
        v.push_back(a);
        a++;
        if(a>9){
          a=1;
        }
      }
  
      ans.push_back(v);
    }
  
    return ans;
  }

  
int main(){
    vector<vector<int> > ans;
    ans=numberPattern(3);
    for(int i=0;i<ans.size();i++){
        for(int j=0;j<ans[i].size();j++){
            cout<<ans[i][j]<<" ";
        }
        cout<<endl;
    }

    return 0;
}

