nth power
0:         1
1:       1   1
2:     1   2   1
3:   1   3   3   1
......

input: nth
output: hash( {0:[1], 1:[1, 1], 2:[1, 2, 1]...} )

def n_chooses_k(n, k)
  return 1 if n == k || k == 0
  (1..n).reduce(:*) / (1..k).reduce(:*) / (1..(n-k)).reduce(:*)
end

def pascals_triangle(nth)
  (0..nth).map { |k| n_chooses_k(nth, k) }
end
