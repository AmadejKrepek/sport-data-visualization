# Sports Data Visualization

Interactive web application for parsing .tcx and .gpx files from different sources. The application enables visualization analysis and provides real-time data visualization. This project aims to improve the data visualization of raw files that were previously extracted from various sports devices such as sports trackers or other external devices. 

The project was inspired from existing project <a href="https://github.com/firefly-cpp/sport-activities-features">sport-activities-features</a> that was later on upgraded with feature <a href="https://github.com/alenrajsp/sport-activities-features-api">sport-activities-api</a> which is a Python library with REST API architecture that this project is using for interactive data manipulation.

## Motivation

The purpose of this project is to bring closer weather conditions within the sports activity and find various data associations that are difficult to see without a closer look. My interest in weather also motivates me to implement such features in rich analysis and coordination with my mentor for this project <b>[dr. I. Jr. Fister](http://www.iztok-jr-fister.eu/)</b> is priceless.
## Visualization

Different kinds of data visualization for sports analysis are available.

### Realtime charts

![realtimeChart](https://user-images.githubusercontent.com/59646470/157679524-369ef174-0d1a-4308-adea-fbe123484887.gif)

### Realtime Stats

![realtimeStats](https://user-images.githubusercontent.com/59646470/157680109-74bc3fba-3294-44ac-9174-2180a567c33d.gif)

### Map details

![image](https://user-images.githubusercontent.com/59646470/157743120-b19e256b-31cb-4bb8-8eec-bef9d1b90a09.png)

### Hill identification Rendering

![test123](https://user-images.githubusercontent.com/59646470/172669710-c23c6205-f2f5-4837-bd4f-b01c53058db1.png)

### Calendar Visualization

![calendar](https://user-images.githubusercontent.com/59646470/172669093-5bdaf21c-8d7b-4df0-b5d2-8169ced05026.gif)

### Importer Settings

![image](https://user-images.githubusercontent.com/59646470/156993617-6f4ebe5a-d1e1-4022-a104-bd068239d275.png)

### User Registration

![image](https://user-images.githubusercontent.com/59646470/157900695-3132140e-089c-4959-8059-0b0b7396d994.png)

### User Login

![image](https://user-images.githubusercontent.com/59646470/157900521-572e7576-53a9-4563-b96e-4ad4d501ee8f.png)

### Account Status Bar

![image](https://user-images.githubusercontent.com/59646470/157900796-30290d0b-0fa0-4286-9fed-e5070f60b17e.png)

### Account Details

![image](https://user-images.githubusercontent.com/59646470/157900869-ba368f5c-c8c9-41ca-bfa8-bcc7aed80fa2.png)

## Features

- Upload TCX and GPX files
- Sport data analysis
- Chart visualization
- Zoom for details (chart)
- Table visualization (integral metrics)
- Weather conditions within the exercise
- Realtime data visualization
- Local storage usage
- Map visualization
- User registration
- Calendar visualization
- Hill identification(rendering image)

## Coming soon
- Data comparison

## Installation guide

This project is implemented in the Vue3 javascript framework. 

It can be cloned or downloaded to your device, whether you are Linux or Windows user.

### Requirements

For both <b>Linux</b> and <b>Windows</b> users:

- <a href="https://www.npmjs.com/">NPM</a> or <a href="https://yarnpkg.com/">YARN</a> installed

This project is developed using NPM version <b>8.1.1</b>, and it should work with any newer versions.

### Windows and Linux

Open the terminal and go to <b>root</b> of your project directory. Then you paste the following command:

- with NPM installed

```
npm install
```

- with YARN installed

```
yarn install
```

When the previous step is completed, you can <b>run</b> your project with the following command:

- with NPM installed

```
npm run serve
```

- with YARN installed

```
yarn run serve
```

Open your browser and go to this URL: http://localhost:8080

### Dockerize app

It is possible to dockerize app with Dockerfile available. You have to follow next commands to setup environment:

#### Create docker image
```
docker build -t vuejs-cookbook/dockerize-vuejs-app .
```

#### Run app in docker container
```
docker run -it -p 8080:8080 --rm --name dockerize-vuejs-app-1 vuejs-cookbook/dockerize-vuejs-app
```

Open your browser and go to this URL: http://localhost:8080. It should work!

### Production

To prepare your project for production use, proceed with the following command:

- with NPM installed

```
npm run build
```

- with YARN installed

```
yarn run build
```

It will create /dist folder in your root of the project with compiled and minified code. Copy and paste the content of the /dist folder to your website directory.

## User Data Storage

Users must register and login in order to use this application.

User data is only saved in the local storage of the client's browser and is not sent to any other device. When you clean up your browser's local storage, you are prompted to register and login to be able to use your application again.

## References

[1] I. Jr. Fister, L. Lukač, A. Rajšp, I. Fister, L. Pečnik and D. Fister, "[A minimalistic toolbox for extracting features from sport activity files](http://iztok-jr-fister.eu/static/publications/294.pdf)", 2021 IEEE 25th International Conference on Intelligent Engineering Systems (INES), 2021, pp. 121-126, DOI: 10.1109/INES52918.2021.9512927.

[2] I. Jr. Fister, S. Rauter, D. Fister, I. Fister, "[A collection of sport activity datasets for data analysis and data mining 2017a](https://academictorrents.com/details/f2221a292540ff3e6c85025754f775361c7cd886)", 2017.

[3] I. Jr. Fister, S. Rauter, D. Fister, I. Fister, "[A collection of sport activity datasets with an emphasis on power meter data](https://academictorrents.com/details/bf76b193960a96a683f9c2afde70acab9d3d757d)", 2017.

## License

This project is distributed under the MIT License. This license can be found online at <http://www.opensource.org/licenses/MIT>.

## Disclaimer

This framework is provided as-is, and there are no guarantees that it fits your purposes or that it is bug-free. Use it at your own risk!
