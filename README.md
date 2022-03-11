# Sport Data Visualization

Interactive web application for parsing .tcx and .gpx files from different sources for further visualization analysis and providing real time data visualization. The purpose of this project is to improve data visualisation of raw files that were previously extracted from various sport devices such as sport trackers or other external devices. 

The project was inspired from existing project <a href="https://github.com/firefly-cpp/sport-activities-features">sport-activities-features</a> that was later on upgraded with feature <a href="https://github.com/alenrajsp/sport-activities-features-api">sport-activities-api</a> which is a Python library with REST API architecture that this project is using for interactive data manipulation.

## Motivation

The purpose of this project is to bring closer weather conditions within the sport activity and find various data associtations that are dificult to see without closer look. My interest in weather also motivates me to implement such feature in matters of rich analysis and coordination with my mentor of this project <b>[dr. I. Jr. Fister](http://www.iztok-jr-fister.eu/)</b> is priceless.
## Visualization

Different kind of data visualization for sport analysis.

### Realtime charts

![realtimeChart](https://user-images.githubusercontent.com/59646470/157679524-369ef174-0d1a-4308-adea-fbe123484887.gif)

### Realtime Stats

![realtimeStats](https://user-images.githubusercontent.com/59646470/157680109-74bc3fba-3294-44ac-9174-2180a567c33d.gif)

### Map details

![image](https://user-images.githubusercontent.com/59646470/157743120-b19e256b-31cb-4bb8-8eec-bef9d1b90a09.png)

### Importer Settings

![image](https://user-images.githubusercontent.com/59646470/156993617-6f4ebe5a-d1e1-4022-a104-bd068239d275.png)

## Features

- Upload TCX and GPX files
- Sport data analysis
- Chart visualization
- Zoom for details (chart)
- Table visualization (integral metrics)
- Weather conditions within exercise
- Realtime data visualization
- Local storage usage

## Coming soon

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

[1] I. Jr. Fister, L. Lukač, A. Rajšp, I. Fister, L. Pečnik and D. Fister, "[A minimalistic toolbox for extracting features from sport activity files](http://iztok-jr-fister.eu/static/publications/294.pdf)", 2021 IEEE 25th International Conference on Intelligent Engineering Systems (INES), 2021, pp. 121-126, doi: 10.1109/INES52918.2021.9512927.

[2] I. Jr. Fister, S. Rauter, D. Fister, I. Fister, "[A collection of sport activity datasets for data analysis and data mining 2017a](https://academictorrents.com/details/f2221a292540ff3e6c85025754f775361c7cd886)", 2017.

[3] I. Jr. Fister, S. Rauter, D. Fister, I. Fister, "[A collection of sport activity datasets with an emphasis on powermeter data](https://academictorrents.com/details/bf76b193960a96a683f9c2afde70acab9d3d757d)", 2017.
## License

This project is using <a href="https://choosealicense.com/licenses/mit/">MIT</a> license.
