def swap_text(str):
  result = ""
  for letter in str:
    if letter == letter.upper():
      result += letter.lower()
    else:
      result += letter.upper()
  print(result)

swap_text("hOlA a ToDoS");