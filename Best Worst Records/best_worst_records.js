//
// Problem: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
// Author: Victor 


function breakingRecords(scores) {
    
    const result = scores.reduce((acc, pilot)=>{
        if (pilot < acc.minScore) {
            return {...acc, minScore: pilot, min: acc.min+1} 
        } else if (pilot > acc.maxScore) 
            return {...acc, maxScore: pilot, max: acc.max+1}
        return acc    
    },{minScore: scores[0], maxScore: scores[0], min:0, max:0 })
    
    return [result.max,result.min]
}
