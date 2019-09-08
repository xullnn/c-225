def sum_powers_factorial(pfact, size)
  power = -> (pfact) { (1..Float::INFINITY).lazy.map { |x| x ** pfact } }
  if pfact == 1 # base case
    Array.new(size) { |i| i + 1 }
  else
    [power.call(pfact).first(size),sum_powers_factorial(pfact - 1, size)].flatten.sum
  end
end

puts sum_powers_factorial(4,3)


# Tail-call fibonacci

def fibonacci_helper(x, y, nth)
  # we are actally doing:
  #   x = 0 current
  #   y = 1 next
  nth < 1 ? x : fibonacci_helper(y, x + y, nth - 1)
  # y now becomes current
  # x + y is the next one
end

def fibonacci(nth)
  fibonacci_helper(0, 1, nth)
end

puts fibonacci(10000)
