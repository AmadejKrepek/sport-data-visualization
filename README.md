# Sport Data Visualization

Interactive web application for parsing .tcx and .gpx files from different sources for further visualization analysis and providing real time data visualization. The purpose of this project is to improve data visualisation of raw files that were previously extracted from various sport devices such as sport trackers or other external devices. 

The project was inspired from existing project <a href="https://github.com/firefly-cpp/sport-activities-features">sport-activities-features</a> that was later on upgraded with feature <a href="https://github.com/alenrajsp/sport-activities-features-api">sport-activities-api</a> which is a Python library with REST API architecture that this project is using for interactive data manipulation.

## Motivation

The purpose of this project is to bring closer weather conditions within the sport activity and find various data associtations that are dificult to see without closer look. My interest in weather also motivates me to implement such feature in matters of rich analysis and coordination with my mentor of this project <b>dr. I. Jr. Fister</b> is priceless.

## Visualization

Different kind of data visualization for sport analysis.

### Realtime charts

![sportActivity](https://user-images.githubusercontent.com/59646470/157216552-83354d23-6463-419f-978f-87e7e2b95ffa.gif)

### Importer Settings

![image](https://user-images.githubusercontent.com/59646470/156993617-6f4ebe5a-d1e1-4022-a104-bd068239d275.png)

## Features

- Upload TCX and GPX files
- Sport data analysis
- Chart visualization
- Zoom for details (chart)
- Table visualization (integral metrics)
- Weather conditions within exercise
- Local storage for data analysis

![image](https://user-images.githubusercontent.com/59646470/156993497-4cfb9590-3182-41f1-b257-4231c016acc4.png)

## Coming soon

- Realtime data visualization
- Hill identification
- Data comparison
- Map visualization
- User registration

## Installation guide

This project is implemented in Vue3 javascript framework. 

It can be cloned or downloaded to your device, whether you are Linux or Windows user.

### Requirements

For both <b>Linux</b> and <b>Windows</b> users:

- <a href="https://www.npmjs.com/">NPM</a> or <a href="https://yarnpkg.com/">YARN</a> installed

This project is developed using NPM version <b>8.1.1</b> and anything greater than that will work fine.

### Windows and Linux

Open terminal and go to <b>root</b> of your project directory, then you paste next command:

- with NPM installed

```
npm install
```

- with YARN installed

```
yarn install
```

When previous step is completed, you can <b>run</b> your project with next command:

- with NPM installed

```
npm run serve
```

- with YARN installed

```
yarn run serve
```

Open your browser and go to this url: http://localhost:8080

### Production

To prepare your project for production use, proceed with next command:

- with NPM installed

```
npm run build
```

- with YARN installed

```
yarn run build
```

It will create /dist folder in your root of the project with compiled and minified code. Copy and paste the content of /dist folder to your website directory.

## References

I. Jr. Fister, L. Lukač, A. Rajšp, I. Fister, L. Pečnik and D. Fister, "A minimalistic toolbox for extracting features from sport activity files", 2021 IEEE 25th International Conference on Intelligent Engineering Systems (INES), 2021, pp. 121-126, doi: 10.1109/INES52918.2021.9512927.

## License

This project is using <a href="https://choosealicense.com/licenses/mit/">MIT</a> license.
