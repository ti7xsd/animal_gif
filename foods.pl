% Дефинираме базата от знания за храни

% Примери за храни
food(pizza).
food(salad).
food(burger).

% Примерни правила
is_healthy(salad).
is_fast_food(burger).
is_fast_food(pizza).

% Връзка между храни и имена (ако е нужно)
food_name(pizza, 'Pizza').
food_name(salad, 'Salad').
food_name(burger, 'Burger').
