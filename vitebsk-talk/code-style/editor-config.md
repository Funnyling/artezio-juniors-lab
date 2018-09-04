# EditorConfig

**[EditorConfig](https://editorconfig.org/)** helps developers define and maintain consistent coding styles between different editors and IDEs. The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles. EditorConfig files are easily readable and they work nicely with version control systems.

When opening a file, EditorConfig plugins look for a file named .editorconfig in the directory of the opened file and in every parent directory. A search for .editorconfig files will stop if the root filepath is reached or an EditorConfig file with root=true is found.

1. **indent_style**
2. **indent_size**
3. **tab_width**
4. **end_of_line**
5. **charset**
6. **trim_trailing_whitespace**
7. **insert_final_newline**
8. **root**

## Example of .editorconfig file

```editorconfig
root = true

indent_style = space
indent_size = 4
max_line_length = 130

end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

## Do I need an additional plugin?
These editors come bundled with native support for EditorConfig. Everything should just work.
* ![IDEA](https://editorconfig.org/logos/intellijIDEA.png "IDEA")
* ![VSCode](https://editorconfig.org/logos/visualstudio-pro.png "VSCode")
* ![Maven](https://editorconfig.org/logos/maven.png "Maven")
