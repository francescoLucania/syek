if (enable.components.fonts === true) {

    if (enable.components.fontsRubleSans === true) {
        const fontALSRublArial = new FontFaceObserver('Open Sans');

        fontALSRublArial
            .load()
            .then(function () {
                console.log('Open Sans has loaded.');
            });
    }

}
