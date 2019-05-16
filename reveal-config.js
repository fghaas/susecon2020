// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({

    controls: true,

    progress: true,
    history: true,
    center: true,
    showNotes: true,

    transition: 'fade',

    menu: {
        themes: false,
        transitions: false,
        openButton: true,
        openSlideNumber: true,
        markers: true
    },
 
    multiplex: {
        secret: null,
        id: 'fbef2915cd793511',
        url: 'https://reveal-js-multiplex-ccjbegmaii.now.sh'
    },

    chart: {
        defaults: {
            global: {
                animation: null,
                legend: {
                    position: 'bottom',
                    labels: {
                        fontSize: 24,
                        fontColor: 'black',
                    }
                }
            },
        },
        line: {
            borderColor: [ "rgba(0,0,0,0.8)" , "rgba(220,120,120,1)", "rgba(20,120,220,.8)" ],
        },
    },
    // Optional libraries used to extend on reveal.js
    dependencies: [
        { src: 'reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
        { src: 'reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: 'reveal.js/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
        { src: 'reveal.js/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } },
        { src: 'reveal.js-menu/menu.js', async: true, condition: function() { return !!document.body.classList; } },

        { src: '//cdn.socket.io/socket.io-1.3.5.js', async: true },

        { src: 'reveal.js/plugin/multiplex/client.js', async: true },

        { src: '//cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js' },
        { src: 'reveal.js-plugins/chart/csv2chart.js' },
    ]
});
