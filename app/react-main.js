/**
 * Created by Vipan on 12/25/2016.
 */

require.config({
    baseUrl: "react/",

    paths: {
        "react": "react-with-addons",
        "JSXTransformer": "JSXTransformer"
    },

    jsx: {
        fileExtension: '.jsx',
        harmony: true,
        stripTypes: true
    }
});

require(['react', 'jsx!components/Timer'], function(React, Timer) {
    var start = new Date();
    Timer = React.createFactory(Timer);

    // Mount the JSX component in the app container
    React.render(
        Timer({start: start}),
        document.getElementById('js-app-container'));
});