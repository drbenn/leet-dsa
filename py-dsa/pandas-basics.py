import pandas as pd

# Pandas series - ie - column in spreadsheet
person_1 = pd.Series(['John', "Male", 33, True])
print(person_1)

# Pandas dataframe - ie - tabular data/spreadsheet
employees_df = pd.DataFrame([
    ['1', 'Fares', 32, True],
    ['2', 'Elena', 23, False],
    ['3', 'Doug', 40, False]
])

employees_df.columns = ['id', 'name', 'age', 'decision']

print(employees_df)