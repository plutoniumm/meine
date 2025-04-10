## Code Usage

### Syntax
Other than basic [markdown syntax](https://www.markdownguide.org/basic-syntax/), _some_ additional features are supported, such as
- Github style emojis
  - `:smile:` &rarr; :smile:
  - `:smile_cat:` &rarr; :smile_cat:
- Syntax highlighting:
  ```python
  def hello_world():
      print("Hello, world!")
  ```
- Math blocks with $LaTeX$ syntax:
  $$\zeta (s)=\sum _{n=1}^{\infty }{\frac {1}{n^{s}}}={\frac {1}{\Gamma (s)}}\int _{0}^{\infty }{\frac {x^{s-1}}{e^{x}-1}}\,\mathrm {d} x$$

- Block quotes:
  > This is a block quote.


### HTML
There are also some custom HTML tags provided for features like:
- PDF
  ```html
  <meine-pdf height="400px" width="100%" src="https://example.com/sample.pdf" />
  ```
  <meine-pdf height="400px" width="100%" src="https://example.com/sample.pdf" />
- You can embed youtube normally via iframes:
  ```html
  <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
  ```
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>

You don't have to worry about page speed or weight, _meine_ will load only what is being used on the current page.