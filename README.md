<div align="center">

# 🔎 Student Search Engine

**Type a roll number and get the student's full academic and contact record instantly. A small, animated vanilla-JS lookup app.**

[![CI](https://github.com/mahamed7/student-search-engine/actions/workflows/ci.yml/badge.svg)](https://github.com/mahamed7/student-search-engine/actions/workflows/ci.yml)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

**[▶ Live demo](https://mahamed7.github.io/student-search-engine/)** · try roll numbers `1`, `2` or `3`

</div>

---

## Features

- ⚡ **Instant lookup** by roll number (case-insensitive, spaces trimmed)
- ⌨️ Search with the button or by pressing <kbd>Enter</kbd>
- 🧾 Results in a clean table: name, course, email, phone, last year's percentage, LinkedIn and address
- 💬 Clear feedback for an empty search or an unknown roll number
- ✨ CSS animations: fade-in page, glowing title and slide-up results

## How it works

```
student-search-engine/
├── index.html    # search box + result container
├── script.js     # students array + searchStudent()
└── style.css     # layout, theme and keyframe animations
```

`searchStudent()` reads the input, normalises it with `trim().toLowerCase()`, and uses `Array.prototype.find` to match a `rollNumber`. A match is rendered as a table. Anything else shows a message instead.

> All records in `script.js` are fictional sample students.

## Getting started

```bash
git clone https://github.com/mahamed7/student-search-engine.git
cd student-search-engine
# open index.html in your browser, or:
python -m http.server 8000
```

## Ideas for next steps

- [ ] Search by name as well as roll number, with live suggestions
- [ ] Load students from a JSON file or API instead of a hard-coded array
- [ ] Build the result with DOM methods (`textContent`) rather than `innerHTML`

## Author

**Saabir Dahir Mahamud** · [Portfolio](https://mahamed7.github.io/Portfolio/) · [GitHub](https://github.com/mahamed7)

Released under the [MIT License](LICENSE).
