# Wetopia

<img src="https://wetopia.co/static/img/wetopia_w.png" width="10%" height="10%" style= "horizontal-align:middle;">

**Welcome to Wetopia!**

Wetopia is the platform where entrepreneurs share ideas and improve their work

### Getting started

##### System requirements

Mac OSX

##### Third-party software versions

| Module   | Version  |
| -------- | -------- |
| NodeJS   | v4.4.4   |
| MongoDB  | v3.2.X   |
| NPM      | v2.15.X  |
| SendGrid | v4.7.1   |

**Install dependencies**

```bash
npm install
npm install -g gulp
```

**Manual steps**
```
cd public
mkdir uploads
```

### Building Wetopia

Wetopia currently uses Angular as the main frontend framework, Webpack as compiler and module manager, Gulp in CSS and HTML minification and more.

Compile files in the project
```bash
gulp build
```

Test the project
```bash
gulp test
```

Run the project
```bash
npm start
```

### Running Mongo on the web server

Run these on the server terminal for Mongo access
```bash
export LC_ALL=C
mongo
```
